import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, Circle, CircleMarker, useMapEvents, useMap } from 'react-leaflet';
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { useState, useEffect } from "react";

export default function Map({markers, setCurrentPage}) {
  const [position, setPosition] = useState(null);
  const [accuracy, setAccuracy] = useState(0);
  const [clickPos, setClickPos] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const customMarkerIcon = new Icon({
    iconUrl: require("./img/marker-icon.png"),
    iconSize: [38, 38],
    attribution: <a href="https://www.flaticon.com/free-icons/location" title="location icons">Location icons created by IconMarketPK - Flaticon</a>
  })

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true)
    })
  } 

  function MapClickListener({setClickPos}){
    useMapEvents({
      click(e){
        setClickPos(e.latlng);
      }
    });

    return null;
  }

  function success(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const accuracy = position.coords.accuracy;

    setPosition([lat, lng]);
    setAccuracy(accuracy);
  }

  useEffect(()=> {
    const watchId = navigator.geolocation.watchPosition(success, error);
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  function error(error) {
    if(error.code === 1) {
      alert("Please allow for location access")
    } else {
      alert("Cannot get current location")
    }
  }

  return (
    <div style={{ height: "100vh" }}>
      <MapContainer 
        center={[14.638, 121.075]} 
        zoom={18} 
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapNavBar markers={markers} onSelect={setSelectedMarker}/>

        <MapClickListener setClickPos={setClickPos} />

    {/*    {clickPos && (
          <Marker position={clickPos}>
            <Popup>
              Lat: {clickPos.lat}<br />
              Lng: {clickPos.lng}
            </Popup>
          </Marker>
        )} */}

        {position && (
          <>
          <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createCustomClusterIcon}
          >
            {markers.map(marker => (
              <Marker 
                position={marker.geocode} 
                icon={customMarkerIcon}
                eventHandlers={{
                  click: () => {
                    setSelectedMarker(marker);
                  }
                }}>
                <Popup>{marker.popUp}</Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>

          <Circle center={position} radius = {accuracy}/>
          <CircleMarker 
            center={position} 
            radius={6} 
            pathOptions= {{
              color: 'blue',
              fillColor: 'blue',
              fillOpacity: 1
            }}
          />
          </>
        )}

        <FlyToMarker selectedMarker={selectedMarker}/>

      </MapContainer>
    </div>
  )
}

function MapNavBar({markers, onSelect}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const search = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value) {
      setResults([]);
      return;
    }

    const markerMatches = markers.filter(marker =>
      marker.name.toLowerCase().includes(value.toLowerCase())
    )

    setResults(markerMatches);
  }

  return(
    <div className={`mapnavbar ${results.length > 0 ? "open" : ""}`}>      
    <img src={require("./img/search-icon.png")} className = "search-icon" alt="search-icon"
      attribution = <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Catalin Fertu - Flaticon</a>/>
      <input
        type="text"
        placeholder='Search KatEat...'
        value={query}
        onChange={search}
      />
      {results.length > 0 && (
        <div className="dropdown">
          {results.map((marker) => (
            <div
              className="dropdown-item"
              onClick={() => {
                onSelect(marker);
                setQuery(marker.name);
                setResults([]);
              }}
            >
              <img src={require("./img/navmarker-icon.png")} className = "navmarker-icon" alt="navmarker-icon"
                attribution = <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Catalin Fertu - Flaticon</a>/>
              {marker.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function FlyToMarker({ selectedMarker }) {
  const map = useMap();

  useEffect(() => {
    if (selectedMarker) {
      map.flyTo(selectedMarker.geocode, 18); // zoom level 15
    }
  }, [selectedMarker, map]);

  return null;
}