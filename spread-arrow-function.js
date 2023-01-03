// Spread-Arrow-Function

const numbers = [12, 14, 15, 16, 17, 18, 19, 20];
// console.log(numbers);
// console.log(...numbers);
const maxx = Math.max(12, 356, 673, 63, 665, 546, 435);
const max = Math.max(...numbers);
console.log(maxx, max);


// Spread arrow function arrow push
const number2 = [500, ...numbers, 501];
number2.push(550);
console.log(number2);
