import { brandInfo } from '../data/products'
import { useCart } from '../context/CartContext'
import { IconSearch, IconUser, IconShoppingBag, IconMenu } from './icons'
import './Header.css'

function Header() {
  const { dispatch, cartCount } = useCart()

  return (
    <header className="header">
      <div className="header__inner container">
        <nav className="header__nav header__nav--left">
          <a href="#shop-all" className="header__link">Shop</a>
          <a href="#collections" className="header__link">Collections</a>
        </nav>

        <button className="header__mobile-menu" aria-label="Menu">
          <IconMenu size={22} />
        </button>

        <a href="/" className="header__logo">
          {brandInfo.name}
        </a>

        <nav className="header__nav header__nav--right">
          <button className="header__icon-btn" aria-label="Search">
            <IconSearch size={20} />
          </button>
          <button className="header__icon-btn" aria-label="Account">
            <IconUser size={20} />
          </button>
          <button
            className="header__icon-btn header__cart-btn"
            aria-label="Cart"
            onClick={() => dispatch({ type: 'OPEN_DRAWER' })}
          >
            <IconShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="header__cart-count">{cartCount}</span>
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
