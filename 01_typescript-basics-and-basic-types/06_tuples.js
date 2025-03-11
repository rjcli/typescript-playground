var person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};
// push works here instead of having the array of size 2.
person.role.push('admin');
console.log(person.role);
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
  var hobby = _a[_i];
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}
