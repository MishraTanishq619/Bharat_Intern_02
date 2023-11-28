var FindBtn = document.getElementById("FindBtn");
var inp = document.getElementById("inp");
var response = {};

window.addEventListener("keypress", (e) => {
	if (e.key == "Enter") {
		FindBtn?.click();
	}
});

FindBtn.addEventListener("click", (e) => {
	e.preventDefault();
	console.log(inp.value);
	FindCityWeather(inp.value);
});

const FindCityWeather = (City) => {
	fetch(`https://api.api-ninjas.com/v1/weather?city=${City}`, {
		method: "GET",
		headers: {
			"X-Api-Key": "Y+1UufJ8QaVDH070pClTKw==nnSxnFXdmMCAFk4a",
		},
	})
		.then((res) => res.json())
		.then((data) => {
			response = data;
			console.log(response);

			document.getElementById("CityResponse.temp").innerText =
				"temp : " + response.temp;
			document.getElementById("CityResponse.cloud_pct").innerText =
				"cloud_pct : " + response.cloud_pct;
			document.getElementById("CityResponse.feels_like").innerText =
				"feels_like : " + response.feels_like;
			document.getElementById("CityResponse.humidity").innerText =
				"humidity : " + response.humidity;
			document.getElementById("CityResponse.max_temp").innerText =
				"max_temp : " + response.max_temp;
			document.getElementById("CityResponse.min_temp").innerText =
				"min_temp : " + response.min_temp;
			document.getElementById("CityResponse.sunrise").innerText =
				"sunrise : " + response.sunrise;
			document.getElementById("CityResponse.sunset").innerText =
				"sunset : " + response.sunset;
			document.getElementById("CityResponse.wind_degrees").innerText =
				"wind_degrees : " + response.wind_degrees;
			document.getElementById("CityResponse.wind_speed").innerText =
				"wind_speed : " + response.wind_speed;
		})
		.catch(() => {
			console.log("Found Error");
		});
};
