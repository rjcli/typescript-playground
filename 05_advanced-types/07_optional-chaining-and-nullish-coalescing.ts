// Function Overloading
// A feature that allows defining multiple function signatures.

type Combinable = string | number;

// The signature of all functions are different but the name is same.
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

// Optional Chaining
// The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function
// called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing
// an error.

const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', description: 'My own company' },
};

console.log(fetchedUserData?.job?.title);

// NULLISH COALESCING operator
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand
// side operand is null or undefined, and otherwise returns its left-hand side operand.
const userInput = undefined;

const storedData = userInput ?? 'DEFAULT';

console.log(storedData);
