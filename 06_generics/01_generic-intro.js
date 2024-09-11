var names = [];
names[0].split(' ');
var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(10);
  }, 2000);
});
promise.then(function (data) {
  // Since, the promise returns a number then we can't apply
  // split function.
  // data.split(' ');
});
