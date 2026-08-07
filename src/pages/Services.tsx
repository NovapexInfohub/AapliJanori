import React, { useRef, useState, useEffect } from 'react';
import {
  FileText,
  Calendar,
  Award,
  Users,
  BookOpen,
  Home,
  Heart,
  Percent,
  File,
  FileSpreadsheet,
  FileType2,
  Phone,
  MapPin,
  User
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import '../styles/Services.css';
import { useTranslation } from 'react-i18next';

/* ================================
   TYPES
================================ */

interface DocumentItem {
  id: number;
  name: string;
  url: string;
}

interface TownService {
  id: number;
  profession: string;
  name: string;
  contact: string;
  address: string;
  shop: string;
  description: string;
}

/* ================================
   DEFAULT TOWN SERVICES
================================ */

const defaultTownServices: TownService[] = [
  {
    id: 1,
    profession: 'Welder',
    name: 'Ramesh Patil',
    contact: '9876543210',
   address: 'Main Road, Near आपली जानोरी',
    shop: 'Ramesh Welding Works',
    description: 'All types of welding and fabrication work available.'
  },
  {
    id: 2,
    profession: 'Carpenter',
    name: 'Shiv Shinde',
    contact: '9123456780',
    address: 'Market Area',
    shop: 'Shiv Furniture',
    description: 'Custom furniture and repair services.'
  },
  {
    id: 3,
    profession: 'Electrician',
    name: 'Om Kadam',
    contact: '9988776655',
    address: 'Near Bus Stand',
    shop: 'Om Electrical Services',
    description: 'House wiring and motor repair.'
  }
];

const Services = () => {
  const { t } = useTranslation();

  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [townServices, setTownServices] =
    useState<TownService[]>(defaultTownServices);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const isAdmin =
    typeof window !== 'undefined' &&
    window.localStorage.getItem('isAdmin') === 'true';

  /* ================================
     LOAD DOCUMENTS
  ================================= */

  useEffect(() => {
    const savedDocs = localStorage.getItem('documents');
    if (savedDocs) {
      setDocuments(JSON.parse(savedDocs));
    }

    const savedTown = localStorage.getItem('townServices');
    if (savedTown) {
      const parsed = JSON.parse(savedTown);
      if (parsed.length > 0) {
        setTownServices(parsed);
      }
    } else {
      localStorage.setItem(
        'townServices',
        JSON.stringify(defaultTownServices)
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('documents', JSON.stringify(documents));
  }, [documents]);

  useEffect(() => {
    localStorage.setItem(
      'townServices',
      JSON.stringify(townServices)
    );
  }, [townServices]);

  /* ================================
     MAIN SERVICES (UNCHANGED)
  ================================= */

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

  /* ================================
     DOCUMENT FUNCTIONS
  ================================= */

  const getFileIcon = (name: string | undefined) => {
    if (!name) return <File size={22} />;
    const ext = name.split('.').pop()?.toLowerCase();
    if (ext === 'pdf') return <FileText size={22} color="#ff4e50" />;
    if (ext === 'csv') return <FileSpreadsheet size={22} color="#138808" />;
    if (ext === 'txt') return <FileType2 size={22} color="#f9d423" />;
    return <File size={22} />;
  };

  const handleDocumentUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;
    if (!files) return;

    const newDocs = Array.from(files).map((file, idx) => ({
      id: Date.now() + idx,
      name: file.name,
      url: URL.createObjectURL(file)
    }));

    setDocuments(prev => [...prev, ...newDocs]);
  };

  const handleDeleteDoc = (id: number) => {
    setDocuments(prev => prev.filter(doc => doc.id !== id));
  };

  /* ================================
     TOWN SERVICE FUNCTIONS
  ================================= */

  const handleAddTownService = () => {
    const profession = prompt('Enter Profession');
    const name = prompt('Enter Name');
    const contact = prompt('Enter Contact');
    const address = prompt('Enter Address');
    const shop = prompt('Enter Shop');
    const description = prompt('Enter Description');

    if (!profession || !name || !contact) return;

    const newService: TownService = {
      id: Date.now(),
      profession,
      name,
      contact,
      address: address || '',
      shop: shop || '',
      description: description || ''
    };

    setTownServices(prev => [...prev, newService]);
  };

  const handleDeleteTownService = (id: number) => {
    setTownServices(prev =>
      prev.filter(service => service.id !== id)
    );
  };

  /* ================================
     RENDER
  ================================= */

  return (
    <div className="services-page">
      <HeroSection
        title={t('services.title')}
        subtitle={t('services.subtitle')}
        backgroundImage="https://images.unsplash.com/photo-1464983953574-0892a716854b"
      />

      {/* MAIN SERVICES */}
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

      {/* TOWN SERVICES */}
      <section className="town-services-section">
        <div className="container">
          <div className="section-header">
            <h2>Town Services</h2>
            <p>Local professionals available in the village</p>
          </div>

          {isAdmin && (
            <button
              className="add-town-service-btn"
              onClick={handleAddTownService}
            >
              + Add Service
            </button>
          )}

          <div className="town-services-grid">
            {townServices.map(service => (
              <div
                key={service.id}
                className="town-service-card"
              >
                <h3>{service.profession}</h3>

                <p>
                  <User size={16} /> {service.name}
                </p>
                <p>
                  <Phone size={16} /> {service.contact}
                </p>
                <p>
                  <MapPin size={16} /> {service.address}
                </p>

                <p><strong>Shop:</strong> {service.shop}</p>
                <p>{service.description}</p>

                <a
                  href={`tel:${service.contact}`}
                  className="call-btn"
                >
                  Call Now
                </a>

                {isAdmin && (
                  <button
                    className="delete-town-service-btn"
                    onClick={() =>
                      handleDeleteTownService(service.id)
                    }
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* DOCUMENT SECTION */}
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
              <button
                className="docs-upload-btn"
                onClick={() => fileInputRef.current?.click()}
              >
                {t('services.docs.uploadBtn')}
              </button>
            </div>
          )}

          <div className="docs-list">
            {documents.map(doc => (
              <div key={doc.id} className="doc-item">
                {getFileIcon(doc.name)}
                <span>{doc.name}</span>

                <button
                  onClick={() => {
                    const a = document.createElement('a');
                    a.href = doc.url;
                    a.download = doc.name;
                    a.click();
                  }}
                >
                  Download
                </button>

                <button
                  onClick={() => setPreviewUrl(doc.url)}
                >
                  Preview
                </button>

                {isAdmin && (
                  <button
                    onClick={() => handleDeleteDoc(doc.id)}
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>



      {previewUrl && (
        <div
          className="pdf-preview-modal"
          onClick={() => setPreviewUrl(null)}
        >
          <div
            className="pdf-preview-content"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="pdf-preview-close"
              onClick={() => setPreviewUrl(null)}
            >
              ✕
            </button>
            <iframe
              src={previewUrl}
              width="100%"
              height="600px"
              style={{ border: 0 }}
              title="Preview"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;