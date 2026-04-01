import { useCart } from '../context/CartContext'
import './CheckoutStepIndicator.css'

const steps = [
  { step: 1, label: 'Information' },
  { step: 2, label: 'Shipping' },
  { step: 3, label: 'Payment' },
]

function CheckoutStepIndicator() {
  const { state, dispatch } = useCart()
  const current = state.checkoutStep

  return (
    <nav className="step-indicator" aria-label="Checkout steps">
      {steps.map((s, i) => (
        <>
          {/* Connector line before steps 2 & 3 */}
          {i > 0 && (
            <div
              key={`c${s.step}`}
              className={`step-indicator__connector ${s.step <= current ? 'step-indicator__connector--active' : ''}`}
            />
          )}

          {/* Step: circle + label inline */}
          <button
            key={s.step}
            className={`step-indicator__step ${
              s.step < current ? 'step-indicator__step--completed' :
              s.step === current ? 'step-indicator__step--active' : ''
            }`}
            onClick={() => s.step < current && dispatch({ type: 'SET_CHECKOUT_STEP', payload: s.step })}
            disabled={s.step > current}
          >
            <span className="step-indicator__number">
              {s.step < current ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              ) : (
                s.step
              )}
            </span>
            <span className="step-indicator__label">{s.label}</span>
          </button>
        </>
      ))}
    </nav>
  )
}

export default CheckoutStepIndicator
