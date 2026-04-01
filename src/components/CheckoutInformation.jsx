import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { IconTruck } from './icons'
import CheckoutTrustBanner from './CheckoutTrustBanner'
import ExpressCheckout from './ExpressCheckout'
import './CheckoutInformation.css'

function CheckoutInformation() {
  const { dispatch, cartTotal } = useCart()
  const [form, setForm] = useState({
    email: '', firstName: '', lastName: '',
    address: '', apartment: '', city: '',
    state: '', zip: '', phone: '', newsletter: true,
  })

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  return (
    <div className="checkout-info">
      {/* Branded trust banner (would be a PNG image in Shopify checkout) */}
      <CheckoutTrustBanner />

      {/* Express checkout — reduces friction, Shopify native feature */}
      <ExpressCheckout />

      <h3 className="checkout-info__heading">Contact</h3>
      <div className="checkout-info__field">
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
        />
      </div>
      <label className="checkout-info__checkbox">
        <input
          type="checkbox"
          checked={form.newsletter}
          onChange={(e) => update('newsletter', e.target.checked)}
        />
        <span>Email me with news and offers</span>
      </label>

      <h3 className="checkout-info__heading">Shipping address</h3>
      <div className="checkout-info__row checkout-info__row--2">
        <input className="input" placeholder="First name" value={form.firstName} onChange={(e) => update('firstName', e.target.value)} />
        <input className="input" placeholder="Last name" value={form.lastName} onChange={(e) => update('lastName', e.target.value)} />
      </div>
      <div className="checkout-info__field">
        <input className="input" placeholder="Address" value={form.address} onChange={(e) => update('address', e.target.value)} />
      </div>
      <div className="checkout-info__field">
        <input className="input" placeholder="Apartment, suite, etc. (optional)" value={form.apartment} onChange={(e) => update('apartment', e.target.value)} />
      </div>
      <div className="checkout-info__row checkout-info__row--3">
        <input className="input" placeholder="City" value={form.city} onChange={(e) => update('city', e.target.value)} />
        <select className="input" value={form.state} onChange={(e) => update('state', e.target.value)}>
          <option value="">State</option>
          <option value="KS">Kansas</option>
          <option value="MO">Missouri</option>
          <option value="CA">California</option>
          <option value="NY">New York</option>
          <option value="TX">Texas</option>
        </select>
        <input className="input" placeholder="ZIP code" value={form.zip} onChange={(e) => update('zip', e.target.value)} />
      </div>
      <div className="checkout-info__field">
        <input className="input" placeholder="Phone (optional)" value={form.phone} onChange={(e) => update('phone', e.target.value)} />
      </div>

      <div className="checkout-info__nav">
        <button
          className="checkout-info__back"
          onClick={() => { dispatch({ type: 'SET_CHECKOUT_STEP', payload: 0 }); dispatch({ type: 'OPEN_DRAWER' }) }}
        >
          ← Return to cart
        </button>
        <button
          className="btn btn--primary btn--lg"
          onClick={() => dispatch({ type: 'SET_CHECKOUT_STEP', payload: 2 })}
        >
          Continue to shipping
        </button>
      </div>
    </div>
  )
}

export default CheckoutInformation
