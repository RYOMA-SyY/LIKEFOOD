import './MenuItem.css';

export default function MenuItem({ item }) {
  const formatPrice = (item) => {
    if (item.isExtra) {
      return { main: `+${item.price} DH`, label: 'Supplément' };
    }
    if (item.priceSolo !== undefined && item.priceFrites !== undefined) {
      return { main: `${item.priceSolo} DH`, label: `avec frites ${item.priceFrites} DH` };
    }
    if (item.priceSmall !== undefined && item.priceLarge !== undefined) {
      return { main: `${item.priceSmall} DH`, label: `grand ${item.priceLarge} DH` };
    }
    if (item.price !== undefined) {
      return { main: `${item.price} DH`, label: null };
    }
    return { main: '', label: null };
  };

  const priceInfo = formatPrice(item);

  return (
    <article className="menu-item" role="listitem">
      <div className="menu-item-main">
        <h4 className="menu-item-name">{item.name}</h4>
        {priceInfo.label && (
          <span className="menu-item-price-detail">{priceInfo.label}</span>
        )}
      </div>
      <div className="menu-item-price">
        <span className="price-pill">{priceInfo.main}</span>
      </div>
    </article>
  );
}