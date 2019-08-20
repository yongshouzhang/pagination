(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pagination\", function() { return pagination; });\n/* harmony import */ var _pagination_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.less */ \"./pagination.less\");\n/* harmony import */ var _pagination_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pagination_less__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\n/*\r\n*@container: 必须为原生dom 对象\r\n*/\r\nfunction pagination(container) {\r\n    var fn = Object.prototype.toString;\r\n    var isNode = function (obj) {\r\n        return fn.call(obj) === fn.call(document.body);\r\n    }, isObject = function (obj) {\r\n        return fn.call(obj) === fn.call({});\r\n    };\r\n\r\n    var addClass = function (ele, className) {\r\n        if (hasClass(ele, className)) {\r\n            return false;\r\n        }\r\n        ele.className = ele.className.split(\" \")\r\n            .filter(function (obj) {\r\n                return obj.trim();\r\n            }).concat([className]).join(\" \");\r\n    },\r\n        removeClass = function (ele, className) {\r\n            var reg = new RegExp(\"\\\\b\" + className + \"\\\\b\", 'i');\r\n            ele.className = ele.className.replace(reg, \"\");\r\n        },\r\n        hasClass = function (ele, className) {\r\n            return new RegExp(\"\\\\b\" + className + \"\\\\b\", 'i').test(ele.className);\r\n        };\r\n        \r\n\r\n    var div = document.createElement(\"div\");\r\n    addClass(div, \"_pagination_\");\r\n\r\n    var options = {};\r\n\r\n    div.style.display=\"none\";\r\n    div.addEventListener(\"click\", function (evt) {\r\n        var ele = evt.target;\r\n        if (hasClass(ele, \"_first_\")) {\r\n            if(options.pi===1) return false;\r\n            options.cb(1, options.ps);\r\n            return false;\r\n        }\r\n        if (hasClass(ele, \"_last_\")) {\r\n            if(options.pi===options.pageCount) \r\n            return false;\r\n            options.cb(options.pageCount, options.ps);\r\n            return false;\r\n        }\r\n        if (hasClass(ele, \"_prev_\")) {\r\n            if(options.pi===1) return false;\r\n            options.cb(options.pi - 1, options.ps);\r\n            return false;\r\n        }\r\n        if (hasClass(ele, \"_next_\")) {\r\n            if(options.pi===options.pageCount) \r\n            return false;\r\n            options.cb(options.pi + 1, options.ps);\r\n            return false;\r\n        }\r\n        if (hasClass(ele, \"_prev_five_\")) {\r\n            if(options.pi===1) return false;\r\n            options.cb(options.begin-1,options.ps);\r\n            return false;\r\n        }\r\n        if (hasClass(ele, \"_next_five_\")) {\r\n            if(options.pi===options.pageCount) \r\n            return false;\r\n            options.cb(options.end+1,options.ps);\r\n            return false;\r\n        }\r\n        if(hasClass(ele,\"_num_\")){\r\n           if(hasClass(ele,\"_current_\")) {\r\n               return false;\r\n           }\r\n           if(isNaN(ele.innerText)){\r\n               return false;\r\n           }\r\n           options.cb(+ele.innerText,options.ps);\r\n           return false;\r\n        }\r\n    },false);\r\n\r\n    var txtList = [\"<<\", \"<\",\"\", \">\", \">>\"];\r\n    [\"_first_\", \"_prev_\", \"_body_\", \"_next_\", \"_last_\"].map(function (obj, index) {\r\n        let ele = document.createElement((index === 2 ? \"ul\" : \"span\"));\r\n        ele.innerText = txtList[index];\r\n        addClass(ele, obj);\r\n        return ele;\r\n    }).forEach(function (obj) {\r\n        div.appendChild(obj);\r\n    });\r\n\r\n    container.appendChild(div);\r\n\r\n    var showNum = 5;\r\n    var ul = div.getElementsByTagName(\"ul\")[0];\r\n\r\n    this.update = function (param) {\r\n        ul.innerHTML='';\r\n        if (!isObject(param)) {\r\n            throw (\" update 参数应为对象{pi:[number],ps:[number],cb:[function],count:[number]}\");\r\n        }\r\n\r\n        var pi = param.pi || 1, ps = param.ps || 10, count = param.count || 0, cb = param.cb || function () { };\r\n        var pageCount = Math.ceil(count / ps);\r\n        // 小于2页不渲染\r\n        if (pageCount < 2){\r\n            div.style.display = \"none\";\r\n            return false;\r\n        }\r\n\r\n\r\n        pi = pi > pageCount ? pageCount : pi;\r\n        var eleList = [];\r\n\r\n        var t = Math.ceil(pi / showNum);\r\n\r\n        var begin = (t - 1) * showNum + 1, end = t * showNum;\r\n        end = end > pageCount ? pageCount : end;\r\n\r\n        options.pi = pi;\r\n        options.ps = ps;\r\n        options.cb = cb;\r\n        options.pageCount = pageCount;\r\n        options.begin = begin;\r\n        options.end = end;\r\n        \r\n\r\n        for (let i = begin; i <= end; i++) {\r\n            let ele = document.createElement(\"li\");\r\n            ele.innerText = i;\r\n            addClass(ele,\"_num_\");\r\n            if (i === pi) {\r\n                addClass(ele, \"_current_\");\r\n            }\r\n            eleList.push(ele);\r\n        }\r\n\r\n        if (begin !== 1) {\r\n            let prevFive = document.createElement(\"li\");\r\n            prevFive.innerText = \"...\";\r\n            addClass(prevFive, \"_prev_five_\");\r\n            eleList.unshift(prevFive);\r\n        }\r\n\r\n        if (end !== pageCount) {\r\n            let nextFive = document.createElement(\"li\");\r\n            nextFive.innerText = \"...\";\r\n            addClass(nextFive, \"_next_five_\");\r\n            eleList.push(nextFive);\r\n        }\r\n\r\n        eleList.forEach(function(obj){\r\n            ul.appendChild(obj);\r\n        });\r\n        div.style.display=\"inline-block\";\r\n    };\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./pagination.less":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./pagination.less ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"div._pagination_ {\\n  padding: 5px 0px;\\n  border-right: 1px solid #ccc;\\n  display: inline-block;\\n  padding: 0px;\\n  margin: 0px;\\n  user-select: none;\\n  height: 25px;\\n  line-height: 25px;\\n}\\ndiv._pagination_ > span {\\n  border-top: 1px solid #ccc;\\n  border-bottom: 1px solid #ccc;\\n  border-left: 1px solid #ccc;\\n  display: inline-block;\\n  padding: 0px 5px;\\n  color: #418bca;\\n  background-color: #ffffff;\\n  cursor: pointer;\\n  text-align: center;\\n}\\ndiv._pagination_ > span:hover {\\n  background-color: #418bca;\\n  color: #ffffff;\\n}\\ndiv._pagination_ > ul {\\n  list-style: none;\\n  display: inline-block;\\n  padding: 0px;\\n  margin: 0px;\\n}\\ndiv._pagination_ > ul > li {\\n  border-top: 1px solid #ccc;\\n  border-bottom: 1px solid #ccc;\\n  border-left: 1px solid #ccc;\\n  display: inline-block;\\n  padding: 0px 5px;\\n  color: #418bca;\\n  background-color: #ffffff;\\n  cursor: pointer;\\n  width: 2em;\\n  text-align: center;\\n}\\ndiv._pagination_ > ul > li:hover {\\n  background-color: #418bca;\\n  color: #ffffff;\\n}\\ndiv._pagination_ > ul > li._current_ {\\n  background-color: #418bca;\\n  color: #ffffff;\\n}\\ndiv._pagination_ > ul > li._next_five_,\\ndiv._pagination_ > ul > li._prev_five_ {\\n  line-height: 15px;\\n  height: 25px;\\n  vertical-align: bottom;\\n  box-sizing: content-box;\\n  -webkit-box-sizing: content-box;\\n  -moz-box-sizing: content-box;\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./pagination.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./pagination.less":
/*!*************************!*\
  !*** ./pagination.less ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./pagination.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./pagination.less\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./pagination.less?");

/***/ })

/******/ });
});