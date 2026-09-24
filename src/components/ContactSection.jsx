import { useLanguage } from '../i18n';
import { businessConfig } from '../data/config';
import './ContactSection.css';

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="container">
        <header className="section-header">
          <h2 id="contact-title" className="section-title">{t('contact.title')}</h2>
        </header>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-card-content">
                <h3>{t('contact.address')}</h3>
                <address>{businessConfig.location}</address>
                <a
                  href={businessConfig.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline maps-link"
                  aria-label={t('contact.viewMap')}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {t('contact.viewMap')}
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contact-card-content">
                <h3>{t('contact.phone')}</h3>
                <ul className="phone-list">
                  {businessConfig.phones.map((phone, index) => (
                    <li key={index}>
                      <a href={`tel:${phone.replace(/\s/g, '')}`}>
                        {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div className="contact-card-content">
                <h3>{t('contact.hours')}</h3>
                <p className="hours-notice">
                  <span className="badge badge-yellow">{t('contact.hoursNotice')}</span>
                </p>
                <p className="hours-note">{t('contact.hoursNote')}</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </div>
              <div className="contact-card-content">
                <h3>{t('contact.delivery')}</h3>
                <p className="delivery-note">{t('contact.deliveryNote')}</p>
                <ul className="delivery-platforms" aria-label={t('contact.deliveryPlatforms')}>
                  {businessConfig.delivery.platforms.map((platform, index) => (
                    <li key={index} className="delivery-platform">{platform}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              title={t('contact.mapTitle')}
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.23456789!2d-7.5898765!3d33.5731234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzIzLjYiTiA3wrAzNScyMy41Ilc!5e0!3m2!1sfr!2sma!4v1234567890!5m2!1sfr!2sma`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}