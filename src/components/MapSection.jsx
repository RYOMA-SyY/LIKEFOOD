import { useLanguage } from '../i18n';
import { businessConfig } from '../data/config';
import './MapSection.css';

export default function MapSection() {
  const { t } = useLanguage();

  return (
    <section id="location" className="map-section" aria-labelledby="map-title">
      <div className="container">
        <header className="section-header">
          <h2 id="map-title" className="section-title">{t('map.title')}</h2>
          <p className="section-subtitle">{t('map.subtitle')}</p>
        </header>

        <div className="map-card">
          <div className="map-iframe-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1661.9110439643557!2d-7.4804082!3d33.5839683!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cb55e928d8d5%3A0x419c34967ac43db!2sLIKE%20FOOD!5e0!3m2!1sen!2sma!4v1790281073472!5m2!1sen!2sma"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title={t('map.iframeTitle')}
            />
          </div>

          <div className="map-info-bar">
            <div className="map-info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <strong>{t('contact.address')}</strong>
                <p>{businessConfig.location}</p>
              </div>
            </div>

            <div className="map-info-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div>
                <strong>{t('contact.phone')}</strong>
                <p>{businessConfig.phones.join(' · ')}</p>
              </div>
            </div>

            <a
              href={businessConfig.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary map-cta"
            >
              {t('contact.viewMap')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}