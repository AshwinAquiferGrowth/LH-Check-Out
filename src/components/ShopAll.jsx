import { products } from '../data/products'
import ProductCard from './ProductCard'
import './ShopAll.css'

function ShopAll() {
  return (
    <section className="section shop-all" id="shop-all">
      <div className="container">
        <div className="shop-all__header">
          <div>
            <span className="eyebrow">Low-Tox Essentials</span>
            <h2>Shop All Products</h2>
          </div>
          <p className="shop-all__count">{products.length} products</p>
        </div>
        <div className="grid grid--4">
          {products.map((product) => (
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

export default ShopAll
