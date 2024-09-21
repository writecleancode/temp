function carFactory(brand, model) {
	return {
		drive() {
			console.log(`I drove ${brand} ${model}.`);
		},
	};
}

const car1 = carFactory('Volkswagen', 'Golf');
const car2 = carFactory('Alfa Romeo', '147');

car1.drive();
car2.drive();

console.log(car1);