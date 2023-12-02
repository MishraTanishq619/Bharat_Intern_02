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
				"Temp : " + response.temp;
			document.getElementById("CityResponse.cloud_pct").innerText =
				"Cloud_Percentage : " + response.cloud_pct;
			document.getElementById("CityResponse.humidity").innerText =
				"Humidity : " + response.humidity;
			document.getElementById("CityResponse.max_temp").innerText =
				"Max_Temp : " + response.max_temp;
			document.getElementById("CityResponse.min_temp").innerText =
				"Min_Temp : " + response.min_temp;
			document.getElementById("CityResponse.wind_degrees").innerText =
				"Wind_Degrees : " + response.wind_degrees;
			document.getElementById("CityResponse.wind_speed").innerText =
				"Wind_Speed : " + response.wind_speed;
		})
		.catch(() => {
			console.log("Found Error");
		});
};
