import SwipeCard from './SwipeCard'

function TinderPanel( {deck, onSwipe}){

    return (
        <div className="tinder-panel">
            {deck.length === 0 && <p className="no-more">No more restaurants!</p>}
            <div className='card-stack'>
                {deck.length > 0 && (
                    <SwipeCard 
                        key={deck[0].id} 
                        restaurant={deck[0]}
                        onSwipe={onSwipe}
                    />
                )}
            </div>
        </div>
    )
}

export default TinderPanel