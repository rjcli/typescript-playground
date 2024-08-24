interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user: Person;

user = {
  name: 'Rashmi Raj',
  age: 24,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  },
};

user.greet('Hi there - I am');
