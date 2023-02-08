
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
        console.log(cityName);
    }
}