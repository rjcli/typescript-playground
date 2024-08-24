var Person = /** @class */ (function () {
  function Person(n) {
    this.age = 30;
    this.name = n;
  }
  Person.prototype.greet = function (phrase) {
    console.log(phrase + ' ' + this.name);
  };
  return Person;
})();
var user;
user = new Person('Rashmi Raj');
// This will raise an error because `name` is a readonly property inside the interface.
// user.name = 'Manu';
user.greet('Hi there - I am');
console.log(user);
