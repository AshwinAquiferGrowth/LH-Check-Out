import { brandInfo } from '../data/products'
import './AnnouncementBar.css'

function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <p className="announcement-bar__text">
        Free shipping on orders over ${brandInfo.freeShippingThreshold} ✦ Clean ingredients, always
      </p>
    </div>
  )
}

export default AnnouncementBar
