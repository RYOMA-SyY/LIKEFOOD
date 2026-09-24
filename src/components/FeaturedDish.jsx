import { useLanguage } from '../i18n';
import './FeaturedDish.css';

const dishImages = {
  'pizza-mixte': '/pizza.webp',
  'pastichio-gratine': '/pastichio.webp',
  'like-burger': '/burgers.webp',
};

export default function FeaturedDish({ dish }) {
  const { t } = useLanguage();
  const image = dishImages[dish.id] || dish.image;

  return (
    <article className="featured-dish" aria-labelledby={`featured-${dish.id}`}>
      <div className="featured-dish-image">
        <img
          src={image}
          alt={`${t('featured.altText', { name: t(`featured.${dish.id}.name`) })}`}
          loading="eager"
        />
        <span className="featured-dish-category">{t(`featured.${dish.id}.category`)}</span>
      </div>
      <div className="featured-dish-content">
        <h3 id={`featured-${dish.id}`} className="featured-dish-name">{t(`featured.${dish.id}.name`)}</h3>
        <p className="featured-dish-description">{t(`featured.${dish.id}.description`)}</p>
        <div className="featured-dish-footer">
          <span className="price-pill">{t(`featured.${dish.id}.price`)}</span>
          <button
            className="btn btn-primary featured-dish-btn"
            aria-label={`${t('featured.order')} ${t(`featured.${dish.id}.name`)}`}
          >
            {t('featured.order')}
          </button>
        </div>
      </div>
    </article>
  );
}