function ReviewCard({restaurant}){

    // turns restaurant data into local variables
    const {name, cuisine, price, description} = restaurant;
    let {overall, foodAndDrink, service, ambiance, value} = restaurant.ratings;

    function StarRating({ score }) {
    return (
        <span className="star">
        {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} style={{ color: star <= Math.round(score) ? '#F0A202' : '#444' }}>
            ★
            </span>
        ))}
        </span>
    )
    }

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
                    <StarRating score={overall}></StarRating>
                </div>
                <h4>{overall}<span> / 5</span></h4>
            </div>

            <div className='revcard-description'>{description}</div>
            <h3 id="breakdown">breakdown</h3>
            <div className="criterion"><p>Food & Drink</p><StarRating score={foodAndDrink}></StarRating></div>
            <div className="criterion"><p>Service</p><StarRating score={service}></StarRating></div>
            <div className="criterion"><p>Ambiance</p><StarRating score={ambiance}></StarRating></div>
            <div className="criterion"><p>Value</p><StarRating score={value}></StarRating></div>
       </div>
    )
}
export default ReviewCard