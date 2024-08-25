// Type Casting
// It is used when you want to inform TS that a certain value is of a specific type.

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById(
  'user-input',
)! as HTMLInputElement;

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!';
}
