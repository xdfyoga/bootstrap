(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"), require("Util"));
	else if(typeof define === 'function' && define.amd)
		define("Carousel", ["jQuery", "Util"], factory);
	else if(typeof exports === 'object')
		exports["Carousel"] = factory(require("jQuery"), require("Util"));
	else
		root["Carousel"] = factory(root["jQuery"], root["Util"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
 * Bootstrap (v4.0.0-alpha.6): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'carousel';
var VERSION = '4.0.0-alpha.6';
var DATA_KEY = 'bs.carousel';
var EVENT_KEY = '.' + DATA_KEY;
var DATA_API_KEY = '.data-api';
var JQUERY_NO_CONFLICT = _jquery2.default.fn[NAME];
var TRANSITION_DURATION = 600;
var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key
var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key
var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

var Default = {
  interval: 5000,
  keyboard: true,
  slide: false,
  pause: 'hover',
  wrap: true
};

var DefaultType = {
  interval: '(number|boolean)',
  keyboard: 'boolean',
  slide: '(boolean|string)',
  pause: '(string|boolean)',
  wrap: 'boolean'
};

var Direction = {
  NEXT: 'next',
  PREV: 'prev',
  LEFT: 'left',
  RIGHT: 'right'
};

var Event = {
  SLIDE: 'slide' + EVENT_KEY,
  SLID: 'slid' + EVENT_KEY,
  KEYDOWN: 'keydown' + EVENT_KEY,
  MOUSEENTER: 'mouseenter' + EVENT_KEY,
  MOUSELEAVE: 'mouseleave' + EVENT_KEY,
  TOUCHEND: 'touchend' + EVENT_KEY,
  LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY,
  CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
};

var ClassName = {
  CAROUSEL: 'carousel',
  ACTIVE: 'active',
  SLIDE: 'slide',
  RIGHT: 'carousel-item-right',
  LEFT: 'carousel-item-left',
  NEXT: 'carousel-item-next',
  PREV: 'carousel-item-prev',
  ITEM: 'carousel-item'
};

var Selector = {
  ACTIVE: '.active',
  ACTIVE_ITEM: '.active.carousel-item',
  ITEM: '.carousel-item',
  NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
  INDICATORS: '.carousel-indicators',
  DATA_SLIDE: '[data-slide], [data-slide-to]',
  DATA_RIDE: '[data-ride="carousel"]'

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};
var Carousel = function () {
  function Carousel(element, config) {
    _classCallCheck(this, Carousel);

    this._items = null;
    this._interval = null;
    this._activeElement = null;

    this._isPaused = false;
    this._isSliding = false;

    this.touchTimeout = null;

    this._config = this._getConfig(config);
    this._element = (0, _jquery2.default)(element)[0];
    this._indicatorsElement = (0, _jquery2.default)(this._element).find(Selector.INDICATORS)[0];

    this._addEventListeners();
  }

  // getters

  _createClass(Carousel, [{
    key: 'next',


    // public

    value: function next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT);
      }
    }
  }, {
    key: 'nextWhenVisible',
    value: function nextWhenVisible() {
      // Don't call next when the page isn't visible
      if (!document.hidden) {
        this.next();
      }
    }
  }, {
    key: 'prev',
    value: function prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREV);
      }
    }
  }, {
    key: 'pause',
    value: function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if ((0, _jquery2.default)(this._element).find(Selector.NEXT_PREV)[0] && _util2.default.supportsTransitionEnd()) {
        _util2.default.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    }
  }, {
    key: 'cycle',
    value: function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    }
  }, {
    key: 'to',
    value: function to(index) {
      var _this = this;

      this._activeElement = (0, _jquery2.default)(this._element).find(Selector.ACTIVE_ITEM)[0];

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        (0, _jquery2.default)(this._element).one(Event.SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this._items[index]);
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      (0, _jquery2.default)(this._element).off(EVENT_KEY);
      _jquery2.default.removeData(this._element, DATA_KEY);

      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    }

    // private

  }, {
    key: '_getConfig',
    value: function _getConfig(config) {
      config = _jquery2.default.extend({}, Default, config);
      _util2.default.typeCheckConfig(NAME, config, DefaultType);
      return config;
    }
  }, {
    key: '_addEventListeners',
    value: function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        (0, _jquery2.default)(this._element).on(Event.KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        (0, _jquery2.default)(this._element).on(Event.MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(Event.MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
        if ('ontouchstart' in document.documentElement) {
          // if it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          (0, _jquery2.default)(this._element).on(Event.TOUCHEND, function () {
            _this2.pause();
            if (_this2.touchTimeout) {
              clearTimeout(_this2.touchTimeout);
            }
            _this2.touchTimeout = setTimeout(function (event) {
              return _this2.cycle(event);
            }, TOUCHEVENT_COMPAT_WAIT + _this2._config.interval);
          });
        }
      }
    }
  }, {
    key: '_keydown',
    value: function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;
        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
        default:
          return;
      }
    }
  }, {
    key: '_getItemIndex',
    value: function _getItemIndex(element) {
      this._items = _jquery2.default.makeArray((0, _jquery2.default)(element).parent().find(Selector.ITEM));
      return this._items.indexOf(element);
    }
  }, {
    key: '_getItemByDirection',
    value: function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;
      var activeIndex = this._getItemIndex(activeElement);
      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;

      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    }
  }, {
    key: '_triggerSlideEvent',
    value: function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);
      var fromIndex = this._getItemIndex((0, _jquery2.default)(this._element).find(Selector.ACTIVE_ITEM)[0]);
      var slideEvent = _jquery2.default.Event(Event.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });

      (0, _jquery2.default)(this._element).trigger(slideEvent);

      return slideEvent;
    }
  }, {
    key: '_setActiveIndicatorElement',
    value: function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        (0, _jquery2.default)(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          (0, _jquery2.default)(nextIndicator).addClass(ClassName.ACTIVE);
        }
      }
    }
  }, {
    key: '_slide',
    value: function _slide(direction, element) {
      var _this3 = this;

      var activeElement = (0, _jquery2.default)(this._element).find(Selector.ACTIVE_ITEM)[0];
      var activeElementIndex = this._getItemIndex(activeElement);
      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);
      var nextElementIndex = this._getItemIndex(nextElement);
      var isCycling = Boolean(this._interval);

      var directionalClassName = void 0;
      var orderClassName = void 0;
      var eventDirectionName = void 0;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName.LEFT;
        orderClassName = ClassName.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName.RIGHT;
        orderClassName = ClassName.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && (0, _jquery2.default)(nextElement).hasClass(ClassName.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = _jquery2.default.Event(Event.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if (_util2.default.supportsTransitionEnd() && (0, _jquery2.default)(this._element).hasClass(ClassName.SLIDE)) {

        (0, _jquery2.default)(nextElement).addClass(orderClassName);

        _util2.default.reflow(nextElement);

        (0, _jquery2.default)(activeElement).addClass(directionalClassName);
        (0, _jquery2.default)(nextElement).addClass(directionalClassName);

        (0, _jquery2.default)(activeElement).one(_util2.default.TRANSITION_END, function () {
          (0, _jquery2.default)(nextElement).removeClass(directionalClassName + ' ' + orderClassName).addClass(ClassName.ACTIVE);

          (0, _jquery2.default)(activeElement).removeClass(ClassName.ACTIVE + ' ' + orderClassName + ' ' + directionalClassName);

          _this3._isSliding = false;

          setTimeout(function () {
            return (0, _jquery2.default)(_this3._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        (0, _jquery2.default)(activeElement).removeClass(ClassName.ACTIVE);
        (0, _jquery2.default)(nextElement).addClass(ClassName.ACTIVE);

        this._isSliding = false;
        (0, _jquery2.default)(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    }

    // static

  }], [{
    key: '_jQueryInterface',
    value: function _jQueryInterface(config) {
      return this.each(function () {
        var data = (0, _jquery2.default)(this).data(DATA_KEY);
        var _config = _jquery2.default.extend({}, Default, (0, _jquery2.default)(this).data());

        if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {
          _jquery2.default.extend(_config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          (0, _jquery2.default)(this).data(DATA_KEY, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (data[action] === undefined) {
            throw new Error('No method named "' + action + '"');
          }
          data[action]();
        } else if (_config.interval) {
          data.pause();
          data.cycle();
        }
      });
    }
  }, {
    key: '_dataApiClickHandler',
    value: function _dataApiClickHandler(event) {
      var selector = _util2.default.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = (0, _jquery2.default)(selector)[0];

      if (!target || !(0, _jquery2.default)(target).hasClass(ClassName.CAROUSEL)) {
        return;
      }

      var config = _jquery2.default.extend({}, (0, _jquery2.default)(target).data(), (0, _jquery2.default)(this).data());
      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call((0, _jquery2.default)(target), config);

      if (slideIndex) {
        (0, _jquery2.default)(target).data(DATA_KEY).to(slideIndex);
      }

      event.preventDefault();
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

  return Carousel;
}();

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

(0, _jquery2.default)(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);

(0, _jquery2.default)(window).on(Event.LOAD_DATA_API, function () {
  (0, _jquery2.default)(Selector.DATA_RIDE).each(function () {
    var $carousel = (0, _jquery2.default)(this);
    Carousel._jQueryInterface.call($carousel, $carousel.data());
  });
});

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

_jquery2.default.fn[NAME] = Carousel._jQueryInterface;
_jquery2.default.fn[NAME].Constructor = Carousel;
_jquery2.default.fn[NAME].noConflict = function () {
  _jquery2.default.fn[NAME] = JQUERY_NO_CONFLICT;
  return Carousel._jQueryInterface;
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=Carousel.js.map