var person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
};
// String Array type
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
  var hobby = _a[_i];
  console.log(hobby.toUpperCase());
  // Because map function is only available on arrays, not on strings.
  // console.log(hobby.map()); // !!! ERROR !!!
}
