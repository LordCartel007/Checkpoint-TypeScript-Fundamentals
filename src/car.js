// Implementing the interface Vehicle in the class Car
var Car = /** @class */ (function () {
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  Car.prototype.start = function () {
    console.log("Car engine started");
  };
  return Car;
})();
var myCar = new Car("Mercedes", "GLC-Class", 2024);
myCar.start();

console.log(myCar);
