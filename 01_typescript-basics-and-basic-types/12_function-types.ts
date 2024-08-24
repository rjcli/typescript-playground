const add = (n1: number, n2: number) => {
  return n1 + n2;
};

const printResult = (num: number): void => {
  console.log('Result: ' + num);
};

const printResultWithReturn = (num: number): undefined => {
  console.log('Result: ' + num);
  // If the return type of the function is `undefined` then we have to add
  // the return statement like the following line.
  return;
};

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

printResult(add(5, 12));

// let combineValues = Function;

// Customized function type
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

// let someValue: undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);
});
