import { IconTruck, IconShield, IconRefresh, IconLeaf } from './icons'
import './TrustBar.css'

const features = [
  { icon: <IconTruck size={22} />, label: 'Free Shipping', desc: 'On orders over $123' },
  { icon: <IconLeaf size={22} />, label: 'Clean & Low-Tox', desc: 'Vetted ingredients' },
  { icon: <IconRefresh size={22} />, label: 'Easy Returns', desc: 'Hassle-free process' },
  { icon: <IconShield size={22} />, label: 'Secure Checkout', desc: 'Encrypted payments' },
]

function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-bar__inner container">
        {features.map((f) => (
          <div key={f.label} className="trust-bar__item">
            <span className="trust-bar__icon">{f.icon}</span>
            <div>
              <p className="trust-bar__label">{f.label}</p>
              <p className="trust-bar__desc">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustBar
