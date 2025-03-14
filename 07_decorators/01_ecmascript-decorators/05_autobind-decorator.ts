function autobind(
  target: (...args: any[]) => any,
  ctx: ClassMethodDecoratorContext,
) {
  ctx.addInitializer(function (this: any) {
    this[ctx.name] = this[ctx.name].bind(this);
  });
}

class Person {
  name = 'Rashmi Raj';

  @autobind
  greet() {
    console.log('Hi, I am ' + this.name);
  }
}
