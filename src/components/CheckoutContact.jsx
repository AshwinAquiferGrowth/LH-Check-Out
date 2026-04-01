import { useState } from 'react'
import { IconChevronDown } from './icons'
import './CheckoutSection.css'

function CheckoutContact() {
  const [open, setOpen] = useState(true)
  const [email, setEmail] = useState('')
  const [newsletter, setNewsletter] = useState(true)

  return (
    <div className={`checkout-section ${open ? 'checkout-section--open' : ''}`}>
      <button className="checkout-section__header" onClick={() => setOpen(!open)}>
        <h3 className="checkout-section__title">Contact</h3>
        <span className={`checkout-section__chevron ${open ? 'checkout-section__chevron--open' : ''}`}>
          <IconChevronDown size={20} />
        </span>
      </button>
      {open && (
        <div className="checkout-section__body">
          <div className="checkout-section__field">
            <input
              type="email"
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <label className="checkout-section__checkbox">
            <input
              type="checkbox"
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
            />
            <span>Email me with news and offers</span>
          </label>
        </div>
      )}
    </div>
  )
}

export default CheckoutContact
