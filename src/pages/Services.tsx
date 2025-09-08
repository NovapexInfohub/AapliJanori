import React, { useRef, useState, useEffect } from 'react';
import { FileText, Calendar, Award, Users, BookOpen, Home, Heart, Percent, File, FileSpreadsheet, FileType2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import '../styles/Services.css';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const [documents, setDocuments] = useState<Array<{ id: number; name: string; url: string }>>([]);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isAdmin = typeof window !== 'undefined' && window.localStorage.getItem('isAdmin') === 'true';

  useEffect(() => {
    const savedDocs = localStorage.getItem('documents');
    if (savedDocs) setDocuments(JSON.parse(savedDocs));
  }, []);

  useEffect(() => {
    localStorage.setItem('documents', JSON.stringify(documents));
  }, [documents]);

  const services = [
    {
      id: 1,
      icon: <FileText size={32} />,
      title: t('services.certificates.title', 'Certificate Issuance'),
      description: t('services.certificates.description', 'Birth, death, residence, income, and other essential certificates issued efficiently for village residents of Janori.')
    },
    {
      id: 2,
      icon: <Calendar size={32} />,
      title: t('services.hallBooking.title', 'Community Hall Booking'),
      description: t('services.hallBooking.description', 'Book our well-equipped community hall in Janori for various events, functions, and gatherings at affordable rates.')
    },
    {
      id: 3,
      icon: <Award size={32} />,
      title: t('services.schemes.title', 'Scheme Registration'),
      description: t('services.schemes.description', 'Assistance in applying for various government welfare schemes, subsidies, and benefits for eligible residents of Janori.')
    },
    {
      id: 4,
      icon: <Users size={32} />,
      title: t('services.dispute.title', 'Dispute Resolution'),
      description: t('services.dispute.description', 'Traditional Janori village-level dispute resolution mechanism to resolve conflicts amicably within the community.')
    },
    {
      id: 5,
      icon: <BookOpen size={32} />,
      title: t('services.library.title', 'Library Services'),
      description: t('services.library.description', 'Access to our Janori village library with a collection of books, newspapers, and educational resources.')
    },
    {
      id: 6,
      icon: <Home size={32} />,
      title: t('services.housing.title', 'Housing Assistance'),
      description: t('services.housing.description', 'Guidance for government housing schemes like PMAY-G for eligible beneficiaries in Janori village.')
    },
    {
      id: 7,
      icon: <Heart size={32} />,
      title: t('services.health.title', 'Health Services'),
      description: t('services.health.description', 'Coordination with primary health center for regular health camps and awareness programs in Janori.')
    },
    {
      id: 8,
      icon: <Percent size={32} />,
      title: t('services.tax.title', 'Tax Collection'),
      description: t('services.tax.description', 'Collection of property tax, water charges, and other local taxes for Janori village development.')
    }
  ];

  const getFileIcon = (name: string | undefined) => {
    if (!name) return <File size={22} style={{ color: '#888' }} />;
    const ext = name.split('.').pop()?.toLowerCase();
    if (ext === 'pdf') return <FileText size={22} style={{ color: '#ff4e50' }} />;
    if (ext === 'csv') return <FileSpreadsheet size={22} style={{ color: '#138808' }} />;
    if (ext === 'txt') return <FileType2 size={22} style={{ color: '#f9d423' }} />;
    return <File size={22} style={{ color: '#888' }} />;
  };

  const handleDocumentUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const newDocs = Array.from(files).map((file, idx) => ({
      id: Date.now() + idx,
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setDocuments(prev => [...prev, ...newDocs]);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleDelete = (id: number) => {
    setDocuments(prev => prev.filter(doc => doc.id !== id));
  };

  return (
    <div className="services-page">
      <HeroSection
        title={t('services.title', 'Our Services')}
        subtitle={t('services.subtitle', 'Comprehensive services and schemes for the welfare of our residents')}
        backgroundImage="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=compress&fit=crop&w=1200&q=80"
      />

      <section className="services-list-section">
        <div className="container">
          <div className="section-header">
            <h2>Village Services</h2>
            <p>Comprehensive services for our community members</p>
          </div>
          <div className="services-grid">
            {services.map(service => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="documentation-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('services.docs.title', 'Gram Panchayat Documentation')}</h2>
            <p>{t('services.docs.subtitle', 'Download brochures and important documents or upload your own PDFs.')}</p>
          </div>
          {isAdmin && (
            <div className="docs-upload">
              <input
                type="file"
                accept=".pdf,.csv,.txt"
                multiple
                ref={fileInputRef}
                onChange={handleDocumentUpload}
                style={{ display: 'none' }}
              />
              <button className="docs-upload-btn" onClick={() => fileInputRef.current?.click()}>
                {t('services.docs.uploadBtn', 'Upload File')}
              </button>
            </div>
          )}
          <div className="docs-list">
            {documents.length === 0 ? (
              <p>{t('services.docs.noDocs', 'No documents uploaded yet.')}</p>
            ) : (
              <ul>
                {documents.map(doc => (
                  <li key={doc.id}>
                    {getFileIcon(doc.name)}
                    <span className="doc-name">{doc.name}</span>
                    <button
                      className="docs-download-btn"
                      onClick={() => {
                        const a = document.createElement('a');
                        a.href = doc.url;
                        a.download = doc.name;
                        a.click();
                      }}
                    >
                      {t('services.docs.download', 'Download')}
                    </button>
                    <button className="docs-preview-btn" onClick={() => setPreviewUrl(doc.url)}>
                      {t('services.docs.preview', 'Preview')}
                    </button>
                    {isAdmin && (
                      <button className="docs-delete-btn" onClick={() => handleDelete(doc.id)}>
                        Delete
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            )}
            {previewUrl && (
              <div className="pdf-preview-modal" onClick={() => setPreviewUrl(null)}>
                <div className="pdf-preview-content" onClick={e => e.stopPropagation()}>
                  <button className="pdf-preview-close" onClick={() => setPreviewUrl(null)}>✕</button>
                  <iframe src={previewUrl} title="PDF Preview" width="100%" height="600px" style={{ border: 0 }}></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;