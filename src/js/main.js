function Dude(name) {
	this.name = name;
}

const me = new Dude('Sina');

console.log(me);
console.log(me.prototype);
console.log(me.__proto__);
console.log(Dude.prototype);
console.log(Dude.prototype === me.__proto__);

Dude.prototype.talk = function () {
	console.log('Talking');
};

me.talk();

console.log(me.__proto__);
