import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { products, brandInfo } from '../data/products'
import { IconChevronDown, IconLeaf, IconLock } from './icons'
import './CheckoutOrderSummary.css'

function CheckoutOrderSummary({ shippingCost = null }) {
  const { state, dispatch, cartTotal, cartCount } = useCart()
  const [expanded, setExpanded] = useState(true)
  const [discountCode, setDiscountCode] = useState('')
  const [subMode, setSubMode] = useState('onetime') // 'onetime' | 'subscribe'
  const [subFrequency, setSubFrequency] = useState('4 weeks')

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

  const subItem = state.items[0]

  return (
    <div className="order-summary">
      <button
        className="order-summary__toggle"
        onClick={() => setExpanded(!expanded)}
      >
        <span>Order summary</span>
        <span className={`order-summary__toggle-icon ${expanded ? 'order-summary__toggle-icon--open' : ''}`}>
          <IconChevronDown size={16} />
        </span>
      </button>

      <div className={`order-summary__content ${expanded ? 'order-summary__content--open' : ''}`}>
        {/* Line items */}
        <div className="order-summary__items">
          {state.items.map((item, idx) => (
            <div key={item.id} className="order-summary__item-group">
              <div className="order-summary__item">
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

              {/* Recharge offer — attached to first item only (max 1 Line Item Editor) */}
              {idx === 0 && (
                <div className="recharge-offer">
                  <div className="recharge-offer__options">
                    <label className={`recharge-offer__option ${subMode === 'onetime' ? 'recharge-offer__option--active' : ''}`}>
                      <input
                        type="radio"
                        name="purchase-type"
                        checked={subMode === 'onetime'}
                        onChange={() => setSubMode('onetime')}
                      />
                      <span className="recharge-offer__option-label">One-time purchase</span>
                      <span className="recharge-offer__option-price">${item.price}</span>
                    </label>

                    <label className={`recharge-offer__option ${subMode === 'subscribe' ? 'recharge-offer__option--active' : ''}`}>
                      <input
                        type="radio"
                        name="purchase-type"
                        checked={subMode === 'subscribe'}
                        onChange={() => setSubMode('subscribe')}
                      />
                      <div className="recharge-offer__option-content">
                        <span className="recharge-offer__option-label">Subscribe & Save</span>
                        <span className="recharge-offer__badge">15% off</span>
                      </div>
                      <span className="recharge-offer__option-price recharge-offer__option-price--sale">
                        ${(parseFloat(item.price) * 0.85).toFixed(2)}
                      </span>
                    </label>
                  </div>

                  {subMode === 'subscribe' && (
                    <div className="recharge-offer__frequency">
                      <label className="recharge-offer__frequency-label">Deliver every</label>
                      <select
                        className="recharge-offer__frequency-select"
                        value={subFrequency}
                        onChange={(e) => setSubFrequency(e.target.value)}
                      >
                        <option value="2 weeks">2 weeks</option>
                        <option value="4 weeks">4 weeks</option>
                        <option value="6 weeks">6 weeks</option>
                        <option value="8 weeks">8 weeks</option>
                      </select>
                    </div>
                  )}
                </div>
              )}
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
