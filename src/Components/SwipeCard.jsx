import TinderCard from 'react-tinder-card'

function SwipeCard({ restaurant, onSwipe }) {
  return (
    <TinderCard
      onSwipe={(dir) => onSwipe(dir, restaurant.id)}
      preventSwipe={['up', 'down']}
    >
      <div className="swipe-card">
        <img src={restaurant.image} alt={restaurant.name} className="card-image" />
        <div className="card-info">
          <h2 className="card-name">{restaurant.name}</h2>
          <p className="card-cuisine">{restaurant.cuisine} · {restaurant.price}</p>
          <div className="card-ratings">
            <span>⭐ Overall: {restaurant.ratings.overall}</span>
            <span>Food & Drink: {restaurant.ratings.foodAndDrink}</span>
            <span>Service: {restaurant.ratings.service}</span>
            <span>Ambiance: {restaurant.ratings.ambiance}</span>
            <span>Value: {restaurant.ratings.value}</span>
          </div>
        </div>
      </div>
    </TinderCard>
  )
}

export default SwipeCard