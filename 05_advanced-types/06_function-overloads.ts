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

const result = add('Rashmi', ' Raj');
console.log(result);
