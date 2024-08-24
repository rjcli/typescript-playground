// The public and private modifier is not allowed inside interfaces.
interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

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

// This will raise an error because `name` is a readonly property inside the interface.
// user.name = 'Manu';

user.greet('Hi there - I am');
console.log(user);
