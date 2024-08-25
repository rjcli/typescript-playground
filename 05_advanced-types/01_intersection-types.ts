// An intersection type is a type that merges several kinds into one. This allows you to combine many
// types to create a single type with all of the properties that you require.
// An object of this type will have members from all of the types given.
// The ‘&’ operator is used to create the intersection type.

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
