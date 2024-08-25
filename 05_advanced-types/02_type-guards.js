var e1 = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};
var add = function (a, b) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
};
var printEmployeeInformation = function (emp) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
};
printEmployeeInformation(e1);
printEmployeeInformation({ name: 'Rashmi Raj', startDate: new Date() });
