import { useState } from 'react'
import Navbar from './Navbar'
import TinderPanel from './TinderPanel'
import MapPanel from './MapPanel'
import Footer from './Footer'
import { restaurants } from '../Data/restaurants'

function Homepage( {setCurrentPage} ){
    const [deck, setDeck] = useState(restaurants)
    const [removedIds, setRemovedIds] = useState([])

    const handleSwipe = (direction, id) => {
        if (direction === 'left') {
            setRemovedIds(prev => [...prev, id])
        }
        setDeck(deck.filter(r => r.id !== id))
    }

    const visibleMarkers = restaurants.filter(r => !removedIds.includes(r.id))

    return(
        <div className="App">
            <Navbar setCurrentPage={setCurrentPage} />
            <div className='homepage'>
                <TinderPanel deck={deck} onSwipe={handleSwipe} />
                <MapPanel setCurrentPage={setCurrentPage} markers={visibleMarkers} />
            </div>
            <Footer />
        </div>
    )
}

export default Homepage