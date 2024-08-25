// Function Overloading
// A feature that allows defining multiple function signatures.
function add(a, b) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
var result = add('Max', ' Schwarz');
console.log(result);
