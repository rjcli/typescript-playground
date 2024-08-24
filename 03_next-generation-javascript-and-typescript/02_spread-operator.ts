const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
  name: 'Max',
  age: 30,
};

const copiedPerson = { ...person };
console.log(copiedPerson);
