// b63afe33bdddd347462d6a49b24926dd
// https://api.openweathermap.org/data/2.5/weather?units=matric&q={city name}&appid={API key}

const apiKey = "b63afe33bdddd347462d6a49b24926dd";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-logo");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
  } else {
    document.querySelector(".error").style.display = "none";
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temprature").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weathericon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weathericon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weathericon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Snow") {
      weathericon.src = "images/snow.png";
    } else if (data.weather[0].main == "Rain") {
      weathericon.src = "images/rain.png";
    }

    document.querySelector(".weather").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
