var Department = /** @class */ (function () {
  function Department(id, name) {
    this.id = id;
    this.name = name;
    this.employees = [];
  }
  Department.prototype.describe = function () {
    console.log('Department ('.concat(this.id, '): ').concat(this.name));
  };
  Department.createEmployee = function (name) {
    return { name: name };
  };
  Department.prototype.addEmployee = function (employee) {
    // Validate of the employee first.
    this.employees.push(employee);
  };
  Department.prototype.printEmployeeInformation = function () {
    console.log(this.employees.length);
    console.log(this.employees);
  };
  // Static properties are only accessed using the class name, not the object name.
  Department.fiscalYear = 2020;
  return Department;
})();
console.log(Department.fiscalYear);
console.log(Department.createEmployee('Rashmi Raj'));
var newDept = new Department('A1', 'Accounting');
// Will raise an error because fiscalYear is a static variable and can't be accessed on objects.
// console.log(newDept.fiscalYear);
