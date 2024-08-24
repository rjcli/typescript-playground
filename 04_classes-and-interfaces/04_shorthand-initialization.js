var Department = /** @class */ (function () {
  function Department(id, name) {
    this.id = id;
    this.name = name;
    this.id = id;
    this.name = name;
  }
  Department.prototype.describe = function () {
    console.log('Department:', this.name);
  };
  return Department;
})();
var accounting = new Department('D1', 'Accounting');
accounting.describe();
