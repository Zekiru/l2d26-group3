import { useState } from 'react'
import Homepage from './Components/Hompage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  return (
    <>
    {currentPage === 'home' && <Homepage setCurrentPage={setCurrentPage} />}
    {currentPage === 'map' && <Homepage setCurrentPage={setCurrentPage} />}
    {currentPage === 'resto' && <Homepage setCurrentPage={setCurrentPage} />}
    {currentPage === 'team' && <Homepage setCurrentPage={setCurrentPage} />}
    </>
  )
}

export default App;
