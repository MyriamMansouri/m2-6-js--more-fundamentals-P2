// Exercise 7
// ----------

let foodPairings = {
  burgers: 'beer',
  fish: 'white wine',
  beef: 'red wine',
  strawberries: 'cream',
};

// createRecommendations function
const createRecommendations = (obj) => {
  return Object.keys(obj).map( el => `With ${el}, it is best to have ${obj[el]}`);
}
// printRecommendations function
const printRecommendations = (arr) => {
  arr.forEach( el => {
    console.log(el);
  })
}
// function call (done)
printRecommendations(createRecommendations(foodPairings));
