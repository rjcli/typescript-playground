// An intersection type is a type that merges several kinds into one. This allows you to combine many
// types to create a single type with all of the properties that you require.
// An object of this type will have members from all of the types given.
// The ‘&’ operator is used to create the intersection type.
var e1 = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};
