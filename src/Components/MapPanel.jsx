import Map from './map.jsx' 
import { markers } from '../Data/markers.js'

function MapPanel({setCurrentPage}){
    return (
        <div className="map-panel">
            {< Map markers={markers} setCurrentPage={setCurrentPage}/>}
        </div>
    )
}

export default MapPanel