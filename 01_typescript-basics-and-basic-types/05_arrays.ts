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
  // Because map function is only available on arrays, not on strings.
  // console.log(hobby.map()); // !!! ERROR !!!
}
