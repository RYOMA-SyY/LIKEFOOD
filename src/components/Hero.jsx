import { useState, useRef } from 'react';
import { useLanguage } from '../i18n';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const targetPosition = menuSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

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

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-video-wrapper">
        <video
          ref={videoRef}
          className="hero-video"
          poster="/showcase-poster-web.webp"
          playsInline
          muted
          autoPlay
          loop
          onClick={handleVideoClick}
          onEnded={handleVideoEnded}
          aria-label={t('hero.videoLabel')}
        >
          <source src="/Rework_the_provided_Like_Food.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
      </div>

      <div className="hero-content container">
        <div className="hero-text">
          <p className="hero-tagline" aria-hidden="true">{t('hero.tagline')}</p>
          <h1 id="hero-title" className="hero-headline">
            {t('hero.headline')}
          </h1>
          <p className="hero-body">{t('hero.body')}</p>
          <div className="hero-ctas">
            <button
              className="btn btn-primary btn-lg"
              onClick={scrollToMenu}
              aria-label={t('hero.ctaPrimary')}
            >
              {t('hero.ctaPrimary')}
            </button>
            <button
              className="btn btn-secondary btn-lg"
              onClick={scrollToContact}
              aria-label={t('hero.ctaSecondary')}
            >
              {t('hero.ctaSecondary')}
            </button>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}