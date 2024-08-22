// `!` tells the TypeScript compiler that the value returned by document.getElementById("num1") is not null, it is absolutely certain.
// Suppresses the null check that TypeScript would normally perform.
// It is used when you are absolutely confident that the element with the ID "num1" exists in the DOM and want to avoid the extra
// null check for performance reasons or to simplify code.

const buttonElement = document.querySelector('button')!;
const inputElement1 = document.getElementById('num1')! as HTMLInputElement;
const inputElement2 = document.getElementById('num2')! as HTMLInputElement;

const addTwoNumbers = (num1: number, num2: number) => {
  return num1 + num2;
};

buttonElement.addEventListener('click', () => {
  console.log(addTwoNumbers(+inputElement1.value, +inputElement2.value));
});
