import { useCart } from '../context/CartContext'
import './ProductCard.css'

function ProductCard({ id, title, price, comparePrice, image, badge, vendor }) {
  const { dispatch } = useCart()
  const isSoldOut = badge === 'Sold Out'

  function handleAdd() {
    if (isSoldOut) return
    dispatch({
      type: 'ADD_ITEM',
      payload: { id, title, vendor, price, image },
    })
  }

  return (
    <article className="card product-card">
      <div className="product-card__image-wrapper">
        {image ? (
          <img src={image} alt={title} className="card__image" loading="lazy" />
        ) : (
          <div className="product-card__placeholder" />
        )}
        {badge && (
          <span className={`badge badge--${badge.toLowerCase().replace(' ', '-')}`}>
            {badge}
          </span>
        )}
      </div>
      <div className="card__body">
        {vendor && <p className="product-card__vendor">{vendor}</p>}
        <h3 className="card__title">{title}</h3>
        <p className="card__price">
          <span className={comparePrice ? 'card__price--sale' : ''}>
            ${price}
          </span>
          {comparePrice && (
            <span className="card__price--compare">${comparePrice}</span>
          )}
        </p>
        <button
          className={`btn btn--sm product-card__btn ${isSoldOut ? 'btn--secondary' : 'btn--primary'}`}
          disabled={isSoldOut}
          onClick={handleAdd}
        >
          {isSoldOut ? 'Sold Out' : 'Add to Cart'}
        </button>
      </div>
    </article>
  )
}

export default ProductCard
