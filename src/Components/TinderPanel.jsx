import { useState } from 'react'
import SwipeCard from './SwipeCard'
import { restaurants } from '../Data/restaurants'

function TinderPanel(){
    const [deck, setDeck] = useState(restaurants)

    const handleSwipe = (direction, id) => {
        console.log(`Swiped ${direction} on restaurant ${id}`)
        setDeck(deck.filter(r => r.id !== id))
    }

    return (
        <div className="tinder-panel">
            {deck.length === 0 && <p className="no-more">No more restaurants!</p>}
            <div className='card-stack'>
                {deck.length > 0 && (
                    <SwipeCard 
                        key={deck[0].id} 
                        restaurant={deck[0]}
                        onSwipe={handleSwipe}
                    />
                )}
            </div>
        </div>
    )
}

export default TinderPanel

//all at once
    // return (
    //     <div className="tinder-panel">
    //         <div className='card-stack'>
    //             {deck.map(restaurant => (
    //                 <SwipeCard 
    //                     key={restaurant.id} 
    //                     restaurant={restaurant}
    //                     onSwipe={handleSwipe}
    //                 />
    //             ))}
    //         </div>
    //         {deck.length === 0 && <p className="no-more">No more restaurants!</p>}
    //     </div>
    // )