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

/***/ "./src/Balls.ts":
/*!**********************!*\
  !*** ./src/Balls.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Playfield__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Playfield */ \"./src/Playfield.ts\");\n\r\nvar Balls = /** @class */ (function () {\r\n    function Balls() {\r\n    }\r\n    Balls.drawThreeBalls = function () {\r\n        var ball1 = [], ball2 = [], ball3 = [];\r\n        ball1[0] = Math.floor(Math.random() * (9 - 0));\r\n        ball1[1] = Math.floor(Math.random() * (9 - 0));\r\n        do {\r\n            ball2[0] = Math.floor(Math.random() * (9 - 0));\r\n            ball2[1] = Math.floor(Math.random() * (9 - 0));\r\n        } while (ball2[0] == ball1[0] && ball2[1] == ball1[1]);\r\n        do {\r\n            ball3[0] = Math.floor(Math.random() * (9 - 0));\r\n            ball3[1] = Math.floor(Math.random() * (9 - 0));\r\n        } while ((ball3[0] == ball1[0] && ball3[1] == ball1[1]) || (ball3[0] == ball2[0] && ball3[1] == ball2[1]));\r\n        _Playfield__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameArr[ball1[0]][ball1[1]] = _Playfield__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nextColors[0];\r\n        _Playfield__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameArr[ball2[0]][ball2[1]] = _Playfield__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nextColors[1];\r\n        _Playfield__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameArr[ball3[0]][ball3[1]] = _Playfield__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nextColors[2];\r\n        _Playfield__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nextColors[0] = Math.floor(Math.random() * 7) + 1;\r\n        _Playfield__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nextColors[1] = Math.floor(Math.random() * 7) + 1;\r\n        _Playfield__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nextColors[2] = Math.floor(Math.random() * 7) + 1;\r\n        var colorInfo = document.getElementById('colorInfo');\r\n        colorInfo.innerHTML = \"Nast\\u0119pne:<br><svg xmlns=\\\"http://www.w3.org/2000/svg\\\"><circle cx=\\\"20\\\" cy=\\\"20\\\" r=\\\"15\\\" fill=\\\"\".concat(_Playfield__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colors[_Playfield__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nextColors[0]], \"\\\" /></svg><svg xmlns=\\\"http://www.w3.org/2000/svg\\\"><circle cx=\\\"20\\\" cy=\\\"20\\\" r=\\\"15\\\" fill=\\\"\").concat(_Playfield__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colors[_Playfield__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nextColors[1]], \"\\\" /></svg><svg xmlns=\\\"http://www.w3.org/2000/svg\\\"><circle cx=\\\"20\\\" cy=\\\"20\\\" r=\\\"15\\\" fill=\\\"\").concat(_Playfield__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colors[_Playfield__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nextColors[2]], \"\\\" /></svg>\");\r\n        console.log(ball1, ball2, ball3);\r\n        console.log(_Playfield__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameArr);\r\n    };\r\n    Balls.resetAllBallsSize = function () {\r\n        for (var i = 0; i < 9; i++) {\r\n            for (var j = 0; j < 9; j++) {\r\n                var id = i.toString() + j.toString();\r\n                var div = document.getElementById(id);\r\n                if (_Playfield__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameArr[i][j] != 0) {\r\n                    var num = _Playfield__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameArr[i][j];\r\n                    var color = _Playfield__WEBPACK_IMPORTED_MODULE_0__[\"default\"].colors[num];\r\n                    div.innerHTML = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\"><circle cx=\\\"25\\\" cy=\\\"25\\\" r=\\\"18\\\" fill=\\\"\".concat(color, \"\\\" /></svg>\");\r\n                }\r\n                div.style.backgroundColor = 'white';\r\n            }\r\n        }\r\n    };\r\n    return Balls;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Balls);\r\n\n\n//# sourceURL=webpack://kulki/./src/Balls.ts?");

/***/ }),

/***/ "./src/Playfield.ts":
/*!**************************!*\
  !*** ./src/Playfield.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ShortestPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShortestPath */ \"./src/ShortestPath.ts\");\n/* harmony import */ var _Balls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Balls */ \"./src/Balls.ts\");\n\r\n\r\nvar Playfield = /** @class */ (function () {\r\n    function Playfield() {\r\n    }\r\n    Playfield.renderNewGameField = function () {\r\n        var container = document.getElementById('container');\r\n        Playfield.nextColors[0] = Math.floor(Math.random() * 7) + 1;\r\n        Playfield.nextColors[1] = Math.floor(Math.random() * 7) + 1;\r\n        Playfield.nextColors[2] = Math.floor(Math.random() * 7) + 1;\r\n        Playfield.gameArr = [];\r\n        var pointsInfo = document.getElementById('pointsInfo');\r\n        pointsInfo.innerHTML = pointsInfo.innerHTML + \" 0\";\r\n        for (var i = 0; i < 9; i++) {\r\n            Playfield.gameArr[i] = [];\r\n            for (var j = 0; j < 9; j++) {\r\n                var div = document.createElement('div');\r\n                var id = i.toString() + j.toString();\r\n                div.setAttribute('id', id);\r\n                div.setAttribute('class', 'field');\r\n                //div.innerHTML = '<svg xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"25\" cy=\"25\" r=\"20\" fill=\"cyan\" /></svg>'\r\n                container.appendChild(div);\r\n                Playfield.gameArr[i][j] = 0;\r\n            }\r\n        }\r\n        _Balls__WEBPACK_IMPORTED_MODULE_1__[\"default\"].drawThreeBalls();\r\n        Playfield.renderGameField();\r\n    };\r\n    Playfield.renderGameField = function () {\r\n        var _loop_1 = function (i) {\r\n            var _loop_2 = function (j) {\r\n                if (Playfield.gameArr[i][j] != 0) {\r\n                    var idS_1 = i.toString() + j.toString();\r\n                    var div_1 = document.getElementById(idS_1);\r\n                    var num = Playfield.gameArr[i][j];\r\n                    var color_1 = Playfield.colors[num];\r\n                    div_1.innerHTML = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\"><circle cx=\\\"25\\\" cy=\\\"25\\\" r=\\\"18\\\" fill=\\\"\".concat(color_1, \"\\\" /></svg>\");\r\n                    div_1.onclick = function () {\r\n                        _Balls__WEBPACK_IMPORTED_MODULE_1__[\"default\"].resetAllBallsSize();\r\n                        div_1.innerHTML = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\"><circle cx=\\\"25\\\" cy=\\\"25\\\" r=\\\"23\\\" fill=\\\"\".concat(color_1, \"\\\" /></svg>\");\r\n                        var _loop_3 = function (k) {\r\n                            var _loop_4 = function (l) {\r\n                                el = document.getElementById(k.toString() + l.toString());\r\n                                if (Playfield.gameArr[k][l] == 0) {\r\n                                    el.onmouseenter = function () {\r\n                                        for (var p = 0; p < 9; p++) {\r\n                                            for (var o = 0; o < 9; o++) {\r\n                                                var id = p.toString() + o.toString();\r\n                                                document.getElementById(id).style.backgroundColor = \"white\";\r\n                                            }\r\n                                        }\r\n                                        var s = i.toString() + j.toString();\r\n                                        m = k.toString() + l.toString();\r\n                                        var xd = _ShortestPath__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findShortestPath(s, m, Playfield.gameArr);\r\n                                        var path = xd.split(\"_\");\r\n                                        for (var z = 0; z < path.length; z++) {\r\n                                            document.getElementById(path[z]).style.backgroundColor = \"red\";\r\n                                        }\r\n                                        document.getElementById(m).style.backgroundColor = \"red\";\r\n                                    };\r\n                                    el.onclick = function () {\r\n                                        for (var p = 0; p < 9; p++) {\r\n                                            for (var o = 0; o < 9; o++) {\r\n                                                var id = p.toString() + o.toString();\r\n                                                document.getElementById(id).onmouseenter = null;\r\n                                                if (document.getElementById(id).style.backgroundColor == \"red\") {\r\n                                                    document.getElementById(id).style.backgroundColor = \"grey\";\r\n                                                }\r\n                                            }\r\n                                        }\r\n                                        window.setTimeout(function () {\r\n                                            div_1.innerHTML = \"\";\r\n                                            // document.getElementById(m).innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"25\" cy=\"25\" r=\"18\" fill=\"${color}\" /></svg>`\r\n                                            Playfield.gameArr[parseInt(m[0])][parseInt(m[1])] = Playfield.gameArr[parseInt(idS_1[0])][parseInt(idS_1[1])];\r\n                                            Playfield.gameArr[parseInt(idS_1[0])][parseInt(idS_1[1])] = 0;\r\n                                            _Balls__WEBPACK_IMPORTED_MODULE_1__[\"default\"].drawThreeBalls();\r\n                                            Playfield.renderGameField();\r\n                                            for (var p = 0; p < 9; p++) {\r\n                                                for (var o = 0; o < 9; o++) {\r\n                                                    id = p.toString() + o.toString();\r\n                                                    if (document.getElementById(id).style.backgroundColor == \"grey\") {\r\n                                                        document.getElementById(id).style.backgroundColor = \"white\";\r\n                                                    }\r\n                                                }\r\n                                            }\r\n                                        }, 500);\r\n                                    };\r\n                                }\r\n                            };\r\n                            for (var l = 0; l < 9; l++) {\r\n                                _loop_4(l);\r\n                            }\r\n                        };\r\n                        var el, m;\r\n                        for (var k = 0; k < 9; k++) {\r\n                            _loop_3(k);\r\n                        }\r\n                    };\r\n                }\r\n            };\r\n            for (var j = 0; j < 9; j++) {\r\n                _loop_2(j);\r\n            }\r\n        };\r\n        for (var i = 0; i < 9; i++) {\r\n            _loop_1(i);\r\n        }\r\n    };\r\n    Playfield.colors = [\"\", 'black', 'green', 'blue', 'yellow', 'magenta', 'purple', 'cyan'];\r\n    Playfield.nextColors = [];\r\n    return Playfield;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Playfield);\r\n\n\n//# sourceURL=webpack://kulki/./src/Playfield.ts?");

/***/ }),

/***/ "./src/ShortestPath.ts":
/*!*****************************!*\
  !*** ./src/ShortestPath.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// -9 to sciana\r\n// -5 to start\r\n// -3 to meta\r\nvar ShortestPath = /** @class */ (function () {\r\n    function ShortestPath() {\r\n    }\r\n    ShortestPath.findShortestPath = function (s, m, tab) {\r\n        var sX = parseInt(s[0]);\r\n        var sY = parseInt(s[1]);\r\n        var mX = parseInt(m[0]);\r\n        var mY = parseInt(m[1]);\r\n        var gameAr = JSON.parse(JSON.stringify(tab));\r\n        var moveArr = [];\r\n        if (gameAr[mX][mY] != 0) {\r\n            return 0;\r\n        }\r\n        for (var i = 0; i < 9; i++) {\r\n            moveArr[i] = [];\r\n            for (var j = 0; j < 9; j++) {\r\n                moveArr[i][j] = \"\";\r\n                if (gameAr[i][j] != 0) {\r\n                    gameAr[i][j] = -9;\r\n                }\r\n            }\r\n        }\r\n        gameAr[sX][sY] = -5;\r\n        gameAr[mX][mY] = -3;\r\n        var done = false;\r\n        var l = 0;\r\n        do {\r\n            if (l == 0) {\r\n                if (gameAr[sX - 1] != undefined) {\r\n                    if (gameAr[sX - 1][sY] == 0) {\r\n                        gameAr[sX - 1][sY] = 1;\r\n                        moveArr[sX - 1][sY] = sX.toString() + sY.toString();\r\n                    }\r\n                    else if (gameAr[sX - 1][sY] == -3) {\r\n                        //znalazło mete \r\n                        moveArr[sX - 1][sY] = sX.toString() + sY.toString();\r\n                        done = true;\r\n                    }\r\n                }\r\n                if (gameAr[sX + 1] != undefined) {\r\n                    if (gameAr[sX + 1][sY] == 0) {\r\n                        gameAr[sX + 1][sY] = 1;\r\n                        moveArr[sX + 1][sY] = sX.toString() + sY.toString();\r\n                    }\r\n                    else if (gameAr[sX + 1][sY] == -3) {\r\n                        //znalazło mete \r\n                        moveArr[sX + 1][sY] = sX.toString() + sY.toString();\r\n                        done = true;\r\n                    }\r\n                }\r\n                if (gameAr[sX][sY + 1] != undefined) {\r\n                    if (gameAr[sX][sY + 1] == 0) {\r\n                        gameAr[sX][sY + 1] = 1;\r\n                        moveArr[sX][sY + 1] = sX.toString() + sY.toString();\r\n                    }\r\n                    else if (gameAr[sX][sY + 1] == -3) {\r\n                        //znalazło mete \r\n                        moveArr[sX][sY + 1] = sX.toString() + sY.toString();\r\n                        done = true;\r\n                    }\r\n                }\r\n                if (gameAr[sX][sY - 1] != undefined) {\r\n                    if (gameAr[sX][sY - 1] == 0) {\r\n                        gameAr[sX][sY - 1] = 1;\r\n                        moveArr[sX][sY - 1] = sX.toString() + sY.toString();\r\n                    }\r\n                    else if (gameAr[sX][sY - 1] == -3) {\r\n                        //znalazło mete \r\n                        moveArr[sX][sY - 1] = sX.toString() + sY.toString();\r\n                        done = true;\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                for (var i = 0; i < 9; i++) {\r\n                    for (var j = 0; j < 9; j++) {\r\n                        if (gameAr[i][j] == l) {\r\n                            if (gameAr[i - 1] != undefined) {\r\n                                if (gameAr[i - 1][j] == 0) {\r\n                                    gameAr[i - 1][j] = l + 1;\r\n                                    moveArr[i - 1][j] = moveArr[i][j] + \"_\" + i + j;\r\n                                }\r\n                                else if (gameAr[i - 1][j] == -3) {\r\n                                    moveArr[i - 1][j] = moveArr[i][j] + \"_\" + i + j;\r\n                                    done = true;\r\n                                }\r\n                            }\r\n                            if (gameAr[i + 1] != undefined) {\r\n                                if (gameAr[i + 1][j] == 0) {\r\n                                    gameAr[i + 1][j] = l + 1;\r\n                                    moveArr[i + 1][j] = moveArr[i][j] + \"_\" + i + j;\r\n                                }\r\n                                else if (gameAr[i + 1][j] == -3) {\r\n                                    moveArr[i + 1][j] = moveArr[i][j] + \"_\" + i + j;\r\n                                    done = true;\r\n                                }\r\n                            }\r\n                            if (gameAr[i][j + 1] != undefined) {\r\n                                if (gameAr[i][j + 1] == 0) {\r\n                                    gameAr[i][j + 1] = l + 1;\r\n                                    moveArr[i][j + 1] = moveArr[i][j] + \"_\" + i + j;\r\n                                }\r\n                                else if (gameAr[i][j + 1] == -3) {\r\n                                    moveArr[i][j + 1] = moveArr[i][j] + \"_\" + i + j;\r\n                                    done = true;\r\n                                }\r\n                            }\r\n                            if (gameAr[i][j - 1] != undefined) {\r\n                                if (gameAr[i][j - 1] == 0) {\r\n                                    gameAr[i][j - 1] = l + 1;\r\n                                    moveArr[i][j - 1] = moveArr[i][j] + \"_\" + i + j;\r\n                                }\r\n                                else if (gameAr[i][j - 1] == -3) {\r\n                                    moveArr[i][j - 1] = moveArr[i][j] + \"_\" + i + j;\r\n                                    done = true;\r\n                                }\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n            l++;\r\n        } while (done == false);\r\n        // console.log(\"GAME AR\")\r\n        // console.log(gameAr)\r\n        // console.log(\"MOVE ARR\")\r\n        // console.log(moveArr)\r\n        console.log(moveArr[mX][mY]);\r\n        return moveArr[mX][mY];\r\n    };\r\n    return ShortestPath;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShortestPath);\r\n\n\n//# sourceURL=webpack://kulki/./src/ShortestPath.ts?");

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