function addNumber(num1, num2 = 10) {
  // Option 1
  //   num2 = num2 || 0;

  // Option 2
  //   if (num2 == undefined) {
  //     num2 = 0;
  //   }
  const result = num1 + num2;
  return result;
}
const number = addNumber(10);
console.log(number);

function addName(firstName, lastName = "Hosen") {
    const fullName = firstName + ' ' + lastName;
    return fullName;
}
// const name = addName('Mozammel', 'Hosen');
const name = addName('Mozammel',"Islam");
console.log(name);