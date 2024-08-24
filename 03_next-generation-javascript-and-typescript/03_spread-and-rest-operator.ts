const addWithReduce = (...numbers: number[]) => {
  return numbers.reduce((sum, curr) => sum + curr, 0);
};

const addedNumbers = addWithReduce(5, 10, 2, 3.7);
console.log(addedNumbers);
