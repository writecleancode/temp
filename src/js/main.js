const testObj = {
	brand: 'Volkswagen',
	model: function () {
		console.log(this);
	},
};

testObj.model();
