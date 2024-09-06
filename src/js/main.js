const arr = [
	[3, 21, 37],
	[61, 79, 101, 120],
	[133, 149],
];

const findNumber = (number, array) => {
	if (array.length === 1) {
		if (array[0] === number) {
			return console.log(true);
		} else {
			return console.log(false);
		}
	}

	const middleArrayElementIndex = Math.ceil((array.length - 1) / 2);
	const middleArrayElement = array[Math.ceil(middleArrayElementIndex)];

	if (middleArrayElement === number) {
		return console.log(true);
	} else if (middleArrayElement > number) {
		findNumber(number, array.slice(0, middleArrayElementIndex));
	} else if (middleArrayElement < number) {
		findNumber(number, array.slice(middleArrayElementIndex + 1));
	}
};

const isNumberInArrayOfNumbers = (number, array) => {
	for (let i = 0; i < array.length; i++) {
		if (number >= array[i][0] && number <= array[i].at(-1)) {
			return findNumber(number, array[i]);
		}
	}

	return console.log(false);
};

isNumberInArrayOfNumbers(0, arr); //false
isNumberInArrayOfNumbers(21, arr); //true
isNumberInArrayOfNumbers(221, arr); //false
