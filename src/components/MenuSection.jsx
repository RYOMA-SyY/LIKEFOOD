import { menuData, categoryOrder } from '../data/menu';
import './MenuSection.css';

function formatPrice(item) {
  if (item.isExtra) return { main: `+${item.price} DH`, sub: null };
  if (item.priceSolo !== undefined && item.priceFrites !== undefined)
    return { main: `${item.priceSolo} DH`, sub: `+frites ${item.priceFrites} DH` };
  if (item.priceSmall !== undefined && item.priceLarge !== undefined)
    return { main: `${item.priceSmall} DH`, sub: `grand ${item.priceLarge} DH` };
  return { main: `${item.price} DH`, sub: null };
}

export default function MenuSection() {
  return (
    <section id="menu" className="menu-section" aria-labelledby="menu-title">
      <div className="menu-board-wrapper">
        <div className="menu-board-header">
          <div className="menu-board-title-row">
            <div className="menu-board-line" />
            <h2 id="menu-title" className="menu-board-title">NOTRE MENU</h2>
            <div className="menu-board-line" />
          </div>
          <p className="menu-board-subtitle">Casablanca · Like Food</p>
        </div>

        <div className="menu-board-grid">
          {categoryOrder.map((catKey) => {
            const category = menuData[catKey];
            if (!category) return null;
            return (
              <div key={catKey} className="menu-board-category">
                <h3 className="menu-board-cat-name">{category.label.toUpperCase()}</h3>
                <div className="menu-board-divider" />
                <ul className="menu-board-items">
                  {category.items.map((item, i) => {
                    const { main, sub } = formatPrice(item);
                    return (
                      <li key={i} className="menu-board-item">
                        <span className="menu-board-item-name">{item.name}</span>
                        <span className="menu-board-item-dots" aria-hidden="true" />
                        <span className="menu-board-item-price">
                          {main}
                          {sub && <small>{sub}</small>}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}