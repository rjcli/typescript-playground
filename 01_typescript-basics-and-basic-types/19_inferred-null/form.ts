// Type Narrowing: Type narrowing is a concept in TypeScript where the type of a variable is refined to a
// more specific type within a certain scope. This is typically done using type guards, which are
// expressions that perform runtime checks to ensure a variable is of a certain type. TypeScript
// uses these checks to narrow down the type of the variable, allowing for more precise type
// checking and better code safety.
function example(x: number | string) {
  if (typeof x === 'string') {
    // x is now known to be a string
    console.log(x.toUpperCase());
  } else {
    // x is now known to be a number
    console.log(x.toFixed(2));
  }
}

// Inferrd Null and Type Casting (as)
const inputEl = document.getElementById('user-name') as HTMLInputElement | null;
// if (!inputEl) {
//   throw new Error('Element not found!');
// }
console.log(inputEl?.value); // ? is optional chaining

// Forced "Not Null"
const inputElement = document.getElementById('user-name')! as HTMLInputElement;
console.log(inputElement.value);
