import { useLanguage } from '../i18n';
import { businessConfig } from '../data/config';
import './MobileActionBar.css';

export default function MobileActionBar() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const targetPosition = menuSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="mobile-action-bar" role="navigation" aria-label={t('mobileActionBar.label')}>
      <a
        href={`tel:${businessConfig.phones[0].replace(/\s/g, '')}`}
        className="action-btn action-call"
        aria-label={`${t('mobileActionBar.call')} ${businessConfig.phones[0]}`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span>{t('mobileActionBar.call')}</span>
      </a>

      <a
        href={businessConfig.mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="action-btn action-directions"
        aria-label={t('mobileActionBar.directionsAria')}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span>{t('mobileActionBar.directions')}</span>
      </a>

      <button
        className="action-btn action-menu"
        onClick={scrollToMenu}
        aria-label={t('mobileActionBar.menu')}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M4 12h16M4 6h16M4 18h16" />
        </svg>
        <span>{t('mobileActionBar.menu')}</span>
      </button>
    </div>
  );
}