import Navbar from 'Navbar'
import SwipePanel from 'SwipePanel'
import MapPanel from 'MapPanel'


function Homepage(){
    return(
        <div className="App">
            <Navbar />
            <div className='homepage'>
                <SwipePanel />
                <MapPanel />
            </div>
        </div>
    )
}

export default Homepage