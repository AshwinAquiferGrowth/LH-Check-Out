import { useCart } from '../context/CartContext'
import { brandInfo } from '../data/products'
import CheckoutStepIndicator from './CheckoutStepIndicator'
import CheckoutOrderSummary from './CheckoutOrderSummary'
import CheckoutInformation from './CheckoutInformation'
import CheckoutShipping from './CheckoutShipping'
import CheckoutPayment from './CheckoutPayment'
import './CheckoutPage.css'

function CheckoutPage() {
  const { state, cartTotal } = useCart()
  const step = state.checkoutStep

  const freeShipping = cartTotal >= brandInfo.freeShippingThreshold
  const shippingCost = step >= 2 ? (freeShipping ? 0 : 7.99) : null

  return (
    <div className="checkout-page">
      {/* Teal announcement bar */}
      <div className="checkout-page__announcement">
        <p>Free shipping on orders over $123 ✦ 130,000+ Customers Living Healthillie</p>
      </div>

      {/* Branded header */}
      <div className="checkout-page__header">
        <div className="checkout-page__header-inner">
          <span className="checkout-page__logo">
            <span className="checkout-page__logo-live">Live</span>
            <span className="checkout-page__logo-healthillie">Healthillie</span>
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="checkout-page__body">
        <div className="checkout-page__inner">
          <div className="checkout-page__form">
            <CheckoutStepIndicator />
            {step === 1 && <CheckoutInformation />}
            {step === 2 && <CheckoutShipping />}
            {step === 3 && <CheckoutPayment />}
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
