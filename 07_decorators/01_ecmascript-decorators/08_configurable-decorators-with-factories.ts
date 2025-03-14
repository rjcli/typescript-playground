function replacer<T>(initValue: T) {
  return function replacerDecorator(
    target: undefined,
    ctx: ClassFieldDecoratorContext,
  ) {
    console.log(target);
    console.log(ctx);

    return (initialValue: any) => {
      console.log(initialValue);
      return initValue;
    };
  };
}

class Person {
  @replacer('')
  name = 'Rashmi Raj';

  greet() {
    console.log('Hi, I am ', this.name);
  }
}
