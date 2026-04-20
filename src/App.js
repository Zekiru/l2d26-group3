import { useState } from 'react'
import Homepage from './Components/Hompage';
import './App.css';
import Map from './Components/map.jsx' 

const markers = [
  {
    name: "Tetsuo",
    geocode: [14.637, 121.074],
    popUp: "This is Tetsuo"
  },
  {
    name: "BonChon",
    geocode: [14.638, 121.074],
    popUp: "This is BonChon"
  },
  {
    name: "Cinnabon",
    geocode: [14.6375, 121.075],
    popUp: "This is Cinnabon"
  },
  {
    name: "Kenny Rogers",
    geocode: [14.637503209937096, 121.0741026954652],
    popUp: "This is Kenny Rogers"
  }
]

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  return (
    <>
    {currentPage === 'home' && <Homepage setCurrentPage={setCurrentPage} />}
    {currentPage === 'map' && <Map markers={markers} setCurrentPage={setCurrentPage} />}
    {currentPage === 'resto' && <Homepage setCurrentPage={setCurrentPage} />}
    {currentPage === 'team' && <Homepage setCurrentPage={setCurrentPage} />}
    </>
  )
}

export default App;
