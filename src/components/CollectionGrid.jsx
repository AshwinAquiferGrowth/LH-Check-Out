import { collections } from '../data/products'
import './CollectionGrid.css'

function CollectionGrid() {
  const featured = collections.filter((c) => c.image)

  return (
    <section className="section collections" id="collections">
      <div className="container">
        <div className="collections__header">
          <span className="eyebrow">Curated for Your Journey</span>
          <h2>Shop by Category</h2>
        </div>
        <div className="collections__grid">
          {featured.map((collection) => (
            <a key={collection.handle} href={`#${collection.handle}`} className="collection-tile">
              <div className="collection-tile__image-wrapper">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="collection-tile__image"
                  loading="lazy"
                />
              </div>
              <h3 className="collection-tile__title">{collection.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CollectionGrid
