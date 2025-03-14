function logger(target: any, ctx: ClassDecoratorContext) {
  console.log('Logger decorator');
  console.log(target);
  console.log(ctx);
}

@logger
class Person {
  name = 'Rashmi Raj';

  greet() {
    console.log('Hi, I am ' + this.name);
  }
}
