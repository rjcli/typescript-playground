var merge = function (objA, objB) {
  return Object.assign(objA, objB);
};
var mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);
