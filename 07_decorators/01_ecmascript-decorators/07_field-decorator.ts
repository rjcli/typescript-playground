function fieldLogger(target: undefined, ctx: ClassFieldDecoratorContext) {
  console.log(target);
  console.log(ctx);

  return (initialValue: any) => {
    console.log(initialValue);
    return '';
  };
}

class Person {
  @fieldLogger
  name = 'Rashmi Raj';

  greet() {
    console.log('Hi, I am ', this.name);
  }
}
