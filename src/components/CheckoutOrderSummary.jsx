import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { products, brandInfo } from '../data/products'
import { IconChevronDown, IconChevronLeft, IconChevronRight, IconLeaf, IconLock } from './icons'
import './CheckoutOrderSummary.css'

function CheckoutOrderSummary({ shippingCost = null }) {
  const { state, dispatch, cartTotal, cartCount } = useCart()
  const [expanded, setExpanded] = useState(() => window.innerWidth > 768)
  const [discountCode, setDiscountCode] = useState('')
  const [recPage, setRecPage] = useState(0)
  const [tokiLoggedIn, setTokiLoggedIn] = useState(false)
  const [tokiQty, setTokiQty] = useState(1000)

  const shipping = shippingCost !== null ? shippingCost : null
  const taxRate = 0.08
  const taxes = cartTotal * taxRate
  const total = cartTotal + (shipping || 0) + taxes

  const cartIds = state.items.map((i) => i.id)
  const allRecs = products
    .filter((p) => !cartIds.includes(p.id) && !p.badge?.includes('Sold Out'))
  const recsPerPage = 2
  const totalPages = Math.ceil(allRecs.length / recsPerPage)
  const recs = allRecs.slice(recPage * recsPerPage, recPage * recsPerPage + recsPerPage)

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

        {/* Toki Loyalty — Shopify Checkout Extension (rendered by Toki, not customizable) */}
        <div className="order-summary__toki">
          <p className="order-summary__toki-heading">Spend your loyalty points to receive a discount</p>
          {!tokiLoggedIn ? (
            <>
              <p className="order-summary__toki-subtext">Already have an account? <button className="order-summary__toki-link" onClick={() => setTokiLoggedIn(true)}>Login</button></p>
              <p className="order-summary__toki-subtext">Don't have an account? <button className="order-summary__toki-link" onClick={() => setTokiLoggedIn(true)}>Create one</button></p>
            </>
          ) : (
            <div className="order-summary__toki-redeem">
              <p className="order-summary__toki-balance">Your balance <strong>1,250</strong> Store Credit.</p>
              <div className="order-summary__toki-controls">
                <div className="order-summary__toki-qty">
                  <span className="order-summary__toki-qty-label">Quantity</span>
                  <div className="order-summary__toki-qty-row">
                    <span className="order-summary__toki-qty-value">{tokiQty}</span>
                    <button className="order-summary__toki-qty-btn" onClick={() => setTokiQty((q) => Math.max(100, q - 100))}>−</button>
                    <button className="order-summary__toki-qty-btn" onClick={() => setTokiQty((q) => Math.min(1250, q + 100))}>+</button>
                  </div>
                </div>
                <button className="order-summary__toki-redeem-btn">Redeem for ${(tokiQty / 100).toFixed(0)}</button>
              </div>
            </div>
          )}
        </div>

        {/* Discount code */}
        <div className="order-summary__discount">
          <input
            type="text"
            className="input"
            placeholder="Discount code or gift card"
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

        {/* Recommendations — Rebuy-style carousel */}
        {recs.length > 0 && (
          <div className="order-summary__recs">
            <p className="order-summary__recs-heading">You might like</p>
            <div className="order-summary__recs-grid">
              {recs.map((p) => (
                <div key={p.id} className="order-summary__rec-card">
                  <div className="order-summary__rec-image-wrap">
                    <img src={p.image} alt={p.title} className="order-summary__rec-image" />
                  </div>
                  <div className="order-summary__rec-details">
                    <p className="order-summary__rec-title">{p.title}</p>
                    <p className="order-summary__rec-price">${p.price}</p>
                    <button
                      className="order-summary__rec-add"
                      onClick={() => dispatch({ type: 'ADD_ITEM', payload: { id: p.id, title: p.title, vendor: p.vendor, price: p.price, image: p.image } })}
                    >
                      Add to order
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {totalPages > 1 && (
              <div className="order-summary__recs-nav">
                <button
                  className="order-summary__recs-arrow"
                  onClick={() => setRecPage((p) => Math.max(0, p - 1))}
                  disabled={recPage === 0}
                >
                  <IconChevronLeft size={16} />
                </button>
                <button
                  className="order-summary__recs-arrow"
                  onClick={() => setRecPage((p) => Math.min(totalPages - 1, p + 1))}
                  disabled={recPage === totalPages - 1}
                >
                  <IconChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Testimonials — static image (Content Block), max 2 */}
        <div className="order-summary__testimonials">
          <div className="order-summary__testimonial">
            <div className="order-summary__testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FDBE40" stroke="#FDBE40" strokeWidth="1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="order-summary__testimonial-quote">"Finally found products I can trust. My skin has never been happier — and I love knowing everything is clean."</p>
            <p className="order-summary__testimonial-author">— Sarah M., Verified Buyer</p>
          </div>
          <div className="order-summary__testimonial">
            <div className="order-summary__testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FDBE40" stroke="#FDBE40" strokeWidth="1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="order-summary__testimonial-quote">"Shipping was fast, packaging was beautiful. This is what wellness should feel like."</p>
            <p className="order-summary__testimonial-author">— Jordan K., Repeat Customer</p>
          </div>
        </div>

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
