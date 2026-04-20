import Map from './map.jsx' 
import { restaurants } from '../Data/restaurants.js'
import { markers } from '../Data/markers.js'

function MapPanel({setCurrentPage}){
    return (
        <div className="map-panel">
            {< Map markers={restaurants} setCurrentPage={setCurrentPage}/>}
        </div>
    )
}

export default MapPanel