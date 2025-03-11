// The "as const" assertion in TypeScript is used to create a readonly tuple or object.
// When you use as const, TypeScript infers the most specific and literal type possible for the value.
// This means that the value becomes immutable, and its type is narrowed down to the exact values it holds.

// This will make the roles a readonly variable.
let roles = ['admin', 'guest', 'editor'] as const;

// Will produce an error
// roles.push('user');

const firstRole = roles[0];
console.log(firstRole);
