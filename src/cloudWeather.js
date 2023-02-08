import { renderView } from "./index";

export const cloudWeather = {
    render: (weatherData) => {
        const content = document.getElementById("content");
        content.classList = "";
        content.replaceChildren();
        content.classList.add("cloud-grid");
        
        const cityName = weatherData.city.name;
        const weatherTemperature = weatherData.list[0].main.temp;
        const weatherDescription = weatherData.list[0].weather[0].description;
        const humidityStat = weatherData.list[0].main.humidity
        const rainChance = weatherData.list[0].pop
        const windSpeed = weatherData.list[0].wind.speed;
       
        const inputSearch = document.createElement("input");
        inputSearch.setAttribute("type", "search");
        inputSearch.setAttribute("id", "searchInput");
        inputSearch.classList.add("search-cloud");

        const mainBox = document.createElement("div");
        mainBox.classList.add("main-cloud");
        const secondaryBox = document.createElement("div");
        secondaryBox.classList.add("secondary-cloud");

        mainBox.append(weatherDescription, cityName, weatherTemperature);
        secondaryBox.append(humidityStat, rainChance, windSpeed);
        content.append(inputSearch, mainBox, secondaryBox);
        console.log(cityName);
        renderView();
    }
}