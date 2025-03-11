// The nullish coalescing operator (??) in TypeScript is used to provide a default value when dealing with
// null or undefined.
// It is a logical operator that returns its right-hand side operand when its left-hand side operand is
// null or undefined, and otherwise returns its left-hand side operand.

let userInput: string | null | undefined;
const storedData = userInput ?? 'Default Value';

console.log(storedData); // Output: 'Default Value' if userInput is null or undefined
