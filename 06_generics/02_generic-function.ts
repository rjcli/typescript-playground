const merge = <T extends object, U extends object>(objA: T, objB: U): T & U => {
  return Object.assign(objA, objB);
};

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);

// Custom Generic Type
type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | boolean> = {
  name: 'Rashmi Raj',
};
