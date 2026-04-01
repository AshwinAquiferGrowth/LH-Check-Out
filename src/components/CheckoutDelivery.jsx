import { useState } from 'react'
import { IconChevronDown } from './icons'
import './CheckoutSection.css'

function CheckoutDelivery() {
  const [open, setOpen] = useState(true)
  const [form, setForm] = useState({
    country: 'US', firstName: '', lastName: '',
    company: '', address: '', apartment: '',
    city: '', state: '', zip: '', phone: '',
    textOffers: false,
  })

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  return (
    <div className={`checkout-section ${open ? 'checkout-section--open' : ''}`}>
      <button className="checkout-section__header" onClick={() => setOpen(!open)}>
        <h3 className="checkout-section__title">Delivery</h3>
        <span className={`checkout-section__chevron ${open ? 'checkout-section__chevron--open' : ''}`}>
          <IconChevronDown size={20} />
        </span>
      </button>
      {open && (
        <div className="checkout-section__body">
          <div className="checkout-section__field">
            <select className="input" value={form.country} onChange={(e) => update('country', e.target.value)}>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
            </select>
          </div>
          <div className="checkout-section__row">
            <input className="input" placeholder="First Name" value={form.firstName} onChange={(e) => update('firstName', e.target.value)} />
            <input className="input" placeholder="Last Name" value={form.lastName} onChange={(e) => update('lastName', e.target.value)} />
          </div>
          <div className="checkout-section__field">
            <input className="input" placeholder="Company (Optional)" value={form.company} onChange={(e) => update('company', e.target.value)} />
          </div>
          <div className="checkout-section__field">
            <input className="input" placeholder="Address" value={form.address} onChange={(e) => update('address', e.target.value)} />
          </div>
          <div className="checkout-section__field">
            <input className="input" placeholder="Apartment, Suite, etc. (Optional)" value={form.apartment} onChange={(e) => update('apartment', e.target.value)} />
          </div>
          <div className="checkout-section__row checkout-section__row--3">
            <input className="input" placeholder="City" value={form.city} onChange={(e) => update('city', e.target.value)} />
            <select className="input" value={form.state} onChange={(e) => update('state', e.target.value)}>
              <option value="">Province</option>
              <option value="KS">Kansas</option>
              <option value="MO">Missouri</option>
              <option value="CA">California</option>
              <option value="NY">New York</option>
              <option value="TX">Texas</option>
            </select>
            <input className="input" placeholder="ZIP code" value={form.zip} onChange={(e) => update('zip', e.target.value)} />
          </div>
          <div className="checkout-section__field">
            <input className="input" placeholder="Phone" value={form.phone} onChange={(e) => update('phone', e.target.value)} />
          </div>
          <label className="checkout-section__checkbox">
            <input
              type="checkbox"
              checked={form.textOffers}
              onChange={(e) => update('textOffers', e.target.checked)}
            />
            <span>Text me with news and offers</span>
          </label>
        </div>
      )}
    </div>
  )
}

export default CheckoutDelivery
