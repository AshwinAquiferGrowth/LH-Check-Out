import { IconTruck } from './icons'
import { brandInfo } from '../data/products'
import './ShippingProgress.css'

function ShippingProgress({ currentTotal = 0 }) {
  const threshold = brandInfo.freeShippingThreshold
  const progress = Math.min((currentTotal / threshold) * 100, 100)
  const remaining = Math.max(threshold - currentTotal, 0)

  return (
    <div className="shipping-progress">
      {remaining > 0 ? (
        <p className="shipping-progress__text">
          You're <strong>${remaining.toFixed(2)}</strong> away from free shipping!
        </p>
      ) : (
        <p className="shipping-progress__text shipping-progress__text--success">
          <IconTruck size={16} /> You've unlocked free shipping!
        </p>
      )}
      <div className="shipping-progress__bar">
        <div
          className="shipping-progress__fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export default ShippingProgress
