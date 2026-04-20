function Navbar( {setCurrentPage} ){
    return (
        <nav className="navbar">
            <span className="logo" onClick={()=> setCurrentPage('home')}><h2>KatEats</h2></span>
            <div className="nav-links">
                <button onClick={() => {
                    console.log("map clicked")
                    setCurrentPage('map')
                }}> Map </button>

                <button onClick={() => {
                    console.log("resto clicked")
                    setCurrentPage('resto')
                }}> Restos </button>
                
                <button onClick={() => {
                    console.log("team clicked")
                    setCurrentPage('team')
                }}> Team </button>  
            </div>
        </nav>
    )
}

export default Navbar