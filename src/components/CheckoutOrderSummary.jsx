import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { products, brandInfo } from '../data/products'
import { IconChevronDown, IconLeaf, IconLock } from './icons'
import './CheckoutOrderSummary.css'

function CheckoutOrderSummary({ shippingCost = null }) {
  const { state, dispatch, cartTotal, cartCount } = useCart()
  const [expanded, setExpanded] = useState(() => window.innerWidth > 768)
  const [discountCode, setDiscountCode] = useState('')

  const shipping = shippingCost !== null ? shippingCost : null
  const taxRate = 0.08
  const taxes = cartTotal * taxRate
  const total = cartTotal + (shipping || 0) + taxes

  const cartIds = state.items.map((i) => i.id)
  const recs = products
    .filter((p) => !cartIds.includes(p.id) && !p.badge?.includes('Sold Out'))
    .slice(0, 2)

  const threshold = brandInfo.freeShippingThreshold
  const progress = Math.min((cartTotal / threshold) * 100, 100)
  const remaining = Math.max(threshold - cartTotal, 0)

  return (
    <div className="order-summary">
      <button
        className="order-summary__toggle"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="order-summary__toggle-left">
          <span className={expanded ? 'order-summary__toggle-chevron--open' : ''}>
            <IconChevronDown size={16} />
          </span>
          <span>{expanded ? 'Hide' : 'Show'} order summary</span>
        </span>
        <span className="order-summary__toggle-total">${total.toFixed(2)}</span>
      </button>

      <div className={`order-summary__content ${expanded ? 'order-summary__content--open' : ''}`}>
        {/* Line items */}
        <div className="order-summary__items">
          {state.items.map((item) => (
            <div key={item.id} className="order-summary__item">
              <div className="order-summary__item-image-wrap">
                <img src={item.image} alt={item.title} className="order-summary__item-image" />
                <span className="order-summary__item-qty">{item.quantity}</span>
              </div>
              <div className="order-summary__item-info">
                <p className="order-summary__item-title">{item.title}</p>
                <p className="order-summary__item-vendor">{item.vendor}</p>
                <button
                  className="order-summary__item-remove"
                  onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                  aria-label={`Remove ${item.title} from cart`}
                >
                  Remove
                </button>
              </div>
              <p className="order-summary__item-price">
                ${(parseFloat(item.price) * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        {/* Discount code */}
        <div className="order-summary__discount">
          <input
            type="text"
            className="input"
            placeholder="Discount code"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
          />
          <button className="btn btn--secondary">Apply</button>
        </div>

        <hr className="divider" />

        {/* Totals */}
        <div className="order-summary__totals">
          <div className="order-summary__line">
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className="order-summary__line">
            <span>Shipping</span>
            <span>
              {shipping === null
                ? 'Calculated at next step'
                : shipping === 0
                  ? 'FREE'
                  : `$${shipping.toFixed(2)}`}
            </span>
          </div>
          <div className="order-summary__line">
            <span>Taxes (estimated)</span>
            <span>${taxes.toFixed(2)}</span>
          </div>

          <hr className="divider" />

          <div className="order-summary__line order-summary__line--total">
            <span>Total</span>
            <span>
              <span className="order-summary__currency">USD</span>
              ${total.toFixed(2)}
            </span>
          </div>
          <p className="order-summary__points">Earn <strong>{Math.floor(total)}</strong> points with this purchase</p>
        </div>

        {/* Free shipping progress — dynamic widget, no custom bg */}
        <div className="order-summary__progress">
          <div className="order-summary__progress-bar">
            <div className="order-summary__progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <p className="order-summary__progress-text">
            {remaining > 0
              ? <><strong>${remaining.toFixed(2)}</strong> away from free shipping</>
              : <>You've unlocked <strong>free shipping!</strong></>}
          </p>
        </div>

        {/* Recommendations — dynamic widget, no custom bg */}
        {recs.length > 0 && (
          <div className="order-summary__recs">
            <p className="order-summary__recs-heading">Recommended for You</p>
            {recs.map((p) => (
              <div key={p.id} className="order-summary__rec-item">
                <img src={p.image} alt={p.title} className="order-summary__rec-image" />
                <div className="order-summary__rec-info">
                  <p className="order-summary__rec-title">{p.title}</p>
                  <p className="order-summary__rec-price">${p.price}</p>
                </div>
                <button
                  className="order-summary__rec-add"
                  onClick={() => dispatch({ type: 'ADD_ITEM', payload: { id: p.id, title: p.title, vendor: p.vendor, price: p.price, image: p.image } })}
                >
                  Add
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Brand trust — static content, can have bg */}
        <div className="order-summary__brand-card">
          <div className="order-summary__promise">
            <IconLeaf size={14} />
            <span>Every product vetted for clean, low-tox ingredients</span>
          </div>
          <div className="order-summary__brand-divider" />
          <div className="order-summary__secure">
            <IconLock size={12} />
            <span>Secure, encrypted checkout</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutOrderSummary
