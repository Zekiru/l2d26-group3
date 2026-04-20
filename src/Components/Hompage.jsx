import Navbar from './Navbar'
import TinderPanel from './TinderPanel'
import MapPanel from './MapPanel'
import Footer from './Footer'

function Homepage( {setCurrentPage} ){
    return(
        <div className="App">
            <Navbar setCurrentPage={setCurrentPage} />
            <div className='homepage'>
                <TinderPanel />
                <MapPanel setCurrentPage={setCurrentPage}/>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage