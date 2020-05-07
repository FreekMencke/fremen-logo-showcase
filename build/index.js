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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('fremen/logo-showcase', {
  title: 'Logo Showcase',
  icon: 'images-alt',
  category: 'layout',
  attributes: {
    images: {
      type: 'array',
      source: 'query',
      selector: 'a',
      default: [],
      query: {
        class: {
          type: 'string',
          source: 'attribute',
          selector: 'img',
          attribute: 'class'
        },
        href: {
          type: 'string',
          source: 'attribute',
          attribute: 'href'
        },
        src: {
          type: 'string',
          source: 'attribute',
          selector: 'img',
          attribute: 'src'
        }
      }
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var imageIds = attributes.images.map(function (img) {
      return {
        id: img.class.match(/wp-image-(\d+)/)[1]
      };
    });
    var labels = {
      title: 'Logo Showcase',
      instructions: "\n            Choose the logos you want to display in the Logo Showcase.\n            To link the logo to a website, put it in the description prefixed with \"//\".\n            For example \"//www.google.com\""
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        border: '1px solid'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["MediaPlaceholder"], {
      labels: labels,
      multiple: true,
      value: imageIds,
      onSelect: function onSelect(images) {
        setAttributes({
          images: images.map(function (_ref2) {
            var id = _ref2.id,
                url = _ref2.url,
                description = _ref2.description;
            return {
              class: "wp-image-".concat(id),
              href: description,
              src: url
            };
          })
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        padding: 20,
        paddingTop: 0
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
      style: {
        marginBototm: 0,
        marginTop: 0
      }
    }, "Selected logos:"), attributes.images.map(function (img) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
        class: img.class,
        src: img.src,
        style: {
          height: 40,
          padding: 5
        }
      });
    })));
  },
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, attributes.images.map(function (img) {
      var imgElement = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
        class: img.class,
        src: img.src
      });
      return img.href && img.href.startsWith('//') ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
        href: img.href
      }, imgElement) : imgElement;
    }));
  }
});

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map