/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#container {\\n\\tdisplay: grid;\\n\\tgrid-template-columns: 250px 500px 500px;\\n\\tgrid-template-rows: 250px 500px;\\n\\tgrid-column-gap: 30px;\\n\\tgrid-template-areas:\\n\\t\\t'header header header'\\n\\t\\t'ships humanBoard computerBoard';\\n\\n\\talign-items: baseline;\\n}\\n\\n#ships {\\n\\theight: 400px;\\n\\twidth: 250px;\\n\\tpadding-top: 30px;\\n\\tborder: 1px black solid;\\n}\\n\\n.board {\\n\\tdisplay: grid;\\n\\theight: 500px;\\n\\twidth: 500px;\\n\\tgrid-template-columns: repeat(11, 45px);\\n\\tgrid-template-rows: repeat(11, 45px);\\n\\tgrid-gap: 1;\\n}\\n\\n.board > div {\\n\\tborder: 1px black solid;\\n}\\n\\n.label {\\n\\tborder: none !important;\\n}\\n\\n.row-label {\\n\\talign-self: end;\\n\\tjustify-self: center;\\n\\tpadding-bottom: 5px;\\n}\\n\\n.column-label {\\n\\tjustify-self: end;\\n\\talign-self: center;\\n\\tpadding-right: 5px;\\n}\\n\\n#humanBoard .board {\\n\\tgrid-area: humanBoard;\\n}\\n\\n#computerBoard .board {\\n\\tgrid-area: computerBoard;\\n}\\n\\n.ship {\\n\\tbackground-color: pink;\\n\\tgrid-gap: 0px;\\n\\tborder: 1px rgb(180, 139, 146) !important;\\n}\\n\\n.hit {\\n\\tbackground-color: red !important;\\n}\\n\\n.miss {\\n\\tbackground-color: gray !important;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _gameObjects_Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameObjects/Gameboard */ \"./src/gameObjects/Gameboard.js\");\n/* harmony import */ var _gameObjects_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameObjects/Player */ \"./src/gameObjects/Player.js\");\n/* harmony import */ var _gameObjects_Ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameObjects/Ship */ \"./src/gameObjects/Ship.js\");\n\n\n\n\n\nconst Game = (() => {\n\tconst human = Object(_gameObjects_Player__WEBPACK_IMPORTED_MODULE_2__[\"Player\"])();\n\tconst computer = Object(_gameObjects_Player__WEBPACK_IMPORTED_MODULE_2__[\"Player\"])('computer');\n\tconst humanBoard = Object(_gameObjects_Gameboard__WEBPACK_IMPORTED_MODULE_1__[\"Gameboard\"])();\n\tconst computerBoard = Object(_gameObjects_Gameboard__WEBPACK_IMPORTED_MODULE_1__[\"Gameboard\"])();\n\n\tconst getBoardDOM = () => {\n\t\tconst humanBoardDOM = document.getElementById('humanBoard');\n\t\tconst computerBoardDOM = document.getElementById('computerBoard');\n\t\treturn { human: humanBoardDOM, computer: computerBoardDOM };\n\t};\n\n\tconst getShips = () => {\n\t\treturn [\n\t\t\tObject(_gameObjects_Ship__WEBPACK_IMPORTED_MODULE_3__[\"Ship\"])(4),\n\t\t\tObject(_gameObjects_Ship__WEBPACK_IMPORTED_MODULE_3__[\"Ship\"])(3),\n\t\t\tObject(_gameObjects_Ship__WEBPACK_IMPORTED_MODULE_3__[\"Ship\"])(3),\n\t\t\tObject(_gameObjects_Ship__WEBPACK_IMPORTED_MODULE_3__[\"Ship\"])(2),\n\t\t\tObject(_gameObjects_Ship__WEBPACK_IMPORTED_MODULE_3__[\"Ship\"])(2),\n\t\t\tObject(_gameObjects_Ship__WEBPACK_IMPORTED_MODULE_3__[\"Ship\"])(2),\n\t\t\tObject(_gameObjects_Ship__WEBPACK_IMPORTED_MODULE_3__[\"Ship\"])(1),\n\t\t\tObject(_gameObjects_Ship__WEBPACK_IMPORTED_MODULE_3__[\"Ship\"])(1),\n\t\t\tObject(_gameObjects_Ship__WEBPACK_IMPORTED_MODULE_3__[\"Ship\"])(1),\n\t\t\tObject(_gameObjects_Ship__WEBPACK_IMPORTED_MODULE_3__[\"Ship\"])(1),\n\t\t];\n\t};\n\n\tconst placeShips = (board) => {\n\t\tconst ships = getShips();\n\t\tboard.place(ships[0], 'ver', 'A1');\n\t\tboard.place(ships[1], 'hor', 'C1');\n\t\tboard.place(ships[2], 'hor', 'E4');\n\t\tboard.place(ships[3], 'ver', 'H6');\n\t};\n\tplaceShips(humanBoard);\n\tplaceShips(computerBoard);\n\n\tconst updateBoard = (board, boardDOM, move) => {\n\t\tconst theBoard = board.getBoard();\n\t\tif (board.gameOver()) {\n\t\t\tconsole.log('Game Over!');\n\t\t} else {\n\t\t\tif (move in theBoard) {\n\t\t\t\tboardDOM.querySelector(['.', move].join('')).classList.add('hit');\n\t\t\t} else {\n\t\t\t\tboardDOM.querySelector(['.', move].join('')).classList.add('miss');\n\t\t\t}\n\t\t}\n\t};\n\n\tconst boardClick = (e) => {\n\t\tif (human.getTurn()) {\n\t\t\te.target.removeEventListener('click', boardClick);\n\t\t\tlet humanMove = human.attack(computer, e.target.classList[0]);\n\t\t\tupdateBoard(computerBoard, getBoardDOM().computer, humanMove);\n\t\t\twhile (computer.getTurn()) {\n\t\t\t\tlet computerMove = computer.attack(human);\n\t\t\t\tupdateBoard(humanBoard, getBoardDOM().human, computerMove);\n\t\t\t}\n\t\t}\n\t};\n\n\tconst buildBoard = (board, computer = false) => {\n\t\tconst ids = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"setMoves\"])();\n\t\tconst boardDOM = document.createElement('div');\n\t\tboardDOM.classList.add('board');\n\n\t\tconst alpha = 'ABCDEFGHIJ'.split('');\n\t\tconst num = [...Array(11).keys()].slice(1).reverse();\n\n\t\talpha.forEach((letter, i) => {\n\t\t\t//adding row labels here\n\t\t\tif (i === 0) {\n\t\t\t\tconst blank = document.createElement('div');\n\t\t\t\tblank.classList.add('blank');\n\t\t\t\tblank.classList.add('label');\n\t\t\t\tboardDOM.appendChild(blank);\n\t\t\t}\n\t\t\tconst rowLabel = document.createElement('div');\n\t\t\trowLabel.classList.add(letter);\n\t\t\trowLabel.classList.add('label');\n\t\t\trowLabel.classList.add('row-label');\n\t\t\trowLabel.innerHTML = letter;\n\t\t\tboardDOM.appendChild(rowLabel);\n\t\t});\n\n\t\tids.forEach((id, i) => {\n\t\t\tif (i + 1 === 1 || i % 10 === 0) {\n\t\t\t\t//adding column labels here\n\t\t\t\tconst columnLabel = document.createElement('div');\n\t\t\t\tconst classId = num.pop();\n\t\t\t\tcolumnLabel.classList.add(classId);\n\t\t\t\tcolumnLabel.classList.add('label');\n\t\t\t\tcolumnLabel.classList.add('column-label');\n\t\t\t\tcolumnLabel.innerHTML = classId;\n\t\t\t\tboardDOM.appendChild(columnLabel);\n\t\t\t}\n\t\t\t//actual board elements\n\t\t\tconst boardElement = document.createElement('div');\n\t\t\tboardElement.classList.add(id);\n\t\t\tboardElement.classList.add('board-element');\n\t\t\tif (id in board.getBoard()) {\n\t\t\t\tboardElement.classList.add('ship');\n\t\t\t}\n\t\t\tif (computer) boardElement.addEventListener('click', boardClick);\n\t\t\tboardDOM.appendChild(boardElement);\n\t\t});\n\t\treturn boardDOM;\n\t};\n\n\tconst setBoards = () => {\n\t\tgetBoardDOM().human.appendChild(buildBoard(humanBoard));\n\t\tgetBoardDOM().computer.appendChild(buildBoard(computerBoard, true));\n\t};\n\n\tconst render = () => {\n\t\tsetBoards();\n\t\thuman.setBoard(humanBoard);\n\t\tcomputer.setBoard(computerBoard);\n\t};\n\n\treturn { render };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/Game.js?");

/***/ }),

/***/ "./src/gameObjects/Gameboard.js":
/*!**************************************!*\
  !*** ./src/gameObjects/Gameboard.js ***!
  \**************************************/
/*! exports provided: Gameboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Gameboard\", function() { return Gameboard; });\nconst Gameboard = () => {\n\tconst board = {};\n\tlet misses = 0;\n\n\tconst place = (ship, orientation, coords) => {\n\t\tconst letter = coords.split('')[0];\n\t\tconst num = Number(coords.split('').slice(1).join(''));\n\t\tif (orientation === 'hor') {\n\t\t\tconst letnum = letter.charCodeAt(0);\n\t\t\tfor (let i = 0; i < ship.length(); i++) {\n\t\t\t\tboard[String.fromCharCode(letnum + i) + num] = {\n\t\t\t\t\tship: ship,\n\t\t\t\t\tindex: i,\n\t\t\t\t\thit: false,\n\t\t\t\t};\n\t\t\t}\n\t\t} else if (orientation === 'ver') {\n\t\t\tfor (let i = 0; i < ship.length(); i++) {\n\t\t\t\tboard[letter + (num + i)] = { ship: ship, index: i };\n\t\t\t}\n\t\t}\n\t};\n\n\tconst receiveAttack = (coords) => {\n\t\tif (coords == null) {\n\t\t\tthrow Error('you fucked up!');\n\t\t}\n\t\tif (!(coords in board)) {\n\t\t\tmisses++;\n\t\t\treturn false;\n\t\t} else {\n\t\t\tconst boardObj = board[coords];\n\t\t\tboardObj.ship.hit(boardObj.index);\n\t\t\tboardObj.hit = true;\n\t\t\treturn true;\n\t\t}\n\t};\n\n\tconst getMisses = () => misses;\n\n\tconst gameOver = () => {\n\t\tfor (const key in board) {\n\t\t\tif (!board[key].ship.isSunk()) return false;\n\t\t}\n\t\treturn true;\n\t};\n\n\tconst getBoard = () => board;\n\n\treturn { place, receiveAttack, getMisses, getBoard, gameOver };\n};\n\n\n\n\n//# sourceURL=webpack:///./src/gameObjects/Gameboard.js?");

/***/ }),

/***/ "./src/gameObjects/Player.js":
/*!***********************************!*\
  !*** ./src/gameObjects/Player.js ***!
  \***********************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers.js\");\n\n\nconst Player = (user = 'human') => {\n\tlet allMoves = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"setMoves\"])();\n\tlet turn = user === 'human' ? true : false;\n\tlet board;\n\n\tconst setBoard = (b) => {\n\t\tboard = b;\n\t};\n\tconst getBoard = () => board;\n\n\tconst attack = (enemy, coords) => {\n\t\tif (user === 'computer') {\n\t\t\tcoords = getMove();\n\t\t}\n\t\tlet hit = enemy.getBoard().receiveAttack(coords);\n\t\thistory[coords] = true;\n\t\tif (!hit) {\n\t\t\tenemy.setTurn();\n\t\t\tsetTurn();\n\t\t}\n\t\treturn coords;\n\t};\n\n\tconst getTurn = () => turn;\n\tconst setTurn = () => {\n\t\tturn = turn ? false : true;\n\t};\n\n\tconst getMove = () => {\n\t\tlet num = Math.floor(Math.random() * allMoves.length);\n\t\tlet move = allMoves[num];\n\t\tallMoves = allMoves.filter((e) => e != move);\n\t\treturn move;\n\t};\n\n\t// const setMoves = () => {\n\t// \tconst alpha = 'ABCDEFGHIJ'.split('');\n\t// \tconst num = [...Array(11).keys()].slice(1);\n\t// \tlet f = (a, b) => [].concat(...a.map((a) => b.map((b) => [].concat(a, b))));\n\t// \tlet cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);\n\t// \tlet allMoves = [];\n\t// \tcartesian(alpha, num).forEach((e) => {\n\t// \t\tallMoves.push(e.join(''));\n\t// \t});\n\t// \treturn allMoves;\n\t// };\n\n\treturn { setBoard, getBoard, attack, getTurn, setTurn };\n};\n\n\n\n\n//# sourceURL=webpack:///./src/gameObjects/Player.js?");

/***/ }),

/***/ "./src/gameObjects/Ship.js":
/*!*********************************!*\
  !*** ./src/gameObjects/Ship.js ***!
  \*********************************/
/*! exports provided: Ship */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ship\", function() { return Ship; });\nconst Ship = (l) => {\n\tconst ship = Array(l).fill(0);\n\tconst sum = () => ship.reduce((a, b) => a + b);\n\tconst length = () => ship.length;\n\tconst isSunk = () => sum() === length();\n\tconst isHit = () => sum() >= 1;\n\tconst hit = (position) => {\n\t\tship[position] = 1;\n\t};\n\tconst getShip = () => ship;\n\n\treturn { length, isSunk, isHit, hit, getShip };\n};\n\n\n\n\n//# sourceURL=webpack:///./src/gameObjects/Ship.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: setMoves */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setMoves\", function() { return setMoves; });\nconst setMoves = () => {\n\tconst alpha = 'ABCDEFGHIJ'.split('');\n\tconst num = [...Array(11).keys()].slice(1);\n\tlet f = (a, b) => [].concat(...a.map((a) => b.map((b) => [].concat(a, b))));\n\tlet cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);\n\tlet allMoves = [];\n\tlet letnum = cartesian(alpha, num);\n\t[...Array(11).keys()].slice(1).forEach((i) => {\n\t\tletnum.forEach((e) => {\n\t\t\tif (e[1] === i) allMoves.push(e.join(''));\n\t\t});\n\t});\n\n\treturn allMoves;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup */ \"./src/setup.js\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n\n\n\n\nObject(_setup__WEBPACK_IMPORTED_MODULE_1__[\"setup\"])();\n_Game__WEBPACK_IMPORTED_MODULE_2__[\"Game\"].render();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/setup.js":
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
/*! exports provided: setup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setup\", function() { return setup; });\nconst setup = () => {\n\tconst container = document.createElement('div');\n\tcontainer.setAttribute('id', 'container');\n\tdocument.body.appendChild(container);\n\n\tconst ships = document.createElement('div');\n\tconst board1 = document.createElement('div');\n\tconst board2 = document.createElement('div');\n\n\tships.setAttribute('id', 'ships');\n\tboard1.setAttribute('id', 'humanBoard');\n\tboard2.setAttribute('id', 'computerBoard');\n\n\tcontainer.appendChild(ships);\n\tcontainer.appendChild(board1);\n\tcontainer.appendChild(board2);\n};\n\n\n\n\n//# sourceURL=webpack:///./src/setup.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });