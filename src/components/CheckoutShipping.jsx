import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { brandInfo } from '../data/products'
import { IconTruck } from './icons'
import './CheckoutShipping.css'

function CheckoutShipping() {
  const { dispatch, cartTotal } = useCart()
  const freeShipping = cartTotal >= brandInfo.freeShippingThreshold
  const [method, setMethod] = useState('standard')

  const methods = [
    {
      id: 'standard',
      label: 'Standard Shipping',
      time: '5–7 business days',
      price: freeShipping ? 0 : 7.99,
    },
    {
      id: 'express',
      label: 'Express Shipping',
      time: '2–3 business days',
      price: 12.99,
    },
  ]

  return (
    <div className="checkout-shipping">
      {/* Summary from step 1 */}
      <div className="checkout-shipping__summary">
        <div className="checkout-shipping__summary-row">
          <span className="checkout-shipping__summary-label">Contact</span>
          <span className="checkout-shipping__summary-value">customer@example.com</span>
          <button
            className="checkout-shipping__change"
            onClick={() => dispatch({ type: 'SET_CHECKOUT_STEP', payload: 1 })}
          >
            Change
          </button>
        </div>
        <div className="checkout-shipping__summary-row">
          <span className="checkout-shipping__summary-label">Ship to</span>
          <span className="checkout-shipping__summary-value">123 Main St, City, KS 66101</span>
          <button
            className="checkout-shipping__change"
            onClick={() => dispatch({ type: 'SET_CHECKOUT_STEP', payload: 1 })}
          >
            Change
          </button>
        </div>
      </div>

      <h3 className="checkout-shipping__heading">Shipping method</h3>
      <div className="checkout-shipping__methods">
        {methods.map((m) => (
          <label
            key={m.id}
            className={`checkout-shipping__method ${method === m.id ? 'checkout-shipping__method--selected' : ''}`}
          >
            <input
              type="radio"
              name="shipping"
              value={m.id}
              checked={method === m.id}
              onChange={() => setMethod(m.id)}
            />
            <div className="checkout-shipping__method-info">
              <span className="checkout-shipping__method-label">{m.label}</span>
              <span className="checkout-shipping__method-time">{m.time}</span>
            </div>
            <span className="checkout-shipping__method-price">
              {m.price === 0 ? 'FREE' : `$${m.price.toFixed(2)}`}
            </span>
          </label>
        ))}
      </div>

      {/* Shipping info note */}
      <div className="checkout-shipping__info-note">
        <IconTruck size={16} />
        <p>Orders ship within 1–3 business days. Tracking emailed once shipped.</p>
      </div>

      <div className="checkout-shipping__nav">
        <button
          className="checkout-shipping__back"
          onClick={() => dispatch({ type: 'SET_CHECKOUT_STEP', payload: 1 })}
        >
          ← Return to information
        </button>
        <button
          className="btn btn--primary btn--lg"
          onClick={() => dispatch({ type: 'SET_CHECKOUT_STEP', payload: 3 })}
        >
          Continue to payment
        </button>
      </div>
    </div>
  )
}

export default CheckoutShipping
