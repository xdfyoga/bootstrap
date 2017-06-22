(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"), require("Util"), require("Popper"));
	else if(typeof define === 'function' && define.amd)
		define("Dropdown", ["jQuery", "Util", "Popper"], factory);
	else if(typeof exports === 'object')
		exports["Dropdown"] = factory(require("jQuery"), require("Util"), require("Popper"));
	else
		root["Dropdown"] = factory(root["jQuery"], root["Util"], root["Popper"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
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

var _popper = __webpack_require__(2);

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

/***/ })
/******/ ]);
});
//# sourceMappingURL=Dropdown.js.map