function Navbar( {setCurrentPage} ){
    return (
        <nav className="navbar">
            <span className="logo" onClick={()=> setCurrentPage('home')}><img src="/images/K.png" alt="logo" style={{ height: '70px', width: 'auto', borderRadius: '10px' }}/></span>
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