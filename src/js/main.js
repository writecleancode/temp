const fetchData = () => {
	return new Promise((resolve, reject) => {
		fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
			.then(res => res.json())
			.then(data => resolve(data.properties.periods[1].shortForecast));
	});
};

const displayWeather = weather => {
	console.log(weather);
};

const onError = error => {
	console.log(`Error: ${error}`);
};

fetchData().then(displayWeather).catch(onError);
