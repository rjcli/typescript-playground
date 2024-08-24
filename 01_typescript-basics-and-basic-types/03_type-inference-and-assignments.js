var add = function (n1, n2, showResult, phrase) {
  var result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
};
var number1;
number1 = 5;
// Not good practice assigning type if we are assigning the value in the same line.
// let number1: number = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
