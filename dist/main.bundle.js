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

/***/ "./src/Playfield.ts":
/*!**************************!*\
  !*** ./src/Playfield.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Playfield = /** @class */ (function () {\r\n    function Playfield() {\r\n    }\r\n    Playfield.renderNewGameField = function () {\r\n        var container = document.getElementById('container');\r\n        Playfield.nextColors[0] = Math.floor(Math.random() * 7) + 1;\r\n        Playfield.nextColors[1] = Math.floor(Math.random() * 7) + 1;\r\n        Playfield.nextColors[2] = Math.floor(Math.random() * 7) + 1;\r\n        Playfield.gameArr = [];\r\n        var pointsInfo = document.getElementById('pointsInfo');\r\n        pointsInfo.innerHTML = pointsInfo.innerHTML + \" 0\";\r\n        for (var i = 0; i < 9; i++) {\r\n            Playfield.gameArr[i] = [];\r\n            for (var j = 0; j < 9; j++) {\r\n                var div = document.createElement('div');\r\n                var id = i.toString() + j.toString();\r\n                div.setAttribute('id', id);\r\n                div.setAttribute('class', 'field');\r\n                //div.innerHTML = '<svg xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"25\" cy=\"25\" r=\"20\" fill=\"cyan\" /></svg>'\r\n                container.appendChild(div);\r\n                Playfield.gameArr[i][j] = 0;\r\n            }\r\n        }\r\n        Playfield.drawThreeBalls();\r\n        Playfield.renderGameField();\r\n    };\r\n    Playfield.renderGameField = function () {\r\n        for (var i = 0; i < 9; i++) {\r\n            var _loop_1 = function () {\r\n                if (Playfield.gameArr[i][j] != 0) {\r\n                    var id = i.toString() + j.toString();\r\n                    var div_1 = document.getElementById(id);\r\n                    var num = Playfield.gameArr[i][j];\r\n                    var color_1 = Playfield.colors[num];\r\n                    div_1.innerHTML = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\"><circle cx=\\\"25\\\" cy=\\\"25\\\" r=\\\"18\\\" fill=\\\"\".concat(color_1, \"\\\" /></svg>\");\r\n                    div_1.onmouseenter = function () {\r\n                        div_1.innerHTML = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\"><circle cx=\\\"25\\\" cy=\\\"25\\\" r=\\\"23\\\" fill=\\\"\".concat(color_1, \"\\\" /></svg>\");\r\n                    };\r\n                    div_1.onmouseleave = function () {\r\n                        div_1.innerHTML = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\"><circle cx=\\\"25\\\" cy=\\\"25\\\" r=\\\"18\\\" fill=\\\"\".concat(color_1, \"\\\" /></svg>\");\r\n                    };\r\n                    div_1.onclick = function () {\r\n                        div_1.innerHTML = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\"><circle cx=\\\"25\\\" cy=\\\"25\\\" r=\\\"23\\\" fill=\\\"\".concat(color_1, \"\\\" /></svg>\");\r\n                        div_1.onmouseleave = null;\r\n                    };\r\n                }\r\n            };\r\n            for (var j = 0; j < 9; j++) {\r\n                _loop_1();\r\n            }\r\n        }\r\n    };\r\n    Playfield.drawThreeBalls = function () {\r\n        var ball1 = [], ball2 = [], ball3 = [];\r\n        ball1[0] = Math.floor(Math.random() * (9 - 0));\r\n        ball1[1] = Math.floor(Math.random() * (9 - 0));\r\n        do {\r\n            ball2[0] = Math.floor(Math.random() * (9 - 0));\r\n            ball2[1] = Math.floor(Math.random() * (9 - 0));\r\n        } while (ball2[0] == ball1[0] && ball2[1] == ball1[1]);\r\n        do {\r\n            ball3[0] = Math.floor(Math.random() * (9 - 0));\r\n            ball3[1] = Math.floor(Math.random() * (9 - 0));\r\n        } while ((ball3[0] == ball1[0] && ball3[1] == ball1[1]) || (ball3[0] == ball2[0] && ball3[1] == ball2[1]));\r\n        Playfield.gameArr[ball1[0]][ball1[1]] = Playfield.nextColors[0];\r\n        Playfield.gameArr[ball2[0]][ball2[1]] = Playfield.nextColors[1];\r\n        Playfield.gameArr[ball3[0]][ball3[1]] = Playfield.nextColors[2];\r\n        Playfield.nextColors[0] = Math.floor(Math.random() * 7) + 1;\r\n        Playfield.nextColors[1] = Math.floor(Math.random() * 7) + 1;\r\n        Playfield.nextColors[2] = Math.floor(Math.random() * 7) + 1;\r\n        var colorInfo = document.getElementById('colorInfo');\r\n        colorInfo.innerHTML = colorInfo.innerHTML + \"<br><svg xmlns=\\\"http://www.w3.org/2000/svg\\\"><circle cx=\\\"20\\\" cy=\\\"20\\\" r=\\\"15\\\" fill=\\\"\".concat(Playfield.colors[Playfield.nextColors[0]], \"\\\" /></svg><svg xmlns=\\\"http://www.w3.org/2000/svg\\\"><circle cx=\\\"20\\\" cy=\\\"20\\\" r=\\\"15\\\" fill=\\\"\").concat(Playfield.colors[Playfield.nextColors[1]], \"\\\" /></svg><svg xmlns=\\\"http://www.w3.org/2000/svg\\\"><circle cx=\\\"20\\\" cy=\\\"20\\\" r=\\\"15\\\" fill=\\\"\").concat(Playfield.colors[Playfield.nextColors[2]], \"\\\" /></svg>\");\r\n        console.log(ball1, ball2, ball3);\r\n        console.log(Playfield.gameArr);\r\n    };\r\n    Playfield.colors = [\"\", 'red', 'green', 'blue', 'yellow', 'magenta', 'purple', 'cyan'];\r\n    Playfield.nextColors = [];\r\n    return Playfield;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Playfield);\r\n\n\n//# sourceURL=webpack://kulki/./src/Playfield.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Playfield__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Playfield */ \"./src/Playfield.ts\");\n\r\n_Playfield__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderNewGameField();\r\n\n\n//# sourceURL=webpack://kulki/./src/main.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;