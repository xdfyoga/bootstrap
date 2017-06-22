(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"), require("Tooltip"));
	else if(typeof define === 'function' && define.amd)
		define("Popover", ["jQuery", "Tooltip"], factory);
	else if(typeof exports === 'object')
		exports["Popover"] = factory(require("jQuery"), require("Tooltip"));
	else
		root["Popover"] = factory(root["jQuery"], root["Tooltip"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _tooltip = __webpack_require__(3);

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'popover';
var VERSION = '4.0.0-alpha.6';
var DATA_KEY = 'bs.popover';
var EVENT_KEY = '.' + DATA_KEY;
var JQUERY_NO_CONFLICT = _jquery2.default.fn[NAME];
var CLASS_PREFIX = 'bs-popover';
var BSCLS_PREFIX_REGEX = new RegExp('(^|\\s)' + CLASS_PREFIX + '\\S+', 'g');

var Default = _jquery2.default.extend({}, _tooltip2.default.Default, {
  placement: 'right',
  trigger: 'click',
  content: '',
  template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
});

var DefaultType = _jquery2.default.extend({}, _tooltip2.default.DefaultType, {
  content: '(string|element|function)'
});

var ClassName = {
  FADE: 'fade',
  SHOW: 'show'
};

var Selector = {
  TITLE: '.popover-header',
  CONTENT: '.popover-body'
};

var Event = {
  HIDE: 'hide' + EVENT_KEY,
  HIDDEN: 'hidden' + EVENT_KEY,
  SHOW: 'show' + EVENT_KEY,
  SHOWN: 'shown' + EVENT_KEY,
  INSERTED: 'inserted' + EVENT_KEY,
  CLICK: 'click' + EVENT_KEY,
  FOCUSIN: 'focusin' + EVENT_KEY,
  FOCUSOUT: 'focusout' + EVENT_KEY,
  MOUSEENTER: 'mouseenter' + EVENT_KEY,
  MOUSELEAVE: 'mouseleave' + EVENT_KEY

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};
var Popover = function (_Tooltip) {
  _inherits(Popover, _Tooltip);

  function Popover() {
    _classCallCheck(this, Popover);

    return _possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).apply(this, arguments));
  }

  _createClass(Popover, [{
    key: 'isWithContent',


    // overrides

    value: function isWithContent() {
      return this.getTitle() || this._getContent();
    }
  }, {
    key: 'addAttachmentClass',
    value: function addAttachmentClass(attachment) {
      (0, _jquery2.default)(this.getTipElement()).addClass(CLASS_PREFIX + '-' + attachment);
    }
  }, {
    key: 'getTipElement',
    value: function getTipElement() {
      return this.tip = this.tip || (0, _jquery2.default)(this.config.template)[0];
    }
  }, {
    key: 'setContent',
    value: function setContent() {
      var $tip = (0, _jquery2.default)(this.getTipElement());

      // we use append for html objects to maintain js events
      this.setElementContent($tip.find(Selector.TITLE), this.getTitle());
      this.setElementContent($tip.find(Selector.CONTENT), this._getContent());

      $tip.removeClass(ClassName.FADE + ' ' + ClassName.SHOW);
    }

    // private

  }, {
    key: '_getContent',
    value: function _getContent() {
      return this.element.getAttribute('data-content') || (typeof this.config.content === 'function' ? this.config.content.call(this.element) : this.config.content);
    }
  }, {
    key: '_cleanTipClass',
    value: function _cleanTipClass() {
      var $tip = (0, _jquery2.default)(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);
      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    }

    // static

  }], [{
    key: '_jQueryInterface',
    value: function _jQueryInterface(config) {
      return this.each(function () {
        var data = (0, _jquery2.default)(this).data(DATA_KEY);
        var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' ? config : null;

        if (!data && /destroy|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          (0, _jquery2.default)(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config]();
        }
      });
    }
  }, {
    key: 'VERSION',


    // getters

    get: function get() {
      return VERSION;
    }
  }, {
    key: 'Default',
    get: function get() {
      return Default;
    }
  }, {
    key: 'NAME',
    get: function get() {
      return NAME;
    }
  }, {
    key: 'DATA_KEY',
    get: function get() {
      return DATA_KEY;
    }
  }, {
    key: 'Event',
    get: function get() {
      return Event;
    }
  }, {
    key: 'EVENT_KEY',
    get: function get() {
      return EVENT_KEY;
    }
  }, {
    key: 'DefaultType',
    get: function get() {
      return DefaultType;
    }
  }]);

  return Popover;
}(_tooltip2.default);

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

exports.default = Popover;
_jquery2.default.fn[NAME] = Popover._jQueryInterface;
_jquery2.default.fn[NAME].Constructor = Popover;
_jquery2.default.fn[NAME].noConflict = function () {
  _jquery2.default.fn[NAME] = JQUERY_NO_CONFLICT;
  return Popover._jQueryInterface;
};
module.exports = exports['default'];

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ })

/******/ });
});
//# sourceMappingURL=Popover.js.map