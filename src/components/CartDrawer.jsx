import { useEffect } from 'react'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem'
import CartUpsell from './CartUpsell'
import ShippingProgress from './ShippingProgress'
import { IconX, IconShoppingBag, IconLock, IconVisa, IconMastercard, IconAmex } from './icons'
import './CartDrawer.css'

function CartDrawer() {
  const { state, dispatch, cartCount, cartTotal } = useCart()
  const isOpen = state.isDrawerOpen

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape' && isOpen) {
        dispatch({ type: 'CLOSE_DRAWER' })
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, dispatch])

  return (
    <>
      <div
        className={`cart-drawer__overlay ${isOpen ? 'cart-drawer__overlay--open' : ''}`}
        onClick={() => dispatch({ type: 'CLOSE_DRAWER' })}
      />
      <aside
        className={`cart-drawer__panel ${isOpen ? 'cart-drawer__panel--open' : ''}`}
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="cart-drawer__header">
          <h2 className="cart-drawer__title">Cart ({cartCount})</h2>
          <button
            className="cart-drawer__close"
            onClick={() => dispatch({ type: 'CLOSE_DRAWER' })}
            aria-label="Close cart"
          >
            <IconX size={20} />
          </button>
        </div>

        {state.items.length === 0 ? (
          /* Empty state */
          <div className="cart-drawer__empty">
            <IconShoppingBag size={48} />
            <h3>Your cart is empty</h3>
            <p>Browse our collection of clean, low-tox products.</p>
            <button
              className="btn btn--primary"
              onClick={() => dispatch({ type: 'CLOSE_DRAWER' })}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Shipping progress */}
            <div className="cart-drawer__shipping">
              <ShippingProgress currentTotal={cartTotal} />
            </div>

            {/* Items */}
            <div className="cart-drawer__items">
              {state.items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
              <CartUpsell />
            </div>

            {/* Footer */}
            <div className="cart-drawer__footer">
              <div className="cart-drawer__subtotal">
                <span>Subtotal</span>
                <span className="cart-drawer__subtotal-amount">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <p className="cart-drawer__shipping-note">
                Shipping calculated at checkout
              </p>

              <button
                className="btn btn--primary btn--lg cart-drawer__checkout-btn"
                onClick={() => dispatch({ type: 'SET_CHECKOUT_STEP', payload: 1 })}
              >
                Checkout — ${cartTotal.toFixed(2)}
              </button>

              <div className="cart-drawer__trust">
                <div className="cart-drawer__secure">
                  <IconLock size={14} />
                  <span>Secure checkout</span>
                </div>
                <div className="cart-drawer__payment-icons">
                  <IconVisa />
                  <IconMastercard />
                  <IconAmex />
                </div>
              </div>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
