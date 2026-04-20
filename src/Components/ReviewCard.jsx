function ReviewCard({restaurant}){

    // turns restaurant data into local variables
    const {name, cuisine, price, description} = restaurant;
    let {overall, foodAndDrink, service, ambiance, value} = restaurant.ratings;


    return (
       <div className='revCard'>
            <div className='revcard-restaurant-details'>
                <div id="dining-emoji">🍽️</div>
                <h1>{name}</h1>
                <h4>{cuisine} ● Katip ● {price}</h4>                
            </div>
            <hr></hr>
            
            <div className='revcard-overall-rating'>
                <div>
                    <h3>Overall</h3>
                    <p className="star">★★★★★</p>
                </div>
                <h4>{overall}<span> / 5</span></h4>
            </div>

            <div className='revcard-description'>{description}</div>
            <h3 id="breakdown">breakdown</h3>
            <div className="criterion"><p>Food & Drink</p><p className="star">★★★★★</p></div>
            <div className="criterion"><p>Service</p><p className="star">★★★★★</p></div>
            <div className="criterion"><p>Ambiance</p><p className="star">★★★★★</p></div>
            <div className="criterion"><p>Value</p><p className="star">★★★★★</p></div>
       </div>
    )
}
export default ReviewCard