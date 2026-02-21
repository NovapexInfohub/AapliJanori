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
      title: t('services.certificates.title'),
      description: t('services.certificates.description')
    },
    {
      id: 2,
      icon: <Calendar size={32} />,
      title: t('services.hallBooking.title'),
      description: t('services.hallBooking.description')
    },
    {
      id: 3,
      icon: <Award size={32} />,
      title: t('services.schemes.title'),
      description: t('services.schemes.description')
    },
    {
      id: 4,
      icon: <Users size={32} />,
      title: t('services.dispute.title'),
      description: t('services.dispute.description')
    },
    {
      id: 5,
      icon: <BookOpen size={32} />,
      title: t('services.library.title'),
      description: t('services.library.description')
    },
    {
      id: 6,
      icon: <Home size={32} />,
      title: t('services.housing.title'),
      description: t('services.housing.description')
    },
    {
      id: 7,
      icon: <Heart size={32} />,
      title: t('services.health.title'),
      description: t('services.health.description')
    },
    {
      id: 8,
      icon: <Percent size={32} />,
      title: t('services.tax.title'),
      description: t('services.tax.description')
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
        title={t('services.title')}
        subtitle={t('services.subtitle')}
        backgroundImage="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=compress&fit=crop&w=1200&q=80"
      />

      <section className="services-list-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('services.sectionTitle')}</h2>
            <p>{t('services.sectionSubtitle')}</p>
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
            <h2>{t('services.docs.title')}</h2>
            <p>{t('services.docs.subtitle')}</p>
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
                {t('services.docs.uploadBtn')}
              </button>
            </div>
          )}
          <div className="docs-list">
            {documents.length === 0 ? (
              <p>{t('services.docs.noDocs')}</p>
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
                      {t('services.docs.download')}
                    </button>
                    <button className="docs-preview-btn" onClick={() => setPreviewUrl(doc.url)}>
                      {t('services.docs.preview')}
                    </button>
                    {isAdmin && (
                      <button className="docs-delete-btn" onClick={() => handleDelete(doc.id)}>
                        {t('services.docs.delete')}
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