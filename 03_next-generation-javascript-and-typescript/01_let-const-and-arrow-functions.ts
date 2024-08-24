const userName = 'Max';
// userName = 'Maximilian'; // Will raise an error.
let age = 30;

age = 29;

// Standard function definition
function add(a: number, b: number) {
  let result: number;
  result = a + b;
  return result;
}

// Scope of variables
// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// console.log(result);

// Arrow function definition
const addArrowFunction = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', (event) => console.log(event));
}

printOutput(add(5, 2));
