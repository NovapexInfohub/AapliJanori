import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../components/HeroSection';
import '../styles/Gallery.css';

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

  const [userImages, setUserImages] = useState<
    Array<{
      id: number;
      src: string;
      alt: string;
      category: string;
      status: 'pending' | 'approved';
    }>
  >([]);

  let nextUserImageId = userImages.length + 100;

  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/31643020/pexels-photo-31643020/free-photo-of-serene-river-landscape-in-ramamangalam-kerala.png?auto=compress&cs=tinysrgb&w=600',
      alt: t('gallery.images.1.alt', 'Village Landscape'),
      category: t('gallery.images.1.category', 'village'),
      status: 'approved' as const,
    },
    {
      id: 2,
      src: 'https://media.istockphoto.com/id/491267876/photo/cauliflower-plantation.jpg?b=1&s=612x612&w=0&k=20&c=llHvM15l90TuKxzShH03fgYD57dVT3cMaEOEAnqbXO8=',
      alt: t('gallery.images.2.alt', 'Farming Activities'),
      category: t('gallery.images.2.category', 'agriculture'),
      status: 'approved' as const,
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/57901/pexels-photo-57901.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: t('gallery.images.3.alt', 'Local Festival Celebration'),
      category: t('gallery.images.3.category', 'culture'),
      status: 'approved' as const,
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/8849294/pexels-photo-8849294.jpeg',
      alt: 'Community Health Camp',
      category: 'health',
      status: 'approved' as const,
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
      alt: 'Agricultural Training',
      category: 'agriculture',
      status: 'approved' as const,
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg',
      alt: 'Village Development',
      category: 'development',
      status: 'approved' as const,
    },
  ];

  const videoGallery = [
    {
      id: 1,
      title: t('gallery.videos.1.title', 'Village Development Project'),
      thumbnail: 'https://images.pexels.com/photos/5812063/pexels-photo-5812063.jpeg',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      duration: '3:45',
    },
    {
      id: 2,
      title: t('gallery.videos.2.title', 'Republic Day Celebration 2025'),
      thumbnail: 'https://images.pexels.com/photos/1582493/pexels-photo-1582493.jpeg',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      duration: '5:12',
    },
    {
      id: 3,
      title: t('gallery.videos.3.title', 'Gram Sabha Meeting Highlights'),
      thumbnail: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      duration: '7:30',
    },
  ];

  const displayImages = [
    ...images,
    ...userImages.filter((img) => img.status === 'approved'),
  ];

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setTimeout(() => {
      const newImgs = Array.from(files).map((file, idx) => ({
        id: nextUserImageId + idx,
        src: URL.createObjectURL(file),
        alt: file.name,
        category: isAdmin ? 'admin' : 'user',
        status: isAdmin ? 'approved' : 'pending',
      }));
      setUserImages((prev) => [...prev, ...newImgs]);
      setUploading(false);
      setUploadMessage(t('gallery.uploadSuccess', 'Media uploaded successfully!'));
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
        title={t('gallery.title', 'Our Gallery')}
        subtitle={t('gallery.subtitle', 'Capturing the essence and spirit of Janori')}
        backgroundImage="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=compress&fit=crop&w=1200&q=80"
      />

      <section className="photo-gallery-section">
        <div className="container">
          <div className="section-header">
            <h2>{t('gallery.photoGalleryTitle', 'Photo Gallery')}</h2>
            <p>
              {t(
                'gallery.photoGallerySubtitle',
                'A visual journey through our village life and activities'
              )}
            </p>
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
                    Approve
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
                    Delete
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
            <h2>{t('gallery.videoGalleryTitle', 'Video Gallery')}</h2>
            <p>{t('gallery.videoGallerySubtitle', 'Watch videos showcasing village events and achievements')}</p>
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
            <h2>{t('gallery.ctaTitle', 'Share Your Village Moments')}</h2>
            <p>{t('gallery.ctaDescription', 'Do you have photos or videos of Janori village events or beautiful locations? Share them with us to be featured in our gallery.')}</p>
            <label
              className="btn-primary"
              style={{ cursor: uploading ? 'not-allowed' : 'pointer', opacity: uploading ? 0.6 : 1 }}
            >
              {t('gallery.submitMedia', 'Submit Media')}
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                disabled={uploading}
                onChange={handleMediaUpload}
                multiple
              />
            </label>
            {uploading && <p style={{ color: '#007bff', marginTop: 8 }}>{t('gallery.uploading', 'Uploading...')}</p>}
            {uploadMessage && <p style={{ color: 'green', marginTop: 8 }}>{uploadMessage}</p>}
            {!isAdmin && uploadMessage && (
              <p style={{ color: '#ff9800', marginTop: 8, fontWeight: 500 }}>
                {t('gallery.userUploadSuccess', 'Your image has been uploaded successfully and is pending admin approval.')}
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;