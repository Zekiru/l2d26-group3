import { useState } from 'react'
import Homepage from './Components/Hompage';
import './App.css';
import Map from './Components/map.jsx' 
import React from 'react';
import MeetTheTeam from './Components/MeetTheTeam';
import { markers } from './Data/markers.js'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  return (
    <>
    {currentPage === 'home' && <Homepage setCurrentPage={setCurrentPage} />}
    {currentPage === 'map' && <Map markers={markers} setCurrentPage={setCurrentPage} />}
    {currentPage === 'resto' && <Homepage setCurrentPage={setCurrentPage} />}
    {currentPage === 'team' && <MeetTheTeam setCurrentPage={setCurrentPage} />}
    </>
  )
}

export default App;
