class Department {
  private employees: string[] = [];

  // Static properties are only accessed using the class name, not the object name.
  static fiscalYear: number = 2020;

  constructor(
    private readonly id: string,
    public name: string,
  ) {}

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  addEmployee(employee: string) {
    // Validate of the employee first.
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

console.log(Department.fiscalYear);
console.log(Department.createEmployee('Rashmi Raj'));

const newDept = new Department('A1', 'Accounting');
// Will raise an error because fiscalYear is a static variable and can't be accessed on objects.
// console.log(newDept.fiscalYear);
