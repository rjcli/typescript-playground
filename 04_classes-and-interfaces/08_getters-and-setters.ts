class Department {
  // Since, employees are private previously. So, we can't access this outside this Department class.
  // To access this from inside the child classes of Department class, make the access modifier protected.
  // private employees: string[] = [];
  protected employees: string[] = [];

  constructor(
    private readonly id: string,
    public name: string,
  ) {}

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
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

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  // Getter method for lastReport.
  // This is called as a property, not a method. i.e., don't use a parenthesis while calling this.
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found...');
  }

  // Setter method for lastReport.
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  constructor(
    id: string,
    private reports: string[],
  ) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  // Overriding addEmployee property of Department class.
  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('D1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');

it.describe();

const accounting = new AccountingDepartment('D2', []);

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');

console.log(accounting.mostRecentReport);

accounting.printReports();
