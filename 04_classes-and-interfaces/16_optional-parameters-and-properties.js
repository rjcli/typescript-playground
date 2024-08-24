var Person = /** @class */ (function () {
  function Person(n) {
    this.age = 30;
    if (n) {
      this.name = n;
    }
  }
  Person.prototype.greet = function (phrase) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!');
    }
  };
  return Person;
})();
var user;
user = new Person();
user.greet('Hi there - I am');
console.log(user);
