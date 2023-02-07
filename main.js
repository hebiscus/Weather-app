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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWeather)\n/* harmony export */ });\n// async function getCoordinates() {\n//     const copenhagen = \"Copenhagen\";\n//     const firstPart = \"http://api.openweathermap.org/geo/1.0/direct?q=\";\n//     const lastPart = \"&limit=&appid=98cf7b78cb1f92c6762b5df863981c84\"\n//     const combinedFetch = firstPart + copenhagen + lastPart\n//     const response = await fetch(combinedFetch, {mode: 'cors'});\n//     const Data = await response.json();          \n//     const langtitude = Data[0].lat;\n//     const longtitude = Data[0].lon;\n//     console.log(Data);\n//     console.log(langtitude);\n//     console.log(longtitude);\n//   }\n\n//   getCoordinates();\n\nfunction handleErrors(response) {\n  if (!response.ok) {\n      throw Error(response.statusText);\n  }\n  return response;\n}\n\nasync function getWeather(location) {\n  const apiCallBeginning = 'http://api.openweathermap.org/data/2.5/forecast?q='\n  const inputCity = location;\n  const apiCallEnding = '&units=metric&appid=98cf7b78cb1f92c6762b5df863981c84'\n  const apiCallCombined = apiCallBeginning + inputCity + apiCallEnding;\n  // const response = await fetch(apiCallCombined, {mode: 'cors'})\n  // await fetch(apiCallCombined, {mode: 'cors'}).then(async (response) => {\n  //   if (!response.ok) {\n  //       // make the promise be rejected if we didn't get a 2xx response\n  //       throw new Error(\"Not 2xx response\", {cause: response});\n  //   } else {\n  //     const weatherData = await response.json();\n  //     return weatherData;\n  //   }\n  //   }).catch((err) => {\n  //       // some error here\n  //   });\n  // if (response.status >= 200 && response.status <= 299) {\n  //   const weatherData = await response.json();\n  //   return weatherData;\n  // } \n\n  //   // Handle errors\n  //   const err = new Error(`HTTP status code: ${response.status}`);\n  //   err.response = response\n  //   err.status = response.status\n  //   console.log(response.status, response.statusText);\n  //   throw err\n\n  try {\n    const response = await fetch(apiCallCombined, {mode: 'cors'})\n    if (response.status === 404) {\n      const err = new Error(`HTTP status code: ${response.status}`);\n      err.response = response\n      err.status = response.status\n      console.log(response.status, response.statusText);\n      throw err\n    }\n    const weatherData = await response.json();\n    return weatherData;\n  }\n  catch (error) {\n    console.log(error)\n  }\n}\n\nfunction renderWeatherData(weatherData) {\n  if (weatherData === undefined) {\n    return;\n  }\n  const cityName = weatherData.city.name;\n  const weatherTemperature = weatherData.list[0].main.temp;\n  const weatherDescription = weatherData.list[0].weather[0].description;\n  const humidityStat = weatherData.list[0].main.humidity\n  const rainChance = weatherData.list[0].pop\n  const windSpeed = weatherData.list[0].wind.speed;\n  console.log(weatherData);\n  console.log(cityName);\n  console.log(weatherTemperature);\n  console.log(humidityStat);\n  console.log(rainChance);\n  console.log(windSpeed);\n  console.log(weatherDescription);\n}\n\n(function renderView() {\n  const searchInput = document.querySelector(\".searchInput\");\n  searchInput.addEventListener(\"search\", () => {getWeather(searchInput.value).then(renderWeatherData, handleErrors)});\n})();\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

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