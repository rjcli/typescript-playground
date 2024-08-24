# tsconfig.json Explanation

## Projects

- **`incremental`**: Speeds up the TypeScript build process by saving information about previous builds.
- **`composite`**: Enables features for working with multiple TypeScript projects, allowing them to reference each other.
- **`tsBuildInfoFile`**: Specifies where to store the information about incremental builds.
- **`disableSourceOfProjectReferenceRedirect`**: Forces TypeScript to use compiled `.d.ts` files instead of source files when referencing other projects.
- **`disableSolutionSearching`**: Prevents TypeScript from automatically checking other related projects.
- **`disableReferencedProjectLoad`**: Reduces the number of projects TypeScript loads automatically, improving performance.

## Language and Environment

- **`target`**: Specifies the JavaScript version to which TypeScript code should be compiled. Here, it's set to ES2016.
- **`lib`**: Defines which built-in JavaScript features are available in your code. For example, "DOM" or "ES2016".
- **`jsx`**: Defines how JSX (used in React) should be transformed in the output code.
- **`experimentalDecorators`**: Enables support for experimental features like decorators (used for annotating or modifying classes and properties).
- **`emitDecoratorMetadata`**: Generates additional metadata needed by some libraries when decorators are used.
- **`jsxFactory`**: Specifies the function to use when compiling JSX. For React, this is usually `React.createElement`.
- **`jsxFragmentFactory`**: Defines the function to use for JSX fragments.
- **`jsxImportSource`**: Specifies the module to import for JSX functions when using certain JSX settings.
- **`reactNamespace`**: Specifies the object used for creating JSX elements in a React environment.
- **`noLib`**: Disables the inclusion of any default TypeScript libraries, which is unusual and might be used in specialized cases.
- **`useDefineForClassFields`**: Ensures that class fields are emitted using modern JavaScript syntax.
- **`moduleDetection`**: Controls how TypeScript decides which files are considered modules.

## Modules

- **`module`**: Defines the module system used in the compiled JavaScript (e.g., CommonJS, ES6 modules). Here, it's set to `commonjs`, which is typical for Node.js projects.
- **`rootDir`**: Specifies the root directory for the source files.
- **`moduleResolution`**: Specifies how TypeScript should resolve module imports. `node10` is a legacy option for Node.js.
- **`baseUrl`**: Sets the base directory to resolve non-relative module imports.
- **`paths`**: Allows you to define custom paths for module resolution, useful for aliasing imports.
- **`rootDirs`**: Lets multiple directories be treated as one for module resolution.
- **`typeRoots`**: Specifies folders where TypeScript should look for type definitions (e.g., `node_modules/@types`).
- **`types`**: Specifies which type packages to include in your project.
- **`allowUmdGlobalAccess`**: Lets you access global variables from UMD modules in TypeScript.
- **`moduleSuffixes`**: Defines file name suffixes to use when resolving modules.
- **`allowImportingTsExtensions`**: Allows importing TypeScript files with `.ts` extensions.
- **`resolvePackageJsonExports`**: Uses the `exports` field in `package.json` when resolving module imports.
- **`resolvePackageJsonImports`**: Uses the `imports` field in `package.json` when resolving imports.
- **`customConditions`**: Sets custom conditions for resolving imports.
- **`resolveJsonModule`**: Enables importing JSON files directly.
- **`allowArbitraryExtensions`**: Allows importing files with any extension, assuming a corresponding type declaration file exists.
- **`noResolve`**: Prevents TypeScript from automatically including files via imports or references.

## JavaScript Support

- **`allowJs`**: Allows JavaScript files to be included in your project and checked by TypeScript.
- **`checkJs`**: Enables error reporting in JavaScript files.
- **`maxNodeModuleJsDepth`**: Limits how deep TypeScript will check JavaScript files within `node_modules`.

## Emit

- **`declaration`**: Generates `.d.ts` files, which are TypeScript declaration files for the project.
- **`declarationMap`**: Creates source maps for the generated `.d.ts` files.
- **`emitDeclarationOnly`**: Only generates `.d.ts` files without outputting JavaScript.
- **`sourceMap`**: Generates source map files to help with debugging the compiled JavaScript.
- **`inlineSourceMap`**: Includes the source map directly within the compiled JavaScript file.
- **`outFile`**: Combines all emitted files into a single file, usually for a browser environment.
- **`outDir`**: Specifies the output directory for the compiled files.
- **`removeComments`**: Removes comments from the emitted JavaScript files.
- **`noEmit`**: Disables emitting files during the TypeScript compilation process.
- **`importHelpers`**: Reduces duplication in the output by importing helper functions from a shared library.
- **`downlevelIteration`**: Produces more compatible, but less efficient, JavaScript code for iterating over arrays, sets, and other iterables.
- **`sourceRoot`**: Specifies the root path for the source code in source maps.
- **`mapRoot`**: Specifies where the debugger should locate the map files.
- **`inlineSources`**: Embeds the original TypeScript code in the source maps.
- **`emitBOM`**: Adds a UTF-8 Byte Order Mark (BOM) at the start of output files.
- **`newLine`**: Sets the newline character used in the output files (e.g., CRLF for Windows).
- **`stripInternal`**: Removes declarations marked as `@internal` from the output.
- **`noEmitHelpers`**: Disables the generation of helper functions in the compiled code.
- **`noEmitOnError`**: Prevents output if there are any errors during the TypeScript compilation.
- **`preserveConstEnums`**: Keeps `const enum` declarations in the emitted JavaScript code.
- **`declarationDir`**: Specifies where to place the generated `.d.ts` files.

## Interop Constraints

- **`isolatedModules`**: Ensures that each TypeScript file can be compiled individually without dependencies.
- **`verbatimModuleSyntax`**: Keeps imports and exports unchanged, except for type-only ones, based on the `module` setting.
- **`isolatedDeclarations`**: Requires sufficient information to generate declaration files without other files.
- **`allowSyntheticDefaultImports`**: Allows default imports from modules that don’t actually have a default export.
- **`esModuleInterop`**: Ensures compatibility when importing CommonJS modules in ES6 syntax. This also enables `allowSyntheticDefaultImports`.
- **`preserveSymlinks`**: Disables automatic resolution of symlinks to their real paths, which is useful in certain environments.

## Type Checking

- **`strict`**: Enables a suite of strict type-checking options.
- **`noImplicitAny`**: Reports errors when variables or parameters have an implicit `any` type.
- **`strictNullChecks`**: Makes the TypeScript type checker more strict with `null` and `undefined`.
- **`strictFunctionTypes`**: Ensures stricter checks when assigning one function to another.
- **`strictBindCallApply`**: Enforces strict argument checks for `bind`, `call`, and `apply` methods.
- **`strictPropertyInitialization`**: Ensures that class properties are initialized in the constructor or marked as optional.
- **`noImplicitThis`**: Reports errors when `this` is implicitly typed as `any`.
- **`useUnknownInCatchVariables`**: Defaults catch clause variables to `unknown` instead of `any`.
- **`alwaysStrict`**: Ensures that "use strict" is always included in the generated JavaScript.
- **`noUnusedLocals`**: Reports errors for variables that are declared but not used.
- **`noUnusedParameters`**: Reports errors for parameters that are never used.
- **`exactOptionalPropertyTypes`**: Treats optional properties exactly as defined, rather than automatically adding `undefined`.
- **`noImplicitReturns`**: Reports errors if not all code paths in a function explicitly return a value.
- **`noFallthroughCasesInSwitch`**: Reports errors for switch cases that fall through to the next case without a `break`.
- **`noUncheckedIndexedAccess`**: Adds `undefined` to types when accessing them via an index, enforcing more careful checks.
- **`noImplicitOverride`**: Requires the `override` keyword when overriding methods from a base class.
- **`noPropertyAccessFromIndexSignature`**: Requires indexed accessors for keys declared using an indexed type.
- **`allowUnusedLabels`**: Disables errors for labels that are defined but not used.
- **`allowUnreachableCode`**: Disables errors for code that can never be reached.

## Completeness

- **`skipDefaultLibCheck`**: Skips type checking of the default library files (like `lib.d.ts`).
- **`skipLibCheck`**
