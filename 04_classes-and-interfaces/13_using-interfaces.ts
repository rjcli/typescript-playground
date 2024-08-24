interface Greetable {
  name: string;
  greet(phrase: string): void;
}

// A class can implement more than one interface by separating with comma.
// class Person implements Greetable, AnotherInterface, ...
class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user: Greetable;
user = new Person('Rashmi Raj');

user.greet('Hi there - I am');
console.log(user);
