import './ValueProps.css'

const props = [
  {
    title: 'Clean Ingredients',
    desc: 'Every product is vetted for low-tox, clean formulations you can trust.',
  },
  {
    title: 'Curated with Care',
    desc: 'Handpicked from trusted, conscious brands that share our values.',
  },
  {
    title: 'Simple Living',
    desc: 'Less clutter, more wellness. Products that truly work for your lifestyle.',
  },
  {
    title: 'Free Shipping',
    desc: 'Complimentary shipping on all orders over $123.',
  },
]

function ValueProps() {
  return (
    <section className="section section--bluebird value-props">
      <div className="container">
        <p className="value-props__tagline">Supporting your journey to health</p>
        <div className="value-props__grid">
          {props.map((prop) => (
            <div key={prop.title} className="value-prop">
              <h4 className="value-prop__title">{prop.title}</h4>
              <p className="value-prop__desc">{prop.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValueProps
