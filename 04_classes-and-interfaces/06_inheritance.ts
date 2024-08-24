class Department {
  private employees: string[] = [];

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
  constructor(
    id: string,
    private reports: string[],
  ) {
    super(id, 'Accounting');
  }

  addReport(text: string) {
    this.reports.push(text);
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

accounting.addReport('Something went wrong...');

accounting.printReports();
