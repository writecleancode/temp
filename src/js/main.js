const human = {
	kind: 'Human'
}

const sina = Object.create(human)
sina.age = 34

console.log(sina);
console.log(sina.age);
console.log(sina.kind);

const ben = Object.create(sina)
ben.age = 12

console.log(ben);
console.log(ben.age);
console.log(ben.__proto__.age);
console.log(ben.kind);