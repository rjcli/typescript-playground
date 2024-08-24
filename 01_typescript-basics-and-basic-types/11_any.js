// The any type in TypeScript is a workaround for cases when you don't know what type a
// value might be.
// However, this is not recommended to use because it removes all the features that TypeScript provides.
var value;
value = 5;
console.log(value);
value = 'any';
console.log(value);
value = { name: 'Rashmi', age: '24' };
console.log(value);
