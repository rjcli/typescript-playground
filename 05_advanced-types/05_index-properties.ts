interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Must start with a character!' }
  // Used when you don't the property name but the property name must be the string and the property value also must be the string.
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!',
};
