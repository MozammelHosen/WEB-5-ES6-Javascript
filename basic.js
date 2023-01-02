// Variables
var deposite = 500;
// Conditionals

//Greater Than
if (deposite > 600) {
  console.log("Deposite is greater than 500");
} else {
  console.log("Deposite is less than 600");
}

// less Than
if (deposite < 600) {
  console.log("Deposite is less than 400");
} else {
  console.log("Deposite is greater than 400");
}

// Greater Than Or Equal To
if (deposite == 500) {
  console.log("Deposite is same");
} else {
  console.log("deposite is not same");
}

// deposite not same
if (deposite != 500) {
  console.log("Deposite is same");
} else {
  console.log("Deposite is not same");
}
// deposite and output same
if (deposite >= 500) {
  console.log("Depsoite Not equal");
} else {
  console.log("Deposite is equal");
}
// Deposite and output not same
if (deposite <= 500) {
  console.log("Deposite is equal");
} else {
  console.log("Deposite is not equal");
}

// Array

const numbers = [12, 13, 14, 15, 16, 17, 18, 19, 20];
const numbersCount = numbers.length;
// numbers.pop();
numbers.push(23);
numbers[2] = 144;
// includes wearher the array in 220
if (numbers.indexOf(220) !== -1) {
  console.log("Avaiable Now");
} else {
  console.log("Not avaiable");
}
console.log(numbers);
// includes the array
if (numbers.includes(200)) {
  console.log("includes Avaiable Now");
} else {
  console.log("Not includes Avaiable");
}

// While  loop and For Loop
for (const number of numbers) {
  console.log(`Number is ${number}`);
}

// Function Decliyar
function addName(fisrt, second) {
  const fullName = fisrt + " " + second;
  console.log(fullName);
}
addName("Mozammel", "Hosen");

// Javascript Objects
const person = {
  name: "Mozammel",
  age: 30,
  Quality: "20pc",
  Height: "5.8ft",
};
