import { useLanguage } from '../i18n';
import './AboutSection.css';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="container">
        {/* Story Block */}
        <div className="about-grid">
          <div className="about-content">
            <span className="badge badge-yellow about-badge">
              {t('about.badge')}
            </span>
            <h2 id="about-title" className="about-heading">
              {t('about.title')}
            </h2>
            <p className="about-body">{t('about.body')}</p>
            
            <div className="about-features">
              <div className="about-feature-item">
                <span className="about-feature-check">✓</span>
                <span>{t('about.feature1')}</span>
              </div>
              <div className="about-feature-item">
                <span className="about-feature-check">✓</span>
                <span>{t('about.feature2')}</span>
              </div>
              <div className="about-feature-item">
                <span className="about-feature-check">✓</span>
                <span>{t('about.feature3')}</span>
              </div>
            </div>
          </div>

          <div className="about-image-wrapper">
            <img
              src="/thumbs-up.webp"
              alt={t('about.imageAlt')}
              className="about-image"
              loading="eager"
            />
          </div>
        </div>

        {/* Spirit / Service Block */}
        <div className="service-section" aria-labelledby="service-title">
          <div className="service-image-wrapper">
            <img
              src="/plats.webp"
              alt={t('about.serviceImageAlt')}
              className="service-image"
              loading="eager"
            />
          </div>

          <div className="service-content">
            <span className="badge badge-yellow about-badge">
              {t('about.serviceBadge')}
            </span>
            <h3 id="service-title" className="about-heading">
              {t('about.serviceTitle')}
            </h3>
            <p className="service-body">{t('about.serviceBody')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}