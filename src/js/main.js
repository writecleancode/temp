const arr = [
	[3, 21, 37],
	[61, 79, 101, 120],
	[133, 149],
];

const isNumberInArrayOfNumbers = (number, array) => {
	for (let i = 0; i < array.length; i++) {
		if (number >= array[i][0] && number <= array[i].at(-1)) {
			return console.log(array[i].includes(number));
		}
	}

	return console.log(false);
};

isNumberInArrayOfNumbers(0, arr); //false
isNumberInArrayOfNumbers(21, arr); //true
isNumberInArrayOfNumbers(221, arr); //false
