(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"), require("Util"));
	else if(typeof define === 'function' && define.amd)
		define("Tab", ["jQuery", "Util"], factory);
	else if(typeof exports === 'object')
		exports["Tab"] = factory(require("jQuery"), require("Util"));
	else
		root["Tab"] = factory(root["jQuery"], root["Util"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'tab';
var VERSION = '4.0.0-alpha.6';
var DATA_KEY = 'bs.tab';
var EVENT_KEY = '.' + DATA_KEY;
var DATA_API_KEY = '.data-api';
var JQUERY_NO_CONFLICT = _jquery2.default.fn[NAME];
var TRANSITION_DURATION = 150;

var Event = {
  HIDE: 'hide' + EVENT_KEY,
  HIDDEN: 'hidden' + EVENT_KEY,
  SHOW: 'show' + EVENT_KEY,
  SHOWN: 'shown' + EVENT_KEY,
  CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
};

var ClassName = {
  DROPDOWN_MENU: 'dropdown-menu',
  ACTIVE: 'active',
  DISABLED: 'disabled',
  FADE: 'fade',
  SHOW: 'show'
};

var Selector = {
  DROPDOWN: '.dropdown',
  NAV_LIST_GROUP: '.nav, .list-group',
  ACTIVE: '.active',
  DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
  DROPDOWN_TOGGLE: '.dropdown-toggle',
  DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};
var Tab = function () {
  function Tab(element) {
    _classCallCheck(this, Tab);

    this._element = element;
  }

  // getters

  _createClass(Tab, [{
    key: 'show',


    // public

    value: function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && (0, _jquery2.default)(this._element).hasClass(ClassName.ACTIVE) || (0, _jquery2.default)(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var target = void 0;
      var previous = void 0;
      var listElement = (0, _jquery2.default)(this._element).closest(Selector.NAV_LIST_GROUP)[0];
      var selector = _util2.default.getSelectorFromElement(this._element);

      if (listElement) {
        previous = _jquery2.default.makeArray((0, _jquery2.default)(listElement).find(Selector.ACTIVE));
        previous = previous[previous.length - 1];
      }

      var hideEvent = _jquery2.default.Event(Event.HIDE, {
        relatedTarget: this._element
      });

      var showEvent = _jquery2.default.Event(Event.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        (0, _jquery2.default)(previous).trigger(hideEvent);
      }

      (0, _jquery2.default)(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = (0, _jquery2.default)(selector)[0];
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = _jquery2.default.Event(Event.HIDDEN, {
          relatedTarget: _this._element
        });

        var shownEvent = _jquery2.default.Event(Event.SHOWN, {
          relatedTarget: previous
        });

        (0, _jquery2.default)(previous).trigger(hiddenEvent);
        (0, _jquery2.default)(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      _jquery2.default.removeData(this._element, DATA_KEY);
      this._element = null;
    }

    // private

  }, {
    key: '_activate',
    value: function _activate(element, container, callback) {
      var _this2 = this;

      var active = (0, _jquery2.default)(container).find(Selector.ACTIVE)[0];
      var isTransitioning = callback && _util2.default.supportsTransitionEnd() && active && (0, _jquery2.default)(active).hasClass(ClassName.FADE);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, isTransitioning, callback);
      };

      if (active && isTransitioning) {
        (0, _jquery2.default)(active).one(_util2.default.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        complete();
      }

      if (active) {
        (0, _jquery2.default)(active).removeClass(ClassName.SHOW);
      }
    }
  }, {
    key: '_transitionComplete',
    value: function _transitionComplete(element, active, isTransitioning, callback) {
      if (active) {
        (0, _jquery2.default)(active).removeClass(ClassName.ACTIVE);

        var dropdownChild = (0, _jquery2.default)(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          (0, _jquery2.default)(dropdownChild).removeClass(ClassName.ACTIVE);
        }

        active.setAttribute('aria-expanded', false);
      }

      (0, _jquery2.default)(element).addClass(ClassName.ACTIVE);
      element.setAttribute('aria-expanded', true);

      if (isTransitioning) {
        _util2.default.reflow(element);
        (0, _jquery2.default)(element).addClass(ClassName.SHOW);
      } else {
        (0, _jquery2.default)(element).removeClass(ClassName.FADE);
      }

      if (element.parentNode && (0, _jquery2.default)(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {

        var dropdownElement = (0, _jquery2.default)(element).closest(Selector.DROPDOWN)[0];
        if (dropdownElement) {
          (0, _jquery2.default)(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    }

    // static

  }], [{
    key: '_jQueryInterface',
    value: function _jQueryInterface(config) {
      return this.each(function () {
        var $this = (0, _jquery2.default)(this);
        var data = $this.data(DATA_KEY);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY, data);
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
    get: function get() {
      return VERSION;
    }
  }]);

  return Tab;
}();

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

exports.default = Tab;
(0, _jquery2.default)(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
  event.preventDefault();
  Tab._jQueryInterface.call((0, _jquery2.default)(this), 'show');
});

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

_jquery2.default.fn[NAME] = Tab._jQueryInterface;
_jquery2.default.fn[NAME].Constructor = Tab;
_jquery2.default.fn[NAME].noConflict = function () {
  _jquery2.default.fn[NAME] = JQUERY_NO_CONFLICT;
  return Tab._jQueryInterface;
};
module.exports = exports['default'];

/***/ })

/******/ });
});
//# sourceMappingURL=Tab.js.map