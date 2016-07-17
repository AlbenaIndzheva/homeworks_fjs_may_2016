/* Albena Indzheva

Implement the car example a few slides up
Ignore types show in the picture as JS is dynamically typed language

Create another two types of cars, like SportCar, so Bus and Jeep can inherit from them

Implement new method/s in Car and override it/them in the subclasses

Implement a static method

Use both the new EcmaScript6 and the old syntax to implement the classes
Hint: There is a way to implement static method “the old way”, not the EcmaScript6, try to find it.

*/

class Car {
  constructor(model, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner) {
    this.model = model;
    this.maxSpeed = maxSpeed;
    this.currentSpeed = currentSpeed;
    this.currentGear = currentGear;
    this.numberOfDoors = numberOfDoors;
    this.idNumber = idNumber;
    this.isSportCar = isSportCar;
    this.owner = owner;
  }

  changeOwner(newOwner) {
    this.owner = newOwner;
  }

  startEngine() {
    console.log("starting Engine");
  }

  accelerate(speed) {
    this.currentSpeed = this.currentSpeed + speed;
  }
}

class SportCar extends Car {
  constructor(model, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner, isCabriolet, price) {
    super(model, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner);
    this.isCabriolet = isCabriolet;
    this.price = price;
  }
  // method
  switchTurbo() {
    console.log("switching Turbo");
  }
}

class Jeep extends Car {
  constructor(model, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner) {
    super(model, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner);
  }
  switch4x4() {
    console.log("switching 4x4");
  }
  driveOffRoad() {
    console.log("driving OffRoad");
  }
}

class Bus extends Car {
  constructor(model, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner, numberOfSeats, placeForLuggage) {
    super(model, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner);
    this.numberOfSeats = numberOfSeats;
    this.placeForLuggage = placeForLuggage;
  }
  // method
  driveOnRoad() {
    console.log("driving OnRoad");
  }
}

// Example usage:
console.log("Car");
		
var Nissan = new Car("GT-R", 330, 160, "nissanGera", 3, 123156, "yes", "Ivan");
Nissan.changeOwner("Albena");   
Nissan.startEngine();

console.log(Nissan instanceof Car); 
console.log(Nissan);