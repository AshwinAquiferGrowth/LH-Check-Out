import './ExpressCheckout.css'

/**
 * Express checkout buttons — Shop Pay, Apple Pay, Google Pay.
 * These are native Shopify-rendered buttons in production.
 * We mock them here to show the full checkout experience.
 */
function ExpressCheckout() {
  return (
    <div className="express-checkout">
      <div className="express-checkout__header">
        <hr className="express-checkout__line" />
        <span className="express-checkout__label">Express checkout</span>
        <hr className="express-checkout__line" />
      </div>
      <div className="express-checkout__buttons">
        {/* Shop Pay */}
        <button className="express-checkout__btn express-checkout__btn--shop-pay">
          <svg width="68" height="20" viewBox="0 0 68 20" fill="none">
            <path d="M5.73 5.95c-.85.57-1.96.85-3.33.85H1.17v3.5H0V2.07h2.42c1.35 0 2.43.28 3.26.83.83.56 1.25 1.37 1.25 2.44 0 1.06-.4 1.85-1.2 2.61zm-.73-3.88H1.17v4.45h1.2c1.1 0 1.96-.2 2.57-.61.62-.41.92-1.02.92-1.85 0-.79-.26-1.37-.77-1.72-.27-.18-.58-.27-.9-.27zM12.23 8.59l-1.12.03c-.45 0-.8-.11-1.06-.32-.26-.22-.38-.51-.38-.88 0-.42.14-.75.43-1s.66-.37 1.13-.37c.52 0 .94.15 1.25.44.32.3.47.68.47 1.14l.28-.04zm.28.72h-.28v.99h-.96v-4.6h.96v.67c.39-.53.93-.79 1.6-.79.54 0 .97.17 1.3.51.33.35.49.78.49 1.31v2.9h-.96v-2.63c0-.38-.1-.67-.31-.89-.2-.22-.48-.33-.84-.33-.4 0-.72.13-.95.4-.23.27-.35.63-.35 1.1v2.35h1.3zm4.54-2.11l.67-3.13h.99l-1.1 4.6h-.56v-1.47zm2.72-.88h-.01l.6 3.43-.89.03-.67-3.13-.67 3.13-.9-.03.6-3.43h-.01l-.6-3.13h.98l.58 3.13.58-3.13h.98l-.6 3.13z" fill="white"/>
            <rect rx="4" height="20" width="68" fill="#5A31F4"/>
            <text x="34" y="13.5" textAnchor="middle" fill="white" fontSize="10" fontWeight="600" fontFamily="system-ui">Shop Pay</text>
          </svg>
        </button>

        {/* Apple Pay */}
        <button className="express-checkout__btn express-checkout__btn--apple-pay">
          <svg width="68" height="20" viewBox="0 0 68 20" fill="none">
            <rect rx="4" height="20" width="68" fill="#000000"/>
            <text x="34" y="13.5" textAnchor="middle" fill="white" fontSize="9" fontWeight="500" fontFamily="system-ui">Apple Pay</text>
          </svg>
        </button>

        {/* Google Pay */}
        <button className="express-checkout__btn express-checkout__btn--google-pay">
          <svg width="68" height="20" viewBox="0 0 68 20" fill="none">
            <rect rx="4" height="20" width="68" fill="#000000"/>
            <text x="34" y="13.5" textAnchor="middle" fill="white" fontSize="9" fontWeight="500" fontFamily="system-ui">Google Pay</text>
          </svg>
        </button>
      </div>
      <div className="express-checkout__divider">
        <hr className="express-checkout__line" />
        <span className="express-checkout__label">OR</span>
        <hr className="express-checkout__line" />
      </div>
    </div>
  )
}

export default ExpressCheckout
