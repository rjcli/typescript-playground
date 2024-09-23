import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

// Since, `lodash` is a pure Vanilla JavaScript package. To use this with TypeScript,
// install `@types/lodash` package.
import _ from 'lodash';

import Product from './product-model';

// Use declare to notify the TypeScript compiler that this variable is already declared in the JavaScript context.
declare var GLOBAL: string;

console.log(_.shuffle([1, 2, 3]));

console.log(GLOBAL);

const products = [
  { title: 'A Carpet', price: 29.99 },
  { title: 'A Book', price: 10.99 },
];

const newProd = new Product('', -5.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log('Validation Errors...');
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});

// Manually converting JSON data to a TypeScript class.
// const p1 = new Product('A Book', 12.99);

// const loadedProducts = products.map(prod => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToInstance(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
