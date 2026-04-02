import { useCart } from '../context/CartContext'
import { brandInfo } from '../data/products'
import CheckoutOrderSummary from './CheckoutOrderSummary'
import CheckoutInformation from './CheckoutInformation'
import CheckoutShipping from './CheckoutShipping'
import CheckoutPayment from './CheckoutPayment'
import './CheckoutPage.css'

function CheckoutPage() {
  const { cartTotal } = useCart()

  const freeShipping = cartTotal >= brandInfo.freeShippingThreshold
  const shippingCost = freeShipping ? 0 : 7.99

  return (
    <div className="checkout-page">
      {/* Branded header — centered like PROMIX */}
      <div className="checkout-page__header">
        <div className="checkout-page__header-inner">
          <img src="/logo-checkout.svg" alt="Live Healthillie" className="checkout-page__logo" />

          <div className="checkout-page__header-trust">
            <div className="checkout-page__header-stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FDBE40" stroke="#FDBE40" strokeWidth="1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
              <span className="checkout-page__header-reviews">130,000+ Customers Living Healthillie</span>
            </div>
            <div className="checkout-page__header-badges">
              <span>✓ Clean Ingredients, Always</span>
              <span>✓ Free Shipping Over $125</span>
              <span>✓ Ships Within 2-3 Business Days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="checkout-page__body">
        <div className="checkout-page__inner">
          <div className="checkout-page__form">
            <CheckoutInformation />
            <CheckoutShipping />
            <CheckoutPayment />
          </div>

          <div className="checkout-page__sidebar">
            <CheckoutOrderSummary shippingCost={shippingCost} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="checkout-page__footer">
        <div className="checkout-page__footer-inner">
          <a href="#refund">Refund policy</a>
          <a href="#privacy">Privacy policy</a>
          <a href="#terms">Terms of service</a>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
