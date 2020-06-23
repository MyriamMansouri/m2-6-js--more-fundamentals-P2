// Exercise 1
// ----------

let mostPopularFood = [
  'poke bowl',
  'chicken sliders',
  'pork baby back ribs',
  'chicken burritos',
  'chicken sandwich',
  'cauliflower rice bowl',
  'chicken and waffle sliders',
  'parmesan chicken',
  undefined,
];

const fixList = (arr, first, last) => {
  if (Array.isArray(arr) 
    && first !== undefined
    && last !== undefined) {
      arr.pop(); 
      arr.unshift(first);
      arr.push(last);
    } 

  return arr
}

const printList = (arr) => {
  arr.forEach( food => {
    const orderedFood = `${arr.indexOf(food) + 1}. ${food}`;
    console.log(orderedFood);
  })
}

printList(fixList(mostPopularFood, "bean burritos", "buffalo-flavored cauliflower"));
