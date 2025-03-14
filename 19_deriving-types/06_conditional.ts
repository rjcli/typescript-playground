type StringArray = string[];

// type ElementType<T extends any[]> = T[number];

// type Example1 = ElementType<StringArray>;

let text = 1;

// Example2 will produce an error because number extends any[] doesn't satisfy the requirements.
// type Example2 = ElementType<typeof text>;

type GetElementType<T> = T extends any[] ? T[number] : never;
type Example1 = GetElementType<StringArray>;
type Example2 = GetElementType<typeof text>;

type FullNamePerson = { firstName: string; lastName: string };
type FullNameOrNothing<T> = T extends FullNamePerson ? string : never;

function getFullName<T extends object>(person: T): FullNameOrNothing<T> {
  if (
    'firstName' in person &&
    'lastName' in person &&
    person.firstName &&
    person.lastName
  ) {
    return `${person.firstName} ${person.lastName}` as FullNameOrNothing<T>;
  }
  throw new Error('No first name and/or last name found.');
}

const name1 = getFullName({});
const name2 = getFullName({ firstName: 'Rashmi', lastName: 'Raj' });
