// Function Overloading
// A feature that allows defining multiple function signatures.
var _a;
function add(a, b) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
// Optional Chaining
// The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function
// called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing
// an error.
var fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', description: 'My own company' },
};
console.log(
  (_a =
    fetchedUserData === null || fetchedUserData === void 0
      ? void 0
      : fetchedUserData.job) === null || _a === void 0
    ? void 0
    : _a.title,
);
// NULLISH COALESCING operator
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand
// side operand is null or undefined, and otherwise returns its left-hand side operand.
var userInput = undefined;
var storedData =
  userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
