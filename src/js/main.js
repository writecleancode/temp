const testObject = {
	brand: 'Volkswagen',
	testFunction() {
		(() => {
			console.log(this);
		})();
	},
};

testObject.testFunction();
