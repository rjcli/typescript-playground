// type AddFn = (a: number, b: number) => number;
// let add: AddFn;

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => n1 + n2;

console.log(add(5, 6));
