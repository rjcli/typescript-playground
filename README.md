# TypeScript Playground Repository

Welcome to my TypeScript Learning repository! This repository is dedicated to helping me learn and practice TypeScript. It contains a variety of exercises, tutorial codes, and mini-projects designed to enhance my understanding of TypeScript.

## Installing TypeScript

To install TypeScript, you need to install the Node.js. After installing the Node.js, run the following command in the terminal:

```bash
npm install -g typescript # If you want to install the TypeScript globally.
npm install -D typescript # If you want to install the TypeScript as a dev dependency.
```

## Compiling a TypeScript program

- To compile a TypeScript program, use the following command: `tsc <program_name.ts>`
- After successful compilation, a new JavaScript file will be created with the same name as the TypeScript file name but with `.js` extension.
- You can also compile a TypeScript program with watch mode on by adding `-w` or, `--watch` at the last of the compile command like the following:
  `tsc <program_name.ts> -w` or, `tsc <program_name.ts> --watch`.
- If you want to compile all the TypeScript programs of a folder then first run the command `tsc --init`. A new file `tsconfig.json` will be generated and you can customize the properties of this `json` file to customize multiple features during compilation etc. After that, you can use `tsc` to compile all the TypeScript files or, `tsc -w` command to compile all the TypeScript files with watch mode.
- In the `tsconfig.json` file, each property is set to default value. So, if you are uncommenting any property then you have to add the complete value to that property.
- To read about the `tsconfig.json`, refer [tsconfig Docs](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

> **Note:** To check whether TypeScript is installed or not, run the following command: `npm list -g`. This will list all the npm packages which is installed globally. Here, you can see the typescript package with the version. If here, there is no typescript, then you need to install the TypeScript again.

## `infer` and `keyof` keyword
### `infer` keyword
The `infer` keyword is used in conditional types to infer (or extract) a type from another type. It allows you to capture a type within a conditional type and use it elsewhere in the same type expression. It is commonly used in advanced type manipulations.

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function exampleFunction(): string {
  return "Hello";
}

type ExampleReturnType = ReturnType<typeof exampleFunction>; // string
```

Here, `infer R` extracts the return type of the function `T`.

### `keyof` Keyword
The `keyof` keyword is used to create a union of all the keys of a given type. It is often used to work with object types and enforce constraints based on their keys.

```typescript
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person; // "name" | "age"
```

Here, `keyof Person` creates a union of the keys `"name"` and `"age"`.

## Decorators
Decorators are a special feature in TypeScript that allow you to attach metadata or modify the behavior of classes, methods, properties, or parameters. They are essentially functions that are applied to a class or its members at design time (during compilation). Decorators are widely used in frameworks like Angular to add functionality to classes or methods.

```typescript
function Logger(constructor: Function) {
  console.log(`Logging class: ${constructor.name}`);
}

@Logger
class Person {
  name = 'John';
}
```

Here, the `Logger` decorator is applied to the `Person` class, and it logs the class name during runtime.

### ECMAScript Decorators
ECMAScript (JavaScript) decorators are a proposed feature in the JavaScript language, currently in the **stage 3 proposal** of the TC39 process. They are similar to TypeScript decorators but aim to standardize the feature for JavaScript. ECMAScript decorators are designed to work with classes and class elements (methods, properties, etc.).

**Key Differences**:
- ECMAScript decorators are more restrictive and follow a standardized syntax.
- TypeScript decorators are more flexible and include additional features like parameter decorators, which are not part of the ECMAScript proposal.

### Experimental Decorators in TypeScript
The `experimentalDecorators` option in TypeScript enables support for decorators in your code. Since decorators are not yet part of the ECMAScript standard, TypeScript treats them as an experimental feature.

Enabling Experimental Decorators:
To use decorators in TypeScript, you need to enable the `experimentalDecorators` option in your `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

## TypeScript Project Setup and Creating a `tsconfig.json` file
To create a `tsconfig.json` file, run the following command:
```bash
tsc --init
```

## Topics

- Getting Started
- TypeScript Basics and Basic Types
- The TypeScript Compiler and its configuration
- Next-generation JavaScript & TypeScript
- Classes and Interfaces
- Advance Types
- Generics
- Decorators
- Modules and Namespaces
- Using webpack with TypeScript
- 3rd party libraries and TypeScript
- React.js and TypeScript
- Node.js and TypeScript

## Projects

- Drag & Drop Project
- Select and Share a Place (including Google Maps)

## Resources
- [TypeScript Docs](https://www.typescriptlang.org/docs/  )
- [TypeScript Playground Online](https://www.typescriptlang.org/play)
- [Vite](https://vite.dev/)
- [`tsconfig.json`](https://www.typescriptlang.org/tsconfig/)
- [DefinitelyTyped GitHub Repository](https://github.com/DefinitelyTyped/DefinitelyTyped)
- [Classes in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)


## Credits

This repository follows the Udemy course [Understanding TypeScript](https://www.udemy.com/course/understanding-typescript/) by [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/).
