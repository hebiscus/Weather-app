/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("async function getWeather() {\n    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=55.6761&lon=12.5683&appid=98cf7b78cb1f92c6762b5df863981c84', {mode: 'cors'});\n    const weatherData = await response.json();\n    const cityName = weatherData.name;\n    console.log(cityName);\n    console.log(weatherData);\n  }\n\n  getWeather();\n\n\nasync function getCoordinates() {\n    const copenhagen = \"Copenhagen\";\n    const firstPart = \"http://api.openweathermap.org/geo/1.0/direct?q=\";\n    const lastPart = \"&limit=&appid=98cf7b78cb1f92c6762b5df863981c84\"\n    const combined = firstPart + copenhagen + lastPart\n    const response = await fetch(combined, {mode: 'cors'});\n    const Data = await response.json();          \n    const langtitude = Data[0].lat;\n    const longtitude = Data[0].lon;\n    console.log(Data);\n    console.log(langtitude);\n    console.log(longtitude);\n  }\n\n  getCoordinates();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;