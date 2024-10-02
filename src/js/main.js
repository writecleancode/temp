const xhr = new XMLHttpRequest();

function getCars() {
	xhr.onreadystatechange = function () {
		if (xhr.readyState == XMLHttpRequest.DONE) {
			const response = xhr.responseText;
			const data = JSON.parse(response);
			console.log(data);
		}
	};
	xhr.open('GET', 'https://freetestapi.com/api/v1/cars', true);
	xhr.send(null);
}

getCars();

// ----------------------------------------

fetch('https://freetestapi.com/api/v1/cars')
	.then(res => res.json())
	.then(data => console.log(data))
	.catch(error => console.log(error));

// ----------------------------------------

const getCarsAsync = async () => {
	try {
		const res = await fetch('https://freetestapi.com/api/v1/cars');
		const data = await res.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

getCarsAsync();
