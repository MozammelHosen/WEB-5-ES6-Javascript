// Arrow Functions

const add = (num1, num2) => num1 + num2;
const number = add(12, 23);
console.log(number);

// Arrow Function 3 Parameter
const add2 = (num1, num2, num3) => num1 * num2 * num3;
const number2 = add2(12, 14, 15);
console.log(number2);

// Arrow Function one parameter and other number

const add3 = (num1) => num1 * 10;
const number3 = add3(20);
console.log(number3);

// Arrow Function no Parameter

const add4 = () => "Mozammel Hosen";
const name = add4();
console.log(name);

// Arrow Function Decliar

const addArrow = (x, y) => {
  const sum = x + y;
  const deff = x - y;
  const gun = sum * deff;
  const summ = gun / 10;
  console.log(`Total Sum is : ${sum}. Total Deff is : ${deff}.Total Gun is : ${gun}. Total Summ is : ${summ}`);
  return summ;
};
const totals = addArrow(120, 15);
console.log(totals);

