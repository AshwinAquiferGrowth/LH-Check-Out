import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { IconLock, IconVisa, IconMastercard, IconAmex, IconShield } from './icons'
import './CheckoutPayment.css'

function CheckoutPayment() {
  const { dispatch, cartTotal } = useCart()
  const [billing, setBilling] = useState('same')
  const taxes = cartTotal * 0.08
  const total = cartTotal + taxes

  return (
    <div className="checkout-payment">
      {/* Payment */}
      <h3 className="checkout-payment__heading">Payment</h3>
      <p className="checkout-payment__secure">
        <IconLock size={14} />
        All transactions are secure and encrypted
      </p>

      <div className="checkout-payment__card-section">
        <div className="checkout-payment__card-header">
          <span>Credit card</span>
          <div className="checkout-payment__card-icons">
            <IconVisa />
            <IconMastercard />
            <IconAmex />
          </div>
        </div>
        <div className="checkout-payment__card-fields">
          <div className="checkout-payment__field">
            <input className="input" placeholder="Card number" />
          </div>
          <div className="checkout-payment__row">
            <input className="input" placeholder="Expiration (MM/YY)" />
            <input className="input" placeholder="Security code" />
          </div>
          <div className="checkout-payment__field">
            <input className="input" placeholder="Name on card" />
          </div>
        </div>
      </div>

      {/* Billing address */}
      <h3 className="checkout-payment__heading">Billing address</h3>
      <div className="checkout-payment__billing-options">
        <label className={`checkout-payment__billing-option ${billing === 'same' ? 'checkout-payment__billing-option--selected' : ''}`}>
          <input type="radio" name="billing" value="same" checked={billing === 'same'} onChange={() => setBilling('same')} />
          <span>Same as shipping address</span>
        </label>
        <label className={`checkout-payment__billing-option ${billing === 'different' ? 'checkout-payment__billing-option--selected' : ''}`}>
          <input type="radio" name="billing" value="different" checked={billing === 'different'} onChange={() => setBilling('different')} />
          <span>Use a different billing address</span>
        </label>
      </div>

      {billing === 'different' && (
        <div className="checkout-payment__billing-form">
          <div className="checkout-payment__row">
            <input className="input" placeholder="First name" />
            <input className="input" placeholder="Last name" />
          </div>
          <div className="checkout-payment__field">
            <input className="input" placeholder="Address" />
          </div>
          <div className="checkout-payment__field">
            <input className="input" placeholder="Apartment, suite, etc. (optional)" />
          </div>
          <div className="checkout-payment__row checkout-payment__row--3">
            <input className="input" placeholder="City" />
            <select className="input">
              <option value="">State</option>
              <option value="KS">Kansas</option>
              <option value="MO">Missouri</option>
              <option value="CA">California</option>
              <option value="NY">New York</option>
              <option value="TX">Texas</option>
            </select>
            <input className="input" placeholder="ZIP code" />
          </div>
        </div>
      )}

      {/* Trust signals */}
      <div className="checkout-payment__trust">
        <div className="checkout-payment__trust-item">
          <IconShield size={15} />
          <span>Clean, low-tox products</span>
        </div>
        <span className="checkout-payment__trust-sep">·</span>
        <div className="checkout-payment__trust-item">
          <IconLock size={15} />
          <span>SSL encrypted</span>
        </div>
      </div>

      {/* Pay + return to cart */}
      <div className="checkout-payment__nav">
        <button
          className="btn btn--primary btn--lg"
          onClick={() => dispatch({ type: 'SET_CHECKOUT_STEP', payload: 4 })}
        >
          Pay now · ${total.toFixed(2)}
        </button>
        <button
          className="checkout-payment__back"
          onClick={() => { dispatch({ type: 'SET_CHECKOUT_STEP', payload: 0 }); dispatch({ type: 'OPEN_DRAWER' }) }}
        >
          ← Return to cart
        </button>
      </div>
    </div>
  )
}

export default CheckoutPayment
