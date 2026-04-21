import { mark } from 'framer-motion/client';
import * as allImages from '../assets/restaurants/';
import { markers } from './markers.js';

const imageList = Object.values(allImages);

export const restaurants = [
  {
    id: 0,
    cuisine: "Dimsum / Chinese",
    price: "$500",
    image: imageList[0],
    description: "A budget-friendly go-to for quick dimsum cravings near Ateneo Campus. Best for siomai rice, steamed snacks, and affordable comfort food between classes.",
    name: "Dimsum Treats",
    geocode: markers[0].geocode,
    popUp: markers[0].popUp,
    ratings: {
      overall: 4.1,
      foodAndDrink: 4.0,
      service: 4.0,
      ambiance: 3.4,
      value: 4.5
    }
  },

  {
    id: 1,
    cuisine: "Japanese / Fusion",
    price: "$$",
    image: imageList[1],
    description: "One of Katipunan’s trendiest Japanese-inspired spots, known for flavorful rice bowls, creative comfort food, and youthful street-style interiors. Great for barkada hangouts.",
    name: "Tetsuo",
    geocode: markers[1].geocode,
    popUp: markers[1].popUp,
    ratings: {
      overall: 4.5,
      foodAndDrink: 4.5,
      service: 4.0,
      ambiance: 4.5,
      value: 4.0
    }
  },

  {
    id: 2,
    cuisine: "Korean",
    price: "$$",
    image: imageList[2],
    description: "A hidden gem serving authentic Korean comfort food with modern flavors. Popular for jjigae, chicken, and student-friendly Korean meals.",
    name: "Busan Korean Restaurant 부산식당",
    geocode: markers[2].geocode,
    popUp: markers[2].popUp,
    ratings: {
      overall: 4.6,
      foodAndDrink: 4.5,
      service: 4.0,
      ambiance: 4.0,
      value: 4.5
    }
  },

  {
    id: 3,
    cuisine: "Japanese",
    price: "$$",
    image: imageList[3],
    description: "A cozy Japanese izakaya with a more authentic feel, offering skewers, rice bowls, and classic comfort dishes in a relaxed setting. Perfect for casual dinners.",
    name: "Osaka Izakaya 大阪居酒屋",
    geocode: markers[3].geocode,
    popUp: markers[3].popUp,
    ratings: {
      overall: 4.8,
      foodAndDrink: 4.5,
      service: 4.5,
      ambiance: 4.5,
      value: 4.4
    }
  },

  {
    id: 4,
    cuisine: "Mexican / Street Food",
    price: "$$",
    image: imageList[4],
    description: "One of Katipunan’s most talked-about newer spots, known for bold tacos, birria-style dishes, and fun flavors that stand out from the usual choices.",
    name: "Takaw Taqueria",
    geocode: markers[4].geocode,
    popUp: markers[4].popUp,
    ratings: {
      overall: 4.7,
      foodAndDrink: 4.5,
      service: 4.0,
      ambiance: 4.5,
      value: 4.0
    }
  },

  {
    id: 5,
    cuisine: "Korean BBQ",
    price: "$",
    image: imageList[5],
    description: "A reliable favorite for unlimited Korean barbecue with generous servings, classic side dishes, and a lively group-dining atmosphere.",
    name: "Samgyupsalamat",
    geocode: markers[5].geocode,
    popUp: markers[5].popUp,
    ratings: {
      overall: 4.8,
      foodAndDrink: 4.5,
      service: 4.5,
      ambiance: 4.0,
      value: 4.5
    }
  },

  {
    id: 6,
    cuisine: "Grill / Steakhouse",
    price: "$",
    image: imageList[6],
    description: "One of Katipunan’s classic student favorites! Known for affordable steaks, sizzling rice meals, generous portions, and a casual hangout vibe. It’s especially popular with students from Ateneo, UP, and nearby condos because of its sulit pricing and hearty servings.",
    name: "Brickfire",
    geocode: markers[6].geocode,
    popUp: markers[6].popUp,
    ratings: {
      overall: 4.5,
      foodAndDrink: 4.5,
      service: 4.0,
      ambiance: 4.0,
      value: 4.5
    }
  },

  {
    id: 7,
    cuisine: "Hong Kong / Chinese",
    price: "$",
    image: imageList[7],
    description: "A popular comfort-food spot known for Hong Kong–style dishes, rice meals, and satisfying snacks. Great for casual lunches, barkada dinners, and late cravings.",
    name: "Eat Fresh Katipunan (Southbound)",
    geocode: markers[7].geocode,
    popUp: markers[7].popUp,
    ratings: {
      overall: 4.6,
      foodAndDrink: 4.5,
      service: 4.0,
      ambiance: 4.0,
      value: 4.5
    }
  },

  {
    id: 8,
    cuisine: "Japanese / Ramen",
    price: "$",
    image: imageList[8],
    description: "One of the top ramen destinations in Katipunan, famous for rich tonkotsu broth, handmade noodles, and authentic Japanese flavors. Expect lines during peak hours.",
    name: "Mendokoro Ramenba Katipunan",
    geocode: markers[8].geocode,
    popUp: markers[8].popUp,
    ratings: {
      overall: 4.9,
      foodAndDrink: 5.0,
      service: 5.0,
      ambiance: 4.0,
      value: 4.0
    }
  },
];