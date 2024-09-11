class DataStorage<T extends string | number | boolean | object> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Rashmi');
textStorage.addItem('Raj');
textStorage.removeItem('Rashmi');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

const objectStorage = new DataStorage<object>();
const maxObj = { name: 'Rashmi' };
objectStorage.addItem(maxObj);
objectStorage.addItem({ name: 'Raj' });

objectStorage.removeItem(maxObj);
console.log(objectStorage.getItems());
