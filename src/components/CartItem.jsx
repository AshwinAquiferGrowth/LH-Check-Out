import { useCart } from '../context/CartContext'
import QuantitySelector from './QuantitySelector'
import { IconTrash } from './icons'
import './CartItem.css'

function CartItem({ item }) {
  const { dispatch } = useCart()

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item__image" />
      <div className="cart-item__info">
        <p className="cart-item__vendor">{item.vendor}</p>
        <p className="cart-item__title">{item.title}</p>
        <div className="cart-item__actions">
          <QuantitySelector
            value={item.quantity}
            onChange={(qty) =>
              dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: qty } })
            }
          />
          <button
            className="cart-item__remove"
            onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
            aria-label="Remove item"
          >
            <IconTrash size={16} />
          </button>
        </div>
      </div>
      <p className="cart-item__price">
        ${(parseFloat(item.price) * item.quantity).toFixed(2)}
      </p>
    </div>
  )
}

export default CartItem
