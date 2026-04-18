import Navbar from './Navbar'
import TinderPanel from './TinderPanel'
import MapPanel from './MapPanel'


function Homepage(){
    return(
        <div className="App">
            <Navbar />
            <div className='homepage'>
                <TinderPanel />
                <MapPanel />
            </div>
        </div>
    )
}

export default Homepage