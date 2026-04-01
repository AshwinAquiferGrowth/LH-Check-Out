import { brandInfo } from '../data/products'
import { IconInstagram, IconPinterest } from './icons'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h3 className="footer__logo">{brandInfo.name}</h3>
            <p className="footer__tagline">{brandInfo.tagline}</p>
            <div className="footer__social">
              <a href={brandInfo.social.instagram} className="footer__social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <IconInstagram size={16} />
              </a>
              <a href={brandInfo.social.pinterest} className="footer__social-link" aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
                <IconPinterest size={16} />
              </a>
            </div>
          </div>

          <div className="footer__links">
            <h4 className="footer__heading">Shop</h4>
            <ul>
              <li><a href="#best-sellers">Best Sellers</a></li>
              <li><a href="#body-bath">Body + Bath</a></li>
              <li><a href="#face">Skincare</a></li>
              <li><a href="#babies-kids">Babies + Kids</a></li>
              <li><a href="#laundry">Cleaning + Laundry</a></li>
            </ul>
          </div>

          <div className="footer__links">
            <h4 className="footer__heading">Info</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#shipping">Shipping & Returns</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer__newsletter">
            <h4 className="footer__heading">Stay in the loop</h4>
            <p>Get updates on new products and wellness tips.</p>
            <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                className="input"
                placeholder="Your email"
                aria-label="Email address"
              />
              <button type="submit" className="btn btn--primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} {brandInfo.name}. All rights reserved.</p>
          <p className="footer__contact">
            <a href={`mailto:${brandInfo.email}`}>{brandInfo.email}</a>
            {' · '}
            <a href={`tel:${brandInfo.phone}`}>{brandInfo.phone}</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
