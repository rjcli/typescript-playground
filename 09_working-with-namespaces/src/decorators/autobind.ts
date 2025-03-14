namespace App {
  // Autobind decorator
  // '_' works as an hint in TypeScript which denotes that we are not going to use these variables, but still
  // we need to accept this.
  export const autobind = (
    _: any,
    _2: string,
    descriptor: PropertyDescriptor,
  ) => {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      },
    };
    return adjDescriptor;
  };
}
