(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define("Button", ["jQuery"], factory);
	else if(typeof exports === 'object')
		exports["Button"] = factory(require("jQuery"));
	else
		root["Button"] = factory(root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'button';
var VERSION = '4.0.0-alpha.6';
var DATA_KEY = 'bs.button';
var EVENT_KEY = '.' + DATA_KEY;
var DATA_API_KEY = '.data-api';
var JQUERY_NO_CONFLICT = _jquery2.default.fn[NAME];

var ClassName = {
  ACTIVE: 'active',
  BUTTON: 'btn',
  FOCUS: 'focus'
};

var Selector = {
  DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
  DATA_TOGGLE: '[data-toggle="buttons"]',
  INPUT: 'input',
  ACTIVE: '.active',
  BUTTON: '.btn'
};

var Event = {
  CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
  FOCUS_BLUR_DATA_API: 'focus' + EVENT_KEY + DATA_API_KEY + ' ' + ('blur' + EVENT_KEY + DATA_API_KEY)

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};
var Button = function () {
  function Button(element) {
    _classCallCheck(this, Button);

    this._element = element;
  }

  // getters

  _createClass(Button, [{
    key: 'toggle',


    // public

    value: function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = (0, _jquery2.default)(this._element).closest(Selector.DATA_TOGGLE)[0];

      if (rootElement) {
        var input = (0, _jquery2.default)(this._element).find(Selector.INPUT)[0];

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && (0, _jquery2.default)(this._element).hasClass(ClassName.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = (0, _jquery2.default)(rootElement).find(Selector.ACTIVE)[0];

              if (activeElement) {
                (0, _jquery2.default)(activeElement).removeClass(ClassName.ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
              return;
            }
            input.checked = !(0, _jquery2.default)(this._element).hasClass(ClassName.ACTIVE);
            (0, _jquery2.default)(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (addAriaPressed) {
        this._element.setAttribute('aria-pressed', !(0, _jquery2.default)(this._element).hasClass(ClassName.ACTIVE));
      }

      if (triggerChangeEvent) {
        (0, _jquery2.default)(this._element).toggleClass(ClassName.ACTIVE);
      }
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      _jquery2.default.removeData(this._element, DATA_KEY);
      this._element = null;
    }

    // static

  }], [{
    key: '_jQueryInterface',
    value: function _jQueryInterface(config) {
      return this.each(function () {
        var data = (0, _jquery2.default)(this).data(DATA_KEY);

        if (!data) {
          data = new Button(this);
          (0, _jquery2.default)(this).data(DATA_KEY, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    }
  }, {
    key: 'VERSION',
    get: function get() {
      return VERSION;
    }
  }]);

  return Button;
}();

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

exports.default = Button;
(0, _jquery2.default)(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
  event.preventDefault();

  var button = event.target;

  if (!(0, _jquery2.default)(button).hasClass(ClassName.BUTTON)) {
    button = (0, _jquery2.default)(button).closest(Selector.BUTTON);
  }

  Button._jQueryInterface.call((0, _jquery2.default)(button), 'toggle');
}).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
  var button = (0, _jquery2.default)(event.target).closest(Selector.BUTTON)[0];
  (0, _jquery2.default)(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
});

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

_jquery2.default.fn[NAME] = Button._jQueryInterface;
_jquery2.default.fn[NAME].Constructor = Button;
_jquery2.default.fn[NAME].noConflict = function () {
  _jquery2.default.fn[NAME] = JQUERY_NO_CONFLICT;
  return Button._jQueryInterface;
};
module.exports = exports['default'];

/***/ })

/******/ });
});
//# sourceMappingURL=Button.js.map