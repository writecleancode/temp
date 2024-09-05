// const arr = [
// 	[3, 21, 37],
// 	[61, 79, 101, 120],
// 	[133, 149],
// ];

// const isNumberInArrayOfNumbers = (number, array) => {
// 	for (let i = 0; i < array.length; i++) {
// 		if (number >= array[i][0] && number <= array[i].at(-1)) {
// 			return console.log(array[i].includes(number));
// 		}
// 	}

// 	return console.log(false);
// };

// isNumberInArrayOfNumbers(0, arr); //false
// isNumberInArrayOfNumbers(21, arr); //true
// isNumberInArrayOfNumbers(221, arr); //false

const arr = [1, 2, 3];

const findNumber = (number, array) => {
	if (array.length === 1) {
		if (array[0] === number) {
			return console.log(true);
		} else {
			return console.log(false);
		}
	}

	if (array[Math.ceil((array.length - 1) / 2)] === number) {
		return console.log(true);
	} else if (array[Math.ceil((array.length - 1) / 2)] > number) {
		findNumber(number, array.slice(0, (array.length - 1) / 2));
	} else if (array[Math.ceil((array.length - 1) / 2)] < number) {
		findNumber(number, array.slice((array.length - 1) / 2 + 1));
	}
};

findNumber(2, arr);
