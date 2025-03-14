// Different Decorators
const Log = (target: any, propertyName: string) => {
  console.log('Property decorator!');
  console.log(target, propertyName);
};

const Log2 = (target: any, name: string, descriptor: PropertyDescriptor) => {
  console.log('Accessor decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
};

const Log3 = (target: any, name: string, descriptor: PropertyDescriptor) => {
  console.log('Method decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
};

const Log4 = (target: any, name: string, position: number) => {
  console.log('Parameter decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
};

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product('Book 1', 19);
const p2 = new Product('Book 2', 29);
