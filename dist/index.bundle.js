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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/range.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/range.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Lato|Source+Sans+Pro&display=swap);\"]);\n// Module\nexports.push([module.i, \"html, body {\\n  height: 100%; }\\n\\nbody {\\n  font-family: \\\"Lato\\\", sans-serif;\\n  color: white;\\n  background-color: #89BBF3;\\n  margin: 0;\\n  padding: 0;\\n  justify-content: center;\\n  align-items: center;\\n  display: flex; }\\n\\n.line {\\n  width: 90%;\\n  border: none;\\n  border-top: 2px solid #22354E;\\n  margin-bottom: 2em; }\\n\\n.wrapper {\\n  width: 60%;\\n  min-height: 600px;\\n  min-width: 300px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  background-color: #091F40;\\n  color: white;\\n  border-radius: 20px;\\n  -webkit-box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);\\n  -moz-box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);\\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5); }\\n  .wrapper h1 {\\n    font-size: 4em;\\n    text-align: center; }\\n\\n.passwordContainer {\\n  background-color: #22354E;\\n  border-radius: 20px;\\n  width: 90%;\\n  min-height: 100px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center; }\\n  .passwordContainer:hover {\\n    background-color: rgba(34, 53, 78, 0.8);\\n    cursor: pointer; }\\n  .passwordContainer h3 {\\n    margin-bottom: 0; }\\n  .passwordContainer h2 {\\n    text-align: center;\\n    font-size: 1rem; }\\n\\n.options {\\n  display: flex;\\n  flex-direction: column;\\n  width: 80%;\\n  align-items: center;\\n  justify-content: center; }\\n\\n.container {\\n  text-align: center;\\n  display: flex;\\n  align-items: center;\\n  width: 100%;\\n  justify-content: center; }\\n  .container p {\\n    margin-right: 5px; }\\n\\n#rangeDigit {\\n  min-width: 20px;\\n  margin-left: 1em;\\n  color: white; }\\n\\n.buttonGenerate {\\n  background-color: #22354E;\\n  color: white;\\n  border-radius: 20px;\\n  border: none;\\n  padding: 16px 32px;\\n  text-align: center;\\n  text-decoration: none;\\n  display: inline-block;\\n  font-size: 16px;\\n  margin: 4px 2px;\\n  transition-duration: 0.4s;\\n  cursor: pointer; }\\n  .buttonGenerate:hover {\\n    background-color: #6B6AFF; }\\n\\n.slider {\\n  -webkit-appearance: none;\\n  width: 100%;\\n  height: 15px;\\n  border-radius: 5px;\\n  background: #22354E;\\n  outline: none;\\n  -webkit-transition: .2s;\\n  transition: opacity .2s; }\\n  .slider::-webkit-slider-thumb {\\n    -webkit-appearance: none;\\n    appearance: none;\\n    width: 25px;\\n    height: 25px;\\n    border-radius: 50%;\\n    background: white;\\n    cursor: pointer; }\\n    .slider::-webkit-slider-thumb:active {\\n      background: #6B6AFF; }\\n  .slider::-moz-range-thumb {\\n    width: 25px;\\n    height: 25px;\\n    border-radius: 50%;\\n    background: white;\\n    cursor: pointer; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/range.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Lato|Source+Sans+Pro&display=swap);\"]);\n// Module\nexports.push([module.i, \"html, body {\\n  height: 100%; }\\n\\nbody {\\n  font-family: \\\"Lato\\\", sans-serif;\\n  color: white;\\n  background-color: #89BBF3;\\n  margin: 0;\\n  padding: 0;\\n  justify-content: center;\\n  align-items: center;\\n  display: flex; }\\n\\n.line {\\n  width: 90%;\\n  border: none;\\n  border-top: 2px solid #22354E;\\n  margin-bottom: 2em; }\\n\\n.wrapper {\\n  width: 60%;\\n  min-height: 600px;\\n  min-width: 300px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  background-color: #091F40;\\n  color: white;\\n  border-radius: 20px;\\n  -webkit-box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);\\n  -moz-box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);\\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5); }\\n  .wrapper h1 {\\n    font-size: 4em;\\n    text-align: center; }\\n\\n.passwordContainer {\\n  background-color: #22354E;\\n  border-radius: 20px;\\n  width: 90%;\\n  min-height: 100px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center; }\\n  .passwordContainer:hover {\\n    background-color: rgba(34, 53, 78, 0.8);\\n    cursor: pointer; }\\n  .passwordContainer h3 {\\n    margin-bottom: 0; }\\n  .passwordContainer h2 {\\n    text-align: center;\\n    font-size: 1rem; }\\n\\n.options {\\n  display: flex;\\n  flex-direction: column;\\n  width: 80%;\\n  align-items: center;\\n  justify-content: center; }\\n\\n.container {\\n  text-align: center;\\n  display: flex;\\n  align-items: center;\\n  width: 100%;\\n  justify-content: center; }\\n  .container p {\\n    margin-right: 5px; }\\n\\n#rangeDigit {\\n  min-width: 20px;\\n  margin-left: 1em;\\n  color: white; }\\n\\n.buttonGenerate {\\n  background-color: #22354E;\\n  color: white;\\n  border-radius: 20px;\\n  border: none;\\n  padding: 16px 32px;\\n  text-align: center;\\n  text-decoration: none;\\n  display: inline-block;\\n  font-size: 16px;\\n  margin: 4px 2px;\\n  transition-duration: 0.4s;\\n  cursor: pointer; }\\n  .buttonGenerate:hover {\\n    background-color: #6B6AFF; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/switch.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/switch.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Lato|Source+Sans+Pro&display=swap);\"]);\n// Module\nexports.push([module.i, \"html, body {\\n  height: 100%; }\\n\\nbody {\\n  font-family: \\\"Lato\\\", sans-serif;\\n  color: white;\\n  background-color: #89BBF3;\\n  margin: 0;\\n  padding: 0;\\n  justify-content: center;\\n  align-items: center;\\n  display: flex; }\\n\\n.line {\\n  width: 90%;\\n  border: none;\\n  border-top: 2px solid #22354E;\\n  margin-bottom: 2em; }\\n\\n.wrapper {\\n  width: 60%;\\n  min-height: 600px;\\n  min-width: 300px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  background-color: #091F40;\\n  color: white;\\n  border-radius: 20px;\\n  -webkit-box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);\\n  -moz-box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);\\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5); }\\n  .wrapper h1 {\\n    font-size: 4em;\\n    text-align: center; }\\n\\n.passwordContainer {\\n  background-color: #22354E;\\n  border-radius: 20px;\\n  width: 90%;\\n  min-height: 100px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center; }\\n  .passwordContainer:hover {\\n    background-color: rgba(34, 53, 78, 0.8);\\n    cursor: pointer; }\\n  .passwordContainer h3 {\\n    margin-bottom: 0; }\\n  .passwordContainer h2 {\\n    text-align: center;\\n    font-size: 1rem; }\\n\\n.options {\\n  display: flex;\\n  flex-direction: column;\\n  width: 80%;\\n  align-items: center;\\n  justify-content: center; }\\n\\n.container {\\n  text-align: center;\\n  display: flex;\\n  align-items: center;\\n  width: 100%;\\n  justify-content: center; }\\n  .container p {\\n    margin-right: 5px; }\\n\\n#rangeDigit {\\n  min-width: 20px;\\n  margin-left: 1em;\\n  color: white; }\\n\\n.buttonGenerate {\\n  background-color: #22354E;\\n  color: white;\\n  border-radius: 20px;\\n  border: none;\\n  padding: 16px 32px;\\n  text-align: center;\\n  text-decoration: none;\\n  display: inline-block;\\n  font-size: 16px;\\n  margin: 4px 2px;\\n  transition-duration: 0.4s;\\n  cursor: pointer; }\\n  .buttonGenerate:hover {\\n    background-color: #6B6AFF; }\\n\\n.switch {\\n  position: relative;\\n  display: inline-block;\\n  width: 60px;\\n  height: 34px; }\\n  .switch input {\\n    opacity: 0;\\n    width: 0;\\n    height: 0; }\\n    .switch input:checked + .switchSlider {\\n      background-color: #6B6AFF; }\\n    .switch input:focus + .switchSlider {\\n      box-shadow: 0 0 1px #6B6AFF; }\\n    .switch input:checked + .switchSlider:before {\\n      -webkit-transform: translateX(26px);\\n      -ms-transform: translateX(26px);\\n      transform: translateX(26px); }\\n\\n.switchSlider {\\n  position: absolute;\\n  cursor: pointer;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  background-color: #22354E;\\n  -webkit-transition: .4s;\\n  transition: .4s;\\n  border-radius: 34px; }\\n\\n.switchSlider:before {\\n  position: absolute;\\n  content: \\\"\\\";\\n  height: 26px;\\n  width: 26px;\\n  left: 4px;\\n  bottom: 4px;\\n  background-color: white;\\n  -webkit-transition: .4s;\\n  transition: .4s;\\n  border-radius: 50%; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/switch.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction addModulesToDom(id, list, options) {\n  id = options.base ? id + options.base : id;\n\n  if (!stylesInDom[id]) {\n    stylesInDom[id] = [];\n  }\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var part = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n    var styleInDomById = stylesInDom[id];\n\n    if (styleInDomById[i]) {\n      styleInDomById[i].updater(part);\n    } else {\n      styleInDomById.push({\n        updater: addStyle(part, options)\n      });\n    }\n  }\n\n  for (var j = list.length; j < stylesInDom[id].length; j++) {\n    stylesInDom[id][j].updater();\n  }\n\n  stylesInDom[id].length = list.length;\n\n  if (stylesInDom[id].length === 0) {\n    delete stylesInDom[id];\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (id, list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  addModulesToDom(id, list, options);\n  return function update(newList) {\n    addModulesToDom(id, newList || [], options);\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _switch_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switch.scss */ \"./src/switch.scss\");\n/* harmony import */ var _switch_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_switch_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _range_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./range.scss */ \"./src/range.scss\");\n/* harmony import */ var _range_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_range_scss__WEBPACK_IMPORTED_MODULE_2__);\n// scss styles \r\n\r\n\r\n\r\n// checkboxes and slider\r\nvar slider = document.getElementById(\"rangePassword\");\r\nvar rangeDigit = document.getElementById(\"rangeDigit\");\r\nvar capitalLetters = document.getElementById(\"checkboxCapitalLetters\");\r\nvar specialCharacters = document.getElementById(\"checkboxSpecialCharacters\");\r\nvar button = document.getElementById(\"generate\");\r\n//\r\n// event change for slider\r\nslider.addEventListener(\"input\", sliderChange);\r\nfunction sliderChange() {\r\n    rangeDigit.innerText = slider.value;\r\n}\r\n//final password array\r\nvar passwordArray = [];\r\nvar finalPassword = [];\r\n//number to ASCII from -> to\r\nfunction arrayFromCharToLetter(from, to) {\r\n    var finalArray = [];\r\n    for (var i = from; i <= to; i++) {\r\n        finalArray.push(String.fromCharCode(i));\r\n    }\r\n    return finalArray;\r\n}\r\n//create password function\r\nbutton.addEventListener(\"click\", generate);\r\nfunction generate() {\r\n    passwordArray = arrayFromCharToLetter(97, 122);\r\n    finalPassword = [];\r\n    console.log(capitalLetters.checked);\r\n    if (capitalLetters.checked) {\r\n        var capitalArray = arrayFromCharToLetter(65, 90);\r\n        passwordArray = passwordArray.concat(capitalArray);\r\n    }\r\n    if (specialCharacters.checked) {\r\n        var specialcharacters1 = arrayFromCharToLetter(33, 47);\r\n        var specialcharacters2 = arrayFromCharToLetter(58, 64);\r\n        passwordArray = passwordArray.concat(specialcharacters1, specialcharacters2);\r\n    }\r\n    getRandomValues(parseInt(slider.value));\r\n    var passwordOutput = document.getElementById(\"password\");\r\n    passwordOutput.innerText = finalPassword.join(\"\");\r\n}\r\nfunction getRandomValues(length) {\r\n    for (var i = 0; i < length; i++) {\r\n        var randNumber = Math.floor(Math.random() * passwordArray.length);\r\n        finalPassword.push(passwordArray[randNumber]);\r\n    }\r\n}\r\n//copy password after clicking password\r\ndocument.getElementsByClassName(\"passwordContainer\")[0].addEventListener(\"click\", copyPassword);\r\nfunction copyPassword() {\r\n    var range = document.createRange();\r\n    range.selectNode(document.getElementById(\"password\"));\r\n    window.getSelection().removeAllRanges(); // clear current selection\r\n    window.getSelection().addRange(range); // to select text\r\n    document.execCommand(\"copy\");\r\n    window.getSelection().removeAllRanges(); // to deselect\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/range.scss":
/*!************************!*\
  !*** ./src/range.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./range.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/range.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar id = \"!!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./range.scss\";\nvar update = api(id, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/range.scss?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar id = \"!!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss\";\nvar update = api(id, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ }),

/***/ "./src/switch.scss":
/*!*************************!*\
  !*** ./src/switch.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./switch.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/switch.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar id = \"!!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./switch.scss\";\nvar update = api(id, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/switch.scss?");

/***/ })

/******/ });