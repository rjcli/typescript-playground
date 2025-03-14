function autobind(
  target: (...args: any[]) => any,
  ctx: ClassMethodDecoratorContext,
) {
  console.log(target, ctx);
}

class Person {
  name = 'Rashmi Raj';

  @autobind
  greet() {
    console.log('Hi, I am ' + this.name);
  }
}
