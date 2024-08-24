// A class can implement more than one interface by separating with comma whereas a class can only extend one class.
// class Person implements Greetable, AnotherInterface, ...
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
user.greet('Hi there - I am');
console.log(user);
