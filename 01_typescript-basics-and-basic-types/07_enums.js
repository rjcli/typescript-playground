// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var AccessLevel;
(function (AccessLevel) {
  AccessLevel[(AccessLevel['ADMIN'] = 0)] = 'ADMIN';
  AccessLevel[(AccessLevel['READ_ONLY'] = 1)] = 'READ_ONLY';
  AccessLevel[(AccessLevel['AUTHOR'] = 2)] = 'AUTHOR';
})(AccessLevel || (AccessLevel = {}));
var Role;
(function (Role) {
  Role['ADMIN'] = 'ADMIN';
  Role[(Role['READ_ONLY'] = 100)] = 'READ_ONLY';
  Role['AUTHOR'] = 'AUTHOR';
})(Role || (Role = {}));
var person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};
if (person.role === Role.AUTHOR) {
  console.log('is author');
}
