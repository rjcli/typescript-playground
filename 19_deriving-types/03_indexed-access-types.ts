// const appUser = {
//   name: 'Max',
//   age: 35,
//   permissions: [{ id: 'p1', title: 'Admin', description: 'Admin access' }],
// };

// type AppUser = typeof appUser;

type AppUser = {
  name: string;
  age: number;
  permissions: {
    id: string;
    title: string;
    description: string;
  }[];
};

type Perms = AppUser['permissions'];

// Gets only the object type, removes the array types
// For example, the type of Perms in above line is an array of object. So here
// the type of Perm will be only the object.
type Perm = Perms[number];

type Names = string[];

type Name = Names[number];
