import { useState } from 'react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import { IconHeart, IconTruck, IconShield, IconLeaf } from './icons'
import StarRating from './StarRating'
import QuantitySelector from './QuantitySelector'
import Accordion from './Accordion'
import './ProductDetail.css'

const product = products[0]

const accordionItems = [
  {
    title: 'Description',
    content: (
      <p>
        A calm blend of warm sandalwood and cool cedar. This plant + mineral
        deodorant is aluminum-free, baking-soda-free, and powered by magnesium
        for all-day odor protection. Smooth, fast-absorbing application.
      </p>
    ),
  },
  {
    title: 'Ingredients',
    content: (
      <p>
        Coconut Oil, Magnesium Hydroxide, Tapioca Powder, Candelilla Wax, Jojoba
        Esters, Sunflower Seed Oil, Essential Oils of Sandalwood, Cedar, Vetiver,
        and Fir.
      </p>
    ),
  },
  {
    title: 'Shipping & Returns',
    content: (
      <p>
        Free standard shipping on orders over $123. Orders typically ship within
        1–3 business days. We accept returns within 30 days of purchase for
        unused, sealed items.
      </p>
    ),
  },
]

function ProductDetail() {
  const [qty, setQty] = useState(1)
  const { dispatch } = useCart()

  function handleAdd() {
    for (let i = 0; i < qty; i++) {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          id: product.id,
          title: product.title,
          vendor: product.vendor,
          price: product.price,
          image: product.image,
        },
      })
    }
    setQty(1)
  }

  return (
    <section className="section product-detail" id="product-detail">
      <div className="container">
        <div className="product-detail__header">
          <span className="eyebrow">Product Detail Preview</span>
          <h2>Design Language Showcase</h2>
        </div>
        <div className="product-detail__layout">
          <div className="product-detail__gallery">
            <img
              src={product.image}
              alt={product.title}
              className="product-detail__image"
            />
          </div>

          <div className="product-detail__info">
            <p className="product-detail__vendor">{product.vendor}</p>
            <h2 className="product-detail__title">{product.title}</h2>
            <StarRating rating={4.5} count={28} size={16} />
            <p className="product-detail__price">${product.price}</p>

            <div className="product-detail__actions">
              <QuantitySelector value={qty} onChange={setQty} />
              <button
                className="btn btn--primary product-detail__add-btn"
                onClick={handleAdd}
              >
                Add to Cart
              </button>
              <button className="product-detail__wishlist" aria-label="Add to wishlist">
                <IconHeart size={20} />
              </button>
            </div>

            <div className="product-detail__trust">
              <div className="product-detail__trust-item">
                <IconTruck size={18} />
                <span>Free shipping over $123</span>
              </div>
              <div className="product-detail__trust-item">
                <IconLeaf size={18} />
                <span>Clean, low-tox formula</span>
              </div>
              <div className="product-detail__trust-item">
                <IconShield size={18} />
                <span>Secure checkout</span>
              </div>
            </div>

            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail
