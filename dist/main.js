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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/icon?family=Material+Icons);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/************************************************\\n  Reset code\\n*************************************************/\\n*,\\n*::before,\\n*::after {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nul,\\nli {\\n  margin: 0;\\n  padding: 0;\\n  font-family: inherit;\\n  color: inherit;\\n}\\n\\ninput,\\ntextarea {\\n  font-family: inherit;\\n  font-size: 1.2rem;\\n}\\n\\nbody {\\n  display: flex;\\n  flex-direction: column;\\n  height: 99vh;\\n  font-family: sans-serif, \\\"Arial\\\";\\n}\\n\\n.d-flex {\\n  display: flex;\\n}\\n\\nbody > * {\\n  flex: 1 1 auto;\\n}\\n\\nfooter {\\n  background-color: #f5f5f7;\\n  color: #6e6e73;\\n  border: 1px solid #d2d2d7;\\n  font-family: inherit;\\n  padding: 10px;\\n}\\n\\n.width-100 {\\n  width: 100%;\\n}\\n\\n.main-cont {\\n  overflow-y: scroll;\\n  height: 99vh;\\n  padding: 5% 20%;\\n}\\n\\nli {\\n  list-style: none;\\n  padding-left: 1rem;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: inherit;\\n}\\n\\n.nav-items {\\n  justify-content: space-between;\\n  align-items: center;\\n  margin: 0 2rem;\\n  color: #fff;\\n  height: 5rem;\\n}\\n\\n.nav-links {\\n  margin-left: 2rem;\\n  justify-content: space-between;\\n  width: 10rem;\\n}\\n\\n.header {\\n  justify-content: space-between;\\n  align-items: center;\\n  background-color: #313132;\\n  padding: 0 2rem;\\n  color: #fff;\\n}\\n\\n.Img {\\n  width: 5%;\\n}\\n\\n.color-blue {\\n  color: #0070c9;\\n}\\n\\n.color-red {\\n  color: red;\\n}\\n\\n.color-dark {\\n  color: #1d1d1f;\\n}\\n\\n.bold {\\n  font-weight: bold;\\n}\\n\\n.text-small {\\n  font-size: 12px;\\n}\\n\\n.text-medium {\\n  font-size: 16px;\\n}\\n\\n.text-large {\\n  font-size: 22px;\\n}\\n\\n.flex {\\n  display: flex;\\n  gap: var(--gap, 1rem);\\n}\\n\\n.container {\\n  width: 100%;\\n  padding-inline: 20px;\\n}\\n\\n.container-80 {\\n  width: 80%;\\n  padding-inline: 20px;\\n}\\n\\n.popup {\\n  position: absolute;\\n  width: 80vw;\\n  height: 80vh;\\n  top: 10%;\\n  left: 10%;\\n  z-index: 1;\\n  overflow-y: scroll;\\n  background-color: white;\\n  margin: auto auto;\\n}\\n\\n#close-btn {\\n  display: block;\\n  margin-top: 20px;\\n  margin-right: 20px;\\n  margin-left: auto;\\n}\\n\\n.makeScrollable {\\n  overflow-y: visible;\\n}\\n\\n.makeNotScrollable {\\n  overflow-y: hidden;\\n}\\n\\n.grid {\\n  display: grid;\\n  gap: var(--gap, 1rem);\\n}\\n\\n.text-center {\\n  text-align: center;\\n}\\n\\n.column-direction {\\n  flex-direction: column;\\n}\\n\\n.align-center {\\n  align-items: center;\\n}\\n\\n.align-start {\\n  align-items: flex-start;\\n}\\n\\n.align-end {\\n  align-items: flex-end;\\n}\\n\\n.space-around {\\n  justify-content: space-around;\\n}\\n\\n.justify-start {\\n  justify-content: flex-start;\\n}\\n\\n.wrap {\\n  flex-wrap: wrap;\\n}\\n\\n.flex-1 {\\n  flex: 1;\\n}\\n\\n.flex-2 {\\n  flex: 2;\\n}\\n\\n.medium-image {\\n  width: 200px;\\n  height: auto;\\n}\\n\\n.small-image {\\n  width: 100px;\\n  height: auto;\\n}\\n\\n.width-20 {\\n  width: 20%;\\n}\\n\\n.width-30 {\\n  width: 30%;\\n}\\n\\n.height-40 {\\n  height: 40%;\\n}\\n\\n.height-50 {\\n  height: 50%;\\n}\\n\\n.height-60 {\\n  height: 60%;\\n}\\n\\n.padding-10 {\\n  padding-inline: 10%;\\n}\\n\\n.padding-y {\\n  padding-top: 10px;\\n  padding-bottom: 10px;\\n}\\n\\n.round-border {\\n  border: 1px solid darkgray;\\n  border-radius: 8px;\\n  padding: 8px;\\n}\\n\\nbutton {\\n  font-family: inherit;\\n  background-color: inherit;\\n  padding: 10px;\\n  width: 100px;\\n  margin-bottom: 10px;\\n  border-radius: 8px;\\n  border: 1px lightgray solid;\\n}\\n\\nbutton:hover {\\n  background-color: lightgray;\\n}\\n\\nimg {\\n  cursor: pointer;\\n}\\n\\nimg:hover {\\n  transform: scale(1.2);\\n}\\n\\n.clickable {\\n  cursor: pointer;\\n}\\n\\n.material-icons:hover {\\n  transform: scale(1.5);\\n}\\n\\nli a:hover {\\n  color: lightblue;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstoneprojectjavascript/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://capstoneprojectjavascript/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstoneprojectjavascript/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstoneprojectjavascript/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstoneprojectjavascript/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstoneprojectjavascript/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstoneprojectjavascript/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstoneprojectjavascript/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstoneprojectjavascript/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstoneprojectjavascript/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\nclass App {\n  async getBooksInfo() {\n    const result = await (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.makeRequest)('https://itunes.apple.com/search?term=javascript&media=ebook&limit=48&country=US');\n    this.bookList = [];\n    try {\n      if (result.results.length > 0) {\n        result.results.forEach((element) => {\n          this.bookList.push({\n            id: element.trackId,\n            image: element.artworkUrl100,\n            name: element.trackName,\n            author: element.artistName,\n          });\n        });\n      }\n    } catch {\n      return [];\n    }\n    return this.bookList;\n  }\n\n  getBooksItemsSize() {\n    return this.bookList.length;\n  }\n\n  getSongsItemsSize() {\n    return this.songList.length;\n  }\n\n  static getComments(id) {\n    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CVBeCf72ZS2klfsl0Bxs/comments?item_id=${id}`;\n    const result = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.makeRequest)(url);\n    return result;\n  }\n\n  static async getBookInfo(id) {\n    const url = ` https://itunes.apple.com/lookup?id=${id}`;\n    const result = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.makeRequest)(url);\n    return result;\n  }\n\n  async getSongsInfo() {\n    const result = await (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.makeRequest)('https://itunes.apple.com/search?term=the+beatles&media=music&limit=48&country=US');\n    this.songList = [];\n    if (result.results.length > 0) {\n      result.results.forEach((element) => {\n        this.songList.push({\n          id: element.trackId,\n          image: element.artworkUrl100,\n          name: element.trackName,\n          album: element.collectionName,\n          preview: element.previewUrl,\n          release: element.releaseDate,\n        });\n      });\n    }\n    return this.songList;\n  }\n\n  getLikesForID(id) {\n    const item = this.involmentInfo.find((element) => element.item_id === String(id));\n    if (!item) return 0;\n    return item.likes;\n  }\n\n  updateLikesForID(id) {\n    const item = this.involmentInfo.find((element) => element.item_id === String(id));\n    if (!item) this.involmentInfo.push({ item_id: String(id), likes: 1 });\n    else item.likes += 1;\n  }\n\n  static postLike(id) {\n    const body = { item_id: String(id) };\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.makeRequest)('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CVBeCf72ZS2klfsl0Bxs/likes/',\n      'POST', JSON.stringify(body));\n  }\n\n  static getBiggerImageUrl(url) {\n    let newUrl = url.substring(0, url.length - 13);\n    newUrl += '500x500bb.jpg';\n    console.log(newUrl);\n    return newUrl;\n  }\n\n  static removeMarkDown(text) {\n    const newString = text.replaceAll(/(<([^>]+)>)/ig, ' ');\n   return newString;\n  }\n\n  static showPopBook(comments, bookInfo) {\n    console.log(bookInfo);\n    const template = document.getElementById('book-popup');\n    const popup = template.content.cloneNode(true).children[0];\n    popup.querySelector('.image-book').setAttribute('src', App.getBiggerImageUrl(bookInfo.artworkUrl100));\n    popup.querySelector('.preview').setAttribute('href', bookInfo.trackViewUrl);\n    popup.querySelector('.title').textContent = bookInfo.trackName;\n    popup.querySelector('.author').textContent = bookInfo.artistName;\n    popup.querySelector('.description').textContent = App.removeMarkDown(bookInfo.description);\n    popup.querySelector('.release').textContent = bookInfo.releaseDate.substring(0, 10);\n    popup.querySelector('#close-btn').addEventListener('click', () => {\n      const pop = document.querySelector('.popup');\n      document.querySelector('body').removeChild(pop);\n      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.makeScrollable)();\n    });\n    document.querySelector('body').appendChild(popup);\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.makeNotScrollable)();\n  }\n\n  getBookCard(book, template) {\n    const card = template.content.cloneNode(true).children[0];\n    card.setAttribute('data-id', book.id);\n    card.querySelector('.title').textContent = book.name.substr(0, 80);\n    card.querySelector('.author').textContent = book.author;\n    card.querySelector('img').setAttribute('src', book.image);\n    const commentsBtn = card.querySelector('.comments-btn');\n    commentsBtn.setAttribute('data-id', book.id);\n    commentsBtn.addEventListener('click', async (e) => {\n      const promises = [];\n      promises.push(App.getComments(e.target.dataset.id));\n      promises.push(App.getBookInfo(e.target.dataset.id));\n      const resolves = await Promise.all(promises);\n      App.showPopBook(resolves[0], resolves[1].results[0]);\n    });\n    const heart = card.querySelector('.material-icons');\n    heart.setAttribute('data-id', book.id);\n    heart.addEventListener('click', (e) => {\n      App.postLike(e.target.dataset.id);\n      const likes = this.getLikesForID(e.target.dataset.id);\n      e.target.textContent = 'favorite';\n      e.target.parentNode.querySelector('.likes').textContent = likes + 1;\n      this.updateLikesForID(e.target.dataset.id);\n    });\n    const likes = this.getLikesForID(book.id);\n    if (likes === 0) card.querySelector('.material-icons').textContent = 'favorite_border';\n    else {\n      heart.textContent = 'favorite';\n      card.querySelector('.likes').textContent = likes;\n    }\n    return card;\n  }\n\n  getSongCard(song, template) {\n    const card = template.content.cloneNode(true).children[0];\n    card.setAttribute('data-id', song.id);\n    card.querySelector('.title').textContent = song.name;\n    card.querySelector('.album').textContent = song.album;\n    card.querySelector('img').setAttribute('src', song.image);\n    const heart = card.querySelector('.material-icons');\n    heart.setAttribute('data-id', song.id);\n    heart.addEventListener('click', (e) => {\n      App.postLike(e.target.dataset.id);\n      const likes = this.getLikesForID(e.target.dataset.id);\n      e.target.textContent = 'favorite';\n      e.target.parentNode.querySelector('.likes').textContent = likes + 1;\n      this.updateLikesForID(e.target.dataset.id);\n    });\n    const likes = this.getLikesForID(song.id);\n    if (likes === 0) card.querySelector('.material-icons').textContent = 'favorite_border';\n    else {\n      heart.textContent = 'favorite';\n      card.querySelector('.likes').textContent = likes;\n    }\n    return card;\n  }\n\n  async fillBookCards() {\n    this.bookList = await this.getBooksInfo();\n    const container = document.getElementById('items-container');\n    while (container.lastChild) container.removeChild(container.lastChild);\n    const template = document.getElementById('book-template');\n    this.bookList.forEach((book) => {\n      const card = this.getBookCard(book, template);\n      container.appendChild(card);\n    });\n    document.querySelector('header a[data-href=\"books\"]').textContent = `Books (${this.getBooksItemsSize()})`;\n    document.querySelector('header a[data-href=\"music\"]').textContent = 'Music';\n  }\n\n  async fillSongCards() {\n    this.songList = await this.getSongsInfo();\n    const container = document.getElementById('items-container');\n    while (container.lastChild) container.removeChild(container.lastChild);\n    const template = document.getElementById('song-template');\n    this.songList.forEach((book) => {\n      const card = this.getSongCard(book, template);\n      container.appendChild(card);\n    });\n    document.querySelector('header a[data-href=\"music\"]').textContent = `Music (${this.getBooksItemsSize()})`;\n    document.querySelector('header a[data-href=\"books\"]').textContent = 'Books';\n  }\n\n  async getInvolmentInfo() {\n    this.involmentInfo = await (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.makeRequest)('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CVBeCf72ZS2klfsl0Bxs/likes/');\n    this.involmentInfo.sort((first, second) => {\n      if (first.item_id > second.item_id) return -1;\n      if (first.item_id < second.item_id) return 1;\n      return 0;\n    });\n  }\n\n  async init() {\n    await this.getInvolmentInfo();\n    await this.fillBookCards();\n  }\n\n  addEventListeners() {\n    document.addEventListener('click', async (e) => {\n      if (e.target.matches('header a')) {\n        await this.getInvolmentInfo();\n        if (e.target.dataset.href === 'music') {\n          this.fillSongCards();\n          return;\n        }\n        if (e.target.dataset.href === 'books') {\n          this.fillBookCards();\n        }\n      }\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://capstoneprojectjavascript/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_itunesW_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/itunesW.png */ \"./src/assets/itunesW.png\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n\n\n\n\ndocument.querySelector('header img').setAttribute('src', _assets_itunesW_png__WEBPACK_IMPORTED_MODULE_1__);\n\nconst theApp = new _app_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\ntheApp.init();\ntheApp.addEventListeners();\n\n//# sourceURL=webpack://capstoneprojectjavascript/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeRequest\": () => (/* binding */ makeRequest),\n/* harmony export */   \"makeScrollable\": () => (/* binding */ makeScrollable),\n/* harmony export */   \"makeNotScrollable\": () => (/* binding */ makeNotScrollable)\n/* harmony export */ });\nasync function makeRequest(url, method = 'GET', Body = '') {\n  try {\n    const options = {\n      method: `${method}`,\n      headers: {\n        'Content-Type': 'application/json',\n        Accept: 'application/json',\n      },\n      mode: 'cors',\n      cache: 'no-cache',\n      credentials: 'same-origin',\n    };\n    if (Body !== '') options.body = Body;\n    const result = await fetch(url, options);\n    if (result.status === 200) return result.json();\n    return [];\n  } catch {\n    return [];\n  }\n}\n\nfunction makeScrollable() {\n  const body = document.querySelector('body');\n  body.classList.remove('makeNotScrollable');\n  body.classList.add('makeScrollable');\n}\n\nfunction makeNotScrollable() {\n  const body = document.querySelector('body');\n  body.classList.remove('makeScrollable');\n  body.classList.add('makeNotScrollable');\n}\n\n\n\n//# sourceURL=webpack://capstoneprojectjavascript/./src/utils.js?");

/***/ }),

/***/ "./src/assets/itunesW.png":
/*!********************************!*\
  !*** ./src/assets/itunesW.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b54014655345e172051b.png\";\n\n//# sourceURL=webpack://capstoneprojectjavascript/./src/assets/itunesW.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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