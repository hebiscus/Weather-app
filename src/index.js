import { cloudWeather } from "./cloudWeather";
import { fogWeather } from "./fogWeather";
import { rainWeather } from "./rainWeather"
import { snowWeather} from "./snowWeather";
import { stormWeather } from "./stormWeather";
import { sunWeather } from "./sunWeather";

function handleErrors(response) {
  if (!response.ok) {
      throw Error(response.statusText);
  }
  return response;
}

function throwError() {
  const searchInput = document.getElementById("searchInput");
  if (!document.querySelector(".error-text")) {
    const errorP = document.createElement("p");
    errorP.classList.add("error-text")
    errorP.innerText = "No location found!";
    searchInput.after(errorP);
  }
}

// eslint-disable-next-line consistent-return
async function getWeather(location) {
  const apiCallBeginning = 'https://api.openweathermap.org/data/2.5/forecast?q='
  const inputCity = location;
  const apiCallEnding = '&units=metric&appid=98cf7b78cb1f92c6762b5df863981c84'
  const apiCallCombined = apiCallBeginning + inputCity + apiCallEnding;
  try {
    const response = await fetch(apiCallCombined, {mode: 'cors'})
    if (response.status === 404) {
      const err = new Error(`HTTP status code: ${response.status}`);
      err.response = response;
      err.status = response.status;
      throw err;
    }
    const weatherData = await response.json();
    return weatherData;
  }
  catch (error) {
    console.log(error);
  }
}

function renderWeatherData(weatherData) {
  if (weatherData === undefined || weatherData.cod === "400") {
    throwError();
    return;
  }
  const weatherStatus = weatherData.list[0].weather[0].main;

  if (weatherStatus === "Clouds") {
    cloudWeather.render(weatherData);
  } else if (weatherStatus === "Thunderstorm"){
    stormWeather.render(weatherData);
  } else if (weatherStatus === "Clear"){
    sunWeather.render(weatherData);
  } else if (weatherStatus === "Fog") {
    fogWeather.render(weatherData);
  } else if (weatherStatus === "Rain" || weatherStatus === "Drizzle") {
    rainWeather.render(weatherData);
  } else if (weatherStatus === "Snow") {
    snowWeather.render(weatherData);
  } else {
    alert("something went wrong");
  }
}

export function renderView() {
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("search", () => {getWeather(searchInput.value).then(renderWeatherData, handleErrors)});
}

renderView();

(function renderFirstLocation() {
  getWeather("Copenhagen").then(renderWeatherData);
})();


