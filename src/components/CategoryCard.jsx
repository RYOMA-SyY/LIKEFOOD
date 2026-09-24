import { useLanguage } from '../i18n';
import './CategoryCard.css';

const categoryIcons = {
  pizza: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  tacos: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M8 14l4-4 4 4" />
      <path d="M8 10l4 4 4-4" />
    </svg>
  ),
  burgers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M8 11h8M8 15h8" />
      <path d="M12 7v8" />
    </svg>
  ),
  plats: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M8 14h8M8 10h8" />
      <ellipse cx="12" cy="12" rx="2" ry="3" />
    </svg>
  ),
  salades: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M8 16c0-2 2-4 4-4s4 2 4 4" />
      <path d="M12 8v8" />
    </svg>
  ),
};

const categoryImages = {
  pizza: '/pizza.webp',
  tacos: '/tacos.webp',
  burgers: '/burgers.webp',
  plats: '/plats.webp',
  salades: '/salades.webp',
};

export default function CategoryCard({ categoryId, onClick }) {
  const { t } = useLanguage();

  const icon = categoryIcons[categoryId] || categoryIcons.pizza;
  const image = categoryImages[categoryId] || categoryImages.pizza;
  const title = t(`categories.${categoryId}`);

  return (
    <article
      className="category-card"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={t('categories.viewCategory', { category: title })}
    >
      <div className="category-card-image">
        <img src={image} alt="" loading="eager" />
      </div>
      <div className="category-card-content">
        <div className="category-card-icon" aria-hidden="true">
          {icon}
        </div>
        <h3 className="category-card-title">{title}</h3>
      </div>
    </article>
  );
}