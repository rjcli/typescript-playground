let names = ['Rashmi', 'Raj'];
// Will give an error because we are pushing a number to an array of strings.
// names.push(10);

let namesWithTypes: (string | number)[];
namesWithTypes = [1, 'Rashmi'];
namesWithTypes = ['Rashmi', 'Raj'];
namesWithTypes = [2, 3, 4, 5];

// Using generics
let namesWithGenerics: Array<string | number>;
namesWithGenerics = [1, 'Rashmi'];
namesWithGenerics = ['Rashmi', 'Raj'];
namesWithGenerics = [2, 3, 4, 5];

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
};

// String Array type
let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // The map function is only available on arrays, not on strings.
  // console.log(hobby.map()); // !!! ERROR !!!
}
