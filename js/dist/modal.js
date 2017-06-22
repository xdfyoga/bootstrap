(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"), require("Util"));
	else if(typeof define === 'function' && define.amd)
		define("Modal", ["jQuery", "Util"], factory);
	else if(typeof exports === 'object')
		exports["Modal"] = factory(require("jQuery"), require("Util"));
	else
		root["Modal"] = factory(root["jQuery"], root["Util"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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

/***/ 9:
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

/***/ })

/******/ });
});
//# sourceMappingURL=Modal.js.map