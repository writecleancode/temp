function countVar() {
	for (var i = 0; i < 5; i++) {
		console.log(i);
	}

	console.log(i);
}

function countLet() {
	for (let i = 0; i < 5; i++) {
		console.log(i);
	}

	// console.log(i);     // causes error
}

countVar();
console.log('-----');
countLet();

// =====================================
console.log('---------------------');

function countColorVar() {
	for (let i = 0; i < 5; i++) {
		if (true) {
			var color = 'red';
		}
	}

	console.log(color);
}

function countColorLet() {
	for (let i = 0; i < 5; i++) {
		if (true) {
			let color = 'red';
		}
	}

	console.log(color);		// causes error
}

countColorVar();
console.log('-----');
countColorLet();	
