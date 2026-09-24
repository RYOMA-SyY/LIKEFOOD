import Header from './components/Header';
import Hero from './components/Hero';
import CategoryCard from './components/CategoryCard';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import MapSection from './components/MapSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';
import { useLanguage } from './i18n';
import './styles/globals.css';
import './App.css';

function App() {
  const { t } = useLanguage();

  const categoryCards = [
    { id: 'pizza' },
    { id: 'tacos' },
    { id: 'burgers' },
    { id: 'plats' },
    { id: 'salades' },
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">
        {t('common.skipToContent')}
      </a>

      <Header />

      <main id="main-content" role="main">
        <Hero />

        <section id="categories" className="categories-section" aria-labelledby="categories-title">
          <div className="container">
            <header className="section-header">
              <h2 id="categories-title" className="section-title">{t('categories.title')}</h2>
              <p className="section-subtitle">{t('categories.subtitle')}</p>
            </header>
            <div className="categories-grid" role="list">
              {categoryCards.map((cat) => (
                <CategoryCard
                  key={cat.id}
                  categoryId={cat.id}
                  onClick={() => {
                    const menuSection = document.getElementById('menu');
                    if (menuSection) {
                      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                      const targetPosition = menuSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                      setTimeout(() => {
                        const event = new CustomEvent('filter-category', { detail: cat.id });
                        window.dispatchEvent(event);
                      }, 300);
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        <MenuSection />

        <AboutSection />

        <MapSection />

        <ContactSection />
      </main>

      <Footer />
      <MobileActionBar />
    </>
  );
}

export default App;