/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWeather)\n/* harmony export */ });\n\nasync function getCoordinates() {\n    const copenhagen = \"Copenhagen\";\n    const firstPart = \"http://api.openweathermap.org/geo/1.0/direct?q=\";\n    const lastPart = \"&limit=&appid=98cf7b78cb1f92c6762b5df863981c84\"\n    const combinedFetch = firstPart + copenhagen + lastPart\n    const response = await fetch(combinedFetch, {mode: 'cors'});\n    const Data = await response.json();          \n    const langtitude = Data[0].lat;\n    const longtitude = Data[0].lon;\n    console.log(Data);\n    console.log(langtitude);\n    console.log(longtitude);\n  }\n\n  getCoordinates();\n\nasync function getWeather(location) {\n  const apiCallBeginning = 'http://api.openweathermap.org/data/2.5/forecast?q='\n  const inputCity = location;\n  const apiCallEnding = '&units=metric&appid=98cf7b78cb1f92c6762b5df863981c84'\n  const apiCallCOmbined = apiCallBeginning + inputCity + apiCallEnding;\n  const response = await fetch(apiCallCOmbined, {mode: 'cors'});\n  const weatherData = await response.json();\n  const cityName = weatherData.city.name;\n  const weatherTemperature = weatherData.list[0].main.temp;\n  const weatherDescription = weatherData.list[0].weather[0].description;\n  const humidityStat = weatherData.list[0].main.humidity\n  const rainChance = weatherData.list[0].pop\n  const windSpeed = weatherData.list[0].wind.speed;\n  console.log(weatherData);\n  console.log(cityName);\n  console.log(weatherTemperature);\n  console.log(humidityStat);\n  console.log(rainChance);\n  console.log(windSpeed);\n  console.log(weatherDescription);\n\n  return weatherData;\n}\n\nfunction renderWeatherData(data) {\n  console.log(data);\n  console.log(data.city.name);\n  // const input = document.querySelector(\".searchInput\");\n  // let searchedLocation = input.value;\n  // if (searchedLocation === '') {\n  //   searchedLocation = 'copenhagen';\n  // }\n  // const fetchedWeatherData = async () => {\n  //   const data = await getWeather(searchedLocation);\n  // } \n  // // const fetchedWeatherData = getWeather(searchedLocation).then();\n  // console.log(fetchedWeatherData)\n  // const cityName = \"huh\";\n}\n\ngetWeather(\"copenhagen\").then(renderWeatherData)\n\nfunction renderView() {\n\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;