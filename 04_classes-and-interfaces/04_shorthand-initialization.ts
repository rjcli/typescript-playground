class Department {
  constructor(
    private id: string,
    public name: string,
  ) {
    this.id = id;
    this.name = name;
  }

  describe(this: Department) {
    console.log('Department:', this.name);
  }
}

const accounting = new Department('D1', 'Accounting');
accounting.describe();
