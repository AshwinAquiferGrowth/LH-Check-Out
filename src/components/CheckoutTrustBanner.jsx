import './CheckoutTrustBanner.css'

function CheckoutTrustBanner() {
  return (
    <div className="checkout-trust-banner">
      <div className="checkout-trust-banner__inner">
        {/* Social proof */}
        <div className="checkout-trust-banner__section">
          <div className="checkout-trust-banner__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <div className="checkout-trust-banner__content">
            <div className="checkout-trust-banner__stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FDBE40" stroke="#FDBE40" strokeWidth="1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
              <span className="checkout-trust-banner__rating">4.8</span>
            </div>
            <p className="checkout-trust-banner__text">130,000+ Customers Living Healthillie</p>
          </div>
        </div>

        <div className="checkout-trust-banner__divider" />

        {/* Free shipping */}
        <div className="checkout-trust-banner__section">
          <div className="checkout-trust-banner__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
              <path d="M15 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 13.52 8H14" />
              <circle cx="17" cy="18" r="2" />
              <circle cx="7" cy="18" r="2" />
            </svg>
          </div>
          <div className="checkout-trust-banner__content">
            <p className="checkout-trust-banner__label">Free Shipping</p>
            <p className="checkout-trust-banner__text">On orders over $123</p>
          </div>
        </div>

        <div className="checkout-trust-banner__divider" />

        {/* Returns */}
        <div className="checkout-trust-banner__section">
          <div className="checkout-trust-banner__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
              <path d="M21 3v5h-5" />
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
              <path d="M8 16H3v5" />
            </svg>
          </div>
          <div className="checkout-trust-banner__content">
            <p className="checkout-trust-banner__label">Easy Returns</p>
            <p className="checkout-trust-banner__text">30-day hassle-free</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutTrustBanner
