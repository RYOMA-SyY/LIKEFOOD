import { useLanguage } from '../i18n';
import { businessConfig } from '../data/config';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="footer-logo" aria-label={`${businessConfig.brand} - ${t('nav.home')}`}>
              <img src="/logo-nobg.webp" alt="" width="48" height="48" />
              <span>{businessConfig.brand}</span>
            </a>
            <p className="footer-tagline">{t('footer.tagline')}</p>
            <div className="footer-social" aria-label={t('footer.socialLabel')}>
              {[
                { name: 'Facebook', icon: 'facebook', url: businessConfig.social.facebook },
                { name: 'Instagram', icon: 'instagram', url: businessConfig.social.instagram },
                { name: 'TikTok', icon: 'tiktok', url: businessConfig.social.tiktok },
                { name: 'Twitter', icon: 'twitter', url: businessConfig.social.twitter },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url || '#'}
                  className={`footer-social-link ${!social.url ? 'placeholder' : ''}`}
                  aria-label={social.name}
                  target={social.url ? '_blank' : undefined}
                  rel={social.url ? 'noopener noreferrer' : undefined}
                  aria-disabled={!social.url}
                >
                  {getSocialIcon(social.icon)}
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <nav className="footer-nav" aria-label={t('footer.navigation')}>
            <h4>{t('footer.navigation')}</h4>
            <ul>
              <li><a href="#home">{t('nav.home')}</a></li>
              <li><a href="#menu">{t('nav.menu')}</a></li>
              <li><a href="#about">{t('nav.about')}</a></li>
              <li><a href="#gallery">{t('nav.gallery')}</a></li>
              <li><a href="#contact">{t('nav.contact')}</a></li>
            </ul>
          </nav>

          <div className="footer-contact">
            <h4>{t('footer.contact')}</h4>
            <address>
              <p>{businessConfig.location}</p>
              <ul className="footer-phones">
                {businessConfig.phones.map((phone, index) => (
                  <li key={index}>
                    <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
                  </li>
                ))}
              </ul>
              <p className="footer-hours">
                <span className="badge badge-yellow">{t('contact.hoursNotice')}</span>
              </p>
            </address>
          </div>

          <div className="footer-map">
            <h4>{t('footer.findUs')}</h4>
            <a
              href={businessConfig.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg footer-map-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {t('footer.viewMap')}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            {t('footer.copyright', { year: currentYear })}
          </p>
          <p className="legal-note">
            {t('footer.legalNote')}
          </p>
        </div>
      </div>
    </footer>
  );
}

function getSocialIcon(name) {
  const icons = {
    facebook: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    tiktok: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.5 3.5h-6a5.5 5.5 0 0 0-5.5 5.5v6a5.5 5.5 0 0 0 5.5 5.5h6a5.5 5.5 0 0 0 5.5-5.5v-6a5.5 5.5 0 0 0-5.5-5.5z" />
        <path d="M17 8v8.5M10 16.5v-8.5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    twitter: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  };
  return icons[name];
}