/* Albena Indzheva

Implement the car example a few slides up
Ignore types show in the picture as JS is dynamically typed language

Create another two types of cars, like SportCar, so Bus and Jeep can inherit from them

Implement new method/s in Car and override it/them in the subclasses

Implement a static method

Use both the new EcmaScript6 and the old syntax to implement the classes
Hint: There is a way to implement static method “the old way”, not the EcmaScript6, try to find it.

*/

//old method

function Car(model, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner) {
  this.model = model;
  this.maxSpeed = maxSpeed;
  this.currentSpeed = currentSpeed;
  this.currentGear = currentGear;
  this.numberOfDoors = numberOfDoors;
  this.idNumber = idNumber;
  this.isSportCar = isSportCar;
  this.owner = owner;
  this.changeOwner = function(newOwner) {
  	this.owner = newOwner;
  };
  this.startEngine = function() {
  	console.log("starting Engine")
  };
  this.changeGear = function(gear) {
  	this.currentGear = gear;
  };
  this.Accelerate = function(speed) {
  	this.currentSpeed = his.currentSpeed + speed;
  };
}


function SportCar(model, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner, isCabriolet, price) {
	Car.call(this, model, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner);
	this.isCabriolet = isCabriolet;
	this.price = price;
};
SportCar.prototype = Object.create(Car.prototype); 
SportCar.prototype.constructor = SportCar;
SportCar.prototype.switchTurbo = function() {
	console.log("switching Turbo");
};

function Jeep(model, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner) {
	Car.call(this, model, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner);
};
Jeep.prototype = Object.create(Car.prototype); 
Jeep.prototype.constructor = Jeep;
Jeep.prototype.switch4x4 = function() {
	console.log("switching 4x4");
};
Jeep.prototype.driveOffRoad = function() {
	console.log("driving OffRoad");
};

function Bus(model, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner, numberOfSeats, placeForLuggage) {
	Car.call(this, model, maxSpeed, currentSpeed, currentGear, numberOfDoors, idNumber, isSportCar, owner);
	this.numberOfSeats = numberOfSeats;
	this.placeForLuggage = placeForLuggage;
};
Bus.prototype = Object.create(Car.prototype); 
Bus.prototype.constructor = Bus;
Bus.prototype.driveOnRoad = function() {
	console.log("driving OnRoad");
};


console.log(Car);
		
var Nissan = new Car("GT-R", 330, 160, "nissanGera", 3, 123156, "yes", "Ivan");
Nissan.changeOwner("Albena");   
Nissan.startEngine;

console.log(Nissan instanceof Car); 
 