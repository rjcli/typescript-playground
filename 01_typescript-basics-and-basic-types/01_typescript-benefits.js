// This function will not work as expected if any argument passed is of a string.
var add = function (num1, num2) {
  return num1 + num2;
};
// Fix using JavaScript syntax
var addJSFix = function (num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('Invalid type of arguments');
  }
  return num1 + num2;
};
// Fix using TypeScript syntax
var addTSFix = function (num1, num2) {
  return num1 + num2;
};
var number1 = 5;
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
