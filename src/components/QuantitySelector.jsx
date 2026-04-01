import { IconPlus, IconMinus } from './icons'
import './QuantitySelector.css'

function QuantitySelector({ value = 1, onChange }) {
  return (
    <div className="qty-selector">
      <button
        className="qty-selector__btn"
        onClick={() => onChange?.(Math.max(1, value - 1))}
        aria-label="Decrease quantity"
      >
        <IconMinus size={14} />
      </button>
      <span className="qty-selector__value">{value}</span>
      <button
        className="qty-selector__btn"
        onClick={() => onChange?.(value + 1)}
        aria-label="Increase quantity"
      >
        <IconPlus size={14} />
      </button>
    </div>
  )
}

export default QuantitySelector
