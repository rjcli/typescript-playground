class Department {
  constructor(
    private readonly id: string,
    public name: string,
  ) {
    // this.id = id;
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
}

const accounting = new Department('D1', 'Accounting');
console.log(accounting.describe());
