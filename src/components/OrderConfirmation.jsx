import { useCart } from '../context/CartContext'
import { brandInfo, products } from '../data/products'
import './OrderConfirmation.css'

function OrderConfirmation() {
  const { state, dispatch, cartTotal } = useCart()
  const shipping = cartTotal >= brandInfo.freeShippingThreshold ? 0 : 7.99
  const taxes = cartTotal * 0.08
  const total = cartTotal + shipping + taxes
  const orderNumber = `LH-${Math.floor(10000 + Math.random() * 90000)}`

  const cartIds = state.items.map((i) => i.id)
  const recs = products
    .filter((p) => !cartIds.includes(p.id) && !p.badge?.includes('Sold Out'))
    .slice(0, 2)

  return (
    <div className="confirmation">
      {/* Header — matches checkout centered style */}
      <div className="confirmation__header">
        <div className="confirmation__header-inner">
          <img src="/logo-checkout.svg" alt="Live Healthillie" className="confirmation__logo" />
          <div className="confirmation__header-stars">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FDBE40" stroke="#FDBE40" strokeWidth="1">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
            <span className="confirmation__header-reviews">130,000+ Customers Living Healthillie</span>
          </div>
        </div>
      </div>

      <div className="confirmation__body">
        <div className="confirmation__inner">
          {/* Left column */}
          <div className="confirmation__details">
            <div className="confirmation__checkmark">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="#1a3c4d" opacity="0.1" />
                <circle cx="24" cy="24" r="18" fill="#1a3c4d" opacity="0.15" />
                <path d="M16 24l6 6 10-12" stroke="#1a3c4d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <p className="confirmation__order-num">Order {orderNumber}</p>
            <h1 className="confirmation__title">Thank you!</h1>
            <p className="confirmation__subtitle">Your order is confirmed. We'll send you a shipping confirmation email when your order ships.</p>

            <div className="confirmation__info-grid">
              <div className="confirmation__info-section">
                <h3>Shipping address</h3>
                <p>John Doe</p>
                <p>123 Main St</p>
                <p>City, KS 66101</p>
                <p>United States</p>
              </div>

              <div className="confirmation__info-section">
                <h3>Billing address</h3>
                <p>John Doe</p>
                <p>123 Main St</p>
                <p>City, KS 66101</p>
                <p>United States</p>
              </div>

              <div className="confirmation__info-section">
                <h3>Shipping method</h3>
                <p>Standard Shipping</p>
                <p>5–7 business days</p>
              </div>

              <div className="confirmation__info-section">
                <h3>Payment method</h3>
                <p>Visa ending in 4242</p>
                <p>${total.toFixed(2)}</p>
              </div>
            </div>

            <button
              className="btn btn--primary btn--lg confirmation__continue"
              onClick={() => dispatch({ type: 'CLEAR_CART' })}
            >
              Continue shopping
            </button>

            <p className="confirmation__help">
              Need help? <a href={`mailto:${brandInfo.email}`}>{brandInfo.email}</a>
            </p>
          </div>

          {/* Right column */}
          <div className="confirmation__sidebar">
            <h3 className="confirmation__summary-heading">Order summary</h3>
            <div className="confirmation__items">
              {state.items.map((item) => (
                <div key={item.id} className="confirmation__item">
                  <div className="confirmation__item-image-wrap">
                    <img src={item.image} alt={item.title} className="confirmation__item-image" />
                    <span className="confirmation__item-qty">{item.quantity}</span>
                  </div>
                  <div className="confirmation__item-info">
                    <p className="confirmation__item-title">{item.title}</p>
                    <p className="confirmation__item-vendor">{item.vendor}</p>
                  </div>
                  <p className="confirmation__item-price">
                    ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <hr className="divider" />
            <div className="confirmation__totals">
              <div className="confirmation__line"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
              <div className="confirmation__line"><span>Shipping</span><span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span></div>
              <div className="confirmation__line"><span>Taxes</span><span>${taxes.toFixed(2)}</span></div>
              <hr className="divider" />
              <div className="confirmation__line confirmation__line--total">
                <span>Total</span>
                <span><span className="confirmation__currency">USD</span> ${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Post-purchase recommendations — vertical cards matching checkout */}
            {recs.length > 0 && (
              <div className="confirmation__recs">
                <p className="confirmation__recs-heading">You might also like</p>
                <div className="confirmation__recs-grid">
                  {recs.map((p) => (
                    <div key={p.id} className="confirmation__rec-card">
                      <div className="confirmation__rec-image-wrap">
                        <img src={p.image} alt={p.title} className="confirmation__rec-image" />
                      </div>
                      <div className="confirmation__rec-details">
                        <p className="confirmation__rec-title">{p.title}</p>
                        <p className="confirmation__rec-price">${p.price}</p>
                        <button
                          className="confirmation__rec-add"
                          onClick={() => dispatch({ type: 'ADD_ITEM', payload: { id: p.id, title: p.title, vendor: p.vendor, price: p.price, image: p.image } })}
                        >
                          Add to order
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="confirmation__footer">
        <div className="confirmation__footer-inner">
          <a href="#refund">Refund policy</a>
          <a href="#privacy">Privacy policy</a>
          <a href="#terms">Terms of service</a>
        </div>
      </div>
    </div>
  )
}

export default OrderConfirmation
