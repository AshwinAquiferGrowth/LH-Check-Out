import { products } from '../data/products'
import ProductCard from './ProductCard'
import './FeaturedSection.css'

function FeaturedSection() {
  const featured = products.filter((p) => !p.badge?.includes('Sold Out')).slice(0, 4)

  return (
    <section className="section section--shell featured" id="shop">
      <div className="container">
        <div className="featured__header">
          <div>
            <span className="eyebrow">Hand-Picked Just for You</span>
            <h2>Featured Products</h2>
          </div>
          <a href="#shop-all" className="featured__link">View All →</a>
        </div>
        <div className="grid grid--4">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              badge={product.badge}
              vendor={product.vendor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection
