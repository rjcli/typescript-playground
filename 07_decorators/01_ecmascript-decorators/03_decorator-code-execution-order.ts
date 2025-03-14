function logger<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext,
) {
  console.log('Logger decorator');
  console.log(target);
  console.log(ctx);

  // Modifies the class by adding a new property named age.
  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log('Class constructor');
      console.log(this);
    }
  };
}

@logger
class Person {
  name = 'Rashmi Raj';

  greet() {
    console.log('Hi, I am ' + this.name);
  }
}

const rashmi = new Person();
console.log(rashmi);
