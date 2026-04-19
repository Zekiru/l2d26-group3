import { useMotionValue, useTransform, animate } from "framer-motion"
import { motion } from "framer-motion"

function SwipeCard({ restaurant, onSwipe }) {
    const x = useMotionValue(0)
    const rotate = useTransform(x, [-200, 200], [-20, 20])
    const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0])

    const likeOpacity = useTransform(x, [0, 100], [0, 1])
    const nopeOpacity = useTransform(x, [-100, 0], [1, 0])

    const handleDragEnd = (event, info) => {
        if (info.offset.x > 100) {
            animate(x, 500)
            onSwipe('right', restaurant.id)
        } else if (info.offset.x < -100) {
            animate(x, -500)
            onSwipe('left', restaurant.id)
        } else {
            animate(x, 0)
        }
    }

    return (

        <motion.div className="swipe-card" style={{x, rotate, opacity}} drag="x" dragConstraints={{ left: 0, right: 0 }} onDragEnd={handleDragEnd} >
            <motion.div className="swipe-label like" style={{ opacity: likeOpacity }}> ❤️ </motion.div>
            <motion.div className="swipe-label nope" style={{ opacity: nopeOpacity }}> ❌ </motion.div>
            <img src={restaurant.image} alt={restaurant.name} className="card-image" draggable="false"/>
            <div className="card-info">
                <h2 className="card-name">{restaurant.name}</h2>
                <p className="card-cuisine">{restaurant.cuisine} · {restaurant.price}</p>
                <StarRating score={restaurant.ratings.overall} />
            </div>
        </motion.div>
  )
}

function StarRating({ score }) {
  return (
    <span>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} style={{ color: star <= Math.round(score) ? '#F0A202' : '#444' }}>
          ★
        </span>
      ))}
    </span>
  )
}

export default SwipeCard