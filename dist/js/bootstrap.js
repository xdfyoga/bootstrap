/*!
 * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"), require("Popper"));
	else if(typeof define === 'function' && define.amd)
		define("bootstrap", ["jQuery", "Popper"], factory);
	else if(typeof exports === 'object')
		exports["bootstrap"] = factory(require("jQuery"), require("Popper"));
	else
		root["bootstrap"] = factory(root["jQuery"], root["Popper"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Private TransitionEnd Helpers
 * ------------------------------------------------------------------------
 */

var transition = false;

var MAX_UID = 1000000;

var TransitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'oTransitionEnd otransitionend',
  transition: 'transitionend'

  // shoutout AngusCroll (https://goo.gl/pxwQGp)
};function toType(obj) {
  return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}

function isElement(obj) {
  return (obj[0] || obj).nodeType;
}

function getSpecialTransitionEndEvent() {
  return {
    bindType: transition.end,
    delegateType: transition.end,
    handle: function handle(event) {
      if ((0, _jquery2.default)(event.target).is(this)) {
        return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
      }
      return undefined;
    }
  };
}

function transitionEndTest() {
  if (window.QUnit) {
    return false;
  }

  var el = document.createElement('bootstrap');

  for (var name in TransitionEndEvent) {
    if (el.style[name] !== undefined) {
      return {
        end: TransitionEndEvent[name]
      };
    }
  }

  return false;
}

function transitionEndEmulator(duration) {
  var _this = this;

  var called = false;

  (0, _jquery2.default)(this).one(Util.TRANSITION_END, function () {
    called = true;
  });

  setTimeout(function () {
    if (!called) {
      Util.triggerTransitionEnd(_this);
    }
  }, duration);

  return this;
}

function setTransitionEndSupport() {
  transition = transitionEndTest();

  _jquery2.default.fn.emulateTransitionEnd = transitionEndEmulator;

  if (Util.supportsTransitionEnd()) {
    _jquery2.default.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
}

/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */

var Util = {

  TRANSITION_END: 'bsTransitionEnd',

  getUID: function getUID(prefix) {
    do {
      // eslint-disable-next-line no-bitwise
      prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
    } while (document.getElementById(prefix));
    return prefix;
  },
  getSelectorFromElement: function getSelectorFromElement(element) {
    var selector = element.getAttribute('data-target');
    if (!selector || selector === '#') {
      selector = element.getAttribute('href') || '';
    }

    try {
      var $selector = (0, _jquery2.default)(selector);
      return $selector.length > 0 ? selector : null;
    } catch (error) {
      return null;
    }
  },
  reflow: function reflow(element) {
    return element.offsetHeight;
  },
  triggerTransitionEnd: function triggerTransitionEnd(element) {
    (0, _jquery2.default)(element).trigger(transition.end);
  },
  supportsTransitionEnd: function supportsTransitionEnd() {
    return Boolean(transition);
  },
  typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
    for (var property in configTypes) {
      if (configTypes.hasOwnProperty(property)) {
        var expectedTypes = configTypes[property];
        var value = config[property];
        var valueType = value && isElement(value) ? 'element' : toType(value);

        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new Error(componentName.toUpperCase() + ': ' + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
        }
      }
    }
  }
};

exports.default = Util;


(0, _jquery2.default)(document).ready(function () {
  setTransitionEndSupport();
});
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _popper = __webpack_require__(3);

var _popper2 = _interopRequireDefault(_popper);

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'tooltip';
var VERSION = '4.0.0-alpha.6';
var DATA_KEY = 'bs.tooltip';
var EVENT_KEY = '.' + DATA_KEY;
var JQUERY_NO_CONFLICT = _jquery2.default.fn[NAME];
var TRANSITION_DURATION = 150;
var CLASS_PREFIX = 'bs-tooltip';
var BSCLS_PREFIX_REGEX = new RegExp('(^|\\s)' + CLASS_PREFIX + '\\S+', 'g');

var DefaultType = {
  animation: 'boolean',
  template: 'string',
  title: '(string|element|function)',
  trigger: 'string',
  delay: '(number|object)',
  html: 'boolean',
  selector: '(string|boolean)',
  placement: '(string|function)',
  offset: '(number|string)',
  container: '(string|element|boolean)',
  fallbackPlacement: '(string|array)'
};

var AttachmentMap = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left'
};

var Default = {
  animation: true,
  template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
  trigger: 'hover focus',
  title: '',
  delay: 0,
  html: false,
  selector: false,
  placement: 'top',
  offset: 0,
  container: false,
  fallbackPlacement: 'flip'
};

var HoverState = {
  SHOW: 'show',
  OUT: 'out'
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
};

var ClassName = {
  FADE: 'fade',
  SHOW: 'show'
};

var Selector = {
  TOOLTIP: '.tooltip',
  TOOLTIP_INNER: '.tooltip-inner',
  ARROW: '.arrow'
};

var Trigger = {
  HOVER: 'hover',
  FOCUS: 'focus',
  CLICK: 'click',
  MANUAL: 'manual'

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};
var Tooltip = function () {
  function Tooltip(element, config) {
    _classCallCheck(this, Tooltip);

    // private
    this._isEnabled = true;
    this._timeout = 0;
    this._hoverState = '';
    this._activeTrigger = {};
    this._popper = null;

    // protected
    this.element = element;
    this.config = this._getConfig(config);
    this.tip = null;

    this._setListeners();
  }

  // getters

  _createClass(Tooltip, [{
    key: 'enable',


    // public

    value: function enable() {
      this._isEnabled = true;
    }
  }, {
    key: 'disable',
    value: function disable() {
      this._isEnabled = false;
    }
  }, {
    key: 'toggleEnabled',
    value: function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
  }, {
    key: 'toggle',
    value: function toggle(event) {
      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = (0, _jquery2.default)(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          (0, _jquery2.default)(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {

        if ((0, _jquery2.default)(this.getTipElement()).hasClass(ClassName.SHOW)) {
          this._leave(null, this);
          return;
        }

        this._enter(null, this);
      }
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      clearTimeout(this._timeout);

      _jquery2.default.removeData(this.element, this.constructor.DATA_KEY);

      (0, _jquery2.default)(this.element).off(this.constructor.EVENT_KEY);
      (0, _jquery2.default)(this.element).closest('.modal').off('hide.bs.modal');

      if (this.tip) {
        (0, _jquery2.default)(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;
      if (this._popper !== null) {
        this._popper.destroy();
      }
      this._popper = null;

      this.element = null;
      this.config = null;
      this.tip = null;
    }
  }, {
    key: 'show',
    value: function show() {
      var _this = this;

      if ((0, _jquery2.default)(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = _jquery2.default.Event(this.constructor.Event.SHOW);
      if (this.isWithContent() && this._isEnabled) {
        (0, _jquery2.default)(this.element).trigger(showEvent);

        var isInTheDom = _jquery2.default.contains(this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = _util2.default.getUID(this.constructor.NAME);

        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);

        this.setContent();

        if (this.config.animation) {
          (0, _jquery2.default)(tip).addClass(ClassName.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);
        this.addAttachmentClass(attachment);

        var container = this.config.container === false ? document.body : (0, _jquery2.default)(this.config.container);

        (0, _jquery2.default)(tip).data(this.constructor.DATA_KEY, this);

        if (!_jquery2.default.contains(this.element.ownerDocument.documentElement, this.tip)) {
          (0, _jquery2.default)(tip).appendTo(container);
        }

        (0, _jquery2.default)(this.element).trigger(this.constructor.Event.INSERTED);

        this._popper = new _popper2.default(this.element, tip, {
          placement: attachment,
          modifiers: {
            offset: {
              offset: this.config.offset
            },
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Selector.ARROW
            }
          },
          onCreate: function onCreate(data) {
            if (data.originalPlacement !== data.placement) {
              _this._handlePopperPlacementChange(data);
            }
          },
          onUpdate: function onUpdate(data) {
            _this._handlePopperPlacementChange(data);
          }
        });

        (0, _jquery2.default)(tip).addClass(ClassName.SHOW);

        // if this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ('ontouchstart' in document.documentElement) {
          (0, _jquery2.default)('body').children().on('mouseover', null, _jquery2.default.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }
          var prevHoverState = _this._hoverState;
          _this._hoverState = null;

          (0, _jquery2.default)(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this._leave(null, _this);
          }
        };

        if (_util2.default.supportsTransitionEnd() && (0, _jquery2.default)(this.tip).hasClass(ClassName.FADE)) {
          (0, _jquery2.default)(this.tip).one(_util2.default.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
        } else {
          complete();
        }
      }
    }
  }, {
    key: 'hide',
    value: function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = _jquery2.default.Event(this.constructor.Event.HIDE);
      var complete = function complete() {
        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();
        _this2.element.removeAttribute('aria-describedby');
        (0, _jquery2.default)(_this2.element).trigger(_this2.constructor.Event.HIDDEN);
        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      (0, _jquery2.default)(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      (0, _jquery2.default)(tip).removeClass(ClassName.SHOW);

      // if this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support
      if ('ontouchstart' in document.documentElement) {
        (0, _jquery2.default)('body').children().off('mouseover', null, _jquery2.default.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if (_util2.default.supportsTransitionEnd() && (0, _jquery2.default)(this.tip).hasClass(ClassName.FADE)) {

        (0, _jquery2.default)(tip).one(_util2.default.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        complete();
      }

      this._hoverState = '';
    }
  }, {
    key: 'update',
    value: function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    }

    // protected

  }, {
    key: 'isWithContent',
    value: function isWithContent() {
      return Boolean(this.getTitle());
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
      this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
      $tip.removeClass(ClassName.FADE + ' ' + ClassName.SHOW);
    }
  }, {
    key: 'setElementContent',
    value: function setElementContent($element, content) {
      var html = this.config.html;
      if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object' && (content.nodeType || content.jquery)) {
        // content is a DOM node or a jQuery
        if (html) {
          if (!(0, _jquery2.default)(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text((0, _jquery2.default)(content).text());
        }
      } else {
        $element[html ? 'html' : 'text'](content);
      }
    }
  }, {
    key: 'getTitle',
    value: function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    }

    // private

  }, {
    key: '_getAttachment',
    value: function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    }
  }, {
    key: '_setListeners',
    value: function _setListeners() {
      var _this3 = this;

      var triggers = this.config.trigger.split(' ');

      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          (0, _jquery2.default)(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, function (event) {
            return _this3.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSEENTER : _this3.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSELEAVE : _this3.constructor.Event.FOCUSOUT;

          (0, _jquery2.default)(_this3.element).on(eventIn, _this3.config.selector, function (event) {
            return _this3._enter(event);
          }).on(eventOut, _this3.config.selector, function (event) {
            return _this3._leave(event);
          });
        }

        (0, _jquery2.default)(_this3.element).closest('.modal').on('hide.bs.modal', function () {
          return _this3.hide();
        });
      });

      if (this.config.selector) {
        this.config = _jquery2.default.extend({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    }
  }, {
    key: '_fixTitle',
    value: function _fixTitle() {
      var titleType = _typeof(this.element.getAttribute('data-original-title'));
      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    }
  }, {
    key: '_enter',
    value: function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;

      context = context || (0, _jquery2.default)(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        (0, _jquery2.default)(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ((0, _jquery2.default)(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);

      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    }
  }, {
    key: '_leave',
    value: function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;

      context = context || (0, _jquery2.default)(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        (0, _jquery2.default)(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);

      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    }
  }, {
    key: '_isWithActiveTrigger',
    value: function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: '_getConfig',
    value: function _getConfig(config) {
      config = _jquery2.default.extend({}, this.constructor.Default, (0, _jquery2.default)(this.element).data(), config);

      if (config.delay && typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (config.title && typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (config.content && typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      _util2.default.typeCheckConfig(NAME, config, this.constructor.DefaultType);

      return config;
    }
  }, {
    key: '_getDelegateConfig',
    value: function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
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
  }, {
    key: '_handlePopperPlacementChange',
    value: function _handlePopperPlacementChange(data) {
      this._cleanTipClass();
      this.addAttachmentClass(this._getAttachment(data.placement));
    }
  }, {
    key: '_fixTransition',
    value: function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;
      if (tip.getAttribute('x-placement') !== null) {
        return;
      }
      (0, _jquery2.default)(tip).removeClass(ClassName.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    }

    // static

  }], [{
    key: '_jQueryInterface',
    value: function _jQueryInterface(config) {
      return this.each(function () {
        var data = (0, _jquery2.default)(this).data(DATA_KEY);
        var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
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

  return Tooltip;
}();

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

exports.default = Tooltip;
_jquery2.default.fn[NAME] = Tooltip._jQueryInterface;
_jquery2.default.fn[NAME].Constructor = Tooltip;
_jquery2.default.fn[NAME].noConflict = function () {
  _jquery2.default.fn[NAME] = JQUERY_NO_CONFLICT;
  return Tooltip._jQueryInterface;
};
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
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
 * Bootstrap (v4.0.0-alpha.6): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'alert';
var VERSION = '4.0.0-alpha.6';
var DATA_KEY = 'bs.alert';
var EVENT_KEY = '.' + DATA_KEY;
var DATA_API_KEY = '.data-api';
var JQUERY_NO_CONFLICT = _jquery2.default.fn[NAME];
var TRANSITION_DURATION = 150;

var Selector = {
  DISMISS: '[data-dismiss="alert"]'
};

var Event = {
  CLOSE: 'close' + EVENT_KEY,
  CLOSED: 'closed' + EVENT_KEY,
  CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
};

var ClassName = {
  ALERT: 'alert',
  FADE: 'fade',
  SHOW: 'show'

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};
var Alert = function () {
  function Alert(element) {
    _classCallCheck(this, Alert);

    this._element = element;
  }

  // getters

  _createClass(Alert, [{
    key: 'close',


    // public

    value: function close(element) {
      element = element || this._element;

      var rootElement = this._getRootElement(element);
      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      _jquery2.default.removeData(this._element, DATA_KEY);
      this._element = null;
    }

    // private

  }, {
    key: '_getRootElement',
    value: function _getRootElement(element) {
      var selector = _util2.default.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = (0, _jquery2.default)(selector)[0];
      }

      if (!parent) {
        parent = (0, _jquery2.default)(element).closest('.' + ClassName.ALERT)[0];
      }

      return parent;
    }
  }, {
    key: '_triggerCloseEvent',
    value: function _triggerCloseEvent(element) {
      var closeEvent = _jquery2.default.Event(Event.CLOSE);

      (0, _jquery2.default)(element).trigger(closeEvent);
      return closeEvent;
    }
  }, {
    key: '_removeElement',
    value: function _removeElement(element) {
      var _this = this;

      (0, _jquery2.default)(element).removeClass(ClassName.SHOW);

      if (!_util2.default.supportsTransitionEnd() || !(0, _jquery2.default)(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);
        return;
      }

      (0, _jquery2.default)(element).one(_util2.default.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(TRANSITION_DURATION);
    }
  }, {
    key: '_destroyElement',
    value: function _destroyElement(element) {
      (0, _jquery2.default)(element).detach().trigger(Event.CLOSED).remove();
    }

    // static

  }], [{
    key: '_jQueryInterface',
    value: function _jQueryInterface(config) {
      return this.each(function () {
        var $element = (0, _jquery2.default)(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    }
  }, {
    key: '_handleDismiss',
    value: function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    }
  }, {
    key: 'VERSION',
    get: function get() {
      return VERSION;
    }
  }]);

  return Alert;
}();

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

exports.default = Alert;
(0, _jquery2.default)(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

_jquery2.default.fn[NAME] = Alert._jQueryInterface;
_jquery2.default.fn[NAME].Constructor = Alert;
_jquery2.default.fn[NAME].noConflict = function () {
  _jquery2.default.fn[NAME] = JQUERY_NO_CONFLICT;
  return Alert._jQueryInterface;
};
module.exports = exports['default'];

/***/ }),
/* 5 */
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

/***/ }),
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

/***/ }),
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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _popper = __webpack_require__(3);

var _popper2 = _interopRequireDefault(_popper);

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'dropdown';
var VERSION = '4.0.0-alpha.6';
var DATA_KEY = 'bs.dropdown';
var EVENT_KEY = '.' + DATA_KEY;
var DATA_API_KEY = '.data-api';
var JQUERY_NO_CONFLICT = _jquery2.default.fn[NAME];
var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key
var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key
var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key
var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key
var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key
var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)
var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + '|' + ARROW_DOWN_KEYCODE + '|' + ESCAPE_KEYCODE);

var Event = {
  HIDE: 'hide' + EVENT_KEY,
  HIDDEN: 'hidden' + EVENT_KEY,
  SHOW: 'show' + EVENT_KEY,
  SHOWN: 'shown' + EVENT_KEY,
  CLICK: 'click' + EVENT_KEY,
  CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
  KEYDOWN_DATA_API: 'keydown' + EVENT_KEY + DATA_API_KEY,
  KEYUP_DATA_API: 'keyup' + EVENT_KEY + DATA_API_KEY
};

var ClassName = {
  DISABLED: 'disabled',
  SHOW: 'show',
  DROPUP: 'dropup',
  MENURIGHT: 'dropdown-menu-right',
  MENULEFT: 'dropdown-menu-left'
};

var Selector = {
  DATA_TOGGLE: '[data-toggle="dropdown"]',
  FORM_CHILD: '.dropdown form',
  MENU: '.dropdown-menu',
  NAVBAR_NAV: '.navbar-nav',
  VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled)'
};

var AttachmentMap = {
  TOP: 'top-start',
  TOPEND: 'top-end',
  BOTTOM: 'bottom-start',
  BOTTOMEND: 'bottom-end'
};

var Default = {
  placement: AttachmentMap.BOTTOM,
  offset: 0,
  flip: true
};

var DefaultType = {
  placement: 'string',
  offset: '(number|string)',
  flip: 'boolean'

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};
var Dropdown = function () {
  function Dropdown(element, config) {
    _classCallCheck(this, Dropdown);

    this._element = element;
    this._popper = null;
    this._config = this._getConfig(config);
    this._menu = this._getMenuElement();
    this._inNavbar = this._detectNavbar();

    this._addEventListeners();
  }

  // getters

  _createClass(Dropdown, [{
    key: 'toggle',


    // public

    value: function toggle() {
      if (this._element.disabled || (0, _jquery2.default)(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this._element);
      var isActive = (0, _jquery2.default)(this._menu).hasClass(ClassName.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = _jquery2.default.Event(Event.SHOW, relatedTarget);

      (0, _jquery2.default)(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      var element = this._element;
      // for dropup with alignment we use the parent as popper container
      if ((0, _jquery2.default)(parent).hasClass(ClassName.DROPUP)) {
        if ((0, _jquery2.default)(this._menu).hasClass(ClassName.MENULEFT) || (0, _jquery2.default)(this._menu).hasClass(ClassName.MENURIGHT)) {
          element = parent;
        }
      }
      this._popper = new _popper2.default(element, this._menu, this._getPopperConfig());

      // if this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
      if ('ontouchstart' in document.documentElement && !(0, _jquery2.default)(parent).closest(Selector.NAVBAR_NAV).length) {
        (0, _jquery2.default)('body').children().on('mouseover', null, _jquery2.default.noop);
      }

      this._element.focus();
      this._element.setAttribute('aria-expanded', true);

      (0, _jquery2.default)(this._menu).toggleClass(ClassName.SHOW);
      (0, _jquery2.default)(parent).toggleClass(ClassName.SHOW).trigger(_jquery2.default.Event(Event.SHOWN, relatedTarget));
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      _jquery2.default.removeData(this._element, DATA_KEY);
      (0, _jquery2.default)(this._element).off(EVENT_KEY);
      this._element = null;
      this._menu = null;
      if (this._popper !== null) {
        this._popper.destroy();
      }
      this._popper = null;
    }
  }, {
    key: 'update',
    value: function update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    }

    // private

  }, {
    key: '_addEventListeners',
    value: function _addEventListeners() {
      var _this = this;

      (0, _jquery2.default)(this._element).on(Event.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();
        _this.toggle();
      });
    }
  }, {
    key: '_getConfig',
    value: function _getConfig(config) {
      var elementData = (0, _jquery2.default)(this._element).data();
      if (elementData.placement !== undefined) {
        elementData.placement = AttachmentMap[elementData.placement.toUpperCase()];
      }

      config = _jquery2.default.extend({}, this.constructor.Default, (0, _jquery2.default)(this._element).data(), config);

      _util2.default.typeCheckConfig(NAME, config, this.constructor.DefaultType);

      return config;
    }
  }, {
    key: '_getMenuElement',
    value: function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);
        this._menu = (0, _jquery2.default)(parent).find(Selector.MENU)[0];
      }
      return this._menu;
    }
  }, {
    key: '_getPlacement',
    value: function _getPlacement() {
      var $parentDropdown = (0, _jquery2.default)(this._element).parent();
      var placement = this._config.placement;

      // Handle dropup
      if ($parentDropdown.hasClass(ClassName.DROPUP) || this._config.placement === AttachmentMap.TOP) {
        placement = AttachmentMap.TOP;
        if ((0, _jquery2.default)(this._menu).hasClass(ClassName.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ((0, _jquery2.default)(this._menu).hasClass(ClassName.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }
      return placement;
    }
  }, {
    key: '_detectNavbar',
    value: function _detectNavbar() {
      return (0, _jquery2.default)(this._element).closest('.navbar').length > 0;
    }
  }, {
    key: '_getPopperConfig',
    value: function _getPopperConfig() {
      var _this2 = this;

      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: {
            offset: this._config.offset
          },
          flip: {
            enabled: this._config.flip
          }
        }
      };

      if (this._inNavbar) {
        popperConfig.modifiers.AfterApplyStyle = {
          enabled: true,
          order: 901, // ApplyStyle order + 1
          fn: function fn() {
            // reset Popper styles
            (0, _jquery2.default)(_this2._menu).attr('style', '');
          }
        };
      }
      return popperConfig;
    }

    // static

  }], [{
    key: '_jQueryInterface',
    value: function _jQueryInterface(config) {
      return this.each(function () {
        var data = (0, _jquery2.default)(this).data(DATA_KEY);
        var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
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
    key: '_clearMenus',
    value: function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = _jquery2.default.makeArray((0, _jquery2.default)(Selector.DATA_TOGGLE));
      for (var i = 0; i < toggles.length; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);
        var context = (0, _jquery2.default)(toggles[i]).data(DATA_KEY);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;
        if (!(0, _jquery2.default)(parent).hasClass(ClassName.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && _jquery2.default.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = _jquery2.default.Event(Event.HIDE, relatedTarget);
        (0, _jquery2.default)(parent).trigger(hideEvent);
        if (hideEvent.isDefaultPrevented()) {
          continue;
        }

        // if this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ('ontouchstart' in document.documentElement) {
          (0, _jquery2.default)('body').children().off('mouseover', null, _jquery2.default.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        (0, _jquery2.default)(dropdownMenu).removeClass(ClassName.SHOW);
        (0, _jquery2.default)(parent).removeClass(ClassName.SHOW).trigger(_jquery2.default.Event(Event.HIDDEN, relatedTarget));
      }
    }
  }, {
    key: '_getParentFromElement',
    value: function _getParentFromElement(element) {
      var parent = void 0;
      var selector = _util2.default.getSelectorFromElement(element);

      if (selector) {
        parent = (0, _jquery2.default)(selector)[0];
      }

      return parent || element.parentNode;
    }
  }, {
    key: '_dataApiKeydownHandler',
    value: function _dataApiKeydownHandler(event) {
      if (!REGEXP_KEYDOWN.test(event.which) || /button/i.test(event.target.tagName) && event.which === SPACE_KEYCODE || /input|textarea/i.test(event.target.tagName)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || (0, _jquery2.default)(this).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);
      var isActive = (0, _jquery2.default)(parent).hasClass(ClassName.SHOW);

      if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {

        if (event.which === ESCAPE_KEYCODE) {
          var toggle = (0, _jquery2.default)(parent).find(Selector.DATA_TOGGLE)[0];
          (0, _jquery2.default)(toggle).trigger('focus');
        }

        (0, _jquery2.default)(this).trigger('click');
        return;
      }

      var items = (0, _jquery2.default)(parent).find(Selector.VISIBLE_ITEMS).get();

      if (!items.length) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
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
  }, {
    key: 'DefaultType',
    get: function get() {
      return DefaultType;
    }
  }]);

  return Dropdown;
}();

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

exports.default = Dropdown;
(0, _jquery2.default)(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + ' ' + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
  event.preventDefault();
  event.stopPropagation();
  Dropdown._jQueryInterface.call((0, _jquery2.default)(this), 'toggle');
}).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
  e.stopPropagation();
});

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

_jquery2.default.fn[NAME] = Dropdown._jQueryInterface;
_jquery2.default.fn[NAME].Constructor = Dropdown;
_jquery2.default.fn[NAME].noConflict = function () {
  _jquery2.default.fn[NAME] = JQUERY_NO_CONFLICT;
  return Dropdown._jQueryInterface;
};
module.exports = exports['default'];

/***/ }),
/* 9 */
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
 * Bootstrap (v4.0.0-alpha.6): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'modal';
var VERSION = '4.0.0-alpha.6';
var DATA_KEY = 'bs.modal';
var EVENT_KEY = '.' + DATA_KEY;
var DATA_API_KEY = '.data-api';
var JQUERY_NO_CONFLICT = _jquery2.default.fn[NAME];
var TRANSITION_DURATION = 300;
var BACKDROP_TRANSITION_DURATION = 150;
var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

var Default = {
  backdrop: true,
  keyboard: true,
  focus: true,
  show: true
};

var DefaultType = {
  backdrop: '(boolean|string)',
  keyboard: 'boolean',
  focus: 'boolean',
  show: 'boolean'
};

var Event = {
  HIDE: 'hide' + EVENT_KEY,
  HIDDEN: 'hidden' + EVENT_KEY,
  SHOW: 'show' + EVENT_KEY,
  SHOWN: 'shown' + EVENT_KEY,
  FOCUSIN: 'focusin' + EVENT_KEY,
  RESIZE: 'resize' + EVENT_KEY,
  CLICK_DISMISS: 'click.dismiss' + EVENT_KEY,
  KEYDOWN_DISMISS: 'keydown.dismiss' + EVENT_KEY,
  MOUSEUP_DISMISS: 'mouseup.dismiss' + EVENT_KEY,
  MOUSEDOWN_DISMISS: 'mousedown.dismiss' + EVENT_KEY,
  CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
};

var ClassName = {
  SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
  BACKDROP: 'modal-backdrop',
  OPEN: 'modal-open',
  FADE: 'fade',
  SHOW: 'show'
};

var Selector = {
  DIALOG: '.modal-dialog',
  DATA_TOGGLE: '[data-toggle="modal"]',
  DATA_DISMISS: '[data-dismiss="modal"]',
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler'

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};
var Modal = function () {
  function Modal(element, config) {
    _classCallCheck(this, Modal);

    this._config = this._getConfig(config);
    this._element = element;
    this._dialog = (0, _jquery2.default)(element).find(Selector.DIALOG)[0];
    this._backdrop = null;
    this._isShown = false;
    this._isBodyOverflowing = false;
    this._ignoreBackdropClick = false;
    this._originalBodyPadding = 0;
    this._scrollbarWidth = 0;
  }

  // getters

  _createClass(Modal, [{
    key: 'toggle',


    // public

    value: function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
  }, {
    key: 'show',
    value: function show(relatedTarget) {
      var _this = this;

      if (this._isTransitioning) {
        return;
      }

      if (_util2.default.supportsTransitionEnd() && (0, _jquery2.default)(this._element).hasClass(ClassName.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = _jquery2.default.Event(Event.SHOW, {
        relatedTarget: relatedTarget
      });

      (0, _jquery2.default)(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();
      this._setScrollbar();

      (0, _jquery2.default)(document.body).addClass(ClassName.OPEN);

      this._setEscapeEvent();
      this._setResizeEvent();

      (0, _jquery2.default)(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });

      (0, _jquery2.default)(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
        (0, _jquery2.default)(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
          if ((0, _jquery2.default)(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    }
  }, {
    key: 'hide',
    value: function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (this._isTransitioning || !this._isShown) {
        return;
      }

      var transition = _util2.default.supportsTransitionEnd() && (0, _jquery2.default)(this._element).hasClass(ClassName.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      var hideEvent = _jquery2.default.Event(Event.HIDE);

      (0, _jquery2.default)(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;

      this._setEscapeEvent();
      this._setResizeEvent();

      (0, _jquery2.default)(document).off(Event.FOCUSIN);

      (0, _jquery2.default)(this._element).removeClass(ClassName.SHOW);

      (0, _jquery2.default)(this._element).off(Event.CLICK_DISMISS);
      (0, _jquery2.default)(this._dialog).off(Event.MOUSEDOWN_DISMISS);

      if (transition) {

        (0, _jquery2.default)(this._element).one(_util2.default.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        this._hideModal();
      }
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      _jquery2.default.removeData(this._element, DATA_KEY);

      (0, _jquery2.default)(window, document, this._element, this._backdrop).off(EVENT_KEY);

      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._scrollbarWidth = null;
    }
  }, {
    key: 'handleUpdate',
    value: function handleUpdate() {
      this._adjustDialog();
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
    key: '_showElement',
    value: function _showElement(relatedTarget) {
      var _this3 = this;

      var transition = _util2.default.supportsTransitionEnd() && (0, _jquery2.default)(this._element).hasClass(ClassName.FADE);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // don't move modals dom position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';
      this._element.removeAttribute('aria-hidden');
      this._element.scrollTop = 0;

      if (transition) {
        _util2.default.reflow(this._element);
      }

      (0, _jquery2.default)(this._element).addClass(ClassName.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = _jquery2.default.Event(Event.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this3._config.focus) {
          _this3._element.focus();
        }
        _this3._isTransitioning = false;
        (0, _jquery2.default)(_this3._element).trigger(shownEvent);
      };

      if (transition) {
        (0, _jquery2.default)(this._dialog).one(_util2.default.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        transitionComplete();
      }
    }
  }, {
    key: '_enforceFocus',
    value: function _enforceFocus() {
      var _this4 = this;

      (0, _jquery2.default)(document).off(Event.FOCUSIN) // guard against infinite focus loop
      .on(Event.FOCUSIN, function (event) {
        if (document !== event.target && _this4._element !== event.target && !(0, _jquery2.default)(_this4._element).has(event.target).length) {
          _this4._element.focus();
        }
      });
    }
  }, {
    key: '_setEscapeEvent',
    value: function _setEscapeEvent() {
      var _this5 = this;

      if (this._isShown && this._config.keyboard) {
        (0, _jquery2.default)(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE) {
            event.preventDefault();
            _this5.hide();
          }
        });
      } else if (!this._isShown) {
        (0, _jquery2.default)(this._element).off(Event.KEYDOWN_DISMISS);
      }
    }
  }, {
    key: '_setResizeEvent',
    value: function _setResizeEvent() {
      var _this6 = this;

      if (this._isShown) {
        (0, _jquery2.default)(window).on(Event.RESIZE, function (event) {
          return _this6.handleUpdate(event);
        });
      } else {
        (0, _jquery2.default)(window).off(Event.RESIZE);
      }
    }
  }, {
    key: '_hideModal',
    value: function _hideModal() {
      var _this7 = this;

      this._element.style.display = 'none';
      this._element.setAttribute('aria-hidden', true);
      this._isTransitioning = false;
      this._showBackdrop(function () {
        (0, _jquery2.default)(document.body).removeClass(ClassName.OPEN);
        _this7._resetAdjustments();
        _this7._resetScrollbar();
        (0, _jquery2.default)(_this7._element).trigger(Event.HIDDEN);
      });
    }
  }, {
    key: '_removeBackdrop',
    value: function _removeBackdrop() {
      if (this._backdrop) {
        (0, _jquery2.default)(this._backdrop).remove();
        this._backdrop = null;
      }
    }
  }, {
    key: '_showBackdrop',
    value: function _showBackdrop(callback) {
      var _this8 = this;

      var animate = (0, _jquery2.default)(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

      if (this._isShown && this._config.backdrop) {
        var doAnimate = _util2.default.supportsTransitionEnd() && animate;

        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName.BACKDROP;

        if (animate) {
          (0, _jquery2.default)(this._backdrop).addClass(animate);
        }

        (0, _jquery2.default)(this._backdrop).appendTo(document.body);

        (0, _jquery2.default)(this._element).on(Event.CLICK_DISMISS, function (event) {
          if (_this8._ignoreBackdropClick) {
            _this8._ignoreBackdropClick = false;
            return;
          }
          if (event.target !== event.currentTarget) {
            return;
          }
          if (_this8._config.backdrop === 'static') {
            _this8._element.focus();
          } else {
            _this8.hide();
          }
        });

        if (doAnimate) {
          _util2.default.reflow(this._backdrop);
        }

        (0, _jquery2.default)(this._backdrop).addClass(ClassName.SHOW);

        if (!callback) {
          return;
        }

        if (!doAnimate) {
          callback();
          return;
        }

        (0, _jquery2.default)(this._backdrop).one(_util2.default.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
      } else if (!this._isShown && this._backdrop) {
        (0, _jquery2.default)(this._backdrop).removeClass(ClassName.SHOW);

        var callbackRemove = function callbackRemove() {
          _this8._removeBackdrop();
          if (callback) {
            callback();
          }
        };

        if (_util2.default.supportsTransitionEnd() && (0, _jquery2.default)(this._element).hasClass(ClassName.FADE)) {
          (0, _jquery2.default)(this._backdrop).one(_util2.default.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    }

    // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------

  }, {
    key: '_adjustDialog',
    value: function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + 'px';
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + 'px';
      }
    }
  }, {
    key: '_resetAdjustments',
    value: function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    }
  }, {
    key: '_checkScrollbar',
    value: function _checkScrollbar() {
      this._isBodyOverflowing = document.body.clientWidth < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    }
  }, {
    key: '_setScrollbar',
    value: function _setScrollbar() {
      var _this9 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set

        // Adjust fixed content padding
        (0, _jquery2.default)(Selector.FIXED_CONTENT).each(function (index, element) {
          var actualPadding = (0, _jquery2.default)(element)[0].style.paddingRight;
          var calculatedPadding = (0, _jquery2.default)(element).css('padding-right');
          (0, _jquery2.default)(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + 'px');
        });

        // Adjust navbar-toggler margin
        (0, _jquery2.default)(Selector.NAVBAR_TOGGLER).each(function (index, element) {
          var actualMargin = (0, _jquery2.default)(element)[0].style.marginRight;
          var calculatedMargin = (0, _jquery2.default)(element).css('margin-right');
          (0, _jquery2.default)(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) + _this9._scrollbarWidth + 'px');
        });

        // Adjust body padding
        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = (0, _jquery2.default)('body').css('padding-right');
        (0, _jquery2.default)('body').data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + 'px');
      }
    }
  }, {
    key: '_resetScrollbar',
    value: function _resetScrollbar() {
      // Restore fixed content padding
      (0, _jquery2.default)(Selector.FIXED_CONTENT).each(function (index, element) {
        var padding = (0, _jquery2.default)(element).data('padding-right');
        if (typeof padding !== 'undefined') {
          (0, _jquery2.default)(element).css('padding-right', padding).removeData('padding-right');
        }
      });

      // Restore navbar-toggler margin
      (0, _jquery2.default)(Selector.NAVBAR_TOGGLER).each(function (index, element) {
        var margin = (0, _jquery2.default)(element).data('margin-right');
        if (typeof margin !== 'undefined') {
          (0, _jquery2.default)(element).css('margin-right', margin).removeData('margin-right');
        }
      });

      // Restore body padding
      var padding = (0, _jquery2.default)('body').data('padding-right');
      if (typeof padding !== 'undefined') {
        (0, _jquery2.default)('body').css('padding-right', padding).removeData('padding-right');
      }
    }
  }, {
    key: '_getScrollbarWidth',
    value: function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    }

    // static

  }], [{
    key: '_jQueryInterface',
    value: function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = (0, _jquery2.default)(this).data(DATA_KEY);
        var _config = _jquery2.default.extend({}, Modal.Default, (0, _jquery2.default)(this).data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

        if (!data) {
          data = new Modal(this, _config);
          (0, _jquery2.default)(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error('No method named "' + config + '"');
          }
          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
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

  return Modal;
}();

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

exports.default = Modal;
(0, _jquery2.default)(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
  var _this10 = this;

  var target = void 0;
  var selector = _util2.default.getSelectorFromElement(this);

  if (selector) {
    target = (0, _jquery2.default)(selector)[0];
  }

  var config = (0, _jquery2.default)(target).data(DATA_KEY) ? 'toggle' : _jquery2.default.extend({}, (0, _jquery2.default)(target).data(), (0, _jquery2.default)(this).data());

  if (this.tagName === 'A' || this.tagName === 'AREA') {
    event.preventDefault();
  }

  var $target = (0, _jquery2.default)(target).one(Event.SHOW, function (showEvent) {
    if (showEvent.isDefaultPrevented()) {
      // only register focus restorer if modal will actually get shown
      return;
    }

    $target.one(Event.HIDDEN, function () {
      if ((0, _jquery2.default)(_this10).is(':visible')) {
        _this10.focus();
      }
    });
  });

  Modal._jQueryInterface.call((0, _jquery2.default)(target), config, this);
});

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

_jquery2.default.fn[NAME] = Modal._jQueryInterface;
_jquery2.default.fn[NAME].Constructor = Modal;
_jquery2.default.fn[NAME].noConflict = function () {
  _jquery2.default.fn[NAME] = JQUERY_NO_CONFLICT;
  return Modal._jQueryInterface;
};
module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _tooltip = __webpack_require__(2);

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
/* 11 */
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
 * Bootstrap (v4.0.0-alpha.6): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'scrollspy';
var VERSION = '4.0.0-alpha.6';
var DATA_KEY = 'bs.scrollspy';
var EVENT_KEY = '.' + DATA_KEY;
var DATA_API_KEY = '.data-api';
var JQUERY_NO_CONFLICT = _jquery2.default.fn[NAME];

var Default = {
  offset: 10,
  method: 'auto',
  target: ''
};

var DefaultType = {
  offset: 'number',
  method: 'string',
  target: '(string|element)'
};

var Event = {
  ACTIVATE: 'activate' + EVENT_KEY,
  SCROLL: 'scroll' + EVENT_KEY,
  LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY
};

var ClassName = {
  DROPDOWN_ITEM: 'dropdown-item',
  DROPDOWN_MENU: 'dropdown-menu',
  ACTIVE: 'active'
};

var Selector = {
  DATA_SPY: '[data-spy="scroll"]',
  ACTIVE: '.active',
  NAV_LIST_GROUP: '.nav, .list-group',
  NAV_LINKS: '.nav-link',
  LIST_ITEMS: '.list-group-item',
  DROPDOWN: '.dropdown',
  DROPDOWN_ITEMS: '.dropdown-item',
  DROPDOWN_TOGGLE: '.dropdown-toggle'
};

var OffsetMethod = {
  OFFSET: 'offset',
  POSITION: 'position'

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};
var ScrollSpy = function () {
  function ScrollSpy(element, config) {
    var _this = this;

    _classCallCheck(this, ScrollSpy);

    this._element = element;
    this._scrollElement = element.tagName === 'BODY' ? window : element;
    this._config = this._getConfig(config);
    this._selector = this._config.target + ' ' + Selector.NAV_LINKS + ',' + (this._config.target + ' ' + Selector.LIST_ITEMS + ',') + (this._config.target + ' ' + Selector.DROPDOWN_ITEMS);
    this._offsets = [];
    this._targets = [];
    this._activeTarget = null;
    this._scrollHeight = 0;

    (0, _jquery2.default)(this._scrollElement).on(Event.SCROLL, function (event) {
      return _this._process(event);
    });

    this.refresh();
    this._process();
  }

  // getters

  _createClass(ScrollSpy, [{
    key: 'refresh',


    // public

    value: function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement !== this._scrollElement.window ? OffsetMethod.POSITION : OffsetMethod.OFFSET;

      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;

      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;

      this._offsets = [];
      this._targets = [];

      this._scrollHeight = this._getScrollHeight();

      var targets = _jquery2.default.makeArray((0, _jquery2.default)(this._selector));

      targets.map(function (element) {
        var target = void 0;
        var targetSelector = _util2.default.getSelectorFromElement(element);

        if (targetSelector) {
          target = (0, _jquery2.default)(targetSelector)[0];
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();
          if (targetBCR.width || targetBCR.height) {
            // todo (fat): remove sketch reliance on jQuery position/offset
            return [(0, _jquery2.default)(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }
        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);
        _this2._targets.push(item[1]);
      });
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      _jquery2.default.removeData(this._element, DATA_KEY);
      (0, _jquery2.default)(this._scrollElement).off(EVENT_KEY);

      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    }

    // private

  }, {
    key: '_getConfig',
    value: function _getConfig(config) {
      config = _jquery2.default.extend({}, Default, config);

      if (typeof config.target !== 'string') {
        var id = (0, _jquery2.default)(config.target).attr('id');
        if (!id) {
          id = _util2.default.getUID(NAME);
          (0, _jquery2.default)(config.target).attr('id', id);
        }
        config.target = '#' + id;
      }

      _util2.default.typeCheckConfig(NAME, config, DefaultType);

      return config;
    }
  }, {
    key: '_getScrollTop',
    value: function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }
  }, {
    key: '_getScrollHeight',
    value: function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }
  }, {
    key: '_getOffsetHeight',
    value: function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }
  }, {
    key: '_process',
    value: function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;
      var scrollHeight = this._getScrollHeight();
      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }
        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;
        this._clear();
        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (this._offsets[i + 1] === undefined || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    }
  }, {
    key: '_activate',
    value: function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',');
      queries = queries.map(function (selector) {
        return selector + '[data-target="' + target + '"],' + (selector + '[href="' + target + '"]');
      });

      var $link = (0, _jquery2.default)(queries.join(','));

      if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
        $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
        $link.addClass(ClassName.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName.ACTIVE);
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_LINKS + ', ' + Selector.LIST_ITEMS).addClass(ClassName.ACTIVE);
      }

      (0, _jquery2.default)(this._scrollElement).trigger(Event.ACTIVATE, {
        relatedTarget: target
      });
    }
  }, {
    key: '_clear',
    value: function _clear() {
      (0, _jquery2.default)(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
    }

    // static

  }], [{
    key: '_jQueryInterface',
    value: function _jQueryInterface(config) {
      return this.each(function () {
        var data = (0, _jquery2.default)(this).data(DATA_KEY);
        var _config = (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
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
    get: function get() {
      return VERSION;
    }
  }, {
    key: 'Default',
    get: function get() {
      return Default;
    }
  }]);

  return ScrollSpy;
}();

/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */

exports.default = ScrollSpy;
(0, _jquery2.default)(window).on(Event.LOAD_DATA_API, function () {
  var scrollSpys = _jquery2.default.makeArray((0, _jquery2.default)(Selector.DATA_SPY));

  for (var i = scrollSpys.length; i--;) {
    var $spy = (0, _jquery2.default)(scrollSpys[i]);
    ScrollSpy._jQueryInterface.call($spy, $spy.data());
  }
});

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

_jquery2.default.fn[NAME] = ScrollSpy._jQueryInterface;
_jquery2.default.fn[NAME].Constructor = ScrollSpy;
_jquery2.default.fn[NAME].noConflict = function () {
  _jquery2.default.fn[NAME] = JQUERY_NO_CONFLICT;
  return ScrollSpy._jQueryInterface;
};
module.exports = exports['default'];

/***/ }),
/* 12 */
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

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = exports.Tab = exports.Scrollspy = exports.Popover = exports.Modal = exports.Dropdown = exports.Collapse = exports.Carousel = exports.Button = exports.Alert = exports.Util = undefined;

var _alert = __webpack_require__(4);

var _alert2 = _interopRequireDefault(_alert);

var _button = __webpack_require__(5);

var _button2 = _interopRequireDefault(_button);

var _carousel = __webpack_require__(6);

var _carousel2 = _interopRequireDefault(_carousel);

var _collapse = __webpack_require__(7);

var _collapse2 = _interopRequireDefault(_collapse);

var _dropdown = __webpack_require__(8);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _modal = __webpack_require__(9);

var _modal2 = _interopRequireDefault(_modal);

var _popover = __webpack_require__(10);

var _popover2 = _interopRequireDefault(_popover);

var _scrollspy = __webpack_require__(11);

var _scrollspy2 = _interopRequireDefault(_scrollspy);

var _tab = __webpack_require__(12);

var _tab2 = _interopRequireDefault(_tab);

var _tooltip = __webpack_require__(2);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

exports.Util = _util2.default;
exports.Alert = _alert2.default;
exports.Button = _button2.default;
exports.Carousel = _carousel2.default;
exports.Collapse = _collapse2.default;
exports.Dropdown = _dropdown2.default;
exports.Modal = _modal2.default;
exports.Popover = _popover2.default;
exports.Scrollspy = _scrollspy2.default;
exports.Tab = _tab2.default;
exports.Tooltip = _tooltip2.default;

/***/ })
/******/ ]);
});