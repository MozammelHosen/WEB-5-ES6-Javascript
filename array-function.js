// Simple Function Declariyar
function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
const number = add(12, 15);
console.log(number);

// Function Expression
function add2(num1, num2) {
  return num1 + num2;
}
const number2 = add2(12, 234);
console.log(number2);

// Function Expression (anonymous)
const add3 = function (num1, num2) {
  return num1 + num2;
};

const number3 = add3(22, 23);
console.log(number3);

// Array-Function
const add4 = (num1, num2) => num1 + num2;
const number4 = add4(26, 30);
console.log(number4);

// Array-Function
const add5 = (num1, num2) => num1 + num2;
const number5 = add5(34, 74);
console.log(number5);
