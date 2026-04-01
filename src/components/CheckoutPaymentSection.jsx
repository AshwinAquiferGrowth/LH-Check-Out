import { useState } from 'react'
import { IconChevronDown, IconLock, IconVisa, IconMastercard, IconAmex } from './icons'
import './CheckoutSection.css'
import './CheckoutPaymentSection.css'

function CheckoutPaymentSection({ cartTotal }) {
  const [open, setOpen] = useState(true)
  const [useSameAddress, setUseSameAddress] = useState(true)

  return (
    <div className={`checkout-section ${open ? 'checkout-section--open' : ''}`}>
      <button className="checkout-section__header" onClick={() => setOpen(!open)}>
        <h3 className="checkout-section__title">Payment</h3>
        <span className={`checkout-section__chevron ${open ? 'checkout-section__chevron--open' : ''}`}>
          <IconChevronDown size={20} />
        </span>
      </button>
      {open && (
        <div className="checkout-section__body">
          <p className="checkout-payment-s__secure">
            <IconLock size={13} />
            All transactions are secure and encrypted.
          </p>

          {/* Payment method icons */}
          <div className="checkout-payment-s__methods">
            <IconVisa />
            <IconMastercard />
            <IconAmex />
            <span className="checkout-payment-s__method-label">Visa Card</span>
          </div>

          {/* Card fields */}
          <div className="checkout-section__field">
            <input className="input" placeholder="Card Number" />
          </div>
          <div className="checkout-section__row">
            <input className="input" placeholder="Expiry (MM / YY)" />
            <input className="input" placeholder="Security Code" />
          </div>
          <div className="checkout-section__field">
            <input className="input" placeholder="Name on card" />
          </div>

          {/* Billing address */}
          <label className="checkout-section__checkbox">
            <input
              type="checkbox"
              checked={useSameAddress}
              onChange={(e) => setUseSameAddress(e.target.checked)}
            />
            <span>Use shipping address as billing address</span>
          </label>
        </div>
      )}
    </div>
  )
}

export default CheckoutPaymentSection
