var Car = /** @class */ (function () {
  function Car() {}
  Car.prototype.drive = function () {
    console.log('Driving a car...');
  };
  return Car;
})();
var Truck = /** @class */ (function () {
  function Truck() {}
  Truck.prototype.drive = function () {
    console.log('Driving a truck...');
  };
  Truck.prototype.loadCargo = function (amount) {
    console.log('Loading cargo ...' + amount);
  };
  return Truck;
})();
var v1 = new Car();
var v2 = new Truck();
var useVehicle = function (vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
};
useVehicle(v1);
useVehicle(v2);
var moveAnimal = function (animal) {
  var speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving at speed: ' + speed);
};
moveAnimal({ type: 'bird', flyingSpeed: 10 });
