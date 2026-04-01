import { useState } from 'react'
import { IconChevronDown } from './icons'
import './Accordion.css'

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i} className={`accordion__item ${isOpen ? 'accordion__item--open' : ''}`}>
            <button
              className="accordion__trigger"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="accordion__title">{item.title}</span>
              <span className={`accordion__icon ${isOpen ? 'accordion__icon--open' : ''}`}>
                <IconChevronDown size={18} />
              </span>
            </button>
            <div className="accordion__content" aria-hidden={!isOpen}>
              <div className="accordion__body">{item.content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
