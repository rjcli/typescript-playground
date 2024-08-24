// This function will not work as expected if any argument passed is of a string.
const add = (num1, num2) => {
  return num1 + num2;
};

// Fix using JavaScript syntax
const addJSFix = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('Invalid type of arguments');
  }
  return num1 + num2;
};

// Fix using TypeScript syntax
const addTSFix = (num1: number, num2: number): number => {
  return num1 + num2;
};

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);
