import { renderView } from "./index";

export const rainWeather = {
    render: (weatherData) => {
        const content = document.getElementById("content");
        content.classList = "";
        content.replaceChildren();
        content.classList.add("rain-grid");
        
        const cityName = weatherData.city.name;
        const weatherTemperature = Math.ceil(weatherData.list[0].main.temp);
        const weatherDescription = weatherData.list[0].weather[0].description;
        const humidityStat = weatherData.list[0].main.humidity
        const rainChance = weatherData.list[0].pop
        const windSpeed = weatherData.list[0].wind.speed;

        const nameP = document.createElement("p");
        nameP.innerText = cityName.toUpperCase();
        const temperatureP = document.createElement("p");
        temperatureP.innerText = `${weatherTemperature}°C`
        const descriptionP = document.createElement("p");
        descriptionP.innerText = weatherDescription;
        const humidityP = document.createElement("p");
        humidityP.innerText = `Humidity:
        ${humidityStat}%`;
        const rainP = document.createElement("p");
        rainP.innerText = `Rain chance:
        ${rainChance}%`;
        const windP = document.createElement("p");
        windP.innerText = `Wind speed:
        ${windSpeed}km/h`;
       
        const inputSearch = document.createElement("input");
        inputSearch.setAttribute("type", "search");
        inputSearch.setAttribute("id", "searchInput");
        inputSearch.setAttribute("placeholder", "Search location");
        inputSearch.classList.add("search-rain");

        const mainBox = document.createElement("div");
        mainBox.classList.add("main-rain");
        const secondaryBox = document.createElement("div");
        secondaryBox.classList.add("secondary-rain");

        mainBox.append(descriptionP, nameP, temperatureP);
        secondaryBox.append(humidityP, rainP, windP);
        content.append(inputSearch, mainBox, secondaryBox);
        console.log(cityName);
        renderView();
    }
}