const car1 = {
	drive() {
		console.log('Driving');
	},
};

const car2 = {
	drive() {
		console.log('Driving');
	},
};

car1.drive();
car2.drive();

class Vehicle {
	drive() {
		console.log('Driving');
	}
}

const car3 = new Vehicle();
const car4 = new Vehicle();

car3.drive();
car4.drive();

// =====================================
console.log('----------');

car3.brand = 'Volkswagen';
console.log(car3);

console.log(Vehicle);
console.log(Vehicle.prototype);
console.log(Vehicle.prototype === car3.__proto__);

console.log(car3.__proto__.drive);

// =====================================
console.log('----------');

function VehicleOld() {
	this.drive = function () {
		console.log('Driving the old way');
	};
}

const carOld = new VehicleOld();
carOld.drive();
console.log(carOld);
// w tym zapisie w każdym obieckie stworzonym na bazie konstruktora 'VehicleOld' zostaje utworzona funkcja 'drive'. Chcąc ją zmienić, trzeba by było przypisać od nowa definicję tej funkcji dla każdego obiektu Z OSOBNA (utworzonego na bazie konstruktora 'VehicleOld')

// =====================================
console.log('----------');

function VehicleOld2() {
	this.brand = 'Volkswagen';
}

const carOld2 = new VehicleOld2();
console.log(carOld2);
VehicleOld2.brand = 'Alfa Romeo';
console.log(carOld2);
// sytuacja podobna jak w poprzednim przykładzie - zmiana wartości jakiegoś klucza w konstruktorze nie powoduje zmiany tego klucza w obiektach utworzych wcześniej (na bazie tego konstruktora)

// =====================================
console.log('----------');

function VehicleOld3() {
	this.brand = 'Volkswagen';
}

VehicleOld3.prototype.drive = function () {
	console.log('Driving');
};
// prawidłowa metoda dodawania funkcji do prototypu konstruktora (stara metoda zapisu - bez użycia klas)

// =====================================
console.log('----------');

class BasicVehicle {
	drive() {
		console.log('Driving');
	}
}

class SuperVehicle extends BasicVehicle {
	brake() {
		console.log('Braking');
	}
}

const basicCar = new BasicVehicle();
const superCar = new SuperVehicle();
superCar.brake();
basicCar.brake();
