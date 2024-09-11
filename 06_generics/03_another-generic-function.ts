interface Lengthy {
  length: number;
}

// [T, string] denotes a tuple.
const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
  let descriptionText: string = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
};

console.log(countAndDescribe(['Sports', 'Cooking']));
