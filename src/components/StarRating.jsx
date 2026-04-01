import { IconStarFilled, IconStarEmpty, IconStarHalf } from './icons'
import './StarRating.css'

function StarRating({ rating = 0, count, size = 14 }) {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<IconStarFilled key={i} size={size} />)
    } else if (i === Math.ceil(rating) && rating % 1 >= 0.25) {
      stars.push(<IconStarHalf key={i} size={size} />)
    } else {
      stars.push(<IconStarEmpty key={i} size={size} />)
    }
  }

  return (
    <div className="star-rating">
      <div className="star-rating__stars">{stars}</div>
      {count !== undefined && (
        <span className="star-rating__count">({count})</span>
      )}
    </div>
  )
}

export default StarRating
