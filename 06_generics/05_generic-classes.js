var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
var DataStorage = /** @class */ (function () {
  function DataStorage() {
    this.data = [];
  }
  DataStorage.prototype.addItem = function (item) {
    this.data.push(item);
  };
  DataStorage.prototype.removeItem = function (item) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
  };
  DataStorage.prototype.getItems = function () {
    return __spreadArray([], this.data, true);
  };
  return DataStorage;
})();
var textStorage = new DataStorage();
textStorage.addItem('Rashmi');
textStorage.addItem('Raj');
textStorage.removeItem('Rashmi');
console.log(textStorage.getItems());
var numberStorage = new DataStorage();
var objectStorage = new DataStorage();
var maxObj = { name: 'Rashmi' };
objectStorage.addItem(maxObj);
objectStorage.addItem({ name: 'Raj' });
objectStorage.removeItem(maxObj);
console.log(objectStorage.getItems());
