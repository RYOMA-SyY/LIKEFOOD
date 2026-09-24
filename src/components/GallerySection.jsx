import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n';
import './GallerySection.css';

export default function GallerySection() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const videoRef = useRef(null);

  const galleryImages = [
    '/pizza.webp',
    '/tacos.webp',
    '/burgers.webp',
    '/pastichio.webp',
    '/plats.webp',
    '/salades.webp',
    '/pizza and menu.webp',
    '/thumbs-up.webp',
  ];

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play().catch(() => {});
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  const handleKeyDown = (e) => {
    if (!showLightbox) return;
    if (e.key === 'Escape') {
      setShowLightbox(false);
    } else if (e.key === 'ArrowLeft') {
      setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    } else if (e.key === 'ArrowRight') {
      setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    }
  };

  useEffect(() => {
    if (showLightbox) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [showLightbox]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setShowLightbox(true);
  };

  return (
    <section id="gallery" className="gallery-section" aria-labelledby="gallery-title">
      <div className="container">
        <header className="section-header">
          <h2 id="gallery-title" className="section-title">{t('gallery.title')}</h2>
          <p className="section-subtitle">{t('gallery.subtitle')}</p>
        </header>

        <div className="video-section" role="region" aria-label={t('gallery.videoLabel')}>
          <div className="video-wrapper">
            <video
              ref={videoRef}
              className="showcase-video"
              poster="/showcase-poster-web.webp"
              playsInline
              muted
              loop
              onClick={handleVideoClick}
              onEnded={handleVideoEnded}
              aria-label={t('gallery.videoLabel')}
            >
              <source src="/Rework_the_provided_Like_Food.mp4" type="video/mp4" />
            </video>
            <button
              className={`video-play-btn ${isPlaying ? 'playing' : ''}`}
              onClick={handleVideoClick}
              aria-label={isPlaying ? t('gallery.pauseVideo') : t('gallery.playVideo')}
              aria-pressed={isPlaying}
            >
              <svg className="play-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              <svg className="pause-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="gallery-grid" role="list" aria-label={t('gallery.photosLabel')}>
          {galleryImages.map((image, index) => (
            <button
              key={image}
              className="gallery-item"
              onClick={() => openLightbox(index)}
              aria-label={t('gallery.viewImage', { index: index + 1 })}
            >
              <img src={image} alt="" loading="lazy" />
              <span className="gallery-zoom" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </span>
            </button>
          ))}
        </div>

        {showLightbox && (
          <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={t('gallery.lightboxLabel', { current: lightboxIndex + 1, total: galleryImages.length })}
            onClick={() => setShowLightbox(false)}
          >
            <button
              className="lightbox-close"
              onClick={(e) => { e.stopPropagation(); setShowLightbox(false); }}
              aria-label={t('common.close')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <button
              className="lightbox-nav lightbox-prev"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1)); }}
              aria-label={t('gallery.prevImage')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="lightbox-image-wrapper">
              <img src={galleryImages[lightboxIndex]} alt="" />
            </div>
            <button
              className="lightbox-nav lightbox-next"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1)); }}
              aria-label={t('gallery.nextImage')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            <p className="lightbox-counter" aria-hidden="true">
              {lightboxIndex + 1} / {galleryImages.length}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}