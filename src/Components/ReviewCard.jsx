// export const restaurants = [
//   {
//     id: 1,
//     name: "Wildflour Cafe",
//     cuisine: "Bakery / American",
//     price: "$$",
//     image: "https://placehold.co/400x300",
//     description: "Restaurant descriptive review placeholder. This restaurant description should be around 1-3 sentences.",
//     ratings: {
//       overall: 4.5,
//       foodAndDrink: 4.7,
//       service: 4.2,
//       ambiance: 4.6,
//       value: 4.0
//     }
//   },

function ReviewCard({restaurant}){

    // turns restaurant data into local variables
    const {name, cuisine, price} = restaurant;
    let {overall, foodAndDrink, service, ambiance, value} = restaurant.ratings;


    return (
       <div className='ReviewCard'>
            <div className='revcard-restaurant-details'>
                <img src="" alt="Dining emoji"/>
                <h1>{name}</h1>
                <h4>{cuisine} ● Katip ● {price}</h4>                
            </div>
            <div className='revcard-overall-rating'>
                <h3>Overall</h3>
                <p>★★★★★</p>
                <h4>{overall}<span>/5</span></h4>
            </div>

            <div className='revcard-description'>{description}</div>
            <h3>breakdown</h3>
            <div className='revcard-criterion'>
                <div><h6>Food & Drink</h6><p>★★★★★</p></div>
                <div><h6>Service</h6><p>★★★★★</p></div>
                <div><h6>Ambiance</h6><p>★★★★★</p></div>
                <div><h6>Value</h6><p>★★★★★</p></div>
            </div>
       </div>
    )
}
export default ReviewCard