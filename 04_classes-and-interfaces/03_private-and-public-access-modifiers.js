var Department = /** @class */ (function () {
  function Department(n) {
    this.employees = [];
    this.name = n;
  }
  Department.prototype.describe = function () {
    console.log('Department: ' + this.name);
  };
  Department.prototype.addEmployee = function (employee) {
    // Validate the employee first
    this.employees.push(employee);
  };
  Department.prototype.printEmployeeInformation = function () {
    console.log(this.employees.length);
    console.log(this.employees);
  };
  return Department;
})();
var accounting = new Department('Accounting');
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
// This will raise an error because we are accessing the private member outside the class.
// Private members can only be accessed from inside the class.
// accounting.employees[2] = 'Anna';
accounting.describe();
accounting.name = 'NEW NAME';
accounting.printEmployeeInformation();
