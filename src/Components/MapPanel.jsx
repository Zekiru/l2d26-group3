import Map from './map.jsx' 
import { restaurants } from '../Data/restaurants.js'
import { markers } from '../Data/markers.js'

function MapPanel({setCurrentPage}){
    return (
        <div className="map-panel">
            <div className="map-wrapper">
                {< Map markers={restaurants} setCurrentPage={setCurrentPage} variant = "panel"/>}
            </div>
        </div>
    )
}

export default MapPanel