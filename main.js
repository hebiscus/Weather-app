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

/***/ "./src/cloudWeather.js":
/*!*****************************!*\
  !*** ./src/cloudWeather.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cloudWeather\": () => (/* binding */ cloudWeather)\n/* harmony export */ });\n\nconst cloudWeather = {\n    render: (data) => {\n        const content = document.getElementById(\"content\");\n\n        const cityName = weatherData.city.name;\n        console.log(cityName);\n    }\n}\n\n//# sourceURL=webpack:///./src/cloudWeather.js?");

/***/ }),

/***/ "./src/fogWeather.js":
/*!***************************!*\
  !*** ./src/fogWeather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fogdWeather\": () => (/* binding */ fogdWeather)\n/* harmony export */ });\n\n\nconst fogdWeather = {\n    render: (data) => {\n        const content = document.getElementById(\"content\");\n\n        const cityName = weatherData.city.name;\n        console.log(cityName);\n    }\n}\n\n//# sourceURL=webpack:///./src/fogWeather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWeather)\n/* harmony export */ });\n/* harmony import */ var _cloudWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cloudWeather */ \"./src/cloudWeather.js\");\n/* harmony import */ var _fogWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fogWeather */ \"./src/fogWeather.js\");\n/* harmony import */ var _snowWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snowWeather */ \"./src/snowWeather.js\");\n/* harmony import */ var _stormWeather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stormWeather */ \"./src/stormWeather.js\");\n/* harmony import */ var _sunWeather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sunWeather */ \"./src/sunWeather.js\");\n\n\n\n\n\n\n;\n\nfunction handleErrors(response) {\n  if (!response.ok) {\n      throw Error(response.statusText);\n  }\n  return response;\n}\n\n// eslint-disable-next-line consistent-return\nasync function getWeather(location) {\n  const apiCallBeginning = 'http://api.openweathermap.org/data/2.5/forecast?q='\n  const inputCity = location;\n  const apiCallEnding = '&units=metric&appid=98cf7b78cb1f92c6762b5df863981c84'\n  const apiCallCombined = apiCallBeginning + inputCity + apiCallEnding;\n  try {\n    const response = await fetch(apiCallCombined, {mode: 'cors'})\n    if (response.status === 404) {\n      const err = new Error(`HTTP status code: ${response.status}`);\n      err.response = response;\n      err.status = response.status;\n      throw err;\n    }\n    const weatherData = await response.json();\n    return weatherData;\n  }\n  catch (error) {\n    console.log(error);\n  }\n}\n\nfunction renderWeatherData(weatherData) {\n  if (weatherData === undefined || weatherData.cod === \"400\") {\n    return;\n  }\n  const cityName = weatherData.city.name;\n  const weatherTemperature = weatherData.list[0].main.temp;\n  const weatherStatus = weatherData.list[0].weather[0].main;\n  const weatherDescription = weatherData.list[0].weather[0].description;\n  const humidityStat = weatherData.list[0].main.humidity\n  const rainChance = weatherData.list[0].pop\n  const windSpeed = weatherData.list[0].wind.speed;\n  console.log(weatherData);\n  console.log(cityName);\n  console.log(weatherTemperature);\n  console.log(humidityStat);\n  console.log(rainChance);\n  console.log(windSpeed);\n  console.log(weatherDescription);\n  console.log(weatherStatus);\n\n  // if (weatherStatus === \"Clouds\") {\n  //   cloudWeather.render(weatherData);\n  // } else if (weatherStatus === \"Thunderstorm\"){\n  //   stormWeather.render(weatherData);\n  // } else if (weatherStatus === \"Clear\"){\n  //   sunWeather.render(weatherData);\n  // } else if (weatherStatus === \"Fog\") {\n  //   fogWeather.render(weatherData);\n  // } else if (weatherStatus === \"Rain\") {\n  //   rainWeather.render(weatherData);\n  // } else if (weatherStatus === \"Snow\") {\n  //   snowWeather.render(weatherData);\n  // }\n}\n\n(function renderView() {\n  const searchInput = document.querySelector(\".searchInput\");\n  searchInput.addEventListener(\"search\", () => {getWeather(searchInput.value).then(renderWeatherData, handleErrors)});\n})();\n\n(function renderFirstLocation() {\n  getWeather(\"Copenhagen\").then(renderWeatherData);\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/snowWeather.js":
/*!****************************!*\
  !*** ./src/snowWeather.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"snowWeather\": () => (/* binding */ snowWeather)\n/* harmony export */ });\n\n\nconst snowWeather = {\n    render: (data) => {\n        const content = document.getElementById(\"content\");\n\n        const cityName = weatherData.city.name;\n        console.log(cityName);\n    }\n}\n\n//# sourceURL=webpack:///./src/snowWeather.js?");

/***/ }),

/***/ "./src/stormWeather.js":
/*!*****************************!*\
  !*** ./src/stormWeather.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stormWeather\": () => (/* binding */ stormWeather)\n/* harmony export */ });\n\n\nconst stormWeather = {\n    render: (data) => {\n        const content = document.getElementById(\"content\");\n\n        const cityName = weatherData.city.name;\n        console.log(cityName);\n    }\n}\n\n//# sourceURL=webpack:///./src/stormWeather.js?");

/***/ }),

/***/ "./src/sunWeather.js":
/*!***************************!*\
  !*** ./src/sunWeather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sunWeather\": () => (/* binding */ sunWeather)\n/* harmony export */ });\n\n\nconst sunWeather = {\n    render: (data) => {\n        const content = document.getElementById(\"content\");\n\n        const cityName = weatherData.city.name;\n        console.log(cityName);\n    }\n}\n\n//# sourceURL=webpack:///./src/sunWeather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;