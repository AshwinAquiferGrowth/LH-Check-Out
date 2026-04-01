import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner container">
        <span className="eyebrow">Hand-Picked Health & Fitness Swaps</span>
        <h1 className="hero__title">Another Day, Another Chance to Live Healthillie</h1>
        <p className="hero__subtitle">
          Curated low-tox wellness essentials — good for you, good for the planet.
        </p>
        <div className="hero__actions">
          <a href="#shop-all" className="btn btn--primary btn--lg">Shop All Products</a>
          <a href="#collections" className="btn btn--outline btn--lg">Browse Collections</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
