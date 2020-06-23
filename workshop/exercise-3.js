// Exercise 3
// ----------

let mostPopularFood = [
  'bean burritos',
  'poke bowl',
  'chicken sliders',
  'pork baby back ribs',
  'chicken burritos',
  'chicken sandwich',
  'cauliflower rice bowl',
  'chicken and waffle sliders',
  'parmesan chicken',
  'buffalo-flavored cauliflower',
];


const alphabeticalOrder = (arr) => {
  return [...arr].sort()
}

const rankList = (arr) => {
  return arr.map( el => `${el} (${arr.indexOf(el) + 1})`);
}

const printList = (arr) => {
  arr.forEach( el => {
    console.log(el);
  })
}

printList(alphabeticalOrder(rankList(mostPopularFood)))
