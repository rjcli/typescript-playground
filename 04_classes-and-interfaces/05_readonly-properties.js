var Department = /** @class */ (function () {
  function Department(id, name) {
    this.id = id;
    this.name = name;
    // this.id = id;
    // this.name = name;
  }
  Department.prototype.describe = function () {
    console.log('Department ('.concat(this.id, '): ').concat(this.name));
  };
  return Department;
})();
var accounting = new Department('D1', 'Accounting');
console.log(accounting.describe());
