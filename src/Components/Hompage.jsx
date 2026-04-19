import Navbar from './Navbar'
import TinderPanel from './TinderPanel'
import MapPanel from './MapPanel'

function Homepage( {setCurrentPage}){
    return(
        <div className="App">
            <Navbar setCurrentPage={setCurrentPage} />
            <div className='homepage'>
                <TinderPanel />
                <MapPanel />
            </div>
        </div>
    )
}

export default Homepage