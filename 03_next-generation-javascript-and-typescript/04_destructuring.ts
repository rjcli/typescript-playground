const hobbies = ['Sports', 'Cooking', 'Comic Books', 'Watching Movies'];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2, remainingHobbies);

const person = {
  firstName: 'Max',
  age: 30,
};

const { firstName: userName, age } = person;

console.log(userName, age, person);
