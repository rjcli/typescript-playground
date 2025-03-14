function autobind(
  target: (...args: any[]) => any,
  ctx: ClassMethodDecoratorContext,
) {
  ctx.addInitializer(function (this: any) {
    this[ctx.name] = this[ctx.name].bind(this);
  });

  // Editing the original method
  return function (this: any) {
    console.log('Executing original function');
    target.apply(this);
  };
}

class Person {
  name = 'Rashmi Raj';

  @autobind
  greet() {
    console.log('Hi, I am ' + this.name);
  }
}
