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
