// comments show what happens under the hood

function Person(name) {
	// const this = {}
	this.name = name;
	// return this
}

const sina = new Person('Sina');

console.log(sina);
