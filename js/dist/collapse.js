(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"), require("Util"));
	else if(typeof define === 'function' && define.amd)
		define("Collapse", ["jQuery", "Util"], factory);
	else if(typeof exports === 'object')
		exports["Collapse"] = factory(require("jQuery"), require("Util"));
	else
		root["Collapse"] = factory(root["jQuery"], root["Util"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'collapse';
var VERSION = '4.0.0-alpha.6';
var DATA_KEY = 'bs.collapse';
var EVENT_KEY = '.' + DATA_KEY;
var DATA_API_KEY = '.data-api';
var JQUERY_NO_CONFLICT = _jquery2.default.fn[NAME];
var TRANSITION_DURATION = 600;

var Default = {
  toggle: true,
  parent: ''
};

var DefaultType = {
  toggle: 'boolean',
  parent: 'string'
};

var Event = {
  SHOW: 'show' + EVENT_KEY,
  SHOWN: 'shown' + EVENT_KEY,
  HIDE: 'hide' + EVENT_KEY,
  HIDDEN: 'hidden' + EVENT_KEY,
  CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
};

var ClassName = {
  SHOW: 'show',
  COLLAPSE: 'collapse',
  COLLAPSING: 'collapsing',
  COLLAPSED: 'collapsed'
};

var Dimension = {
  WIDTH: 'width',
  HEIGHT: 'height'
};

var Selector = {
  ACTIVES: '.show, .collapsing',
  DATA_TOGGLE: '[data-toggle="collapse"]'

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};
var Collapse = function () {
  function Collapse(element, config) {
    _classCallCheck(this, Collapse);

    this._isTransitioning = false;
    this._element = element;
    this._config = this._getConfig(config);
    this._triggerArray = _jquery2.default.makeArray((0, _jquery2.default)('[data-toggle="collapse"][href="#' + element.id + '"],' + ('[data-toggle="collapse"][data-target="#' + element.id + '"]')));
    var tabToggles = (0, _jquery2.default)(Selector.DATA_TOGGLE);
    for (var i = 0; i < tabToggles.length; i++) {
      var elem = tabToggles[i];
      var selector = _util2.default.getSelectorFromElement(elem);
      if (selector !== null && (0, _jquery2.default)(selector).filter(element).length > 0) {
        this._triggerArray.push(elem);
      }
    }

    this._parent = this._config.parent ? this._getParent() : null;

    if (!this._config.parent) {
      this._addAriaAndCollapsedClass(this._element, this._triggerArray);
    }

    if (this._config.toggle) {
      this.toggle();
    }
  }

  // getters

  _createClass(Collapse, [{
    key: 'toggle',


    // public

    value: function toggle() {
      if ((0, _jquery2.default)(this._element).hasClass(ClassName.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    }
  }, {
    key: 'show',
    value: function show() {
      var _this = this;

      if (this._isTransitioning || (0, _jquery2.default)(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var actives = void 0;
      var activesData = void 0;

      if (this._parent) {
        actives = _jquery2.default.makeArray((0, _jquery2.default)(this._parent).children().children(Selector.ACTIVES));
        if (!actives.length) {
          actives = null;
        }
      }

      if (actives) {
        activesData = (0, _jquery2.default)(actives).data(DATA_KEY);
        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = _jquery2.default.Event(Event.SHOW);
      (0, _jquery2.default)(this._element).trigger(startEvent);
      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call((0, _jquery2.default)(actives), 'hide');
        if (!activesData) {
          (0, _jquery2.default)(actives).data(DATA_KEY, null);
        }
      }

      var dimension = this._getDimension();

      (0, _jquery2.default)(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);

      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        (0, _jquery2.default)(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        (0, _jquery2.default)(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);

        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        (0, _jquery2.default)(_this._element).trigger(Event.SHOWN);
      };

      if (!_util2.default.supportsTransitionEnd()) {
        complete();
        return;
      }

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = 'scroll' + capitalizedDimension;

      (0, _jquery2.default)(this._element).one(_util2.default.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);

      this._element.style[dimension] = this._element[scrollSize] + 'px';
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this2 = this;

      if (this._isTransitioning || !(0, _jquery2.default)(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var startEvent = _jquery2.default.Event(Event.HIDE);
      (0, _jquery2.default)(this._element).trigger(startEvent);
      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + 'px';

      _util2.default.reflow(this._element);

      (0, _jquery2.default)(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);

      if (this._triggerArray.length) {
        for (var i = 0; i < this._triggerArray.length; i++) {
          var trigger = this._triggerArray[i];
          var selector = _util2.default.getSelectorFromElement(trigger);
          if (selector !== null) {
            var $elem = (0, _jquery2.default)(selector);
            if (!$elem.hasClass(ClassName.SHOW)) {
              (0, _jquery2.default)(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);
        (0, _jquery2.default)(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
      };

      this._element.style[dimension] = '';

      if (!_util2.default.supportsTransitionEnd()) {
        complete();
        return;
      }

      (0, _jquery2.default)(this._element).one(_util2.default.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
    }
  }, {
    key: 'setTransitioning',
    value: function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      _jquery2.default.removeData(this._element, DATA_KEY);

      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    }

    // private

  }, {
    key: '_getConfig',
    value: function _getConfig(config) {
      config = _jquery2.default.extend({}, Default, config);
      config.toggle = Boolean(config.toggle); // coerce string values
      _util2.default.typeCheckConfig(NAME, config, DefaultType);
      return config;
    }
  }, {
    key: '_getDimension',
    value: function _getDimension() {
      var hasWidth = (0, _jquery2.default)(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    }
  }, {
    key: '_getParent',
    value: function _getParent() {
      var _this3 = this;

      var parent = (0, _jquery2.default)(this._config.parent)[0];
      var selector = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';

      (0, _jquery2.default)(parent).find(selector).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });

      return parent;
    }
  }, {
    key: '_addAriaAndCollapsedClass',
    value: function _addAriaAndCollapsedClass(element, triggerArray) {
      if (element) {
        var isOpen = (0, _jquery2.default)(element).hasClass(ClassName.SHOW);

        if (triggerArray.length) {
          (0, _jquery2.default)(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
        }
      }
    }

    // static

  }], [{
    key: '_getTargetFromElement',
    value: function _getTargetFromElement(element) {
      var selector = _util2.default.getSelectorFromElement(element);
      return selector ? (0, _jquery2.default)(selector)[0] : null;
    }
  }, {
    key: '_jQueryInterface',
    value: function _jQueryInterface(config) {
      return this.each(function () {
        var $this = (0, _jquery2.default)(this);
        var data = $this.data(DATA_KEY);
        var _config = _jquery2.default.extend({}, Default, $this.data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
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
  }, {
    key: 'Default',
    get: function get() {
      return Default;
    }
  }]);

  return Collapse;
}();

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

exports.default = Collapse;
(0, _jquery2.default)(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
  if (!/input|textarea/i.test(event.target.tagName)) {
    event.preventDefault();
  }

  var $trigger = (0, _jquery2.default)(this);
  var selector = _util2.default.getSelectorFromElement(this);
  (0, _jquery2.default)(selector).each(function () {
    var $target = (0, _jquery2.default)(this);
    var data = $target.data(DATA_KEY);
    var config = data ? 'toggle' : $trigger.data();
    Collapse._jQueryInterface.call($target, config);
  });
});

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

_jquery2.default.fn[NAME] = Collapse._jQueryInterface;
_jquery2.default.fn[NAME].Constructor = Collapse;
_jquery2.default.fn[NAME].noConflict = function () {
  _jquery2.default.fn[NAME] = JQUERY_NO_CONFLICT;
  return Collapse._jQueryInterface;
};
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=Collapse.js.map