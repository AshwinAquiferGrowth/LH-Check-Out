import { useCart } from '../context/CartContext'
import { products } from '../data/products'
import './CartUpsell.css'

function CartUpsell() {
  const { state, dispatch } = useCart()
  const cartIds = state.items.map((i) => i.id)
  const suggestions = products
    .filter((p) => !cartIds.includes(p.id) && !p.badge?.includes('Sold Out'))
    .slice(0, 3)

  if (suggestions.length === 0) return null

  return (
    <div className="cart-upsell">
      <p className="cart-upsell__heading">Complete Your Routine</p>
      <div className="cart-upsell__scroll">
        {suggestions.map((p) => (
          <div key={p.id} className="cart-upsell__card">
            <img src={p.image} alt={p.title} className="cart-upsell__image" />
            <div className="cart-upsell__info">
              <p className="cart-upsell__title">{p.title}</p>
              <p className="cart-upsell__price">${p.price}</p>
            </div>
            <button
              className="btn btn--outline btn--sm cart-upsell__add"
              onClick={() =>
                dispatch({
                  type: 'ADD_ITEM',
                  payload: { id: p.id, title: p.title, vendor: p.vendor, price: p.price, image: p.image },
                })
              }
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CartUpsell
