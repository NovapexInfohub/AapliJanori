import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../components/HeroSection';
import '../styles/Gallery.css';
import templeImg1 from '../assets/temple img/img1.jpeg';
import templeImg2 from '../assets/temple img/img2.jpeg';
import templeImg3 from '../assets/temple img/img3.jpeg';
import templeImg4 from '../assets/temple img/img4.jpeg';
import templeImg5 from '../assets/temple img/img5.jpeg';
import templeImg6 from '../assets/temple img/img6.jpeg';
import templeImg7 from '../assets/temple img/img7.jpeg';
import templeImg8 from '../assets/temple img/img8.jpeg';
import templeImg9 from '../assets/temple img/img9.jpeg';

const Gallery = () => {
  const { t } = useTranslation();
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const isAdmin =
    typeof window !== 'undefined' &&
    window.localStorage.getItem('isAdmin') === 'true';

  // type used for any image objects added by users (or admins) to the gallery
  type UserImage = {
    id: number;
    src: string;
    alt: string;
    category: string;
    status: 'pending' | 'approved';
  };

  const [userImages, setUserImages] = useState<UserImage[]>([]);

  let nextUserImageId = userImages.length + 100;

  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/31643020/pexels-photo-31643020/free-photo-of-serene-river-landscape-in-ramamangalam-kerala.png?auto=compress&cs=tinysrgb&w=600',
      alt: t('gallery.images.1.alt'),
      category: t('gallery.images.1.category'),
      status: 'approved' as const,
    },
    {
      id: 2,
      src: 'https://media.istockphoto.com/id/491267876/photo/cauliflower-plantation.jpg?b=1&s=612x612&w=0&k=20&c=llHvM15l90TuKxzShH03fgYD57dVT3cMaEOEAnqbXO8=',
      alt: t('gallery.images.2.alt'),
      category: t('gallery.images.2.category'),
      status: 'approved' as const,
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/57901/pexels-photo-57901.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: t('gallery.images.3.alt'),
      category: t('gallery.images.3.category'),
      status: 'approved' as const,
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/8849294/pexels-photo-8849294.jpeg',
      alt: t('gallery.images.4.alt'),
      category: t('gallery.images.4.category'),
      status: 'approved' as const,
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
      alt: t('gallery.images.5.alt'),
      category: t('gallery.images.5.category'),
      status: 'approved' as const,
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg',
      alt: t('gallery.images.6.alt'),
      category: t('gallery.images.6.category'),
      status: 'approved' as const,
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg',
      alt: t('gallery.images.7.alt'),
      category: t('gallery.images.7.category'),
      status: 'approved' as const,
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg',
      alt: t('gallery.images.8.alt'),
      category: t('gallery.images.8.category'),
      status: 'approved' as const,
    },
  ];

  const videoGallery = [
    {
      id: 1,
      title: t('gallery.videos.1.title'),
      thumbnail: 'https://images.pexels.com/photos/5812063/pexels-photo-5812063.jpeg',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      duration: '3:45',
    },
    {
      id: 2,
      title: t('gallery.videos.2.title'),
      thumbnail: 'https://images.pexels.com/photos/1582493/pexels-photo-1582493.jpeg',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      duration: '5:12',
    },
    {
      id: 3,
      title: t('gallery.videos.3.title'),
      thumbnail: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      duration: '7:30',
    },
  ];

  const displayImages = [
    ...images,
    ...userImages.filter((img) => img.status === 'approved'),
  ];

  const templeImages = [
    templeImg1, templeImg2, templeImg3, templeImg4, templeImg5,
    templeImg6, templeImg7, templeImg8, templeImg9
  ];

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setTimeout(() => {
      const newImgs: UserImage[] = Array.from(files).map((file, idx) => ({
        id: nextUserImageId + idx,
        src: URL.createObjectURL(file),
        alt: file.name,
        category: isAdmin ? 'admin' : 'user',
        // cast the ternary result to the narrower union type so it
        // satisfies the state declaration
        status: (isAdmin ? 'approved' : 'pending') as 'approved' | 'pending',
      }));
      setUserImages((prev) => [...prev, ...newImgs]);
      setUploading(false);
      setUploadMessage(t('gallery.uploadSuccess'));
      setTimeout(() => setUploadMessage(null), 3000);
    }, 1000);
  };

  const handleApprove = (id: number) => {
    setUserImages((prev) =>
      prev.map((img) =>
        img.id === id ? { ...img, status: 'approved' } : img
      )
    );
  };

  const handleDelete = (id: number) => {
    setUserImages((prev) => prev.filter((img) => img.id !== id));
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev === 0 ? displayImages.length - 1 : prev - 1
    );
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev === displayImages.length - 1 ? 0 : prev + 1
    );

  return (
    <div className="gallery-page">
      <HeroSection
        title={t('gallery.title')}
        subtitle={t('gallery.subtitle')}
        backgroundImage="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=compress&fit=crop&w=1200&q=80"
      />

      <section className="temples-section">
        <div className="container">
          <div className="section-header">
            <h2>Janori Temples</h2>
            <p>Glimpses of sacred places in our village</p>
          </div>
          <div className="temples-grid">
            {templeImages.map((src, idx) => (
              <div key={idx} className="temple-item">
                <img src={src} alt={`Janori Temple ${idx + 1}`} className="temple-image" />
                <div className="temple-caption">Janori Temple</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="photo-gallery-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('gallery.photoGalleryTitle')}</h2>
            <p>{t('gallery.photoGallerySubtitle')}</p>
          </div>
          <div className="gallery-grid">
            {displayImages.map((img, idx) => (
              <div
                key={img.id}
                className="gallery-image-wrapper"
                onClick={() => openLightbox(idx)}
                style={{ cursor: 'pointer', position: 'relative' }}
              >
                <img src={img.src} alt={img.alt} className="gallery-image" />
                <div className="gallery-image-overlay">{img.alt}</div>
                {isAdmin && img.status === 'pending' && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleApprove(img.id);
                    }}
                    style={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      background: '#ff9800',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 4,
                      padding: '4px 10px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      zIndex: 2,
                    }}
                  >
                    {t('gallery.approve') || 'Approve'}
                  </button>
                )}
                {isAdmin && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(img.id);
                    }}
                    style={{
                      position: 'absolute',
                      top: 8,
                      left: 8,
                      background: '#e53935',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 4,
                      padding: '4px 10px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      zIndex: 2,
                    }}
                  >
                    {t('gallery.delete') || 'Delete'}
                  </button>
                )}
              </div>
            ))}
          </div>

          {lightboxOpen && displayImages[lightboxIndex] && (
            <div
              className="lightbox-overlay"
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(0,0,0,0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
              }}
              onClick={closeLightbox}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                style={{
                  position: 'absolute',
                  left: 30,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: 32,
                  color: '#fff',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                &#8592;
              </button>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img
                  src={displayImages[lightboxIndex].src}
                  alt={displayImages[lightboxIndex].alt}
                  style={{ maxHeight: '80vh', maxWidth: '80vw', borderRadius: 8 }}
                  onClick={(e) => e.stopPropagation()}
                />
                <div style={{ color: '#fff', marginTop: 16, fontSize: 20, fontWeight: 500, textAlign: 'center' }}>
                  {displayImages[lightboxIndex].alt}
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                style={{
                  position: 'absolute',
                  right: 30,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: 32,
                  color: '#fff',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                &#8594;
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
                style={{
                  position: 'absolute',
                  top: 30,
                  right: 30,
                  fontSize: 32,
                  color: '#fff',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="video-gallery-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('gallery.videoGalleryTitle')}</h2>
            <p>{t('gallery.videoGallerySubtitle')}</p>
          </div>
          <div className="video-gallery">
            {videoGallery.map((video) => (
              <div key={video.id} className="video-item">
                <div
                  className="video-thumbnail"
                  onClick={() => setPlayingVideo(video.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {playingVideo === video.id ? (
                    <div className="video-player-wrapper">
                      <button
                        className="close-video-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setPlayingVideo(null);
                        }}
                        style={{ position: 'absolute', top: 8, right: 8, zIndex: 2 }}
                      >
                        ✕
                      </button>
                      <video src={video.videoUrl} controls autoPlay style={{ width: '100%', borderRadius: 8 }} />
                    </div>
                  ) : (
                    <>
                      <img src={video.thumbnail} alt={video.title} />
                      <div className="play-button">
                        <svg viewBox="0 0 24 24" width="48" height="48" fill="white">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <span className="video-duration">{video.duration}</span>
                    </>
                  )}
                </div>
                <h3 className="video-title">{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-cta-section">
        <div className="container">
          <div className="gallery-cta-content">
            <h2>{t('gallery.ctaTitle')}</h2>
            <p>{t('gallery.ctaDescription')}</p>
            <label
              className="btn-primary"
              style={{ cursor: uploading ? 'not-allowed' : 'pointer', opacity: uploading ? 0.6 : 1 }}
            >
              {t('gallery.submitMedia')}
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                disabled={uploading}
                onChange={handleMediaUpload}
                multiple
              />
            </label>
            {uploading && <p style={{ color: '#007bff', marginTop: 8 }}>{t('gallery.uploading')}</p>}
            {uploadMessage && <p style={{ color: 'green', marginTop: 8 }}>{uploadMessage}</p>}
            {!isAdmin && uploadMessage && (
              <p style={{ color: '#ff9800', marginTop: 8, fontWeight: 500 }}>
                {t('gallery.userUploadSuccess')}
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;