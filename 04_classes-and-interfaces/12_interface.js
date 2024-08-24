var user;
user = {
  name: 'Rashmi Raj',
  age: 24,
  greet: function (phrase) {
    console.log(phrase + ' ' + this.name);
  },
};
user.greet('Hi there - I am');
