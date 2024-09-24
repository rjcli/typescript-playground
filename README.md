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

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Everyday Types Documentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [tsconfig Docs](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [Compiler Config Docs](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- [VS Code TS Debugging](https://code.visualstudio.com/docs/typescript/typescript-debugging)
- [JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [TypeScript Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [More on Advanced Types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)
- [JS Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Utility Type Docs](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [More on Generics](https://www.typescriptlang.org/docs/handbook/generics.html)
- [More on Property Descriptors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
- [Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)
- [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [JavaScript Modules (Overview)](https://medium.com/computed-comparisons/commonjs-vs-amd-vs-requirejs-vs-es6-modules-2e814b114a0b)
- [More on ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Official Webpack Docs](https://webpack.js.org/)
- [Google Maps Pricing](https://cloud.google.com/maps-platform/pricing/sheet/)
- [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/start)
- [Google Maps JS SDK](https://developers.google.com/maps/documentation/javascript/tutorial)
- [Official React Docs](https://reactjs.org/docs/getting-started.html)
- [More React Resources](https://academind.com/learn/react/)
- [create-react-app + TypeScript Docs](https://create-react-app.dev/docs/adding-typescript/)
- [NestJs Docs](https://docs.nestjs.com/)

> **Note:** All JavaScript files of this directory are created by compiling the TypeScript files.

> **Note:** Node compiler runs a file by considering all the contents of the file as JavaScript code. It doesn't care about the file extension. So, in case a file with `.ts` extension containing only JavaScript code then the Node compiler will execute the file without any issue but when the file contains some TypeScript specific code then the Node compiler will raise issue.

## Credits

This repository follows the Udemy course [Understanding TypeScript](https://www.udemy.com/course/understanding-typescript/) by [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/).
