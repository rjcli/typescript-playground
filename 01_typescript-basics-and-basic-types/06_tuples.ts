const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};

// push works here despite of having the array of size 2.
person.role.push('admin');
console.log(person.role);

// The following 2 lines will produce an error.
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}

const personWithDescribedRole: {
  name: string;
  age: number;
  hobbies: string[];
  role: { description: string; id: number };
} = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: { description: 'admin', id: 5 },
};
