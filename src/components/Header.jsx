import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n';
import { businessConfig } from '../data/config';
import './Header.css';

export default function Header() {
  const { t, language, changeLanguage, languages } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', labelKey: 'nav.home' },
    { href: '#menu', labelKey: 'nav.menu' },
    { href: '#about', labelKey: 'nav.about' },
    { href: '#gallery', labelKey: 'nav.gallery' },
    { href: '#contact', labelKey: 'nav.contact' },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const renderLanguageSelector = (className = '') => (
    <div className={`language-selector ${className}`} role="group" aria-label={t('language.select')}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`lang-btn ${language === lang.code ? 'active' : ''}`}
          onClick={() => changeLanguage(lang.code)}
          aria-pressed={language === lang.code}
          aria-label={lang.nativeName}
          dir={lang.dir}
        >
          {lang.nativeName}
        </button>
      ))}
    </div>
  );

  return (
    <header
      className={`header ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}
      role="banner"
    >
      <div className="header-container container">
        <a href="#home" className="logo" aria-label={`${businessConfig.brand} - ${t('nav.home')}`}>
          <img src="/logo-nobg.webp" alt="" width="48" height="48" loading="eager" />
          <span className="logo-text">{businessConfig.brand}</span>
        </a>

        <nav className="nav-desktop" role="navigation" aria-label={t('nav.main')}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  {t(link.labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          {renderLanguageSelector('header-lang')}
          <a
            href={`tel:${businessConfig.phones[0].replace(/\s/g, '')}`}
            className="btn btn-primary header-cta"
            aria-label={`${t('mobileActionBar.call')} ${businessConfig.phones[0]}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>{t('hero.ctaPrimary')}</span>
          </a>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? t('header.closeMenu') : t('header.openMenu')}
          >
            <span className="hamburger" aria-hidden="true">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className="nav-mobile"
        role="navigation"
        aria-label={t('nav.mobile')}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-menu-header">
          <div className="mobile-menu-title">{t('nav.main')}</div>
          {renderLanguageSelector('mobile-lang')}
        </div>
        <ul className="nav-list-mobile">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link-mobile"
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {t(link.labelKey)}
              </a>
            </li>
          ))}
          <li className="mobile-cta">
            <a
              href={`tel:${businessConfig.phones[0].replace(/\s/g, '')}`}
              className="btn btn-primary btn-lg"
              aria-label={`${t('mobileActionBar.call')} ${businessConfig.phones[0]}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {t('mobileActionBar.call')} {businessConfig.phones[0]}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}