// Exercise 2
// ----------

const lateComers = ['Felicia', 'Charles', 'Terry'];
const earlyBirds = ['Ellen', 'Jerry', 'Jasmine'];

const printGuestOrder = (arrEarly, arrLate) => {
    if (Array.isArray(arrEarly) && Array.isArray(arrLate)) {
        const guestList = [...arrEarly, ...arrLate];
        printList(guestList);
        return guestList
    }
};


const printList = (arr) => {
    arr.forEach( el => {
      const orderedEl = `${arr.indexOf(el) + 1}. ${el}`;
      console.log(orderedEl);
    })
}
  

printGuestOrder(earlyBirds, lateComers)