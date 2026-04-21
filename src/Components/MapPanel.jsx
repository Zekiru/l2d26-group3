import Map from './map.jsx' 

function MapPanel({ setCurrentPage, markers }){
    return (
        <div className="map-panel">
            <div className="map-wrapper">
                {< Map markers={markers} setCurrentPage={setCurrentPage} variant = "panel"/>}
            </div>
        </div>
    )
}

export default MapPanel