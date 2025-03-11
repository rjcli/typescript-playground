const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
};

let number1: number;
number1 = 5;

// Type inference means the type of a variable decided by the compiler when we assign the value to the variable.

// Not good practice assigning type if we are assigning the value in the same line.
// let number1: number = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);
