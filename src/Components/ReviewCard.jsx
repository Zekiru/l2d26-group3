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
    const {id, name, cuisine, price} = restaurant;
    const {overall, foodAndDrink, service, ambiance, value} = restaurant.ratings;


}

export default ReviewCard