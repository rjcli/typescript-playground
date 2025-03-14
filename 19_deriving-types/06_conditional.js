// type ElementType<T extends any[]> = T[number];
// type Example1 = ElementType<StringArray>;
var text = 1;
function getFullName(person) {
  if (
    'firstName' in person &&
    'lastName' in person &&
    person.firstName &&
    person.lastName
  ) {
    return ''.concat(person.firstName, ' ').concat(person.lastName);
  }
  throw new Error('No first name and/or last name found.');
}
var name1 = getFullName({});
var name2 = getFullName({ firstName: 'Rashmi', lastName: 'Raj' });
