import Navbar from './Navbar'
import { restaurants } from '../Data/restaurants'
import ReviewCard from './ReviewCard'
import Footer from './Footer'

function ReviewPage( {setCurrentPage} ){
    return(
        <div className="App">
            <Navbar setCurrentPage={setCurrentPage} />
            <div className='review-page'>
                {restaurants.map((resto) =>{
                    return <ReviewCard restaurant={resto}></ReviewCard>
                })
                }
            </div>
            <Footer />
        </div>
    )
}

export default ReviewPage