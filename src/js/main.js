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

	console.log(i);
}

countVar();
console.log('----------');
countLet();

// =====================================
