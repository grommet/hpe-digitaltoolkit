module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Router = __webpack_require__(2);
	var Route = Router.Route;
	var IndexRoute = Router.IndexRoute;

	var Docs = __webpack_require__(3);
	var Home = __webpack_require__(105);
	var Design = __webpack_require__(135);
	var Develop = __webpack_require__(148);
	var Examples = __webpack_require__(195);

	module.exports = function (rootPath) {
	  var DocsRouter = React.createClass({
	    displayName: 'DocsRouter',


	    childContextTypes: {
	      rootPath: React.PropTypes.string.isRequired,
	      routePrefix: React.PropTypes.string.isRequired
	    },

	    getChildContext: function getChildContext() {
	      return {
	        rootPath: rootPath,
	        routePrefix: rootPath
	      };
	    },

	    render: function render() {
	      return React.createElement(Docs, this.props);
	    }
	  });

	  return React.createElement(
	    Route,
	    { path: rootPath, component: DocsRouter },
	    React.createElement(IndexRoute, { component: Home }),
	    Design.routes(),
	    Develop.routes(),
	    Examples.routes()
	  );
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var React = __webpack_require__(1);
	var App = __webpack_require__(4);

	var Docs = React.createClass({
	  displayName: 'Docs',


	  render: function render() {
	    return React.createElement(
	      App,
	      { className: 'docs', centered: false },
	      this.props.children
	    );
	  }

	});

	module.exports = Docs;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _Locale = __webpack_require__(68);

	var _SkipLinks = __webpack_require__(80);

	var _SkipLinks2 = _interopRequireDefault(_SkipLinks);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASS_ROOT = _CSSClassnames2.default.APP; // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var supportedLocales = ['en-US', 'pt-BR'];

	function localesSupported() {
	  return global.Intl && supportedLocales.every(function (locale) {
	    return Intl.NumberFormat.supportedLocalesOf(locale)[0] === locale && Intl.DateTimeFormat.supportedLocalesOf(locale)[0] === locale;
	  });
	}

	if (!localesSupported()) {
	  __webpack_require__(102);
	  __webpack_require__(103);
	  __webpack_require__(104);
	  Intl.NumberFormat = IntlPolyfill.NumberFormat;
	  Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
	}

	var App = function (_Component) {
	  (0, _inherits3.default)(App, _Component);

	  function App(props, context) {
	    (0, _classCallCheck3.default)(this, App);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(App).call(this, props, context));

	    _this.state = {
	      lang: 'en-US'
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var lang = (0, _Locale.getCurrentLocale)();
	      if (this.props.lang) {
	        lang = this.props.lang;
	      }
	      if (!document.documentElement.getAttribute('lang')) {
	        document.documentElement.setAttribute('lang', lang);
	      }
	      this.setState({ lang: lang });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var _props = this.props;
	      var centered = _props.centered;
	      var children = _props.children;
	      var className = _props.className;
	      var inline = _props.inline;
	      var lang = this.state.lang;


	      var classes = (0, _classnames3.default)('grommet', className, CLASS_ROOT, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--centered', centered), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--inline', inline), _classnames));

	      return _react2.default.createElement(
	        'div',
	        { lang: lang, className: classes },
	        children,
	        _react2.default.createElement(_SkipLinks2.default, null)
	      );
	    }
	  }]);
	  return App;
	}(_react.Component);

	App.displayName = 'App';
	exports.default = App;


	App.defaultProps = {
	  centered: true
	};

	App.propTypes = {
	  centered: _react.PropTypes.bool
	};
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(6);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(7), __esModule: true };

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(8);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(10), __esModule: true };

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(11);
	module.exports = __webpack_require__(17).Object.getPrototypeOf;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(12);

	__webpack_require__(14)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(13);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(15)
	  , core    = __webpack_require__(17)
	  , fails   = __webpack_require__(20);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(16)
	  , core      = __webpack_require__(17)
	  , ctx       = __webpack_require__(18)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 16 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 17 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(19);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(6);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(24);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(25);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(50);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(26), __esModule: true };

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27);
	__webpack_require__(43);
	module.exports = __webpack_require__(40)('iterator');

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(28)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(30)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(29)
	  , defined   = __webpack_require__(13);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(31)
	  , $export        = __webpack_require__(15)
	  , redefine       = __webpack_require__(32)
	  , hide           = __webpack_require__(33)
	  , has            = __webpack_require__(36)
	  , Iterators      = __webpack_require__(37)
	  , $iterCreate    = __webpack_require__(38)
	  , setToStringTag = __webpack_require__(39)
	  , getProto       = __webpack_require__(8).getProto
	  , ITERATOR       = __webpack_require__(40)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(33);

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(8)
	  , createDesc = __webpack_require__(34);
	module.exports = __webpack_require__(35) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(20)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 36 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(8)
	  , descriptor     = __webpack_require__(34)
	  , setToStringTag = __webpack_require__(39)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(33)(IteratorPrototype, __webpack_require__(40)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(8).setDesc
	  , has = __webpack_require__(36)
	  , TAG = __webpack_require__(40)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(41)('wks')
	  , uid    = __webpack_require__(42)
	  , Symbol = __webpack_require__(16).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(16)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(44);
	var Iterators = __webpack_require__(37);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(45)
	  , step             = __webpack_require__(46)
	  , Iterators        = __webpack_require__(37)
	  , toIObject        = __webpack_require__(47);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(30)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(48)
	  , defined = __webpack_require__(13);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(49);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(51), __esModule: true };

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(52);
	__webpack_require__(59);
	module.exports = __webpack_require__(17).Symbol;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(8)
	  , global         = __webpack_require__(16)
	  , has            = __webpack_require__(36)
	  , DESCRIPTORS    = __webpack_require__(35)
	  , $export        = __webpack_require__(15)
	  , redefine       = __webpack_require__(32)
	  , $fails         = __webpack_require__(20)
	  , shared         = __webpack_require__(41)
	  , setToStringTag = __webpack_require__(39)
	  , uid            = __webpack_require__(42)
	  , wks            = __webpack_require__(40)
	  , keyOf          = __webpack_require__(53)
	  , $names         = __webpack_require__(54)
	  , enumKeys       = __webpack_require__(55)
	  , isArray        = __webpack_require__(56)
	  , anObject       = __webpack_require__(57)
	  , toIObject      = __webpack_require__(47)
	  , createDesc     = __webpack_require__(34)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });

	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };

	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(31)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});

	setter = true;

	$export($export.G + $export.W, {Symbol: $Symbol});

	$export($export.S, 'Symbol', symbolStatics);

	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(8)
	  , toIObject = __webpack_require__(47);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(47)
	  , getNames  = __webpack_require__(8).getNames
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(8);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(49);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(58);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(61);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(65);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(24);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(62), __esModule: true };

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(63);
	module.exports = __webpack_require__(17).Object.setPrototypeOf;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(15);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(64).set});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(8).getDesc
	  , isObject = __webpack_require__(58)
	  , anObject = __webpack_require__(57);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(18)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(66), __esModule: true };

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(8);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = require("classnames");

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(69);

	var _extends3 = _interopRequireDefault(_extends2);

	exports.setLocale = setLocale;
	exports.getCurrentLocale = getCurrentLocale;
	exports.getLocaleData = getLocaleData;

	var _Cookies = __webpack_require__(74);

	var _Cookies2 = _interopRequireDefault(_Cookies);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var currentLocale = 'en-US'; // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	function normalizeLocale(locale) {
	  var locales = locale.replace(/_/g, '-').split('-');
	  var normalizedLocale = locales[0];
	  if (locales.length > 1) {
	    normalizedLocale += '-' + locales[1].toUpperCase();
	  }

	  return normalizedLocale;
	}

	function setLocale(locale) {
	  currentLocale = normalizeLocale(locale);
	}

	function getCurrentLocale() {
	  try {
	    var cookieLanguages = _Cookies2.default.get('languages');
	    var locale = cookieLanguages ? JSON.parse(cookieLanguages)[0] : undefined;
	    if (!locale) {
	      locale = window.navigator.languages ? window.navigator.languages[0] : window.navigator.language || window.navigator.userLanguage;
	    }

	    return normalizeLocale(locale);
	  } catch (e) {
	    return currentLocale;
	  }
	}

	function getLocaleData() {
	  var appMessages = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var locale = arguments.length <= 1 || arguments[1] === undefined ? getCurrentLocale() : arguments[1];

	  var grommetMessages = void 0;
	  try {
	    grommetMessages = __webpack_require__(75)("./" + locale);
	  } catch (e) {
	    grommetMessages = {};
	  }

	  var messages = (0, _extends3.default)({}, grommetMessages, appMessages);

	  return { locale: locale, messages: messages };
	}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(70);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(71), __esModule: true };

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(72);
	module.exports = __webpack_require__(17).Object.assign;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(15);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(73)});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(8)
	  , toObject = __webpack_require__(12)
	  , IObject  = __webpack_require__(48);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(20)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 74 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// (C) Copyright 2015 Hewlett Packard Enterprise Development LP

	// Slightly modified version of the Mozilla Developer Network version.
	// renamed the module and the functions.

	/*\
	|*|
	|*|  :: cookies.js ::
	|*|
	|*|  A complete cookies reader/writer framework with full unicode support.
	|*|
	|*|  Revision #1 - September 4, 2014
	|*|
	|*|  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
	|*|  https://developer.mozilla.org/User:fusionchess
	|*|
	|*|  This framework is released under the GNU Public License, version 3 or later.
	|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
	|*|
	|*|  Syntaxes:
	|*|
	|*|  * Cookies.set(name, value[, end[, path[, domain[, secure]]]])
	|*|  * Cookies.get(name)
	|*|  * Cookies.remove(name[, path[, domain]])
	|*|  * Cookies.has(name)
	|*|  * Cookies.keys()
	|*|
	\*/

	exports.default = {
	  get: function get(sKey) {
	    if (!sKey) {
	      return null;
	    }
	    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
	  },
	  set: function set(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
	    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
	      return false;
	    }
	    var sExpires = "";
	    if (vEnd) {
	      switch (vEnd.constructor) {
	        case Number:
	          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
	          break;
	        case String:
	          sExpires = "; expires=" + vEnd;
	          break;
	        case Date:
	          sExpires = "; expires=" + vEnd.toUTCString();
	          break;
	      }
	    }
	    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
	    return true;
	  },
	  remove: function remove(sKey, sPath, sDomain) {
	    if (!this.has(sKey)) {
	      return false;
	    }
	    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
	    return true;
	  },
	  has: function has(sKey) {
	    if (!sKey) {
	      return false;
	    }
	    return new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
	  },
	  keys: function keys() {
	    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
	    for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
	      aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
	    }
	    return aKeys;
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./en": 76,
		"./en-US": 77,
		"./en-US.js": 77,
		"./en.js": 76,
		"./icons/en-US": 78,
		"./icons/en-US.js": 78,
		"./pt-BR": 79,
		"./pt-BR.js": 79
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 75;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	module.exports = __webpack_require__(77);

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(69);

	var _extends3 = _interopRequireDefault(_extends2);

	var _enUS = __webpack_require__(78);

	var _enUS2 = _interopRequireDefault(_enUS);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _extends3.default)({
	  IndexFilters: {
	    filters: '{quantity, plural,\n  =0 {Filters}\n  =1 {one filter}\n  ' + 'other {# filters}\n}'
	  }
	}, _enUS2.default, {
	  Active: 'Active',
	  Alerts: 'Alerts',
	  All: 'All',
	  area: 'area',
	  Bar: 'Bar',
	  bar: 'bar',
	  Blank: 'Blank',
	  Box: 'Box',
	  Category: 'Category',
	  Circle: 'Circle',
	  Chart: 'Chart',
	  Clear: 'Clear',
	  Cleared: 'Cleared',
	  Close: 'Close',
	  'Close Menu': 'Close Menu',
	  Completed: 'Completed',
	  created: 'Created',
	  Critical: 'Critical',
	  Disabled: 'Disabled',
	  Distribution: 'Distribution',
	  Email: 'Email',
	  Error: 'Error',
	  Filter: 'Filter',
	  Footer: 'Footer',
	  'Grommet Logo': 'Grommet Logo',
	  'Layer': 'Layer',
	  line: 'line',
	  'Loading': 'Loading',
	  loginInvalidPassword: 'Please provide Username and Password.',
	  'Log In': 'Log In',
	  Logout: 'Logout',
	  'Main Content': 'Main Content',
	  Max: 'Max',
	  Menu: 'Menu',
	  Meter: 'Meter',
	  Min: 'Min',
	  model: 'Model',
	  modified: 'Modified',
	  monitor: 'monitor',
	  Name: 'Name',
	  OK: 'OK',
	  Open: 'Open',
	  Password: 'Password',
	  'Remember me': 'Remember me',
	  Resource: 'Resource',
	  Running: 'Running',
	  Search: 'Search',
	  'Skip to': 'Skip to',
	  Sort: 'Sort',
	  State: 'State',
	  Status: 'Status',
	  'Tab Contents': '{activeTitle} Tab Contents',
	  Tasks: 'Tasks',
	  Time: 'Time',
	  Title: 'Title',
	  Total: 'Total',
	  Threshold: 'Threshold',
	  Unknown: 'Unknown',
	  Username: 'Username',
	  uri: 'URI',
	  Value: 'Value',
	  Warning: 'Warning'
	}); // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  '3d': '3d',
	  achievement: 'achievement',
	  action: 'action',
	  actions: 'actions',
	  add: 'add',
	  'advanced-search': 'advanced search',
	  aggregate: 'aggregate',
	  alarm: 'alarm',
	  alert: 'alert',
	  analytics: 'analytics',
	  announcement: 'announcement',
	  app: 'app',
	  archive: 'archive',
	  article: 'article',
	  ascend: 'ascend',
	  assistant: 'assistant',
	  attachment: 'attachment',
	  'bar-chart': 'bar chart',
	  blog: 'blog',
	  book: 'book',
	  bookmark: 'bookmark',
	  bundle: 'bundle',
	  calculator: 'calculator',
	  calendar: 'calendar',
	  camera: 'camera',
	  capacity: 'capacity',
	  'caret-down': 'caret down',
	  'caret-next': 'caret next',
	  'caret-previous': 'caret previous',
	  'caret-up': 'caret up',
	  catalog: 'catalog',
	  'chapter-add': 'chapter add',
	  'chapter-next': 'chapter next',
	  'chapter-previous': 'chapter previous',
	  chat: 'chat',
	  'checkbox-selected': 'checkbox selected',
	  checkbox: 'checkbox',
	  checkmark: 'checkmark',
	  'circular-view': 'circular view',
	  clipboard: 'clipboard',
	  clone: 'clone',
	  close: 'close',
	  'cloud-computer': 'cloud computer',
	  'cloud-download': 'cloud download',
	  'cloud-software': 'cloud software',
	  'cloud-upload': 'cloud upload',
	  cloud: 'cloud',
	  cluster: 'cluster',
	  code: 'code',
	  'command-line': 'command line',
	  compare: 'compare',
	  compasss: 'compasss',
	  compliance: 'compliance',
	  'computer-personal': 'computer personal',
	  configuration: 'configuration',
	  connect: 'connect',
	  'contact-card': 'contact card',
	  'contact-us': 'contact us',
	  contract: 'contract',
	  copy: 'copy',
	  cube: 'cube',
	  cubes: 'cubes',
	  cursor: 'cursor',
	  cut: 'cut',
	  cycle: 'cycle',
	  dashboard: 'dashboard',
	  database: 'database',
	  defect: 'defect',
	  deliver: 'deliver',
	  deployment: 'deployment',
	  descend: 'descend',
	  desktop: 'desktop',
	  detach: 'detach',
	  directions: 'directions',
	  dislike: 'dislike',
	  'divide-four': 'divide four',
	  'divide-right': 'divide right',
	  'divide-three': 'divide three',
	  divide: 'divide',
	  'document-cloud': 'document cloud',
	  'document-compress': 'document compress',
	  'document-conig': 'document conig',
	  'document-csv': 'document csv',
	  'document-data': 'document data',
	  'document-download': 'document download',
	  'document-excel': 'document excel',
	  'document-executable': 'document executable',
	  'document-image': 'document image',
	  'document-locked': 'document locked',
	  'document-missing': 'document missing',
	  'document-notes': 'document notes',
	  'document-outlook': 'document outlook',
	  'document-pdf': 'document pdf',
	  'document-performance': 'document performance',
	  'document-powerpoint': 'document powerpoint',
	  'document-rtf': 'document rtf',
	  'document-sound': 'document sound',
	  'document-test': 'document test',
	  'document-text': 'document text',
	  'document-threat': 'document threat',
	  'document-time': 'document time',
	  'document-transfer': 'document transfer',
	  'document-txt': 'document txt',
	  'document-update': 'document update',
	  'document-upload': 'document upload',
	  'document-user': 'document user',
	  'document-verified': 'document verified',
	  'document-video': 'document video',
	  'document-word': 'document word',
	  document: 'document',
	  domain: 'domain',
	  down: 'down',
	  download: 'download',
	  drag: 'drag',
	  'drive-cage': 'drive cage',
	  duplicate: 'duplicate',
	  edit: 'edit',
	  eject: 'eject',
	  expand: 'expand',
	  fan: 'fan',
	  'fast-forward': 'fast forward',
	  favorite: 'favorite',
	  filter: 'filter',
	  'first-aid': 'first aid',
	  flag: 'flag',
	  'folder-cycle': 'folder cycle',
	  'folder-open': 'folder open',
	  folder: 'folder',
	  gallery: 'gallery',
	  globe: 'globe',
	  grid: 'grid',
	  group: 'group',
	  grow: 'grow',
	  halt: 'halt',
	  help: 'help',
	  history: 'history',
	  home: 'home',
	  'host-maintenance': 'host maintenance',
	  host: 'host',
	  image: 'image',
	  impact: 'impact',
	  'in-progress': 'in progress',
	  inbox: 'inbox',
	  indicator: 'indicator',
	  information: 'information',
	  inherit: 'inherit',
	  install: 'install',
	  integration: 'integration',
	  iteration: 'iteration',
	  java: 'java',
	  language: 'language',
	  launch: 'launch',
	  license: 'license',
	  like: 'like',
	  'line-chart': 'line chart',
	  'link-bottom': 'link bottom',
	  'link-down': 'link down',
	  'link-next': 'link next',
	  'link-previous': 'link previous',
	  'link-top': 'link top',
	  'link-up': 'link up',
	  link: 'link',
	  'location-pin': 'location pin',
	  location: 'location',
	  lock: 'lock',
	  login: 'login',
	  logout: 'logout',
	  mail: 'mail',
	  manual: 'manual',
	  'map-location': 'map location',
	  map: 'map',
	  menu: 'menu',
	  microphone: 'microphone',
	  monitor: 'monitor',
	  more: 'more',
	  multiple: 'multiple',
	  navigate: 'navigate',
	  'new-window': 'new window',
	  new: 'new',
	  next: 'next',
	  notes: 'notes',
	  notification: 'notification',
	  optimization: 'optimization',
	  organization: 'organization',
	  overlay: 'overlay',
	  overview: 'overview',
	  pan: 'pan',
	  pause: 'pause',
	  'payment-google-wallet': 'payment-google-wallet',
	  'payment-mastercard': 'payment mastercard',
	  'payment-paypal': 'payment paypal',
	  'payment-square': 'payment square',
	  'payment-visa': 'payment visa',
	  pin: 'pin',
	  plan: 'plan',
	  'platform-apple': 'platform apple',
	  'platform-chrome': 'platform chrome',
	  'platform-dropbox': 'platform dropbox',
	  'platform-edge': 'platform edge',
	  'platform-firefox': 'platform firefox',
	  'platform-internet-explorer': 'platform-internet-explorer',
	  'platform-skype': 'platform skype',
	  'platform-windows': 'platform windows',
	  play: 'play',
	  power: 'power',
	  previous: 'previous',
	  print: 'print',
	  'quick-view': 'quick view',
	  'radial-selected': 'radial selected',
	  radial: 'radial',
	  refresh: 'refresh',
	  resources: 'resources',
	  rewind: 'rewind',
	  risk: 'risk',
	  rss: 'rss',
	  satellite: 'satellite',
	  'schedule-clone': 'schedule clone',
	  'schedule-new': 'schedule new',
	  'schedule-play': 'schedule play',
	  schedule: 'schedule',
	  scorecard: 'scorecard',
	  search: 'search',
	  secure: 'secure',
	  'select-left': 'select left',
	  select: 'select',
	  'server-cluster': 'server cluster',
	  server: 'server',
	  servers: 'servers',
	  'service-business': 'service business',
	  'service-start': 'service start',
	  share: 'share',
	  'sheild-configure': 'sheild configure',
	  shield: 'shield',
	  shift: 'shift',
	  'shop-basket': 'shop basket',
	  'shop-cart': 'shop cart',
	  soa: 'soa',
	  'social-email': 'social email',
	  'social-facebook': 'social facebook',
	  'social-github': 'social github',
	  'social-google': 'social google',
	  'social-instagram': 'social instagram',
	  'social-linkedin': 'social linkedin',
	  'social-medium': 'social medium',
	  'social-pinterest': 'social pinterest',
	  'social-reddit': 'social reddit',
	  'social-slack': 'social slack',
	  'social-tumblr': 'social tumblr',
	  'social-twitter': 'social twitter',
	  'social-vimeo': 'social vimeo',
	  'social-youtube': 'social youtube',
	  sort: 'sort',
	  stakeholder: 'stakeholder',
	  'star-half': 'star half',
	  star: 'star',
	  steps: 'steps',
	  storage: 'storage',
	  'street-view': 'street view',
	  subtract: 'subtract',
	  support: 'support',
	  svg: 'svg',
	  sync: 'sync',
	  system: 'system',
	  'tab-next': 'tab next',
	  'tab-previous': 'tab previous',
	  'tab-up': 'tab up',
	  'table-add': 'table add',
	  table: 'table',
	  tag: 'tag',
	  target: 'target',
	  task: 'task',
	  template: 'template',
	  'test-desktop': 'test desktop',
	  test: 'test',
	  'tesxt-wrap': 'tesxt wrap',
	  threats: 'threats',
	  'three-d': 'three d',
	  ticket: 'ticket',
	  tools: 'tools',
	  tooltip: 'tooltip',
	  transaction: 'transaction',
	  trash: 'trash',
	  tree: 'tree',
	  trigger: 'trigger',
	  trophy: 'trophy',
	  troubleshooting: 'troubleshooting',
	  unlock: 'unlock',
	  up: 'up',
	  update: 'update',
	  upgrade: 'upgrade',
	  upload: 'upload',
	  'user-add': 'user add',
	  'user-admin': 'user admin',
	  'user-expert': 'user expert',
	  'user-female': 'user female',
	  'user-manager': 'user manager',
	  'user-new': 'user new',
	  'user-police': 'user police',
	  'user-settings': 'user settings',
	  'user-worker': 'user worker',
	  user: 'user',
	  validation: 'validation',
	  video: 'video',
	  view: 'view',
	  'virtual-machine': 'virtual machine',
	  'vm-maintenance': 'vm maintenance',
	  'volume-low': 'volume low',
	  'volume-mute': 'volume mute',
	  volume: 'volume',
	  vulnerability: 'vulnerability',
	  waypoint: 'waypoint',
	  workshop: 'workshop',
	  'zoom-in': 'zoom in'
	};
	module.exports = exports['default'];

/***/ },
/* 79 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	exports.default = {
	  IndexFilters: {
	    filters: '{quantity, plural,\n  =0 {Filtros}\n  =1 {um filtro}\n  ' + 'other {# filtros}\n}'
	  },
	  Active: 'Ativos',
	  add: 'add',
	  Alerts: 'Alertas',
	  All: 'Todos',
	  area: 'Área',
	  Bar: 'Bar',
	  bar: 'bar',
	  Blank: 'Em branco',
	  Box: 'Box',
	  camera: 'Câmera',
	  Category: 'Categoria',
	  Circle: 'Círculo',
	  Chart: 'Gráfico',
	  Clear: 'Limpar',
	  Cleared: 'Livre',
	  Close: 'Fechar',
	  close: 'fechar',
	  'Close Menu': 'Fechar Menu',
	  'command-line': 'linha de comando',
	  Completed: 'Completado',
	  created: 'Criado',
	  Critical: 'Crítico',
	  Disabled: 'Desabilitado',
	  Distribution: 'Distribuição',
	  down: 'baixo',
	  Email: 'Email',
	  Error: 'Erro',
	  Filter: 'Filtro',
	  filter: 'filtro',
	  Footer: 'Rodapé',
	  'Grommet Logo': 'Gromment Logomarca',
	  'Layer': 'Modal',
	  line: 'linha',
	  'link-next': 'link-next',
	  'link-previous': 'link-previous',
	  'Loading': 'Carregando',
	  loginInvalidPassword: 'Por favor, informe Usuário e Senha.',
	  'Log In': 'Logar',
	  Logout: 'Deslogar',
	  'Main Content': 'Conteúdo Principal',
	  Max: 'Max',
	  Menu: 'Menu',
	  menu: 'menu',
	  Meter: 'Meter',
	  Min: 'Min',
	  model: 'Modelo',
	  modified: 'Modificado',
	  monitor: 'monitor',
	  more: 'mais',
	  Name: 'Nome',
	  OK: 'OK',
	  Open: 'Abrir',
	  Password: 'Senha',
	  power: 'power',
	  'Remember me': 'Lembrar Usuário',
	  Resource: 'Recurso',
	  Running: 'Executando',
	  Search: 'Buscar',
	  search: 'buscar',
	  'Skip to': 'Saltar para',
	  State: 'Estado',
	  Status: 'Situaçāo',
	  subtract: 'subtract',
	  'Tab Contents': '{activeTitle} Conteúdo da Tab',
	  Tasks: 'Tarefas',
	  Time: 'Data',
	  Title: 'Título',
	  Total: 'Total',
	  trash: 'lixeira',
	  Threshold: 'Limiar',
	  Unknown: 'Desconhecido',
	  user: 'user',
	  Username: 'Usuário',
	  uri: 'URI',
	  validation: 'validation',
	  Value: 'Valor',
	  Warning: 'Alerta'
	};
	module.exports = exports['default'];

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _FormattedMessage = __webpack_require__(81);

	var _FormattedMessage2 = _interopRequireDefault(_FormattedMessage);

	var _Box = __webpack_require__(83);

	var _Box2 = _interopRequireDefault(_Box);

	var _Layer = __webpack_require__(94);

	var _Layer2 = _interopRequireDefault(_Layer);

	var _Menu = __webpack_require__(97);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _KeyboardAccelerators = __webpack_require__(87);

	var _KeyboardAccelerators2 = _interopRequireDefault(_KeyboardAccelerators);

	var _Intl = __webpack_require__(90);

	var _Intl2 = _interopRequireDefault(_Intl);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.SKIP_LINK_ANCHOR;

	var SkipLinks = function (_Component) {
	  (0, _inherits3.default)(SkipLinks, _Component);

	  function SkipLinks(props, context) {
	    (0, _classCallCheck3.default)(this, SkipLinks);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SkipLinks).call(this, props, context));

	    _this._processTab = _this._processTab.bind(_this);
	    _this._onFocus = _this._onFocus.bind(_this);
	    _this._updateAnchors = _this._updateAnchors.bind(_this);
	    _this._checkForSkipLink = _this._checkForSkipLink.bind(_this);
	    _this.state = { anchors: [], showLayer: false };
	    return _this;
	  }

	  (0, _createClass3.default)(SkipLinks, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._updateAnchors();

	      this._keyboardHandlers = {
	        tab: this._processTab
	      };
	      _KeyboardAccelerators2.default.startListeningToKeyboard(this, this._keyboardHandlers);

	      document.addEventListener('DOMNodeInserted', this._checkForSkipLink);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      this.setState({ routeChanged: true });
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.state.routeChanged) {
	        this.setState({ routeChanged: false }, this._updateAnchors);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _KeyboardAccelerators2.default.stopListeningToKeyboard(this, this._keyboardHandlers);
	      document.removeEventListener('DOMNodeInserted', this._checkForSkipLink);
	    }
	  }, {
	    key: '_checkForSkipLink',
	    value: function _checkForSkipLink(event) {
	      var skipLinks = document.querySelectorAll('.' + CLASS_ROOT);
	      if (skipLinks.length > 0) {
	        this._updateAnchors();
	      } else if (this.state.anchors.length > 0) {
	        this._updateAnchors();
	      }
	    }
	  }, {
	    key: '_updateAnchors',
	    value: function _updateAnchors() {
	      var anchorElements = document.querySelectorAll('.' + CLASS_ROOT);

	      var anchors = Array.prototype.map.call(anchorElements, function (anchorElement) {
	        return {
	          id: anchorElement.getAttribute('id'),
	          label: anchorElement.textContent
	        };
	      });

	      this.setState({ anchors: anchors, routeChanged: false });
	    }
	  }, {
	    key: '_onFocus',
	    value: function _onFocus() {
	      if (!this.state.showLayer) {
	        this.setState({ showLayer: true });
	      }
	    }
	  }, {
	    key: '_processTab',
	    value: function _processTab(event) {
	      if (this.state.showLayer) {
	        var currentAnchor = document.activeElement;
	        var last = this.state.anchors.length - 1;

	        var achorId = event.shiftKey ? this.state.anchors[0].id : this.state.anchors[last].id;

	        var targetId = 'skipLayer_' + achorId;

	        if (currentAnchor.id === targetId) {
	          this.setState({ showLayer: false });
	        }
	      }
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick(destId) {
	      return function (event) {
	        var dest = document.getElementById(destId);
	        dest.focus();
	        this.setState({ showLayer: false });
	      }.bind(this);
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      var anchorElements = this.state.anchors.map(function (anchor, index) {
	        var skipToLabel = _Intl2.default.getMessage(this.context.intl, 'Skip to');
	        var a11yLabel = skipToLabel + ' ' + anchor.label;
	        return _react2.default.createElement(
	          'a',
	          { href: '#' + anchor.id,
	            onFocus: this._onFocus,
	            onClick: this._onClick(anchor.id),
	            id: 'skipLayer_' + anchor.id,
	            key: 'skipLayerItem_' + index,
	            'aria-label': a11yLabel },
	          anchor.label
	        );
	      }.bind(this));

	      var menuComponent = void 0;
	      if (anchorElements.length > 0) {
	        menuComponent = _react2.default.createElement(
	          _Menu2.default,
	          { direction: 'row', responsive: false },
	          anchorElements
	        );
	      }

	      return _react2.default.createElement(
	        _Layer2.default,
	        { id: 'skip-link-layer', hidden: !this.state.showLayer, align: 'top' },
	        _react2.default.createElement(
	          _Box2.default,
	          { ref: 'skipLinksLayer',
	            pad: { horizontal: 'small', vertical: 'medium' } },
	          _react2.default.createElement(
	            'h2',
	            null,
	            _react2.default.createElement(_FormattedMessage2.default, { id: 'Skip to', defaultMessage: 'Skip to' })
	          ),
	          menuComponent
	        )
	      );
	    }
	  }]);
	  return SkipLinks;
	}(_react.Component);

	SkipLinks.displayName = 'SkipLinks';
	exports.default = SkipLinks;


	SkipLinks.contextTypes = {
	  intl: _react.PropTypes.object
	};
	module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactIntl = __webpack_require__(82);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	// NOTE: This component is a temporary wrapper of react-intl FormattedMessage
	// to avoid errors being thrown if the context hasn't been wrapped by
	// IntlProvider. The hope is that react-intl will change to obviate the
	// need for this component.

	var GrommetFormattedMessage = function GrommetFormattedMessage(props, context) {
	  return context.intl ? _react2.default.createElement(_reactIntl.FormattedMessage, props) : _react2.default.createElement(
	    'span',
	    { id: props.id.replace(' ', '_') },
	    props.defaultMessage || props.id
	  );
	};

	GrommetFormattedMessage.contextTypes = {
	  intl: _react.PropTypes.object
	};

	GrommetFormattedMessage.propTypes = {
	  id: _react.PropTypes.string.isRequired,
	  defaultMessage: _react.PropTypes.string
	};

	GrommetFormattedMessage.displayName = 'GrommetFormattedMessage';

	exports.default = GrommetFormattedMessage;
	module.exports = exports['default'];

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = require("react-intl");

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(69);

	var _extends3 = _interopRequireDefault(_extends2);

	var _keys = __webpack_require__(84);

	var _keys2 = _interopRequireDefault(_keys);

	var _typeof2 = __webpack_require__(24);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _KeyboardAccelerators = __webpack_require__(87);

	var _KeyboardAccelerators2 = _interopRequireDefault(_KeyboardAccelerators);

	var _Intl = __webpack_require__(90);

	var _Intl2 = _interopRequireDefault(_Intl);

	var _Props = __webpack_require__(91);

	var _Props2 = _interopRequireDefault(_Props);

	var _SkipLinkAnchor = __webpack_require__(92);

	var _SkipLinkAnchor2 = _interopRequireDefault(_SkipLinkAnchor);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.BOX;
	var BACKGROUND_COLOR_INDEX = _CSSClassnames2.default.BACKGROUND_COLOR_INDEX;

	var Box = function (_Component) {
	  (0, _inherits3.default)(Box, _Component);

	  function Box() {
	    (0, _classCallCheck3.default)(this, Box);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Box).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Box, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.onClick) {
	        var clickCallback = function () {
	          if (this.refs.boxContainer === document.activeElement) {
	            this.props.onClick();
	          }
	        }.bind(this);

	        _KeyboardAccelerators2.default.startListeningToKeyboard(this, {
	          enter: clickCallback,
	          space: clickCallback
	        });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.props.onClick) {
	        _KeyboardAccelerators2.default.stopListeningToKeyboard(this);
	      }
	    }
	  }, {
	    key: '_addPropertyClass',
	    value: function _addPropertyClass(classes, prefix, property, classProperty) {
	      var choice = this.props[property];
	      var propertyPrefix = classProperty || property;
	      if (choice) {
	        if (typeof choice === 'string') {
	          classes.push(prefix + '--' + propertyPrefix + '-' + choice);
	        } else if ((typeof choice === 'undefined' ? 'undefined' : (0, _typeof3.default)(choice)) === 'object') {
	          (0, _keys2.default)(choice).forEach(function (key) {
	            classes.push(prefix + '--' + propertyPrefix + '-' + key + '-' + choice[key]);
	          });
	        } else {
	          classes.push(prefix + '--' + propertyPrefix);
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = [CLASS_ROOT];
	      var containerClasses = [CLASS_ROOT + "__container"];
	      var restProps = _Props2.default.omit(this.props, (0, _keys2.default)(Box.propTypes));
	      this._addPropertyClass(classes, CLASS_ROOT, 'full');
	      this._addPropertyClass(classes, CLASS_ROOT, 'direction');
	      this._addPropertyClass(classes, CLASS_ROOT, 'justify');
	      this._addPropertyClass(classes, CLASS_ROOT, 'align');
	      this._addPropertyClass(classes, CLASS_ROOT, 'alignContent', 'align-content');
	      this._addPropertyClass(classes, CLASS_ROOT, 'reverse');
	      this._addPropertyClass(classes, CLASS_ROOT, 'responsive');
	      this._addPropertyClass(classes, CLASS_ROOT, 'pad');
	      this._addPropertyClass(classes, CLASS_ROOT, 'separator');
	      this._addPropertyClass(classes, CLASS_ROOT, 'size');
	      this._addPropertyClass(classes, CLASS_ROOT, 'textAlign', 'text-align');
	      this._addPropertyClass(classes, CLASS_ROOT, 'wrap');
	      if (this.props.hasOwnProperty('flex')) {
	        if (this.props.flex) {
	          classes.push('flex');
	        } else {
	          classes.push('no-flex');
	        }
	      }
	      if (this.props.hasOwnProperty('size')) {
	        if (this.props.size) {
	          classes.push(CLASS_ROOT + '--size');
	        }
	      }

	      if (this.props.appCentered) {
	        this._addPropertyClass(containerClasses, CLASS_ROOT + "__container", 'full');
	        if (this.props.colorIndex) {
	          containerClasses.push(BACKGROUND_COLOR_INDEX + '-' + this.props.colorIndex);
	        }
	        if (this.props.containerClassName) {
	          containerClasses.push(this.props.containerClassName);
	        }
	      } else {
	        if (this.props.colorIndex) {
	          classes.push(BACKGROUND_COLOR_INDEX + '-' + this.props.colorIndex);
	        }
	      }

	      var a11yProps = {};
	      if (this.props.onClick) {
	        classes.push(CLASS_ROOT + "--clickable");
	        if (this.props.focusable) {
	          var boxLabel = this.props.a11yTitle || _Intl2.default.getMessage(this.context.intl, 'Box');
	          a11yProps.tabIndex = 0;
	          a11yProps["aria-label"] = boxLabel;
	          a11yProps.role = this.props.role || 'link';
	        }
	      }

	      var skipLinkAnchor = void 0;
	      if (this.props.primary) {
	        var mainContentLabel = _Intl2.default.getMessage(this.context.intl, 'Main Content');
	        skipLinkAnchor = _react2.default.createElement(_SkipLinkAnchor2.default, { label: mainContentLabel });
	      }

	      if (this.props.className) {
	        classes.push(this.props.className);
	      }

	      var style = {};
	      if (this.props.texture && 'string' === typeof this.props.texture) {
	        style.backgroundImage = this.props.texture;
	      } else if (this.props.backgroundImage) {
	        style.background = this.props.backgroundImage + " no-repeat center center";
	        style.backgroundSize = "cover";
	      }
	      style = (0, _extends3.default)({}, style, restProps.style);
	      var texture = void 0;
	      if ('object' === (0, _typeof3.default)(this.props.texture)) {
	        texture = _react2.default.createElement(
	          'div',
	          { className: CLASS_ROOT + "__texture" },
	          this.props.texture
	        );
	      }

	      var Component = this.props.tag;

	      if (this.props.appCentered) {
	        return _react2.default.createElement(
	          'div',
	          (0, _extends3.default)({}, restProps, { ref: 'boxContainer',
	            className: containerClasses.join(' '),
	            style: style, role: this.props.role }, a11yProps),
	          skipLinkAnchor,
	          _react2.default.createElement(
	            Component,
	            { id: this.props.id, className: classes.join(' ') },
	            texture,
	            this.props.children
	          )
	        );
	      } else {
	        return _react2.default.createElement(
	          Component,
	          (0, _extends3.default)({}, restProps, { ref: 'boxContainer', id: this.props.id,
	            className: classes.join(' '), style: style,
	            role: this.props.role, tabIndex: this.props.tabIndex,
	            onClick: this.props.onClick }, a11yProps),
	          skipLinkAnchor,
	          texture,
	          this.props.children
	        );
	      }
	    }
	  }]);
	  return Box;
	}(_react.Component);

	Box.displayName = 'Box';
	exports.default = Box;


	Box.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  align: _react.PropTypes.oneOf(['start', 'center', 'end', 'baseline', 'stretch']),
	  alignContent: _react.PropTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'stretch']),
	  appCentered: _react.PropTypes.bool,
	  backgroundImage: _react.PropTypes.string,
	  children: _react.PropTypes.any,
	  colorIndex: _react.PropTypes.string,
	  containerClassName: _react.PropTypes.string,
	  direction: _react.PropTypes.oneOf(['row', 'column']),
	  focusable: _react.PropTypes.bool,
	  flex: _react.PropTypes.bool,
	  full: _react.PropTypes.oneOf([true, 'horizontal', 'vertical', false]),
	  onClick: _react.PropTypes.func,
	  justify: _react.PropTypes.oneOf(['start', 'center', 'between', 'end']),
	  pad: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['none', 'small', 'medium', 'large']), _react.PropTypes.shape({
	    between: _react.PropTypes.oneOf(['none', 'small', 'medium', 'large']),
	    horizontal: _react.PropTypes.oneOf(['none', 'small', 'medium', 'large']),
	    vertical: _react.PropTypes.oneOf(['none', 'small', 'medium', 'large'])
	  })]),
	  primary: _react.PropTypes.bool,
	  reverse: _react.PropTypes.bool,
	  responsive: _react.PropTypes.bool,
	  role: _react.PropTypes.string,
	  separator: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'horizontal', 'vertical', 'all', 'none']),
	  size: _react.PropTypes.oneOf(['auto', 'xsmall', 'small', 'medium', 'large', 'full']),
	  tag: _react.PropTypes.string,
	  textAlign: _react.PropTypes.oneOf(['left', 'center', 'right']),
	  texture: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.string]),
	  wrap: _react.PropTypes.bool
	};

	Box.contextTypes = {
	  intl: _react.PropTypes.object
	};

	Box.defaultProps = {
	  direction: 'column',
	  pad: 'none',
	  tag: 'div',
	  responsive: true,
	  focusable: true
	};
	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(86);
	module.exports = __webpack_require__(17).Object.keys;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(12);

	__webpack_require__(14)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactDom = __webpack_require__(88);

	var _DOM = __webpack_require__(89);

	var _DOM2 = _interopRequireDefault(_DOM);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Allow callers to use key labels instead of key code numbers.
	// This makes their code easier to read.
	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var KEYS = {
	  backspace: 8,
	  tab: 9,
	  enter: 13,
	  esc: 27,
	  escape: 27,
	  space: 32,
	  left: 37,
	  up: 38,
	  right: 39,
	  down: 40,
	  comma: 188,
	  shift: 16
	};

	var _keyboardAccelerators = {};
	var _listeners = [];
	var _isKeyboardAcceleratorListening = false;

	var _onKeyboardAcceleratorKeyPress = function _onKeyboardAcceleratorKeyPress(e) {
	  var key = e.keyCode ? e.keyCode : e.which;
	  _listeners.slice().reverse().some(function (listener) {
	    if (_keyboardAccelerators[listener]) {
	      var handlers = _keyboardAccelerators[listener].handlers;
	      if (handlers.hasOwnProperty(key)) {
	        if (handlers[key](e)) {
	          return true;
	        }
	      }
	    }
	    return false;
	  });
	};

	// KeyboardAccelerators is a utility for handling keyboard events.
	// Add listeners using startListeningToKeyboard().
	// Remove listeners using stopListeningToKeyboard().
	exports.default = {
	  _initKeyboardAccelerators: function _initKeyboardAccelerators(element) {
	    var id = _DOM2.default.generateId(element);
	    _keyboardAccelerators[id] = {
	      handlers: {}
	    };
	  },
	  _getKeyboardAcceleratorHandlers: function _getKeyboardAcceleratorHandlers(element) {
	    var id = _DOM2.default.generateId(element);
	    return _keyboardAccelerators[id].handlers;
	  },
	  _getDowns: function _getDowns(element) {
	    var id = _DOM2.default.generateId(element);
	    return _keyboardAccelerators[id].downs;
	  },
	  _isComponentListening: function _isComponentListening(element) {
	    var id = _DOM2.default.generateId(element);

	    return _listeners.some(function (listener) {
	      return listener === id;
	    });
	  },
	  _subscribeComponent: function _subscribeComponent(element) {
	    var id = _DOM2.default.generateId(element);
	    _listeners.push(id);
	  },
	  _unsubscribeComponent: function _unsubscribeComponent(element) {
	    var id = _DOM2.default.generateId(element);

	    var removeListenerIndex = _listeners.indexOf(id);
	    _listeners.splice(removeListenerIndex, 1);

	    delete _keyboardAccelerators[id];
	  },


	  // Add handlers for specific keys.
	  // This function can be called multiple times, existing handlers will
	  // be replaced, new handlers will be added.
	  startListeningToKeyboard: function startListeningToKeyboard(component, handlers) {
	    var element = (0, _reactDom.findDOMNode)(component);
	    this._initKeyboardAccelerators(element);
	    var keys = 0;
	    for (var key in handlers) {
	      if (handlers.hasOwnProperty(key)) {
	        var keyCode = key;
	        if (KEYS.hasOwnProperty(key)) {
	          keyCode = KEYS[key];
	        }
	        keys += 1;
	        this._getKeyboardAcceleratorHandlers(element)[keyCode] = handlers[key];
	      }
	    }

	    if (keys > 0) {
	      if (!_isKeyboardAcceleratorListening) {
	        window.addEventListener("keydown", _onKeyboardAcceleratorKeyPress);
	        _isKeyboardAcceleratorListening = true;
	      }
	      if (!this._isComponentListening(element)) {
	        this._subscribeComponent(element);
	      }
	    }
	  },


	  // Remove handlers for all keys or specific keys.
	  // If no argument is passed in, all handlers are removed.
	  // This function can be called multiple times, only the handlers
	  // specified will be removed.
	  stopListeningToKeyboard: function stopListeningToKeyboard(component, handlers) {
	    var element = (0, _reactDom.findDOMNode)(component);
	    if (!this._isComponentListening(element)) {
	      return;
	    }
	    if (handlers) {
	      for (var key in handlers) {
	        if (handlers.hasOwnProperty(key)) {
	          var keyCode = key;
	          if (KEYS.hasOwnProperty(key)) {
	            keyCode = KEYS[key];
	          }
	          delete this._getKeyboardAcceleratorHandlers(element)[keyCode];
	        }
	      }
	    }

	    var keyCount = 0;
	    for (var keyHandler in this._getKeyboardAcceleratorHandlers(element)) {
	      if (this._getKeyboardAcceleratorHandlers(element).hasOwnProperty(keyHandler)) {
	        keyCount += 1;
	      }
	    }

	    if (!handlers || 0 === keyCount) {
	      this._initKeyboardAccelerators(element);
	      this._unsubscribeComponent(element);
	    }

	    if (_listeners.length === 0) {
	      window.removeEventListener("keydown", _onKeyboardAcceleratorKeyPress);
	      _isKeyboardAcceleratorListening = false;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 89 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
	function hash(input) {
	  var hash = 0,
	      i,
	      chr,
	      len;
	  if (input.length === 0) return hash;
	  for (i = 0, len = input.length; i < len; i++) {
	    chr = input.charCodeAt(i);
	    hash = (hash << 5) - hash + chr;
	    hash = hash & hash; // Convert to 32bit integer
	  }
	  return hash;
	};

	exports.default = {
	  findScrollParents: function findScrollParents(element, horizontal) {
	    var result = [];
	    var parent = element.parentNode;
	    while (parent && parent.getBoundingClientRect) {
	      var rect = parent.getBoundingClientRect();
	      // 10px is to account for borders and scrollbars in a lazy way
	      if (horizontal) {
	        if (rect.width && parent.scrollWidth > rect.width + 10) {
	          result.push(parent);
	        }
	      } else {
	        if (rect.height && parent.scrollHeight > rect.height + 10) {
	          result.push(parent);
	        }
	      }
	      parent = parent.parentNode;
	    }
	    if (result.length === 0) {
	      result.push(document);
	    }
	    return result;
	  },
	  isDescendant: function isDescendant(parent, child) {
	    var node = child.parentNode;
	    while (node != null) {
	      if (node == parent) {
	        return true;
	      }
	      node = node.parentNode;
	    }
	    return false;
	  },
	  findAncestor: function findAncestor(element, className) {
	    var node = element.parentNode;
	    while (node != null) {
	      if (node.classList && node.classList.contains(className)) {
	        break;
	      }
	      node = node.parentNode;
	    }
	    return node;
	  },
	  filterByFocusable: function filterByFocusable(elements) {
	    return Array.prototype.filter.call(elements || [], function (element) {
	      var currentTag = element.tagName.toLowerCase();
	      var validTags = /(svg|a|area|input|select|textarea|button|iframe|div)$/;
	      var isValidTag = currentTag.match(validTags) && element.focus;

	      if (currentTag === 'a') {
	        return isValidTag && element.childNodes.length > 0 && element.getAttribute('href');
	      } else if (currentTag === 'svg' || currentTag === 'div') {
	        return isValidTag && element.hasAttribute('tabindex');
	      }

	      return isValidTag;
	    });
	  },
	  getBestFirstFocusable: function getBestFirstFocusable(elements) {
	    var bestFirstFocusable;

	    Array.prototype.some.call(elements || [], function (element) {
	      var currentTag = element.tagName.toLowerCase();
	      var isValidTag = currentTag.match(/(input|select|textarea)$/);
	      return isValidTag ? (bestFirstFocusable = element, true) : false;
	    });

	    if (!bestFirstFocusable) {
	      bestFirstFocusable = this.filterByFocusable(elements)[0];
	    }

	    return bestFirstFocusable;
	  },
	  isFormElement: function isFormElement(element) {
	    var elementType = element ? element.tagName.toLowerCase() : undefined;
	    return elementType && (elementType === 'input' || elementType === 'textarea');
	  },
	  generateId: function generateId(element) {
	    var id = void 0;
	    var elementId = element.getAttribute('id');
	    if (!elementId) {
	      // IE11 fix: check for parentNode instead of parentElement
	      var parentElement = element.parentElement || element.parentNode;
	      if (parentElement) {
	        id = hash(parentElement.innerHTML);
	        element.setAttribute('id', id);
	      }
	    } else {
	      id = elementId;
	    }
	    return id;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 90 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// (C) Copyright 2014 Hewlett Packard Enterprise Development LP
	exports.default = {
	  getMessage: function getMessage(intl, key, values) {
	    if (intl) {
	      return intl.formatMessage({
	        id: key,
	        defaultMessage: key
	      }, values);
	    } else {
	      return key;
	    }
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keys = __webpack_require__(84);

	var _keys2 = _interopRequireDefault(_keys);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	exports.default = {
	  pick: function pick(props, fields) {
	    var has = function has(p) {
	      return props.hasOwnProperty(p);
	    };
	    var obj = {};
	    (fields || []).forEach(function (field) {
	      if (has(field)) obj[field] = props[field];
	    });
	    return obj;
	  },
	  omit: function omit(props, fields) {
	    var obj = {};
	    (0, _keys2.default)(props).forEach(function (p) {
	      if ((fields || []).indexOf(p) === -1) {
	        obj[p] = props[p];
	      }
	    });
	    return obj;
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.SKIP_LINK_ANCHOR;

	var SkipLinkAnchor = function (_Component) {
	  (0, _inherits3.default)(SkipLinkAnchor, _Component);

	  function SkipLinkAnchor() {
	    (0, _classCallCheck3.default)(this, SkipLinkAnchor);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SkipLinkAnchor).apply(this, arguments));
	  }

	  (0, _createClass3.default)(SkipLinkAnchor, [{
	    key: 'render',
	    value: function render() {
	      var id = 'skip-link-' + this.props.label.toLowerCase().replace(/ /g, '_');

	      return _react2.default.createElement(
	        'a',
	        { tabIndex: '-1', 'aria-hidden': 'true', id: id, className: CLASS_ROOT },
	        this.props.label
	      );
	    }
	  }]);
	  return SkipLinkAnchor;
	}(_react.Component);

	SkipLinkAnchor.displayName = 'SkipLinkAnchor';
	exports.default = SkipLinkAnchor;
	;

	SkipLinkAnchor.propTypes = {
	  label: _react.PropTypes.node.isRequired
	};
	module.exports = exports['default'];

/***/ },
/* 93 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

	var namespace = exports.namespace = 'grommetux-';

	exports.default = {
	  ACCORDION: namespace + 'accordion',
	  ACCORDION_PANEL: namespace + 'accordion-panel',
	  ANCHOR: namespace + 'anchor',
	  APP: namespace + 'app',
	  ARTICLE: namespace + 'article',
	  ATTRIBUTE: namespace + 'attribute',
	  BACKGROUND_COLOR_INDEX: namespace + 'background-color-index',
	  BOX: namespace + 'box',
	  BORDER_COLOR_INDEX: namespace + 'border-color-index',
	  BRICK: namespace + 'brick',
	  BUTTON: namespace + 'button',
	  CALENDAR: namespace + 'calendar',
	  CAROUSEL: namespace + 'carousel',
	  CAROUSEL_CONTROLS: namespace + 'carousel-controls',
	  CHART: namespace + 'chart',
	  CHART_AXIS: namespace + 'chart-axis',
	  CHART_BASE: namespace + 'chart-base',
	  CHART_GRAPH: namespace + 'chart-graph',
	  CHART_GRID: namespace + 'chart-grid',
	  CHART_HOT_SPOTS: namespace + 'chart-hot-spots',
	  CHART_LAYERS: namespace + 'chart-layers',
	  CHART_MARKER: namespace + 'chart-marker',
	  CHART_MARKER_LABEL: namespace + 'chart-marker-label',
	  CHART_RANGE: namespace + 'chart-range',
	  CHECK_BOX: namespace + 'check-box',
	  COLLAPSIBLE: namespace + 'collapsible',
	  COLOR_INDEX: namespace + 'color-index',
	  COLUMNS: namespace + 'columns',
	  CONTROL_ICON: namespace + 'control-icon',
	  DATE_TIME: namespace + 'date-time',
	  DATE_TIME_DROP: namespace + 'date-time-drop',
	  DISTRIBUTION: namespace + 'distribution',
	  DROP: namespace + 'drop',
	  FOOTER: namespace + 'footer',
	  FORM: namespace + 'form',
	  FORM_FIELD: namespace + 'form-field',
	  FORM_FIELDS: namespace + 'form-fields',
	  HEADER: namespace + 'header',
	  HEADING: namespace + 'heading',
	  HEADLINE: namespace + 'headline',
	  HERO: namespace + 'hero',
	  IMAGE: namespace + 'image',
	  IMAGE_FIELD: namespace + 'image-field',
	  LABEL: namespace + 'label',
	  LAYER: namespace + 'layer',
	  LEGEND: namespace + 'legend',
	  LIST: namespace + 'list',
	  LIST_ITEM: namespace + 'list-item',
	  LOGIN: namespace + 'login',
	  LOGIN_FORM: namespace + 'login-form',
	  LOGO_ICON: namespace + 'logo-icon',
	  MAP: namespace + 'map',
	  MENU: namespace + 'menu',
	  METER: namespace + 'meter',
	  NAMESPACE: '' + namespace,
	  NOTIFICATION: namespace + 'notification',
	  NUMBER_INPUT: namespace + 'number-input',
	  OBJECT: namespace + 'object',
	  PARAGRAPH: namespace + 'paragraph',
	  QUOTE: namespace + 'quote',
	  RADIO_BUTTON: namespace + 'radio-button',
	  SEARCH: namespace + 'search',
	  SEARCH_INPUT: namespace + 'search-input',
	  SECTION: namespace + 'section',
	  SIDEBAR: namespace + 'sidebar',
	  SKIP_LINK_ANCHOR: namespace + 'skip-link-anchor',
	  SKIP_LINKS: namespace + 'skip-links',
	  SPLIT: namespace + 'split',
	  SPINNING: namespace + 'icon-spinning',
	  STATUS_ICON: namespace + 'status-icon',
	  SUN_BURST: namespace + 'sun-burst',
	  TAB: namespace + 'tab',
	  TABLE: namespace + 'table',
	  TABLE_ROW: namespace + 'table-row',
	  TABS: namespace + 'tabs',
	  TAG: namespace + 'tag',
	  TAGS: namespace + 'tags',
	  TBD: namespace + 'tbd',
	  TILE: namespace + 'tile',
	  TILES: namespace + 'tiles',
	  TIMESTAMP: namespace + 'timestamp',
	  TIP: namespace + 'tip',
	  TITLE: namespace + 'title',
	  TOPOLOGY: namespace + 'topology',
	  VALUE: namespace + 'value',
	  VIDEO: namespace + 'video',
	  WORLD_MAP: namespace + 'world-map'
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(69);

	var _extends3 = _interopRequireDefault(_extends2);

	var _typeof2 = __webpack_require__(24);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(88);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Close = __webpack_require__(95);

	var _Close2 = _interopRequireDefault(_Close);

	var _KeyboardAccelerators = __webpack_require__(87);

	var _KeyboardAccelerators2 = _interopRequireDefault(_KeyboardAccelerators);

	var _DOM = __webpack_require__(89);

	var _DOM2 = _interopRequireDefault(_DOM);

	var _Button = __webpack_require__(96);

	var _Button2 = _interopRequireDefault(_Button);

	var _Intl = __webpack_require__(90);

	var _Intl2 = _interopRequireDefault(_Intl);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.LAYER;
	var APP = _CSSClassnames2.default.APP;

	var LayerContents = function (_Component) {
	  (0, _inherits3.default)(LayerContents, _Component);

	  function LayerContents() {
	    (0, _classCallCheck3.default)(this, LayerContents);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LayerContents).call(this));

	    _this._onClick = _this._onClick.bind(_this);
	    _this._processTab = _this._processTab.bind(_this);
	    return _this;
	  }

	  (0, _createClass3.default)(LayerContents, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        history: this.props.history,
	        intl: this.props.intl,
	        router: this.props.router,
	        store: this.props.store
	      };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.refs.anchorStep.focus();

	      this._keyboardHandlers = {
	        tab: this._processTab
	      };

	      if (this.props.onClose) {
	        var layerParent = this.refs.container.parentNode;
	        this._keyboardHandlers.esc = this.props.onClose;
	        layerParent.addEventListener('click', this._onClick.bind(this));
	      }

	      _KeyboardAccelerators2.default.startListeningToKeyboard(this, this._keyboardHandlers);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.props.hidden) {
	        _KeyboardAccelerators2.default.stopListeningToKeyboard(this, this._keyboardHandlers);
	      };
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var layerParent = this.refs.container.parentNode;

	      _KeyboardAccelerators2.default.stopListeningToKeyboard(this, this._keyboardHandlers);

	      if (this.props.onClose) {
	        layerParent.removeEventListener('click', this._onClick.bind(this));
	      }
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick(event) {
	      var layerContents = this.refs.container;

	      if (layerContents && !layerContents.contains(event.target)) {
	        this.props.onClose();
	      }
	    }
	  }, {
	    key: '_processTab',
	    value: function _processTab(event) {
	      var items = this.refs.container.getElementsByTagName('*');
	      items = _DOM2.default.filterByFocusable(items);

	      if (!items || items.length === 0) {
	        event.preventDefault();
	      } else {
	        if (event.shiftKey) {
	          if (event.target === items[0]) {
	            items[items.length - 1].focus();
	            event.preventDefault();
	          }
	        } else if (event.target === items[items.length - 1]) {
	          items[0].focus();
	          event.preventDefault();
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var closer = null;

	      if ((0, _typeof3.default)(this.props.closer) === 'object') {
	        closer = this.props.closer;
	      } else if (this.props.onClose && this.props.closer) {
	        var closeLabel = _Intl2.default.getMessage(this.context.intl, 'Close');
	        var layerLabel = _Intl2.default.getMessage(this.context.intl, 'Layer');
	        var a11yTitle = closeLabel + ' ' + (this.props.a11yTitle || '') + ' ' + layerLabel;

	        closer = _react2.default.createElement(
	          'div',
	          { className: CLASS_ROOT + "__closer" },
	          _react2.default.createElement(
	            _Button2.default,
	            { plain: true, onClick: this.props.onClose },
	            _react2.default.createElement(_Close2.default, { a11yTitle: a11yTitle })
	          )
	        );
	      }

	      return _react2.default.createElement(
	        'div',
	        { ref: 'container', className: CLASS_ROOT + "__container" },
	        _react2.default.createElement('a', { tabIndex: '-1', 'aria-hidden': 'true',
	          ref: 'anchorStep' }),
	        closer,
	        this.props.children
	      );
	    }
	  }]);
	  return LayerContents;
	}(_react.Component);

	LayerContents.displayName = 'LayerContents';


	LayerContents.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  closer: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.bool]),
	  history: _react.PropTypes.object,
	  intl: _react.PropTypes.object,
	  onClose: _react.PropTypes.func,
	  router: _react.PropTypes.any,
	  store: _react.PropTypes.any
	};

	// Because Layer creates a new DOM render context, the context
	// is not transfered. For now, we hard code these specific ones.
	// TODO: Either figure out how to introspect the context and transfer
	// whatever we find or have callers explicitly indicate which parts
	// of the context to transfer somehow.
	LayerContents.childContextTypes = {
	  history: _react.PropTypes.object,
	  intl: _react.PropTypes.object,
	  router: _react.PropTypes.any,
	  store: _react.PropTypes.object
	};

	var Layer = function (_Component2) {
	  (0, _inherits3.default)(Layer, _Component2);

	  function Layer() {
	    (0, _classCallCheck3.default)(this, Layer);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Layer).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Layer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._originalFocusedElement = document.activeElement;
	      this._addLayer();
	      this._renderLayer();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this._renderLayer();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {

	      if (this._originalFocusedElement) {
	        if (this._originalFocusedElement.focus) {
	          this._originalFocusedElement.focus();
	        } else if (this._originalFocusedElement.parentNode && this._originalFocusedElement.parentNode.focus) {
	          // required for IE11 and Edge
	          this._originalFocusedElement.parentNode.focus();
	        }
	      }

	      this._removeLayer();
	    }
	  }, {
	    key: '_classesFromProps',
	    value: function _classesFromProps() {
	      var classes = ['grommet', CLASS_ROOT];
	      if (this.props.align) {
	        classes.push(CLASS_ROOT + "--align-" + this.props.align);
	      }
	      if (this.props.flush) {
	        classes.push(CLASS_ROOT + "--flush");
	      }
	      if (this.props.hidden) {
	        classes.push(CLASS_ROOT + "--hidden");
	      }
	      if (this.props.peek) {
	        classes.push(CLASS_ROOT + "--peek");
	      }
	      if (this.props.closer) {
	        classes.push(CLASS_ROOT + "--closeable");
	      }
	      if (this.props.className) {
	        classes.push(this.props.className);
	      }
	      return classes;
	    }
	  }, {
	    key: '_addLayer',
	    value: function _addLayer() {
	      var element = document.createElement('div');
	      if (this.props.id) {
	        element.id = this.props.id;
	      }
	      element.className = this._classesFromProps().join(' ');
	      // insert before .app, if possible.
	      var appElements = document.querySelectorAll('.' + APP);
	      var beforeElement;
	      if (appElements.length > 0) {
	        beforeElement = appElements[0];
	      } else {
	        beforeElement = document.body.firstChild;
	      }
	      this._element = beforeElement.parentNode.insertBefore(element, beforeElement);
	    }
	  }, {
	    key: '_handleAriaHidden',
	    value: function _handleAriaHidden(hideOverlay) {
	      var ariaHidden = hideOverlay || false;
	      this._element.setAttribute('aria-hidden', ariaHidden);
	      var grommetApps = document.querySelectorAll('.' + APP);

	      if (grommetApps) {
	        Array.prototype.slice.call(grommetApps).forEach(function (grommetApp) {
	          grommetApp.setAttribute('aria-hidden', !ariaHidden);
	        });
	      }
	    }
	  }, {
	    key: '_renderLayer',
	    value: function _renderLayer() {
	      this._element.className = this._classesFromProps().join(' ');
	      var contents = _react2.default.createElement(LayerContents, (0, _extends3.default)({}, this.props, {
	        history: this.context.history,
	        intl: this.context.intl,
	        router: this.context.router,
	        store: this.context.store }));
	      _reactDom2.default.render(contents, this._element);
	      this._handleAriaHidden(this.props.hidden);
	    }
	  }, {
	    key: '_removeLayer',
	    value: function _removeLayer() {
	      this._element.removeEventListener('animationend', this._onAnimationEnd);
	      this._handleAriaHidden(true);

	      _reactDom2.default.unmountComponentAtNode(this._element);
	      this._element.parentNode.removeChild(this._element);
	      this._element = null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('span', { style: { display: 'none' } });
	    }
	  }]);
	  return Layer;
	}(_react.Component);

	Layer.displayName = 'Layer';
	exports.default = Layer;


	Layer.propTypes = {
	  align: _react.PropTypes.oneOf(['center', 'top', 'bottom', 'left', 'right']),
	  closer: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.bool]),
	  flush: _react.PropTypes.bool,
	  hidden: _react.PropTypes.bool,
	  peek: _react.PropTypes.bool,
	  onClose: _react.PropTypes.func
	};

	Layer.contextTypes = {
	  router: _react.PropTypes.any,
	  history: _react.PropTypes.object,
	  intl: _react.PropTypes.object,
	  store: _react.PropTypes.object
	};

	Layer.defaultProps = {
	  align: 'center'
	};
	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _FormattedMessage = __webpack_require__(81);

	var _FormattedMessage2 = _interopRequireDefault(_FormattedMessage);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

	var Icon = function (_Component) {
	  (0, _inherits3.default)(Icon, _Component);

	  function Icon() {
	    (0, _classCallCheck3.default)(this, Icon);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var _props = this.props;
	      var a11yTitleId = _props.a11yTitleId;
	      var className = _props.className;
	      var colorIndex = _props.colorIndex;
	      var _props2 = this.props;
	      var a11yTitle = _props2.a11yTitle;
	      var size = _props2.size;


	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-close', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

	      a11yTitle = a11yTitle || _react2.default.createElement(_FormattedMessage2.default, { id: 'close', defaultMessage: 'close' });

	      return _react2.default.createElement(
	        'svg',
	        { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-labelledby': a11yTitleId },
	        _react2.default.createElement(
	          'title',
	          { id: a11yTitleId },
	          a11yTitle
	        ),
	        _react2.default.createElement(
	          'g',
	          null,
	          _react2.default.createElement('rect', { x: '0', y: '0', fill: 'none', width: '24', height: '24' }),
	          _react2.default.createElement('path', { fill: 'none', stroke: '#000000', strokeWidth: '2', strokeMiterlimit: '10', d: 'M3,21L21,3 M3,3l18,18' })
	        )
	      );
	    }
	  }]);
	  return Icon;
	}(_react.Component);

	Icon.displayName = 'Icon';
	exports.default = Icon;
	;

	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  a11yTitleId: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge'])
	};

	Icon.defaultProps = {
	  a11yTitleId: 'close-title'
	};

	Icon.icon = true;

	Icon.displayName = 'Close';
	module.exports = exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASS_ROOT = _CSSClassnames2.default.BUTTON; // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

	var Button = function (_Component) {
	  (0, _inherits3.default)(Button, _Component);

	  function Button() {
	    (0, _classCallCheck3.default)(this, Button);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Button).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Button, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var plain = this.props.plain !== undefined ? this.props.plain : this.props.icon && !this.props.label;

	      var icon = void 0;
	      if (this.props.icon) {
	        icon = _react2.default.createElement(
	          'span',
	          { className: CLASS_ROOT + '__icon' },
	          this.props.icon
	        );
	      }

	      var hasIcon = icon !== undefined;
	      var children = _react2.default.Children.map(this.props.children, function (child) {
	        if (child && child.type && child.type.icon) {
	          hasIcon = true;
	          child = _react2.default.createElement(
	            'span',
	            { className: CLASS_ROOT + '__icon' },
	            child
	          );
	        }
	        return child;
	      });

	      var classes = (0, _classnames3.default)(CLASS_ROOT, this.props.className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--primary', this.props.primary), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--secondary', this.props.secondary), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--accent', this.props.accent), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--disabled', !this.props.onClick && !this.props.href), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--fill', this.props.fill), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--plain', plain), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--icon', this.props.icon || hasIcon), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--align-' + this.props.align, this.props.align), _classnames));

	      if (!children) {
	        children = this.props.label;
	      }

	      var Tag = this.props.href ? 'a' : 'button';
	      var type = void 0;
	      if (!this.props.href) {
	        type = this.props.type;
	      }
	      return _react2.default.createElement(
	        Tag,
	        { href: this.props.href, id: this.props.id, type: type,
	          className: classes, 'aria-label': this.props.a11yTitle,
	          onClick: this.props.onClick,
	          disabled: !this.props.onClick && !this.props.href },
	        icon,
	        children
	      );
	    }
	  }]);
	  return Button;
	}(_react.Component);

	Button.displayName = 'Button';
	exports.default = Button;
	;

	Button.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  accent: _react.PropTypes.bool,
	  align: _react.PropTypes.oneOf(['start', 'center', 'end']),
	  fill: _react.PropTypes.bool,
	  icon: _react.PropTypes.element,
	  id: _react.PropTypes.string,
	  label: _react.PropTypes.node,
	  onClick: _react.PropTypes.func,
	  plain: _react.PropTypes.bool,
	  primary: _react.PropTypes.bool,
	  secondary: _react.PropTypes.bool,
	  type: _react.PropTypes.oneOf(['button', 'reset', 'submit'])
	};

	Button.defaultProps = {
	  type: 'button'
	};
	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _extends2 = __webpack_require__(69);

	var _extends3 = _interopRequireDefault(_extends2);

	var _keys = __webpack_require__(84);

	var _keys2 = _interopRequireDefault(_keys);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(88);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames3 = __webpack_require__(67);

	var _classnames4 = _interopRequireDefault(_classnames3);

	var _KeyboardAccelerators = __webpack_require__(87);

	var _KeyboardAccelerators2 = _interopRequireDefault(_KeyboardAccelerators);

	var _DOM = __webpack_require__(89);

	var _DOM2 = _interopRequireDefault(_DOM);

	var _Drop = __webpack_require__(98);

	var _Drop2 = _interopRequireDefault(_Drop);

	var _Intl = __webpack_require__(90);

	var _Intl2 = _interopRequireDefault(_Intl);

	var _Props = __webpack_require__(91);

	var _Props2 = _interopRequireDefault(_Props);

	var _Responsive = __webpack_require__(99);

	var _Responsive2 = _interopRequireDefault(_Responsive);

	var _Box = __webpack_require__(83);

	var _Box2 = _interopRequireDefault(_Box);

	var _Button = __webpack_require__(96);

	var _Button2 = _interopRequireDefault(_Button);

	var _Down = __webpack_require__(100);

	var _Down2 = _interopRequireDefault(_Down);

	var _More = __webpack_require__(101);

	var _More2 = _interopRequireDefault(_More);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.MENU;

	function isFunction(obj) {
	  return obj && obj.constructor && obj.call && obj.apply;
	}

	// We have a separate module for the drop component
	// so we can transfer the router context.

	var MenuDrop = function (_Component) {
	  (0, _inherits3.default)(MenuDrop, _Component);

	  function MenuDrop() {
	    (0, _classCallCheck3.default)(this, MenuDrop);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MenuDrop).call(this));

	    _this._onUpKeyPress = _this._onUpKeyPress.bind(_this);
	    _this._onDownKeyPress = _this._onDownKeyPress.bind(_this);
	    _this._processTab = _this._processTab.bind(_this);
	    return _this;
	  }

	  (0, _createClass3.default)(MenuDrop, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        intl: this.props.intl,
	        history: this.props.history,
	        router: this.props.router,
	        store: this.props.store
	      };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._originalFocusedElement = document.activeElement;
	      this._keyboardHandlers = {
	        tab: this._processTab,
	        up: this._onUpKeyPress,
	        left: this._onUpKeyPress,
	        down: this._onDownKeyPress,
	        right: this._onDownKeyPress
	      };
	      _KeyboardAccelerators2.default.startListeningToKeyboard(this, this._keyboardHandlers);

	      var container = _reactDom2.default.findDOMNode(this.refs.navContainer);
	      var menuItems = container.childNodes;
	      for (var i = 0; i < menuItems.length; i++) {
	        var classes = menuItems[i].className.toString();
	        var tagName = menuItems[i].tagName.toLowerCase();
	        // want to skip items of the menu that are not focusable.
	        if (tagName !== 'button' && tagName !== 'a' && classes.indexOf('check-box') === -1) {
	          continue;
	        }
	        menuItems[i].setAttribute('role', 'menuitem');

	        if (!menuItems[i].getAttribute('id')) {
	          menuItems[i].setAttribute('id', 'menu_item_' + i);
	        }
	      }

	      container.setAttribute('aria-activedescendant', menuItems[0].getAttribute('id'));

	      var menuDrop = _reactDom2.default.findDOMNode(this.refs.menuDrop);
	      var items = menuDrop.getElementsByTagName('*');
	      var firstFocusable = _DOM2.default.getBestFirstFocusable(items);
	      if (firstFocusable) {
	        firstFocusable.focus();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this._originalFocusedElement.focus) {
	        this._originalFocusedElement.focus();
	      } else if (this._originalFocusedElement.parentNode && this._originalFocusedElement.parentNode.focus) {
	        // required for IE11 and Edge
	        this._originalFocusedElement.parentNode.focus();
	      }
	      _KeyboardAccelerators2.default.stopListeningToKeyboard(this, this._keyboardHandlers);
	    }
	  }, {
	    key: '_processTab',
	    value: function _processTab(event) {
	      var container = _reactDom2.default.findDOMNode(this.refs.menuDrop);
	      var items = container.getElementsByTagName('*');
	      items = _DOM2.default.filterByFocusable(items);

	      if (!items || items.length === 0) {
	        event.preventDefault();
	      } else {
	        if (event.shiftKey) {
	          if (event.target === items[0]) {
	            items[items.length - 1].focus();
	            event.preventDefault();
	          }
	        } else if (event.target === items[items.length - 1]) {
	          items[0].focus();
	          event.preventDefault();
	        }
	      }
	    }
	  }, {
	    key: '_onUpKeyPress',
	    value: function _onUpKeyPress(event) {
	      event.preventDefault();
	      var container = _reactDom2.default.findDOMNode(this.refs.navContainer);
	      var menuItems = container.childNodes;
	      if (!this.activeMenuItem) {
	        var lastMenuItem = menuItems[menuItems.length - 1];
	        this.activeMenuItem = lastMenuItem;
	      } else if (this.activeMenuItem.previousSibling) {
	        this.activeMenuItem = this.activeMenuItem.previousSibling;
	      }

	      var classes = this.activeMenuItem.className.split(/\s+/);
	      var tagName = this.activeMenuItem.tagName.toLowerCase();
	      // want to skip items of the menu that are not focusable.
	      if (tagName !== 'button' && tagName !== 'a' && classes.indexOf('check-box') === -1) {
	        if (this.activeMenuItem === menuItems[0]) {
	          return true;
	        } else {
	          // If this item is not focusable, check the next item.
	          return this._onUpKeyPress(event);
	        }
	      }

	      this.activeMenuItem.focus();
	      container.setAttribute('aria-activedescendant', this.activeMenuItem.getAttribute('id'));
	      // Stops KeyboardAccelerators from calling the other listeners.
	      // Works limilar to event.stopPropagation().
	      return true;
	    }
	  }, {
	    key: '_onDownKeyPress',
	    value: function _onDownKeyPress(event) {
	      event.preventDefault();
	      var container = _reactDom2.default.findDOMNode(this.refs.navContainer);
	      var menuItems = container.childNodes;
	      if (!this.activeMenuItem) {
	        this.activeMenuItem = menuItems[0];
	      } else if (this.activeMenuItem.nextSibling) {
	        this.activeMenuItem = this.activeMenuItem.nextSibling;
	      }

	      var classes = this.activeMenuItem.className.split(/\s+/);
	      var tagName = this.activeMenuItem.tagName.toLowerCase();
	      // want to skip items of the menu that are not focusable.
	      if (tagName !== 'button' && tagName !== 'a' && classes.indexOf('check-box') === -1) {
	        if (this.activeMenuItem === menuItems[menuItems.length - 1]) {
	          return true;
	        } else {
	          // If this item is not focusable, check the next item.
	          return this._onDownKeyPress(event);
	        }
	      }

	      this.activeMenuItem.focus();
	      container.setAttribute('aria-activedescendant', this.activeMenuItem.getAttribute('id'));
	      // Stops KeyboardAccelerators from calling the other listeners.
	      // Works limilar to event.stopPropagation().
	      return true;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var _props = this.props;
	      var dropAlign = _props.dropAlign;
	      var size = _props.size;
	      var control = _props.control;
	      var id = _props.id;
	      var colorIndex = _props.colorIndex;
	      var onClick = _props.onClick;

	      var boxProps = _Props2.default.pick(this.props, (0, _keys2.default)(_Box2.default.propTypes));
	      // manage colorIndex at the outer menuDrop element
	      delete boxProps.colorIndex;

	      delete boxProps.onClick;

	      delete boxProps.size;

	      // Put nested Menus inline
	      var children = _react2.default.Children.map(this.props.children, function (child) {
	        var result = child;
	        if (child && isFunction(child.type) && child.type.prototype._renderMenuDrop) {
	          result = _react2.default.cloneElement(child, { inline: 'explode', direction: 'column' });
	        }
	        return result;
	      });

	      var contents = [_react2.default.cloneElement(control, { key: 'control', fill: true }), _react2.default.createElement(
	        _Box2.default,
	        (0, _extends3.default)({}, boxProps, { key: 'nav', ref: 'navContainer',
	          role: 'menu', tag: 'nav', className: CLASS_ROOT + '__contents',
	          primary: false }),
	        children
	      )];

	      if (dropAlign.bottom) {
	        contents.reverse();
	      }

	      var classes = (0, _classnames4.default)(CLASS_ROOT + '__drop', (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '__drop--align-right', dropAlign.right), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '__drop--' + size, size), _classnames));

	      return _react2.default.createElement(
	        _Box2.default,
	        { ref: 'menuDrop', id: id, className: classes, colorIndex: colorIndex,
	          onClick: onClick },
	        contents
	      );
	    }
	  }]);
	  return MenuDrop;
	}(_react.Component);

	MenuDrop.displayName = 'MenuDrop';


	MenuDrop.propTypes = (0, _extends3.default)({}, _Box2.default.propTypes, {
	  control: _react.PropTypes.node,
	  dropAlign: _Drop2.default.alignPropType,
	  id: _react.PropTypes.string.isRequired,
	  onClick: _react.PropTypes.func.isRequired,
	  router: _react.PropTypes.any,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
	  store: _react.PropTypes.any
	});

	MenuDrop.childContextTypes = {
	  intl: _react.PropTypes.any,
	  history: _react.PropTypes.any,
	  router: _react.PropTypes.any,
	  store: _react.PropTypes.any
	};

	var Menu = function (_Component2) {
	  (0, _inherits3.default)(Menu, _Component2);

	  function Menu(props) {
	    (0, _classCallCheck3.default)(this, Menu);

	    var _this2 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Menu).call(this, props));

	    _this2._onOpen = _this2._onOpen.bind(_this2);
	    _this2._onClose = _this2._onClose.bind(_this2);
	    _this2._onSink = _this2._onSink.bind(_this2);
	    _this2._onResponsive = _this2._onResponsive.bind(_this2);
	    _this2._onFocusControl = _this2._onFocusControl.bind(_this2);
	    _this2._onBlurControl = _this2._onBlurControl.bind(_this2);

	    var inline = void 0;
	    if (props.hasOwnProperty('inline')) {
	      inline = props.inline;
	    } else {
	      inline = !props.label && !props.icon;
	    }
	    var responsive = void 0;
	    if (props.hasOwnProperty('responsive')) {
	      responsive = props.responsive;
	    } else {
	      responsive = inline && 'row' === props.direction;
	    }
	    _this2.state = {
	      // state may be 'collapsed', 'focused' or 'expanded' (active).
	      state: 'collapsed',
	      initialInline: inline,
	      inline: inline,
	      responsive: responsive,
	      dropId: 'menuDrop'
	    };
	    return _this2;
	  }

	  (0, _createClass3.default)(Menu, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.refs.control) {
	        var controlElement = this.refs.control.firstChild;
	        this.setState({
	          dropId: 'menu-drop-' + _DOM2.default.generateId(controlElement),
	          controlHeight: controlElement.clientHeight
	        });
	      }

	      if (this.state.responsive) {
	        this._responsive = _Responsive2.default.start(this._onResponsive);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (this.state.state !== prevState.state) {
	        var activeKeyboardHandlers = {
	          esc: this._onClose
	        };
	        var focusedKeyboardHandlers = {
	          space: this._onOpen,
	          down: this._onOpen,
	          enter: this._onOpen
	        };

	        switch (this.state.state) {
	          case 'collapsed':
	            _KeyboardAccelerators2.default.stopListeningToKeyboard(this, focusedKeyboardHandlers);
	            _KeyboardAccelerators2.default.stopListeningToKeyboard(this, activeKeyboardHandlers);
	            document.removeEventListener('click', this._onClose);
	            if (this._drop) {
	              this._drop.remove();
	              this._drop = null;
	            }
	            break;
	          case 'focused':
	            _KeyboardAccelerators2.default.stopListeningToKeyboard(this, activeKeyboardHandlers);
	            _KeyboardAccelerators2.default.startListeningToKeyboard(this, focusedKeyboardHandlers);
	            break;
	          case 'expanded':
	            _KeyboardAccelerators2.default.stopListeningToKeyboard(this, focusedKeyboardHandlers);
	            _KeyboardAccelerators2.default.startListeningToKeyboard(this, activeKeyboardHandlers);
	            document.addEventListener('click', this._onClose);
	            this._drop = _Drop2.default.add(this.refs.control, this._renderMenuDrop(), {
	              align: this.props.dropAlign,
	              colorIndex: this.props.dropColorIndex
	            });
	            this._drop.render(this._renderMenuDrop());
	            break;
	        }
	      } else if (this.state.state === 'expanded') {
	        this._drop.render(this._renderMenuDrop());
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      document.removeEventListener('click', this._onClose);
	      _KeyboardAccelerators2.default.stopListeningToKeyboard(this);
	      if (this._drop) {
	        this._drop.remove();
	      }
	      if (this._responsive) {
	        this._responsive.stop();
	      }
	    }
	  }, {
	    key: '_onOpen',
	    value: function _onOpen() {
	      this.setState({ state: 'expanded' });
	    }
	  }, {
	    key: '_onClose',
	    value: function _onClose() {
	      this.setState({ state: 'collapsed' });
	    }
	  }, {
	    key: '_onSink',
	    value: function _onSink(event) {
	      event.stopPropagation();
	      // need to go native to prevent closing via document
	      event.nativeEvent.stopImmediatePropagation();
	    }
	  }, {
	    key: '_onResponsive',
	    value: function _onResponsive(small) {
	      // deactivate if we change resolutions
	      var newState = this.state.state;
	      if (this.state.state === 'expanded') {
	        newState = 'focused';
	      }
	      if (small) {
	        this.setState({ inline: false, active: newState, controlCollapsed: true });
	      } else {
	        this.setState({
	          inline: this.state.initialInline,
	          active: newState,
	          state: 'collapsed',
	          controlCollapsed: false
	        });
	      }
	    }
	  }, {
	    key: '_onFocusControl',
	    value: function _onFocusControl() {
	      this.setState({ state: 'focused' });
	    }
	  }, {
	    key: '_onBlurControl',
	    value: function _onBlurControl() {
	      if (this.state.state === 'focused') {
	        this.setState({ state: 'collapsed' });
	      }
	    }
	  }, {
	    key: '_renderControlContents',
	    value: function _renderControlContents() {
	      var icon = void 0,
	          label = void 0;

	      // If this is a collapsed inline Menu, use any icon and/or label provided,
	      // revert to default icon if neither.
	      if (this.props.icon) {
	        icon = _react2.default.cloneElement(this.props.icon, { key: 'icon' });
	      }
	      if (this.props.label) {
	        label = [_react2.default.createElement(
	          'span',
	          { key: 'label', className: CLASS_ROOT + '__control-label' },
	          this.props.label
	        ), _react2.default.createElement(_Down2.default, { key: 'caret', a11yTitle: 'menu-down',
	          a11yTitleId: 'menu-down-id' })];
	      }
	      if (!icon && !label) {
	        icon = _react2.default.createElement(_More2.default, { key: 'icon' });
	      }
	      return [icon, label];
	    }
	  }, {
	    key: '_renderMenuDrop',
	    value: function _renderMenuDrop() {
	      var closeLabel = _Intl2.default.getMessage(this.context.intl, 'Close');
	      var menuLabel = _Intl2.default.getMessage(this.context.intl, 'Menu');
	      var menuTitle = closeLabel + ' ' + (this.props.a11yTitle || this.props.label || '') + ' ' + ('' + menuLabel);

	      var control = _react2.default.createElement(
	        _Button2.default,
	        { plain: true, className: CLASS_ROOT + '__control',
	          a11yTitle: menuTitle,
	          style: { lineHeight: this.state.controlHeight + 'px' },
	          onClick: this._onClose },
	        this._renderControlContents()
	      );

	      var boxProps = _Props2.default.pick(this.props, (0, _keys2.default)(_Box2.default.propTypes));
	      var onClick = this.props.closeOnClick ? this._onClose : this._onSink;

	      return _react2.default.createElement(
	        MenuDrop,
	        (0, _extends3.default)({}, boxProps, this.context, {
	          dropAlign: this.props.dropAlign,
	          size: this.props.size,
	          onClick: onClick,
	          id: this.state.dropId,
	          control: control }),
	        this.props.children
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classnames2;

	      var classes = (0, _classnames4.default)(CLASS_ROOT, this.props.className, (_classnames2 = {}, (0, _defineProperty3.default)(_classnames2, CLASS_ROOT + '--' + this.props.direction, this.props.direction), (0, _defineProperty3.default)(_classnames2, CLASS_ROOT + '--' + this.props.size, this.props.size), (0, _defineProperty3.default)(_classnames2, CLASS_ROOT + '--primary', this.props.primary), (0, _defineProperty3.default)(_classnames2, CLASS_ROOT + '--inline', this.state.inline), (0, _defineProperty3.default)(_classnames2, CLASS_ROOT + '--explode', 'explode' === this.state.inline), (0, _defineProperty3.default)(_classnames2, CLASS_ROOT + '--controlled', !this.state.inline), (0, _defineProperty3.default)(_classnames2, CLASS_ROOT + '__control', !this.state.inline), (0, _defineProperty3.default)(_classnames2, CLASS_ROOT + '--labelled', !this.state.inline && this.props.label), _classnames2));

	      if (this.state.inline) {
	        var boxProps = _Props2.default.pick(this.props, (0, _keys2.default)(_Box2.default.propTypes));
	        var label = void 0;
	        if ('explode' === this.state.inline) {
	          label = _react2.default.createElement(
	            'div',
	            { className: CLASS_ROOT + '__label' },
	            this.props.label
	          );
	        }

	        return _react2.default.createElement(
	          _Box2.default,
	          (0, _extends3.default)({}, boxProps, { tag: 'nav', id: this.props.id,
	            className: classes, primary: false }),
	          label,
	          this.props.children
	        );
	      } else {
	        var controlContents = this._renderControlContents();
	        var openLabel = _Intl2.default.getMessage(this.context.intl, 'Open');
	        var menuLabel = _Intl2.default.getMessage(this.context.intl, 'Menu');
	        var menuTitle = openLabel + ' ' + (this.props.a11yTitle || this.props.label || '') + ' ' + ('' + menuLabel);

	        return _react2.default.createElement(
	          'div',
	          { ref: 'control' },
	          _react2.default.createElement(
	            _Button2.default,
	            { plain: true, id: this.props.id,
	              className: classes,
	              tabIndex: '0',
	              style: { lineHeight: this.state.controlHeight + 'px' },
	              onClick: this._onOpen,
	              a11yTitle: menuTitle,
	              onFocus: this._onFocusControl,
	              onBlur: this._onBlurControl },
	            controlContents
	          )
	        );
	      }
	    }
	  }]);
	  return Menu;
	}(_react.Component);

	Menu.displayName = 'Menu';
	exports.default = Menu;


	Menu.propTypes = (0, _extends3.default)({
	  closeOnClick: _react.PropTypes.bool,
	  dropAlign: _Drop2.default.alignPropType,
	  dropColorIndex: _react.PropTypes.string,
	  icon: _react.PropTypes.node,
	  id: _react.PropTypes.string,
	  inline: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['expand'])]),
	  label: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large'])
	}, _Box2.default.propTypes);

	Menu.contextTypes = {
	  intl: _react.PropTypes.any,
	  history: _react.PropTypes.any,
	  router: _react.PropTypes.any,
	  store: _react.PropTypes.any
	};

	Menu.defaultProps = {
	  closeOnClick: true,
	  direction: 'column',
	  dropAlign: { top: 'top', left: 'left' },
	  pad: 'none'
	};
	module.exports = exports['default'];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(69);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(1);

	var _reactDom = __webpack_require__(88);

	var _DOM = __webpack_require__(89);

	var _DOM2 = _interopRequireDefault(_DOM);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.DROP;
	var BACKGROUND_COLOR_INDEX = _CSSClassnames2.default.BACKGROUND_COLOR_INDEX;

	/*
	 * Drop is a utility for rendering components like drop down menus layered above
	 * their initiating controls.
	 */

	var VERTICAL_ALIGN_OPTIONS = ['top', 'bottom'];
	var HORIZONTAL_ALIGN_OPTIONS = ['right', 'left'];

	exports.default = {

	  // How callers can validate a property for drop alignment which will be
	  // passed to add().
	  alignPropType: _react.PropTypes.shape({
	    top: _react.PropTypes.oneOf(VERTICAL_ALIGN_OPTIONS),
	    bottom: _react.PropTypes.oneOf(VERTICAL_ALIGN_OPTIONS),
	    left: _react.PropTypes.oneOf(HORIZONTAL_ALIGN_OPTIONS),
	    right: _react.PropTypes.oneOf(HORIZONTAL_ALIGN_OPTIONS)
	  }),

	  // Add a drop component.
	  //
	  // control - DOM element to anchor the overlay on
	  // content - React node to render
	  // options - {
	  //   align: {
	  //     top: top|bottom
	  //     bottom: top|bottom
	  //     left: left|right
	  //     right: left|right
	  //   },
	  //   className: <string>
	  //   colorIndex: <string>
	  // }

	  add: function add(control, content, options) {
	    // normalize for older interface that just had align content
	    if (options.top || options.bottom || options.left || options.right) {
	      options = { align: options };
	    }
	    // validate align
	    if (options && options.align && options.align.top && VERTICAL_ALIGN_OPTIONS.indexOf(options.align.top) === -1) {
	      console.warn("Warning: Invalid align.top value '" + options.align.top + "' supplied to Drop," + "expected one of [" + VERTICAL_ALIGN_OPTIONS.join(',') + "]");
	    }
	    if (options.align && options.align.bottom && VERTICAL_ALIGN_OPTIONS.indexOf(options.align.bottom) === -1) {
	      console.warn("Warning: Invalid align.bottom value '" + options.align.bottom + "' supplied to Drop," + "expected one of [" + VERTICAL_ALIGN_OPTIONS.join(',') + "]");
	    }
	    if (options.align && options.align.left && HORIZONTAL_ALIGN_OPTIONS.indexOf(options.align.left) === -1) {
	      console.warn("Warning: Invalid align.left value '" + options.align.left + "' supplied to Drop," + "expected one of [" + HORIZONTAL_ALIGN_OPTIONS.join(',') + "]");
	    }
	    if (options.align && options.align.right && HORIZONTAL_ALIGN_OPTIONS.indexOf(options.align.right) === -1) {
	      console.warn("Warning: Invalid align.right value '" + options.align.right + "' supplied to Drop," + "expected one of [" + HORIZONTAL_ALIGN_OPTIONS.join(',') + "]");
	    }
	    var align = options.align || {};

	    // initialize data
	    var drop = {
	      control: control,
	      options: (0, _extends3.default)({}, options, {
	        align: {
	          top: align.top,
	          bottom: align.bottom,
	          left: align.left,
	          right: align.right
	        }
	      })
	    };
	    if (!drop.options.align.top && !drop.options.align.bottom) {
	      drop.options.align.top = "top";
	    }
	    if (!drop.options.align.left && !drop.options.align.right) {
	      drop.options.align.left = "left";
	    }

	    // setup DOM
	    drop.container = document.createElement('div');
	    drop.container.className = 'grommet ' + CLASS_ROOT + ' ' + (drop.options.className || '');
	    if (drop.options.colorIndex) {
	      drop.container.className += ' ' + BACKGROUND_COLOR_INDEX + '-' + drop.options.colorIndex;
	    }
	    (0, _reactDom.render)(content, drop.container);

	    drop.scrollParents = _DOM2.default.findScrollParents(drop.control);
	    drop.place = this._place.bind(this, drop);
	    drop.render = this._render.bind(this, drop);
	    drop.remove = this._remove.bind(this, drop);

	    drop.scrollParents.forEach(function (scrollParent) {
	      scrollParent.addEventListener('scroll', drop.place);
	    });
	    window.addEventListener('resize', drop.place);

	    // position content
	    this._place(drop);

	    // prepend in body to avoid browser scroll issues
	    document.body.insertBefore(drop.container, document.body.firstChild);

	    return drop;
	  },
	  _render: function _render(drop, content) {
	    (0, _reactDom.render)(content, drop.container);
	    // in case content changed, re-place
	    setTimeout(this._place.bind(this, drop), 1);
	  },
	  _remove: function _remove(drop) {
	    drop.scrollParents.forEach(function (scrollParent) {
	      scrollParent.removeEventListener('scroll', drop.place);
	    });
	    window.removeEventListener('resize', drop.place);

	    (0, _reactDom.unmountComponentAtNode)(drop.container);
	    document.body.removeChild(drop.container);
	  },
	  _place: function _place(drop) {
	    var control = drop.control;
	    var container = drop.container;
	    var align = drop.options.align;
	    var windowWidth = window.innerWidth;
	    var windowHeight = window.innerHeight;

	    // clear prior styling
	    container.style.left = '';
	    container.style.width = '';
	    container.style.top = '';
	    container.style.maxHeight = '';

	    // get bounds
	    var controlRect = control.getBoundingClientRect();
	    var containerRect = container.getBoundingClientRect();
	    var bodyRect = document.body.getBoundingClientRect();

	    // set width
	    var width = Math.min(Math.max(controlRect.width, containerRect.width), windowWidth);

	    // set left position
	    var left;
	    if (align.left) {
	      if ('left' === align.left) {
	        left = controlRect.left;
	      } else if ('right' === align.left) {
	        left = controlRect.left - width;
	      }
	    } else if (align.right) {
	      if ('left' === align.right) {
	        left = controlRect.left - width;
	      } else if ('right' === align.right) {
	        left = controlRect.left + controlRect.width - width;
	      }
	    }

	    if (left + width > windowWidth) {
	      left -= left + width - windowWidth;
	    } else if (left < 0) {
	      left = 0;
	    }

	    // set top position
	    var top;
	    var maxHeight;
	    if (align.top) {
	      if ('top' === align.top) {
	        top = controlRect.top;
	        maxHeight = Math.min(windowHeight - controlRect.top, windowHeight);
	      } else {
	        top = controlRect.bottom;
	        maxHeight = Math.min(windowHeight - controlRect.bottom, windowHeight - controlRect.height);
	      }
	    } else if (align.bottom) {
	      if ('bottom' === align.bottom) {
	        top = Math.max(0, controlRect.bottom - containerRect.height);
	        maxHeight = Math.max(controlRect.bottom, 0);
	      } else {
	        top = Math.max(0, controlRect.top - containerRect.height);
	        maxHeight = Math.max(controlRect.top, 0);
	      }
	    }

	    // if we can't fit it all, see if there's more room the other direction
	    if (containerRect.height > maxHeight) {
	      // We need more room than we have.
	      if (align.top && top > windowHeight / 2) {
	        // We put it below, but there's more room above, put it above
	        if (align.top === 'bottom') {
	          top = Math.max(controlRect.top - containerRect.height, 0);
	          maxHeight = controlRect.top;
	        } else {
	          top = Math.max(controlRect.bottom - containerRect.height, 0);
	          maxHeight = controlRect.bottom;
	        }
	      } else if (align.bottom && maxHeight < windowHeight / 2) {
	        // We put it above but there's more room below, put it below
	        if (align.bottom === 'bottom') {
	          top = controlRect.top;
	          maxHeight = Math.min(windowHeight - top, windowHeight);
	        } else {
	          top = controlRect.bottom;
	          maxHeight = Math.min(windowHeight - top, windowHeight - controlRect.height);
	        }
	      }
	    }

	    container.style.left = left + 'px';
	    container.style.width = width + 'px';
	    // We use position:absolute and the body element's position
	    // to handle mobile browsers better. We used to use position:fixed
	    // but that didn't work on mobile browsers as well.
	    container.style.top = top - bodyRect.top + 'px';
	    container.style.maxHeight = maxHeight + 'px';
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// (C) Copyright 2014 Hewlett Packard Enterprise Development LP

	/*
	 * Responsive is a utility for tracking the display size.
	 * It aligns with CSS media queries.
	 */

	var SMALL_WIDTH_EM = 44.9375; // align with _settings.responsive.scss

	exports.default = {

	  // Track responsive sizing.
	  //
	  // Example:
	  // inside componentDidMount()
	  //   this._responsive = Responsive.start(this._onResponsive);
	  // inside componentWillUnmount()
	  //   this._responsive.stop()

	  start: function start(func) {
	    var responsive = {
	      func: func,
	      timer: null,
	      small: null,
	      smallSize: this.smallSize()
	    };
	    responsive.onResize = this._onResize.bind(this, responsive);
	    responsive.layout = this._check.bind(this, responsive);
	    responsive.stop = this._stop.bind(this, responsive);
	    window.addEventListener('resize', responsive.onResize);
	    responsive.layout();
	    return responsive;
	  },
	  _stop: function _stop(responsive) {
	    clearTimeout(responsive.timer);
	    window.removeEventListener('resize', responsive.onResize);
	  },
	  _onResize: function _onResize(responsive) {
	    // Don't debounce so we align more closely with how the stylesheets are
	    // processed.
	    responsive.layout();
	  },
	  _check: function _check(responsive) {
	    if (window.innerWidth <= responsive.smallSize) {
	      if (!responsive.small) {
	        responsive.small = true;
	        responsive.func(true);
	      }
	    } else {
	      if (false !== responsive.small) {
	        responsive.small = false;
	        responsive.func(false);
	      }
	    }
	  },
	  smallSize: function smallSize() {
	    var fontSize = '16px';
	    // unit tests don't have getComputedStyle
	    if (window.getComputedStyle) {
	      fontSize = window.getComputedStyle(document.documentElement).fontSize;
	    }
	    return SMALL_WIDTH_EM * parseFloat(fontSize);
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _FormattedMessage = __webpack_require__(81);

	var _FormattedMessage2 = _interopRequireDefault(_FormattedMessage);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

	var Icon = function (_Component) {
	  (0, _inherits3.default)(Icon, _Component);

	  function Icon() {
	    (0, _classCallCheck3.default)(this, Icon);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var _props = this.props;
	      var a11yTitleId = _props.a11yTitleId;
	      var className = _props.className;
	      var colorIndex = _props.colorIndex;
	      var _props2 = this.props;
	      var a11yTitle = _props2.a11yTitle;
	      var size = _props2.size;


	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-down', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

	      a11yTitle = a11yTitle || _react2.default.createElement(_FormattedMessage2.default, { id: 'down', defaultMessage: 'down' });

	      return _react2.default.createElement(
	        'svg',
	        { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-labelledby': a11yTitleId },
	        _react2.default.createElement(
	          'title',
	          { id: a11yTitleId },
	          a11yTitle
	        ),
	        _react2.default.createElement(
	          'g',
	          null,
	          _react2.default.createElement('rect', { y: '0', fill: 'none', width: '24', height: '24' }),
	          _react2.default.createElement('polyline', { fill: 'none', stroke: '#000000', strokeWidth: '2', strokeMiterlimit: '10', points: '23,6.5 12,17.5 1,6.5 \t' })
	        )
	      );
	    }
	  }]);
	  return Icon;
	}(_react.Component);

	Icon.displayName = 'Icon';
	exports.default = Icon;
	;

	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  a11yTitleId: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge'])
	};

	Icon.defaultProps = {
	  a11yTitleId: 'down-title'
	};

	Icon.icon = true;

	Icon.displayName = 'Down';
	module.exports = exports['default'];

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _FormattedMessage = __webpack_require__(81);

	var _FormattedMessage2 = _interopRequireDefault(_FormattedMessage);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

	var Icon = function (_Component) {
	  (0, _inherits3.default)(Icon, _Component);

	  function Icon() {
	    (0, _classCallCheck3.default)(this, Icon);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var _props = this.props;
	      var a11yTitleId = _props.a11yTitleId;
	      var className = _props.className;
	      var colorIndex = _props.colorIndex;
	      var _props2 = this.props;
	      var a11yTitle = _props2.a11yTitle;
	      var size = _props2.size;


	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-more', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

	      a11yTitle = a11yTitle || _react2.default.createElement(_FormattedMessage2.default, { id: 'more', defaultMessage: 'more' });

	      return _react2.default.createElement(
	        'svg',
	        { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-labelledby': a11yTitleId },
	        _react2.default.createElement(
	          'title',
	          { id: a11yTitleId },
	          a11yTitle
	        ),
	        _react2.default.createElement(
	          'g',
	          null,
	          _react2.default.createElement('rect', { x: '0', y: '0', fill: 'none', width: '24', height: '24' }),
	          _react2.default.createElement('rect', { x: '0', y: '10', width: '4', height: '4' }),
	          _react2.default.createElement('rect', { x: '10', y: '10', width: '4', height: '4' }),
	          _react2.default.createElement('rect', { x: '20', y: '10', width: '4', height: '4' })
	        )
	      );
	    }
	  }]);
	  return Icon;
	}(_react.Component);

	Icon.displayName = 'Icon';
	exports.default = Icon;
	;

	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  a11yTitleId: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge'])
	};

	Icon.defaultProps = {
	  a11yTitleId: 'more-title'
	};

	Icon.icon = true;

	Icon.displayName = 'More';
	module.exports = exports['default'];

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = require("intl");

/***/ },
/* 103 */
/***/ function(module, exports) {

	IntlPolyfill.__addLocaleData({locale:"en-US",date:{ca:["gregory","buddhist","chinese","coptic","dangi","ethioaa","ethiopic","generic","hebrew","indian","islamic","islamicc","japanese","persian","roc"],hourNo0:true,hour12:true,formats:{short:"{1}, {0}",medium:"{1}, {0}",full:"{1} 'at' {0}",long:"{1} 'at' {0}",availableFormats:{"d":"d","E":"ccc",Ed:"d E",Ehm:"E h:mm a",EHm:"E HH:mm",Ehms:"E h:mm:ss a",EHms:"E HH:mm:ss",Gy:"y G",GyMMM:"MMM y G",GyMMMd:"MMM d, y G",GyMMMEd:"E, MMM d, y G","h":"h a","H":"HH",hm:"h:mm a",Hm:"HH:mm",hms:"h:mm:ss a",Hms:"HH:mm:ss",hmsv:"h:mm:ss a v",Hmsv:"HH:mm:ss v",hmv:"h:mm a v",Hmv:"HH:mm v","M":"L",Md:"M/d",MEd:"E, M/d",MMM:"LLL",MMMd:"MMM d",MMMEd:"E, MMM d",MMMMd:"MMMM d",ms:"mm:ss","y":"y",yM:"M/y",yMd:"M/d/y",yMEd:"E, M/d/y",yMMM:"MMM y",yMMMd:"MMM d, y",yMMMEd:"E, MMM d, y",yMMMM:"MMMM y",yQQQ:"QQQ y",yQQQQ:"QQQQ y"},dateFormats:{yMMMMEEEEd:"EEEE, MMMM d, y",yMMMMd:"MMMM d, y",yMMMd:"MMM d, y",yMd:"M/d/yy"},timeFormats:{hmmsszzzz:"h:mm:ss a zzzz",hmsz:"h:mm:ss a z",hms:"h:mm:ss a",hm:"h:mm a"}},calendars:{buddhist:{months:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],long:["January","February","March","April","May","June","July","August","September","October","November","December"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["BE"],short:["BE"],long:["BE"]},dayPeriods:{am:"AM",pm:"PM"}},chinese:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Mo1","Mo2","Mo3","Mo4","Mo5","Mo6","Mo7","Mo8","Mo9","Mo10","Mo11","Mo12"],long:["Month1","Month2","Month3","Month4","Month5","Month6","Month7","Month8","Month9","Month10","Month11","Month12"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},dayPeriods:{am:"AM",pm:"PM"}},coptic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13"],short:["Tout","Baba","Hator","Kiahk","Toba","Amshir","Baramhat","Baramouda","Bashans","Paona","Epep","Mesra","Nasie"],long:["Tout","Baba","Hator","Kiahk","Toba","Amshir","Baramhat","Baramouda","Bashans","Paona","Epep","Mesra","Nasie"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["ERA0","ERA1"],short:["ERA0","ERA1"],long:["ERA0","ERA1"]},dayPeriods:{am:"AM",pm:"PM"}},dangi:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Mo1","Mo2","Mo3","Mo4","Mo5","Mo6","Mo7","Mo8","Mo9","Mo10","Mo11","Mo12"],long:["Month1","Month2","Month3","Month4","Month5","Month6","Month7","Month8","Month9","Month10","Month11","Month12"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},dayPeriods:{am:"AM",pm:"PM"}},ethiopic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13"],short:["Meskerem","Tekemt","Hedar","Tahsas","Ter","Yekatit","Megabit","Miazia","Genbot","Sene","Hamle","Nehasse","Pagumen"],long:["Meskerem","Tekemt","Hedar","Tahsas","Ter","Yekatit","Megabit","Miazia","Genbot","Sene","Hamle","Nehasse","Pagumen"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["ERA0","ERA1"],short:["ERA0","ERA1"],long:["ERA0","ERA1"]},dayPeriods:{am:"AM",pm:"PM"}},ethioaa:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13"],short:["Meskerem","Tekemt","Hedar","Tahsas","Ter","Yekatit","Megabit","Miazia","Genbot","Sene","Hamle","Nehasse","Pagumen"],long:["Meskerem","Tekemt","Hedar","Tahsas","Ter","Yekatit","Megabit","Miazia","Genbot","Sene","Hamle","Nehasse","Pagumen"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["ERA0"],short:["ERA0"],long:["ERA0"]},dayPeriods:{am:"AM",pm:"PM"}},generic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["M01","M02","M03","M04","M05","M06","M07","M08","M09","M10","M11","M12"],long:["M01","M02","M03","M04","M05","M06","M07","M08","M09","M10","M11","M12"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["ERA0","ERA1"],short:["ERA0","ERA1"],long:["ERA0","ERA1"]},dayPeriods:{am:"AM",pm:"PM"}},gregory:{months:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],long:["January","February","March","April","May","June","July","August","September","October","November","December"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["B","A","BCE","CE"],short:["BC","AD","BCE","CE"],long:["Before Christ","Anno Domini","Before Common Era","Common Era"]},dayPeriods:{am:"AM",pm:"PM"}},hebrew:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13","7"],short:["Tishri","Heshvan","Kislev","Tevet","Shevat","Adar I","Adar","Nisan","Iyar","Sivan","Tamuz","Av","Elul","Adar II"],long:["Tishri","Heshvan","Kislev","Tevet","Shevat","Adar I","Adar","Nisan","Iyar","Sivan","Tamuz","Av","Elul","Adar II"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["AM"],short:["AM"],long:["AM"]},dayPeriods:{am:"AM",pm:"PM"}},indian:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Chaitra","Vaisakha","Jyaistha","Asadha","Sravana","Bhadra","Asvina","Kartika","Agrahayana","Pausa","Magha","Phalguna"],long:["Chaitra","Vaisakha","Jyaistha","Asadha","Sravana","Bhadra","Asvina","Kartika","Agrahayana","Pausa","Magha","Phalguna"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["Saka"],short:["Saka"],long:["Saka"]},dayPeriods:{am:"AM",pm:"PM"}},islamic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Muh.","Saf.","Rab. I","Rab. II","Jum. I","Jum. II","Raj.","Sha.","Ram.","Shaw.","Dhuʻl-Q.","Dhuʻl-H."],long:["Muharram","Safar","Rabiʻ I","Rabiʻ II","Jumada I","Jumada II","Rajab","Shaʻban","Ramadan","Shawwal","Dhuʻl-Qiʻdah","Dhuʻl-Hijjah"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["AH"],short:["AH"],long:["AH"]},dayPeriods:{am:"AM",pm:"PM"}},islamicc:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Muh.","Saf.","Rab. I","Rab. II","Jum. I","Jum. II","Raj.","Sha.","Ram.","Shaw.","Dhuʻl-Q.","Dhuʻl-H."],long:["Muharram","Safar","Rabiʻ I","Rabiʻ II","Jumada I","Jumada II","Rajab","Shaʻban","Ramadan","Shawwal","Dhuʻl-Qiʻdah","Dhuʻl-Hijjah"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["AH"],short:["AH"],long:["AH"]},dayPeriods:{am:"AM",pm:"PM"}},japanese:{months:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],long:["January","February","March","April","May","June","July","August","September","October","November","December"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["Taika (645–650)","Hakuchi (650–671)","Hakuhō (672–686)","Shuchō (686–701)","Taihō (701–704)","Keiun (704–708)","Wadō (708–715)","Reiki (715–717)","Yōrō (717–724)","Jinki (724–729)","Tenpyō (729–749)","Tenpyō-kampō (749-749)","Tenpyō-shōhō (749-757)","Tenpyō-hōji (757-765)","Tenpyō-jingo (765-767)","Jingo-keiun (767-770)","Hōki (770–780)","Ten-ō (781-782)","Enryaku (782–806)","Daidō (806–810)","Kōnin (810–824)","Tenchō (824–834)","Jōwa (834–848)","Kajō (848–851)","Ninju (851–854)","Saikō (854–857)","Ten-an (857-859)","Jōgan (859–877)","Gangyō (877–885)","Ninna (885–889)","Kanpyō (889–898)","Shōtai (898–901)","Engi (901–923)","Enchō (923–931)","Jōhei (931–938)","Tengyō (938–947)","Tenryaku (947–957)","Tentoku (957–961)","Ōwa (961–964)","Kōhō (964–968)","Anna (968–970)","Tenroku (970–973)","Ten’en (973–976)","Jōgen (976–978)","Tengen (978–983)","Eikan (983–985)","Kanna (985–987)","Eien (987–989)","Eiso (989–990)","Shōryaku (990–995)","Chōtoku (995–999)","Chōhō (999–1004)","Kankō (1004–1012)","Chōwa (1012–1017)","Kannin (1017–1021)","Jian (1021–1024)","Manju (1024–1028)","Chōgen (1028–1037)","Chōryaku (1037–1040)","Chōkyū (1040–1044)","Kantoku (1044–1046)","Eishō (1046–1053)","Tengi (1053–1058)","Kōhei (1058–1065)","Jiryaku (1065–1069)","Enkyū (1069–1074)","Shōho (1074–1077)","Shōryaku (1077–1081)","Eihō (1081–1084)","Ōtoku (1084–1087)","Kanji (1087–1094)","Kahō (1094–1096)","Eichō (1096–1097)","Jōtoku (1097–1099)","Kōwa (1099–1104)","Chōji (1104–1106)","Kashō (1106–1108)","Tennin (1108–1110)","Ten-ei (1110-1113)","Eikyū (1113–1118)","Gen’ei (1118–1120)","Hōan (1120–1124)","Tenji (1124–1126)","Daiji (1126–1131)","Tenshō (1131–1132)","Chōshō (1132–1135)","Hōen (1135–1141)","Eiji (1141–1142)","Kōji (1142–1144)","Ten’yō (1144–1145)","Kyūan (1145–1151)","Ninpei (1151–1154)","Kyūju (1154–1156)","Hōgen (1156–1159)","Heiji (1159–1160)","Eiryaku (1160–1161)","Ōho (1161–1163)","Chōkan (1163–1165)","Eiman (1165–1166)","Nin’an (1166–1169)","Kaō (1169–1171)","Shōan (1171–1175)","Angen (1175–1177)","Jishō (1177–1181)","Yōwa (1181–1182)","Juei (1182–1184)","Genryaku (1184–1185)","Bunji (1185–1190)","Kenkyū (1190–1199)","Shōji (1199–1201)","Kennin (1201–1204)","Genkyū (1204–1206)","Ken’ei (1206–1207)","Jōgen (1207–1211)","Kenryaku (1211–1213)","Kenpō (1213–1219)","Jōkyū (1219–1222)","Jōō (1222–1224)","Gennin (1224–1225)","Karoku (1225–1227)","Antei (1227–1229)","Kanki (1229–1232)","Jōei (1232–1233)","Tenpuku (1233–1234)","Bunryaku (1234–1235)","Katei (1235–1238)","Ryakunin (1238–1239)","En’ō (1239–1240)","Ninji (1240–1243)","Kangen (1243–1247)","Hōji (1247–1249)","Kenchō (1249–1256)","Kōgen (1256–1257)","Shōka (1257–1259)","Shōgen (1259–1260)","Bun’ō (1260–1261)","Kōchō (1261–1264)","Bun’ei (1264–1275)","Kenji (1275–1278)","Kōan (1278–1288)","Shōō (1288–1293)","Einin (1293–1299)","Shōan (1299–1302)","Kengen (1302–1303)","Kagen (1303–1306)","Tokuji (1306–1308)","Enkyō (1308–1311)","Ōchō (1311–1312)","Shōwa (1312–1317)","Bunpō (1317–1319)","Genō (1319–1321)","Genkō (1321–1324)","Shōchū (1324–1326)","Karyaku (1326–1329)","Gentoku (1329–1331)","Genkō (1331–1334)","Kenmu (1334–1336)","Engen (1336–1340)","Kōkoku (1340–1346)","Shōhei (1346–1370)","Kentoku (1370–1372)","Bunchū (1372–1375)","Tenju (1375–1379)","Kōryaku (1379–1381)","Kōwa (1381–1384)","Genchū (1384–1392)","Meitoku (1384–1387)","Kakei (1387–1389)","Kōō (1389–1390)","Meitoku (1390–1394)","Ōei (1394–1428)","Shōchō (1428–1429)","Eikyō (1429–1441)","Kakitsu (1441–1444)","Bun’an (1444–1449)","Hōtoku (1449–1452)","Kyōtoku (1452–1455)","Kōshō (1455–1457)","Chōroku (1457–1460)","Kanshō (1460–1466)","Bunshō (1466–1467)","Ōnin (1467–1469)","Bunmei (1469–1487)","Chōkyō (1487–1489)","Entoku (1489–1492)","Meiō (1492–1501)","Bunki (1501–1504)","Eishō (1504–1521)","Taiei (1521–1528)","Kyōroku (1528–1532)","Tenbun (1532–1555)","Kōji (1555–1558)","Eiroku (1558–1570)","Genki (1570–1573)","Tenshō (1573–1592)","Bunroku (1592–1596)","Keichō (1596–1615)","Genna (1615–1624)","Kan’ei (1624–1644)","Shōho (1644–1648)","Keian (1648–1652)","Jōō (1652–1655)","Meireki (1655–1658)","Manji (1658–1661)","Kanbun (1661–1673)","Enpō (1673–1681)","Tenna (1681–1684)","Jōkyō (1684–1688)","Genroku (1688–1704)","Hōei (1704–1711)","Shōtoku (1711–1716)","Kyōhō (1716–1736)","Genbun (1736–1741)","Kanpō (1741–1744)","Enkyō (1744–1748)","Kan’en (1748–1751)","Hōreki (1751–1764)","Meiwa (1764–1772)","An’ei (1772–1781)","Tenmei (1781–1789)","Kansei (1789–1801)","Kyōwa (1801–1804)","Bunka (1804–1818)","Bunsei (1818–1830)","Tenpō (1830–1844)","Kōka (1844–1848)","Kaei (1848–1854)","Ansei (1854–1860)","Man’en (1860–1861)","Bunkyū (1861–1864)","Genji (1864–1865)","Keiō (1865–1868)","M","T","S","H"],short:["Taika (645–650)","Hakuchi (650–671)","Hakuhō (672–686)","Shuchō (686–701)","Taihō (701–704)","Keiun (704–708)","Wadō (708–715)","Reiki (715–717)","Yōrō (717–724)","Jinki (724–729)","Tenpyō (729–749)","Tenpyō-kampō (749-749)","Tenpyō-shōhō (749-757)","Tenpyō-hōji (757-765)","Tenpyō-jingo (765-767)","Jingo-keiun (767-770)","Hōki (770–780)","Ten-ō (781-782)","Enryaku (782–806)","Daidō (806–810)","Kōnin (810–824)","Tenchō (824–834)","Jōwa (834–848)","Kajō (848–851)","Ninju (851–854)","Saikō (854–857)","Ten-an (857-859)","Jōgan (859–877)","Gangyō (877–885)","Ninna (885–889)","Kanpyō (889–898)","Shōtai (898–901)","Engi (901–923)","Enchō (923–931)","Jōhei (931–938)","Tengyō (938–947)","Tenryaku (947–957)","Tentoku (957–961)","Ōwa (961–964)","Kōhō (964–968)","Anna (968–970)","Tenroku (970–973)","Ten’en (973–976)","Jōgen (976–978)","Tengen (978–983)","Eikan (983–985)","Kanna (985–987)","Eien (987–989)","Eiso (989–990)","Shōryaku (990–995)","Chōtoku (995–999)","Chōhō (999–1004)","Kankō (1004–1012)","Chōwa (1012–1017)","Kannin (1017–1021)","Jian (1021–1024)","Manju (1024–1028)","Chōgen (1028–1037)","Chōryaku (1037–1040)","Chōkyū (1040–1044)","Kantoku (1044–1046)","Eishō (1046–1053)","Tengi (1053–1058)","Kōhei (1058–1065)","Jiryaku (1065–1069)","Enkyū (1069–1074)","Shōho (1074–1077)","Shōryaku (1077–1081)","Eihō (1081–1084)","Ōtoku (1084–1087)","Kanji (1087–1094)","Kahō (1094–1096)","Eichō (1096–1097)","Jōtoku (1097–1099)","Kōwa (1099–1104)","Chōji (1104–1106)","Kashō (1106–1108)","Tennin (1108–1110)","Ten-ei (1110-1113)","Eikyū (1113–1118)","Gen’ei (1118–1120)","Hōan (1120–1124)","Tenji (1124–1126)","Daiji (1126–1131)","Tenshō (1131–1132)","Chōshō (1132–1135)","Hōen (1135–1141)","Eiji (1141–1142)","Kōji (1142–1144)","Ten’yō (1144–1145)","Kyūan (1145–1151)","Ninpei (1151–1154)","Kyūju (1154–1156)","Hōgen (1156–1159)","Heiji (1159–1160)","Eiryaku (1160–1161)","Ōho (1161–1163)","Chōkan (1163–1165)","Eiman (1165–1166)","Nin’an (1166–1169)","Kaō (1169–1171)","Shōan (1171–1175)","Angen (1175–1177)","Jishō (1177–1181)","Yōwa (1181–1182)","Juei (1182–1184)","Genryaku (1184–1185)","Bunji (1185–1190)","Kenkyū (1190–1199)","Shōji (1199–1201)","Kennin (1201–1204)","Genkyū (1204–1206)","Ken’ei (1206–1207)","Jōgen (1207–1211)","Kenryaku (1211–1213)","Kenpō (1213–1219)","Jōkyū (1219–1222)","Jōō (1222–1224)","Gennin (1224–1225)","Karoku (1225–1227)","Antei (1227–1229)","Kanki (1229–1232)","Jōei (1232–1233)","Tenpuku (1233–1234)","Bunryaku (1234–1235)","Katei (1235–1238)","Ryakunin (1238–1239)","En’ō (1239–1240)","Ninji (1240–1243)","Kangen (1243–1247)","Hōji (1247–1249)","Kenchō (1249–1256)","Kōgen (1256–1257)","Shōka (1257–1259)","Shōgen (1259–1260)","Bun’ō (1260–1261)","Kōchō (1261–1264)","Bun’ei (1264–1275)","Kenji (1275–1278)","Kōan (1278–1288)","Shōō (1288–1293)","Einin (1293–1299)","Shōan (1299–1302)","Kengen (1302–1303)","Kagen (1303–1306)","Tokuji (1306–1308)","Enkyō (1308–1311)","Ōchō (1311–1312)","Shōwa (1312–1317)","Bunpō (1317–1319)","Genō (1319–1321)","Genkō (1321–1324)","Shōchū (1324–1326)","Karyaku (1326–1329)","Gentoku (1329–1331)","Genkō (1331–1334)","Kenmu (1334–1336)","Engen (1336–1340)","Kōkoku (1340–1346)","Shōhei (1346–1370)","Kentoku (1370–1372)","Bunchū (1372–1375)","Tenju (1375–1379)","Kōryaku (1379–1381)","Kōwa (1381–1384)","Genchū (1384–1392)","Meitoku (1384–1387)","Kakei (1387–1389)","Kōō (1389–1390)","Meitoku (1390–1394)","Ōei (1394–1428)","Shōchō (1428–1429)","Eikyō (1429–1441)","Kakitsu (1441–1444)","Bun’an (1444–1449)","Hōtoku (1449–1452)","Kyōtoku (1452–1455)","Kōshō (1455–1457)","Chōroku (1457–1460)","Kanshō (1460–1466)","Bunshō (1466–1467)","Ōnin (1467–1469)","Bunmei (1469–1487)","Chōkyō (1487–1489)","Entoku (1489–1492)","Meiō (1492–1501)","Bunki (1501–1504)","Eishō (1504–1521)","Taiei (1521–1528)","Kyōroku (1528–1532)","Tenbun (1532–1555)","Kōji (1555–1558)","Eiroku (1558–1570)","Genki (1570–1573)","Tenshō (1573–1592)","Bunroku (1592–1596)","Keichō (1596–1615)","Genna (1615–1624)","Kan’ei (1624–1644)","Shōho (1644–1648)","Keian (1648–1652)","Jōō (1652–1655)","Meireki (1655–1658)","Manji (1658–1661)","Kanbun (1661–1673)","Enpō (1673–1681)","Tenna (1681–1684)","Jōkyō (1684–1688)","Genroku (1688–1704)","Hōei (1704–1711)","Shōtoku (1711–1716)","Kyōhō (1716–1736)","Genbun (1736–1741)","Kanpō (1741–1744)","Enkyō (1744–1748)","Kan’en (1748–1751)","Hōreki (1751–1764)","Meiwa (1764–1772)","An’ei (1772–1781)","Tenmei (1781–1789)","Kansei (1789–1801)","Kyōwa (1801–1804)","Bunka (1804–1818)","Bunsei (1818–1830)","Tenpō (1830–1844)","Kōka (1844–1848)","Kaei (1848–1854)","Ansei (1854–1860)","Man’en (1860–1861)","Bunkyū (1861–1864)","Genji (1864–1865)","Keiō (1865–1868)","Meiji","Taishō","Shōwa","Heisei"],long:["Taika (645–650)","Hakuchi (650–671)","Hakuhō (672–686)","Shuchō (686–701)","Taihō (701–704)","Keiun (704–708)","Wadō (708–715)","Reiki (715–717)","Yōrō (717–724)","Jinki (724–729)","Tenpyō (729–749)","Tenpyō-kampō (749-749)","Tenpyō-shōhō (749-757)","Tenpyō-hōji (757-765)","Tenpyō-jingo (765-767)","Jingo-keiun (767-770)","Hōki (770–780)","Ten-ō (781-782)","Enryaku (782–806)","Daidō (806–810)","Kōnin (810–824)","Tenchō (824–834)","Jōwa (834–848)","Kajō (848–851)","Ninju (851–854)","Saikō (854–857)","Ten-an (857-859)","Jōgan (859–877)","Gangyō (877–885)","Ninna (885–889)","Kanpyō (889–898)","Shōtai (898–901)","Engi (901–923)","Enchō (923–931)","Jōhei (931–938)","Tengyō (938–947)","Tenryaku (947–957)","Tentoku (957–961)","Ōwa (961–964)","Kōhō (964–968)","Anna (968–970)","Tenroku (970–973)","Ten’en (973–976)","Jōgen (976–978)","Tengen (978–983)","Eikan (983–985)","Kanna (985–987)","Eien (987–989)","Eiso (989–990)","Shōryaku (990–995)","Chōtoku (995–999)","Chōhō (999–1004)","Kankō (1004–1012)","Chōwa (1012–1017)","Kannin (1017–1021)","Jian (1021–1024)","Manju (1024–1028)","Chōgen (1028–1037)","Chōryaku (1037–1040)","Chōkyū (1040–1044)","Kantoku (1044–1046)","Eishō (1046–1053)","Tengi (1053–1058)","Kōhei (1058–1065)","Jiryaku (1065–1069)","Enkyū (1069–1074)","Shōho (1074–1077)","Shōryaku (1077–1081)","Eihō (1081–1084)","Ōtoku (1084–1087)","Kanji (1087–1094)","Kahō (1094–1096)","Eichō (1096–1097)","Jōtoku (1097–1099)","Kōwa (1099–1104)","Chōji (1104–1106)","Kashō (1106–1108)","Tennin (1108–1110)","Ten-ei (1110-1113)","Eikyū (1113–1118)","Gen’ei (1118–1120)","Hōan (1120–1124)","Tenji (1124–1126)","Daiji (1126–1131)","Tenshō (1131–1132)","Chōshō (1132–1135)","Hōen (1135–1141)","Eiji (1141–1142)","Kōji (1142–1144)","Ten’yō (1144–1145)","Kyūan (1145–1151)","Ninpei (1151–1154)","Kyūju (1154–1156)","Hōgen (1156–1159)","Heiji (1159–1160)","Eiryaku (1160–1161)","Ōho (1161–1163)","Chōkan (1163–1165)","Eiman (1165–1166)","Nin’an (1166–1169)","Kaō (1169–1171)","Shōan (1171–1175)","Angen (1175–1177)","Jishō (1177–1181)","Yōwa (1181–1182)","Juei (1182–1184)","Genryaku (1184–1185)","Bunji (1185–1190)","Kenkyū (1190–1199)","Shōji (1199–1201)","Kennin (1201–1204)","Genkyū (1204–1206)","Ken’ei (1206–1207)","Jōgen (1207–1211)","Kenryaku (1211–1213)","Kenpō (1213–1219)","Jōkyū (1219–1222)","Jōō (1222–1224)","Gennin (1224–1225)","Karoku (1225–1227)","Antei (1227–1229)","Kanki (1229–1232)","Jōei (1232–1233)","Tenpuku (1233–1234)","Bunryaku (1234–1235)","Katei (1235–1238)","Ryakunin (1238–1239)","En’ō (1239–1240)","Ninji (1240–1243)","Kangen (1243–1247)","Hōji (1247–1249)","Kenchō (1249–1256)","Kōgen (1256–1257)","Shōka (1257–1259)","Shōgen (1259–1260)","Bun’ō (1260–1261)","Kōchō (1261–1264)","Bun’ei (1264–1275)","Kenji (1275–1278)","Kōan (1278–1288)","Shōō (1288–1293)","Einin (1293–1299)","Shōan (1299–1302)","Kengen (1302–1303)","Kagen (1303–1306)","Tokuji (1306–1308)","Enkyō (1308–1311)","Ōchō (1311–1312)","Shōwa (1312–1317)","Bunpō (1317–1319)","Genō (1319–1321)","Genkō (1321–1324)","Shōchū (1324–1326)","Karyaku (1326–1329)","Gentoku (1329–1331)","Genkō (1331–1334)","Kenmu (1334–1336)","Engen (1336–1340)","Kōkoku (1340–1346)","Shōhei (1346–1370)","Kentoku (1370–1372)","Bunchū (1372–1375)","Tenju (1375–1379)","Kōryaku (1379–1381)","Kōwa (1381–1384)","Genchū (1384–1392)","Meitoku (1384–1387)","Kakei (1387–1389)","Kōō (1389–1390)","Meitoku (1390–1394)","Ōei (1394–1428)","Shōchō (1428–1429)","Eikyō (1429–1441)","Kakitsu (1441–1444)","Bun’an (1444–1449)","Hōtoku (1449–1452)","Kyōtoku (1452–1455)","Kōshō (1455–1457)","Chōroku (1457–1460)","Kanshō (1460–1466)","Bunshō (1466–1467)","Ōnin (1467–1469)","Bunmei (1469–1487)","Chōkyō (1487–1489)","Entoku (1489–1492)","Meiō (1492–1501)","Bunki (1501–1504)","Eishō (1504–1521)","Taiei (1521–1528)","Kyōroku (1528–1532)","Tenbun (1532–1555)","Kōji (1555–1558)","Eiroku (1558–1570)","Genki (1570–1573)","Tenshō (1573–1592)","Bunroku (1592–1596)","Keichō (1596–1615)","Genna (1615–1624)","Kan’ei (1624–1644)","Shōho (1644–1648)","Keian (1648–1652)","Jōō (1652–1655)","Meireki (1655–1658)","Manji (1658–1661)","Kanbun (1661–1673)","Enpō (1673–1681)","Tenna (1681–1684)","Jōkyō (1684–1688)","Genroku (1688–1704)","Hōei (1704–1711)","Shōtoku (1711–1716)","Kyōhō (1716–1736)","Genbun (1736–1741)","Kanpō (1741–1744)","Enkyō (1744–1748)","Kan’en (1748–1751)","Hōreki (1751–1764)","Meiwa (1764–1772)","An’ei (1772–1781)","Tenmei (1781–1789)","Kansei (1789–1801)","Kyōwa (1801–1804)","Bunka (1804–1818)","Bunsei (1818–1830)","Tenpō (1830–1844)","Kōka (1844–1848)","Kaei (1848–1854)","Ansei (1854–1860)","Man’en (1860–1861)","Bunkyū (1861–1864)","Genji (1864–1865)","Keiō (1865–1868)","Meiji","Taishō","Shōwa","Heisei"]},dayPeriods:{am:"AM",pm:"PM"}},persian:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Farvardin","Ordibehesht","Khordad","Tir","Mordad","Shahrivar","Mehr","Aban","Azar","Dey","Bahman","Esfand"],long:["Farvardin","Ordibehesht","Khordad","Tir","Mordad","Shahrivar","Mehr","Aban","Azar","Dey","Bahman","Esfand"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["AP"],short:["AP"],long:["AP"]},dayPeriods:{am:"AM",pm:"PM"}},roc:{months:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],long:["January","February","March","April","May","June","July","August","September","October","November","December"]},days:{narrow:["S","M","T","W","T","F","S"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eras:{narrow:["Before R.O.C.","Minguo"],short:["Before R.O.C.","Minguo"],long:["Before R.O.C.","Minguo"]},dayPeriods:{am:"AM",pm:"PM"}}}},number:{nu:["latn"],patterns:{decimal:{positivePattern:"{number}",negativePattern:"{minusSign}{number}"},currency:{positivePattern:"{currency}{number}",negativePattern:"{minusSign}{currency}{number}"},percent:{positivePattern:"{number}{percentSign}",negativePattern:"{minusSign}{number}{percentSign}"}},symbols:{latn:{decimal:".",group:",",nan:"NaN",plusSign:"+",minusSign:"-",percentSign:"%",infinity:"∞"}},currencies:{AUD:"A$",BRL:"R$",CAD:"CA$",CNY:"CN¥",EUR:"€",GBP:"£",HKD:"HK$",ILS:"₪",INR:"₹",JPY:"¥",KRW:"₩",MXN:"MX$",NZD:"NZ$",TWD:"NT$",USD:"$",VND:"₫",XAF:"FCFA",XCD:"EC$",XOF:"CFA",XPF:"CFPF"}}});

/***/ },
/* 104 */
/***/ function(module, exports) {

	IntlPolyfill.__addLocaleData({locale:"pt-BR",date:{ca:["gregory","buddhist","chinese","coptic","dangi","ethioaa","ethiopic","generic","hebrew","indian","islamic","islamicc","japanese","persian","roc"],hourNo0:true,hour12:false,formats:{short:"{1} {0}",medium:"{1} {0}",full:"{1} {0}",long:"{1} {0}",availableFormats:{"d":"d","E":"ccc",Ed:"E, d",Ehm:"E, h:mm a",EHm:"E, HH:mm",Ehms:"E, h:mm:ss a",EHms:"E, HH:mm:ss",Gy:"y G",GyMMM:"MMM 'de' y G",GyMMMd:"d 'de' MMM 'de' y G",GyMMMEd:"E, d 'de' MMM 'de' y G","h":"h a","H":"HH",hm:"h:mm a",Hm:"HH:mm",hms:"h:mm:ss a",Hms:"HH:mm:ss",hmsv:"h:mm:ss a v",Hmsv:"HH:mm:ss v",hmv:"h:mm a v",Hmv:"HH:mm v","M":"L",Md:"d/M",MEd:"E, dd/MM",MMdd:"dd/MM",MMM:"LLL",MMMd:"d 'de' MMM",MMMEd:"E, d 'de' MMM",MMMMd:"d 'de' MMMM",MMMMEd:"E, d 'de' MMMM",ms:"mm:ss","y":"y",yM:"MM/y",yMd:"dd/MM/y",yMEd:"E, dd/MM/y",yMM:"MM/y",yMMM:"MMM 'de' y",yMMMd:"d 'de' MMM 'de' y",yMMMEd:"E, d 'de' MMM 'de' y",yMMMM:"MMMM 'de' y",yMMMMd:"d 'de' MMMM 'de' y",yMMMMEd:"E, d 'de' MMMM 'de' y",yQQQ:"y QQQ",yQQQQ:"y QQQQ"},dateFormats:{yMMMMEEEEd:"EEEE, d 'de' MMMM 'de' y",yMMMMd:"d 'de' MMMM 'de' y",yMMMd:"d 'de' MMM 'de' y",yMd:"dd/MM/yy"},timeFormats:{hmmsszzzz:"HH:mm:ss zzzz",hmsz:"HH:mm:ss z",hms:"HH:mm:ss",hm:"HH:mm"}},calendars:{buddhist:{months:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],short:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],long:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},days:{narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sáb"],long:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},eras:{narrow:["BE"],short:["BE"],long:["BE"]},dayPeriods:{am:"AM",pm:"PM"}},chinese:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Mês 1","Mês 2","Mês 3","Mês 4","Mês 5","Mês 6","Mês 7","Mês 8","Mês 9","Mês 10","Mês 11","Mês 12"],long:["Mês 1","Mês 2","Mês 3","Mês 4","Mês 5","Mês 6","Mês 7","Mês 8","Mês 9","Mês 10","Mês 11","Mês 12"]},days:{narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sáb"],long:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},dayPeriods:{am:"AM",pm:"PM"}},coptic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13"],short:["Tout","Baba","Hator","Kiahk","Toba","Amshir","Baramhat","Baramouda","Bashans","Paona","Epep","Mesra","Nasie"],long:["Tout","Baba","Hator","Kiahk","Toba","Amshir","Baramhat","Baramouda","Bashans","Paona","Epep","Mesra","Nasie"]},days:{narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sáb"],long:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},eras:{narrow:["ERA0","ERA1"],short:["ERA0","ERA1"],long:["ERA0","ERA1"]},dayPeriods:{am:"AM",pm:"PM"}},dangi:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Mês 1","Mês 2","Mês 3","Mês 4","Mês 5","Mês 6","Mês 7","Mês 8","Mês 9","Mês 10","Mês 11","Mês 12"],long:["Mês 1","Mês 2","Mês 3","Mês 4","Mês 5","Mês 6","Mês 7","Mês 8","Mês 9","Mês 10","Mês 11","Mês 12"]},days:{narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sáb"],long:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},dayPeriods:{am:"AM",pm:"PM"}},ethiopic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13"],short:["Meskerem","Tekemt","Hedar","Tahsas","Ter","Yekatit","Megabit","Miazia","Genbot","Sene","Hamle","Nehasse","Pagumen"],long:["Meskerem","Tekemt","Hedar","Tahsas","Ter","Yekatit","Megabit","Miazia","Genbot","Sene","Hamle","Nehasse","Pagumen"]},days:{narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sáb"],long:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},eras:{narrow:["ERA0","ERA1"],short:["ERA0","ERA1"],long:["ERA0","ERA1"]},dayPeriods:{am:"AM",pm:"PM"}},ethioaa:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13"],short:["Meskerem","Tekemt","Hedar","Tahsas","Ter","Yekatit","Megabit","Miazia","Genbot","Sene","Hamle","Nehasse","Pagumen"],long:["Meskerem","Tekemt","Hedar","Tahsas","Ter","Yekatit","Megabit","Miazia","Genbot","Sene","Hamle","Nehasse","Pagumen"]},days:{narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sáb"],long:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},eras:{narrow:["ERA0"],short:["ERA0"],long:["ERA0"]},dayPeriods:{am:"AM",pm:"PM"}},generic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["M01","M02","M03","M04","M05","M06","M07","M08","M09","M10","M11","M12"],long:["M01","M02","M03","M04","M05","M06","M07","M08","M09","M10","M11","M12"]},days:{narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sáb"],long:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},eras:{narrow:["ERA0","ERA1"],short:["ERA0","ERA1"],long:["ERA0","ERA1"]},dayPeriods:{am:"AM",pm:"PM"}},gregory:{months:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],short:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],long:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},days:{narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sáb"],long:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},eras:{narrow:["a.C.","d.C.","AEC","EC"],short:["a.C.","d.C.","AEC","EC"],long:["antes de Cristo","depois de Cristo","antes da Era Comum","Era Comum"]},dayPeriods:{am:"AM",pm:"PM"}},hebrew:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12","13","7"],short:["Tishri","Heshvan","Kislev","Tevet","Shevat","Adar I","Adar","Nisan","Iyar","Sivan","Tamuz","Av","Elul","Adar II"],long:["Tishri","Heshvan","Kislev","Tevet","Shevat","Adar I","Adar","Nisan","Iyar","Sivan","Tamuz","Av","Elul","Adar II"]},days:{narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sáb"],long:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},eras:{narrow:["AM"],short:["AM"],long:["AM"]},dayPeriods:{am:"AM",pm:"PM"}},indian:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Chaitra","Vaisakha","Jyaistha","Asadha","Sravana","Bhadra","Asvina","Kartika","Agrahayana","Pausa","Magha","Phalguna"],long:["Chaitra","Vaisakha","Jyaistha","Asadha","Sravana","Bhadra","Asvina","Kartika","Agrahayana","Pausa","Magha","Phalguna"]},days:{narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sáb"],long:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},eras:{narrow:["Saka"],short:["Saka"],long:["Saka"]},dayPeriods:{am:"AM",pm:"PM"}},islamic:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Muh.","Saf.","Rab. I","Rab. II","Jum. I","Jum. II","Raj.","Sha.","Ram.","Shaw.","Dhuʻl-Q.","Dhuʻl-H."],long:["Muharram","Safar","Rabiʻ I","Rabiʻ II","Jumada I","Jumada II","Rajab","Shaʻban","Ramadan","Shawwal","Dhuʻl-Qiʻdah","Dhuʻl-Hijjah"]},days:{narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sáb"],long:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},eras:{narrow:["AH"],short:["AH"],long:["AH"]},dayPeriods:{am:"AM",pm:"PM"}},islamicc:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Muh.","Saf.","Rab. I","Rab. II","Jum. I","Jum. II","Raj.","Sha.","Ram.","Shaw.","Dhuʻl-Q.","Dhuʻl-H."],long:["Muharram","Safar","Rabiʻ I","Rabiʻ II","Jumada I","Jumada II","Rajab","Shaʻban","Ramadan","Shawwal","Dhuʻl-Qiʻdah","Dhuʻl-Hijjah"]},days:{narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sáb"],long:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},eras:{narrow:["AH"],short:["AH"],long:["AH"]},dayPeriods:{am:"AM",pm:"PM"}},japanese:{months:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],short:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],long:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},days:{narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sáb"],long:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},eras:{narrow:["Taika (645–650)","Hakuchi (650–671)","Hakuhō (672–686)","Shuchō (686–701)","Taihō (701–704)","Keiun (704–708)","Wadō (708–715)","Reiki (715–717)","Yōrō (717–724)","Jinki (724–729)","Tenpyō (729–749)","Tenpyō-kampō (749-749)","Tenpyō-shōhō (749-757)","Tenpyō-hōji (757-765)","Tenpyō-jingo (765-767)","Jingo-keiun (767-770)","Hōki (770–780)","Ten-ō (781-782)","Enryaku (782–806)","Daidō (806–810)","Kōnin (810–824)","Tenchō (824–834)","Jōwa (834–848)","Kajō (848–851)","Ninju (851–854)","Saikō (854–857)","Ten-an (857-859)","Jōgan (859–877)","Gangyō (877–885)","Ninna (885–889)","Kanpyō (889–898)","Shōtai (898–901)","Engi (901–923)","Enchō (923–931)","Jōhei (931–938)","Tengyō (938–947)","Tenryaku (947–957)","Tentoku (957–961)","Ōwa (961–964)","Kōhō (964–968)","Anna (968–970)","Tenroku (970–973)","Ten’en (973–976)","Jōgen (976–978)","Tengen (978–983)","Eikan (983–985)","Kanna (985–987)","Eien (987–989)","Eiso (989–990)","Shōryaku (990–995)","Chōtoku (995–999)","Chōhō (999–1004)","Kankō (1004–1012)","Chōwa (1012–1017)","Kannin (1017–1021)","Jian (1021–1024)","Manju (1024–1028)","Chōgen (1028–1037)","Chōryaku (1037–1040)","Chōkyū (1040–1044)","Kantoku (1044–1046)","Eishō (1046–1053)","Tengi (1053–1058)","Kōhei (1058–1065)","Jiryaku (1065–1069)","Enkyū (1069–1074)","Shōho (1074–1077)","Shōryaku (1077–1081)","Eihō (1081–1084)","Ōtoku (1084–1087)","Kanji (1087–1094)","Kahō (1094–1096)","Eichō (1096–1097)","Jōtoku (1097–1099)","Kōwa (1099–1104)","Chōji (1104–1106)","Kashō (1106–1108)","Tennin (1108–1110)","Ten-ei (1110-1113)","Eikyū (1113–1118)","Gen’ei (1118–1120)","Hōan (1120–1124)","Tenji (1124–1126)","Daiji (1126–1131)","Tenshō (1131–1132)","Chōshō (1132–1135)","Hōen (1135–1141)","Eiji (1141–1142)","Kōji (1142–1144)","Ten’yō (1144–1145)","Kyūan (1145–1151)","Ninpei (1151–1154)","Kyūju (1154–1156)","Hōgen (1156–1159)","Heiji (1159–1160)","Eiryaku (1160–1161)","Ōho (1161–1163)","Chōkan (1163–1165)","Eiman (1165–1166)","Nin’an (1166–1169)","Kaō (1169–1171)","Shōan (1171–1175)","Angen (1175–1177)","Jishō (1177–1181)","Yōwa (1181–1182)","Juei (1182–1184)","Genryaku (1184–1185)","Bunji (1185–1190)","Kenkyū (1190–1199)","Shōji (1199–1201)","Kennin (1201–1204)","Genkyū (1204–1206)","Ken’ei (1206–1207)","Jōgen (1207–1211)","Kenryaku (1211–1213)","Kenpō (1213–1219)","Jōkyū (1219–1222)","Jōō (1222–1224)","Gennin (1224–1225)","Karoku (1225–1227)","Antei (1227–1229)","Kanki (1229–1232)","Jōei (1232–1233)","Tenpuku (1233–1234)","Bunryaku (1234–1235)","Katei (1235–1238)","Ryakunin (1238–1239)","En’ō (1239–1240)","Ninji (1240–1243)","Kangen (1243–1247)","Hōji (1247–1249)","Kenchō (1249–1256)","Kōgen (1256–1257)","Shōka (1257–1259)","Shōgen (1259–1260)","Bun’ō (1260–1261)","Kōchō (1261–1264)","Bun’ei (1264–1275)","Kenji (1275–1278)","Kōan (1278–1288)","Shōō (1288–1293)","Einin (1293–1299)","Shōan (1299–1302)","Kengen (1302–1303)","Kagen (1303–1306)","Tokuji (1306–1308)","Enkyō (1308–1311)","Ōchō (1311–1312)","Shōwa (1312–1317)","Bunpō (1317–1319)","Genō (1319–1321)","Genkō (1321–1324)","Shōchū (1324–1326)","Karyaku (1326–1329)","Gentoku (1329–1331)","Genkō (1331–1334)","Kenmu (1334–1336)","Engen (1336–1340)","Kōkoku (1340–1346)","Shōhei (1346–1370)","Kentoku (1370–1372)","Bunchū (1372–1375)","Tenju (1375–1379)","Kōryaku (1379–1381)","Kōwa (1381–1384)","Genchū (1384–1392)","Meitoku (1384–1387)","Kakei (1387–1389)","Kōō (1389–1390)","Meitoku (1390–1394)","Ōei (1394–1428)","Shōchō (1428–1429)","Eikyō (1429–1441)","Kakitsu (1441–1444)","Bun’an (1444–1449)","Hōtoku (1449–1452)","Kyōtoku (1452–1455)","Kōshō (1455–1457)","Chōroku (1457–1460)","Kanshō (1460–1466)","Bunshō (1466–1467)","Ōnin (1467–1469)","Bunmei (1469–1487)","Chōkyō (1487–1489)","Entoku (1489–1492)","Meiō (1492–1501)","Bunki (1501–1504)","Eishō (1504–1521)","Taiei (1521–1528)","Kyōroku (1528–1532)","Tenbun (1532–1555)","Kōji (1555–1558)","Eiroku (1558–1570)","Genki (1570–1573)","Tenshō (1573–1592)","Bunroku (1592–1596)","Keichō (1596–1615)","Genna (1615–1624)","Kan’ei (1624–1644)","Shōho (1644–1648)","Keian (1648–1652)","Jōō (1652–1655)","Meireki (1655–1658)","Manji (1658–1661)","Kanbun (1661–1673)","Enpō (1673–1681)","Tenna (1681–1684)","Jōkyō (1684–1688)","Genroku (1688–1704)","Hōei (1704–1711)","Shōtoku (1711–1716)","Kyōhō (1716–1736)","Genbun (1736–1741)","Kanpō (1741–1744)","Enkyō (1744–1748)","Kan’en (1748–1751)","Hōreki (1751–1764)","Meiwa (1764–1772)","An’ei (1772–1781)","Tenmei (1781–1789)","Kansei (1789–1801)","Kyōwa (1801–1804)","Bunka (1804–1818)","Bunsei (1818–1830)","Tenpō (1830–1844)","Kōka (1844–1848)","Kaei (1848–1854)","Ansei (1854–1860)","Man’en (1860–1861)","Bunkyū (1861–1864)","Genji (1864–1865)","Keiō (1865–1868)","M","T","S","H"],short:["Taika (645–650)","Hakuchi (650–671)","Hakuhō (672–686)","Shuchō (686–701)","Taihō (701–704)","Keiun (704–708)","Wadō (708–715)","Reiki (715–717)","Yōrō (717–724)","Jinki (724–729)","Tenpyō (729–749)","Tenpyō-kampō (749-749)","Tenpyō-shōhō (749-757)","Tenpyō-hōji (757-765)","Tenpyō-jingo (765-767)","Jingo-keiun (767-770)","Hōki (770–780)","Ten-ō (781-782)","Enryaku (782–806)","Daidō (806–810)","Kōnin (810–824)","Tenchō (824–834)","Jōwa (834–848)","Kajō (848–851)","Ninju (851–854)","Saikō (854–857)","Ten-an (857-859)","Jōgan (859–877)","Gangyō (877–885)","Ninna (885–889)","Kanpyō (889–898)","Shōtai (898–901)","Engi (901–923)","Enchō (923–931)","Jōhei (931–938)","Tengyō (938–947)","Tenryaku (947–957)","Tentoku (957–961)","Ōwa (961–964)","Kōhō (964–968)","Anna (968–970)","Tenroku (970–973)","Ten’en (973–976)","Jōgen (976–978)","Tengen (978–983)","Eikan (983–985)","Kanna (985–987)","Eien (987–989)","Eiso (989–990)","Shōryaku (990–995)","Chōtoku (995–999)","Chōhō (999–1004)","Kankō (1004–1012)","Chōwa (1012–1017)","Kannin (1017–1021)","Jian (1021–1024)","Manju (1024–1028)","Chōgen (1028–1037)","Chōryaku (1037–1040)","Chōkyū (1040–1044)","Kantoku (1044–1046)","Eishō (1046–1053)","Tengi (1053–1058)","Kōhei (1058–1065)","Jiryaku (1065–1069)","Enkyū (1069–1074)","Shōho (1074–1077)","Shōryaku (1077–1081)","Eihō (1081–1084)","Ōtoku (1084–1087)","Kanji (1087–1094)","Kahō (1094–1096)","Eichō (1096–1097)","Jōtoku (1097–1099)","Kōwa (1099–1104)","Chōji (1104–1106)","Kashō (1106–1108)","Tennin (1108–1110)","Ten-ei (1110-1113)","Eikyū (1113–1118)","Gen’ei (1118–1120)","Hōan (1120–1124)","Tenji (1124–1126)","Daiji (1126–1131)","Tenshō (1131–1132)","Chōshō (1132–1135)","Hōen (1135–1141)","Eiji (1141–1142)","Kōji (1142–1144)","Ten’yō (1144–1145)","Kyūan (1145–1151)","Ninpei (1151–1154)","Kyūju (1154–1156)","Hōgen (1156–1159)","Heiji (1159–1160)","Eiryaku (1160–1161)","Ōho (1161–1163)","Chōkan (1163–1165)","Eiman (1165–1166)","Nin’an (1166–1169)","Kaō (1169–1171)","Shōan (1171–1175)","Angen (1175–1177)","Jishō (1177–1181)","Yōwa (1181–1182)","Juei (1182–1184)","Genryaku (1184–1185)","Bunji (1185–1190)","Kenkyū (1190–1199)","Shōji (1199–1201)","Kennin (1201–1204)","Genkyū (1204–1206)","Ken’ei (1206–1207)","Jōgen (1207–1211)","Kenryaku (1211–1213)","Kenpō (1213–1219)","Jōkyū (1219–1222)","Jōō (1222–1224)","Gennin (1224–1225)","Karoku (1225–1227)","Antei (1227–1229)","Kanki (1229–1232)","Jōei (1232–1233)","Tenpuku (1233–1234)","Bunryaku (1234–1235)","Katei (1235–1238)","Ryakunin (1238–1239)","En’ō (1239–1240)","Ninji (1240–1243)","Kangen (1243–1247)","Hōji (1247–1249)","Kenchō (1249–1256)","Kōgen (1256–1257)","Shōka (1257–1259)","Shōgen (1259–1260)","Bun’ō (1260–1261)","Kōchō (1261–1264)","Bun’ei (1264–1275)","Kenji (1275–1278)","Kōan (1278–1288)","Shōō (1288–1293)","Einin (1293–1299)","Shōan (1299–1302)","Kengen (1302–1303)","Kagen (1303–1306)","Tokuji (1306–1308)","Enkyō (1308–1311)","Ōchō (1311–1312)","Shōwa (1312–1317)","Bunpō (1317–1319)","Genō (1319–1321)","Genkō (1321–1324)","Shōchū (1324–1326)","Karyaku (1326–1329)","Gentoku (1329–1331)","Genkō (1331–1334)","Kenmu (1334–1336)","Engen (1336–1340)","Kōkoku (1340–1346)","Shōhei (1346–1370)","Kentoku (1370–1372)","Bunchū (1372–1375)","Tenju (1375–1379)","Kōryaku (1379–1381)","Kōwa (1381–1384)","Genchū (1384–1392)","Meitoku (1384–1387)","Kakei (1387–1389)","Kōō (1389–1390)","Meitoku (1390–1394)","Ōei (1394–1428)","Shōchō (1428–1429)","Eikyō (1429–1441)","Kakitsu (1441–1444)","Bun’an (1444–1449)","Hōtoku (1449–1452)","Kyōtoku (1452–1455)","Kōshō (1455–1457)","Chōroku (1457–1460)","Kanshō (1460–1466)","Bunshō (1466–1467)","Ōnin (1467–1469)","Bunmei (1469–1487)","Chōkyō (1487–1489)","Entoku (1489–1492)","Meiō (1492–1501)","Bunki (1501–1504)","Eishō (1504–1521)","Taiei (1521–1528)","Kyōroku (1528–1532)","Tenbun (1532–1555)","Kōji (1555–1558)","Eiroku (1558–1570)","Genki (1570–1573)","Tenshō (1573–1592)","Bunroku (1592–1596)","Keichō (1596–1615)","Genna (1615–1624)","Kan’ei (1624–1644)","Shōho (1644–1648)","Keian (1648–1652)","Jōō (1652–1655)","Meireki (1655–1658)","Manji (1658–1661)","Kanbun (1661–1673)","Enpō (1673–1681)","Tenna (1681–1684)","Jōkyō (1684–1688)","Genroku (1688–1704)","Hōei (1704–1711)","Shōtoku (1711–1716)","Kyōhō (1716–1736)","Genbun (1736–1741)","Kanpō (1741–1744)","Enkyō (1744–1748)","Kan’en (1748–1751)","Hōreki (1751–1764)","Meiwa (1764–1772)","An’ei (1772–1781)","Tenmei (1781–1789)","Kansei (1789–1801)","Kyōwa (1801–1804)","Bunka (1804–1818)","Bunsei (1818–1830)","Tenpō (1830–1844)","Kōka (1844–1848)","Kaei (1848–1854)","Ansei (1854–1860)","Man’en (1860–1861)","Bunkyū (1861–1864)","Genji (1864–1865)","Keiō (1865–1868)","Meiji","Taishō","Shōwa","Heisei"],long:["Taika (645–650)","Hakuchi (650–671)","Hakuhō (672–686)","Shuchō (686–701)","Taihō (701–704)","Keiun (704–708)","Wadō (708–715)","Reiki (715–717)","Yōrō (717–724)","Jinki (724–729)","Tenpyō (729–749)","Tenpyō-kampō (749-749)","Tenpyō-shōhō (749-757)","Tenpyō-hōji (757-765)","Tenpyō-jingo (765-767)","Jingo-keiun (767-770)","Hōki (770–780)","Ten-ō (781-782)","Enryaku (782–806)","Daidō (806–810)","Kōnin (810–824)","Tenchō (824–834)","Jōwa (834–848)","Kajō (848–851)","Ninju (851–854)","Saikō (854–857)","Ten-an (857-859)","Jōgan (859–877)","Gangyō (877–885)","Ninna (885–889)","Kanpyō (889–898)","Shōtai (898–901)","Engi (901–923)","Enchō (923–931)","Jōhei (931–938)","Tengyō (938–947)","Tenryaku (947–957)","Tentoku (957–961)","Ōwa (961–964)","Kōhō (964–968)","Anna (968–970)","Tenroku (970–973)","Ten’en (973–976)","Jōgen (976–978)","Tengen (978–983)","Eikan (983–985)","Kanna (985–987)","Eien (987–989)","Eiso (989–990)","Shōryaku (990–995)","Chōtoku (995–999)","Chōhō (999–1004)","Kankō (1004–1012)","Chōwa (1012–1017)","Kannin (1017–1021)","Jian (1021–1024)","Manju (1024–1028)","Chōgen (1028–1037)","Chōryaku (1037–1040)","Chōkyū (1040–1044)","Kantoku (1044–1046)","Eishō (1046–1053)","Tengi (1053–1058)","Kōhei (1058–1065)","Jiryaku (1065–1069)","Enkyū (1069–1074)","Shōho (1074–1077)","Shōryaku (1077–1081)","Eihō (1081–1084)","Ōtoku (1084–1087)","Kanji (1087–1094)","Kahō (1094–1096)","Eichō (1096–1097)","Jōtoku (1097–1099)","Kōwa (1099–1104)","Chōji (1104–1106)","Kashō (1106–1108)","Tennin (1108–1110)","Ten-ei (1110-1113)","Eikyū (1113–1118)","Gen’ei (1118–1120)","Hōan (1120–1124)","Tenji (1124–1126)","Daiji (1126–1131)","Tenshō (1131–1132)","Chōshō (1132–1135)","Hōen (1135–1141)","Eiji (1141–1142)","Kōji (1142–1144)","Ten’yō (1144–1145)","Kyūan (1145–1151)","Ninpei (1151–1154)","Kyūju (1154–1156)","Hōgen (1156–1159)","Heiji (1159–1160)","Eiryaku (1160–1161)","Ōho (1161–1163)","Chōkan (1163–1165)","Eiman (1165–1166)","Nin’an (1166–1169)","Kaō (1169–1171)","Shōan (1171–1175)","Angen (1175–1177)","Jishō (1177–1181)","Yōwa (1181–1182)","Juei (1182–1184)","Genryaku (1184–1185)","Bunji (1185–1190)","Kenkyū (1190–1199)","Shōji (1199–1201)","Kennin (1201–1204)","Genkyū (1204–1206)","Ken’ei (1206–1207)","Jōgen (1207–1211)","Kenryaku (1211–1213)","Kenpō (1213–1219)","Jōkyū (1219–1222)","Jōō (1222–1224)","Gennin (1224–1225)","Karoku (1225–1227)","Antei (1227–1229)","Kanki (1229–1232)","Jōei (1232–1233)","Tenpuku (1233–1234)","Bunryaku (1234–1235)","Katei (1235–1238)","Ryakunin (1238–1239)","En’ō (1239–1240)","Ninji (1240–1243)","Kangen (1243–1247)","Hōji (1247–1249)","Kenchō (1249–1256)","Kōgen (1256–1257)","Shōka (1257–1259)","Shōgen (1259–1260)","Bun’ō (1260–1261)","Kōchō (1261–1264)","Bun’ei (1264–1275)","Kenji (1275–1278)","Kōan (1278–1288)","Shōō (1288–1293)","Einin (1293–1299)","Shōan (1299–1302)","Kengen (1302–1303)","Kagen (1303–1306)","Tokuji (1306–1308)","Enkyō (1308–1311)","Ōchō (1311–1312)","Shōwa (1312–1317)","Bunpō (1317–1319)","Genō (1319–1321)","Genkō (1321–1324)","Shōchū (1324–1326)","Karyaku (1326–1329)","Gentoku (1329–1331)","Genkō (1331–1334)","Kenmu (1334–1336)","Engen (1336–1340)","Kōkoku (1340–1346)","Shōhei (1346–1370)","Kentoku (1370–1372)","Bunchū (1372–1375)","Tenju (1375–1379)","Kōryaku (1379–1381)","Kōwa (1381–1384)","Genchū (1384–1392)","Meitoku (1384–1387)","Kakei (1387–1389)","Kōō (1389–1390)","Meitoku (1390–1394)","Ōei (1394–1428)","Shōchō (1428–1429)","Eikyō (1429–1441)","Kakitsu (1441–1444)","Bun’an (1444–1449)","Hōtoku (1449–1452)","Kyōtoku (1452–1455)","Kōshō (1455–1457)","Chōroku (1457–1460)","Kanshō (1460–1466)","Bunshō (1466–1467)","Ōnin (1467–1469)","Bunmei (1469–1487)","Chōkyō (1487–1489)","Entoku (1489–1492)","Meiō (1492–1501)","Bunki (1501–1504)","Eishō (1504–1521)","Taiei (1521–1528)","Kyōroku (1528–1532)","Tenbun (1532–1555)","Kōji (1555–1558)","Eiroku (1558–1570)","Genki (1570–1573)","Tenshō (1573–1592)","Bunroku (1592–1596)","Keichō (1596–1615)","Genna (1615–1624)","Kan’ei (1624–1644)","Shōho (1644–1648)","Keian (1648–1652)","Jōō (1652–1655)","Meireki (1655–1658)","Manji (1658–1661)","Kanbun (1661–1673)","Enpō (1673–1681)","Tenna (1681–1684)","Jōkyō (1684–1688)","Genroku (1688–1704)","Hōei (1704–1711)","Shōtoku (1711–1716)","Kyōhō (1716–1736)","Genbun (1736–1741)","Kanpō (1741–1744)","Enkyō (1744–1748)","Kan’en (1748–1751)","Hōreki (1751–1764)","Meiwa (1764–1772)","An’ei (1772–1781)","Tenmei (1781–1789)","Kansei (1789–1801)","Kyōwa (1801–1804)","Bunka (1804–1818)","Bunsei (1818–1830)","Tenpō (1830–1844)","Kōka (1844–1848)","Kaei (1848–1854)","Ansei (1854–1860)","Man’en (1860–1861)","Bunkyū (1861–1864)","Genji (1864–1865)","Keiō (1865–1868)","Meiji","Taishō","Shōwa","Heisei"]},dayPeriods:{am:"AM",pm:"PM"}},persian:{months:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],short:["Farvardin","Ordibehesht","Khordad","Tir","Mordad","Shahrivar","Mehr","Aban","Azar","Dey","Bahman","Esfand"],long:["Farvardin","Ordibehesht","Khordad","Tir","Mordad","Shahrivar","Mehr","Aban","Azar","Dey","Bahman","Esfand"]},days:{narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sáb"],long:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},eras:{narrow:["AP"],short:["AP"],long:["AP"]},dayPeriods:{am:"AM",pm:"PM"}},roc:{months:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],short:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],long:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},days:{narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sáb"],long:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"]},eras:{narrow:["Antes de R.O.C.","R.O.C."],short:["Antes de R.O.C.","R.O.C."],long:["Antes de R.O.C.","R.O.C."]},dayPeriods:{am:"AM",pm:"PM"}}}},number:{nu:["latn"],patterns:{decimal:{positivePattern:"{number}",negativePattern:"{minusSign}{number}"},currency:{positivePattern:"{currency}{number}",negativePattern:"{minusSign}{currency}{number}"},percent:{positivePattern:"{number}{percentSign}",negativePattern:"{minusSign}{number}{percentSign}"}},symbols:{latn:{decimal:",",group:".",nan:"NaN",plusSign:"+",minusSign:"-",percentSign:"%",infinity:"∞"}},currencies:{AUD:"AU$",BRL:"R$",CAD:"CA$",CNY:"CN¥",EUR:"€",GBP:"£",HKD:"HK$",ILS:"₪",INR:"₹",JPY:"JP¥",KRW:"₩",MXN:"MX$",NZD:"NZ$",PTE:"Esc.",THB:"฿",TWD:"NT$",USD:"US$",VND:"₫",XAF:"FCFA",XCD:"EC$",XOF:"CFA",XPF:"CFPF"}}});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var React = __webpack_require__(1);
	var Article = __webpack_require__(106);
	var DocsHeader = __webpack_require__(111);
	var Footer = __webpack_require__(116);
	var Section = __webpack_require__(117);
	var Headline = __webpack_require__(118);
	var Tiles = __webpack_require__(119);
	var Tile = __webpack_require__(134);
	var Menu = __webpack_require__(97);
	var Button = __webpack_require__(96);
	var Anchor = __webpack_require__(115);
	var Link = __webpack_require__(2).Link;
	var GrommetLogo = __webpack_require__(114);

	var HomeSection = React.createClass({
	  displayName: 'HomeSection',

	  render: function render() {
	    return React.createElement(
	      Section,
	      _extends({}, this.props, {
	        appCentered: true, justify: 'center', align: 'center', full: true,
	        textCentered: true, pad: { vertical: "large" } }),
	      this.props.children
	    );
	  }
	});

	var Home = React.createClass({
	  displayName: 'Home',


	  contextTypes: {
	    routePrefix: React.PropTypes.string.isRequired
	  },

	  _onClick: function _onClick() {
	    // no-op
	  },

	  _onRequestForBlog: function _onRequestForBlog() {
	    window.location = 'http://blog.grommet.io';
	  },

	  render: function render() {
	    return React.createElement(
	      Article,
	      { className: 'home', scrollStep: true, controls: true },
	      React.createElement(
	        HomeSection,
	        { texture: 'url(img/home_intro.png)', primary: true },
	        React.createElement(DocsHeader, { float: true }),
	        React.createElement(GrommetLogo, { large: true, a11yTitle: '' }),
	        React.createElement(
	          Headline,
	          { size: 'large' },
	          'Grommet'
	        ),
	        React.createElement(
	          Headline,
	          { size: 'small' },
	          'The most advanced open source UX framework for enterprise applications.'
	        )
	      ),
	      React.createElement(
	        HomeSection,
	        { colorIndex: 'neutral-1' },
	        React.createElement(
	          Headline,
	          null,
	          'Create once and deliver everywhere.'
	        ),
	        React.createElement(
	          Headline,
	          { size: 'small' },
	          'Application experiences that look great while solving problems.'
	        ),
	        React.createElement(
	          Menu,
	          { direction: 'row', justify: 'center', full: 'horizontal', responsive: false },
	          React.createElement(
	            Link,
	            { to: this.context.routePrefix + "design" },
	            React.createElement(Button, { label: 'See more examples', onClick: this._onClick, large: true, primary: true })
	          ),
	          React.createElement(
	            Link,
	            { to: this.context.routePrefix + "develop/get-started" },
	            React.createElement(Button, { label: 'Test our demo app', onClick: this._onClick, large: true })
	          )
	        ),
	        React.createElement('p', null),
	        React.createElement('img', { src: 'img/home_scale.png', alt: 'Tablet and Phone' })
	      ),
	      React.createElement(
	        HomeSection,
	        { colorIndex: 'neutral-2', texture: 'url(img/home_features.png)' },
	        React.createElement(
	          Headline,
	          null,
	          'So little gets you sooooooo much!'
	        ),
	        React.createElement(
	          Headline,
	          { size: 'small' },
	          'We’ve tried it all in enterprise and we think we’ve got a good foundation.'
	        ),
	        React.createElement(
	          Menu,
	          { direction: 'row', justify: 'center', full: 'horizontal', responsive: false },
	          React.createElement(
	            Link,
	            { to: this.context.routePrefix + "develop/architecture" },
	            React.createElement(Button, { label: 'Our architecture', onClick: this._onClick, large: true, primary: true })
	          ),
	          React.createElement(
	            Link,
	            { to: this.context.routePrefix + "develop/get-started" },
	            React.createElement(Button, { label: 'How to use', onClick: this._onClick, large: true })
	          )
	        )
	      ),
	      React.createElement(
	        HomeSection,
	        { texture: 'url(img/home_design.png)' },
	        React.createElement(
	          Headline,
	          null,
	          'Ready for your Design Workflow.'
	        ),
	        React.createElement(
	          Headline,
	          { size: 'small' },
	          'All the resources you could possibly need! Sticker sheets, Stencils, PSDs, and more.'
	        ),
	        React.createElement(
	          Menu,
	          { direction: 'row', justify: 'center', full: 'horizontal', responsive: false },
	          React.createElement(
	            Link,
	            { to: this.context.routePrefix + "design" },
	            React.createElement(Button, { label: 'Start designing', onClick: this._onClick, large: true, primary: true })
	          ),
	          React.createElement(
	            Link,
	            { to: this.context.routePrefix + "design/resources" },
	            React.createElement(Button, { label: 'All resources', onClick: this._onClick, large: true })
	          )
	        ),
	        React.createElement(
	          'p',
	          null,
	          'or, grab your favorite sticker sheet:'
	        ),
	        React.createElement(
	          Tiles,
	          { size: 'small', fill: true },
	          React.createElement(
	            Tile,
	            { align: 'center' },
	            React.createElement('img', { src: 'img/Adobe_Illustrator.png', alt: 'Adobe Illustrator' }),
	            React.createElement(
	              'label',
	              null,
	              'Adobe Illustrator'
	            )
	          ),
	          React.createElement(
	            Tile,
	            { align: 'center' },
	            React.createElement('img', { src: 'img/Adobe_Photoshop.png', alt: 'Adobe Photoshop' }),
	            React.createElement(
	              'label',
	              null,
	              'Adobe Photoshop'
	            )
	          ),
	          React.createElement(
	            Tile,
	            { align: 'center' },
	            React.createElement('img', { src: 'img/Sketch.png', alt: 'Sketch' }),
	            React.createElement(
	              'label',
	              null,
	              'Sketch'
	            )
	          ),
	          React.createElement(
	            Tile,
	            { align: 'center' },
	            React.createElement('img', { src: 'img/Axure.png', alt: 'Axure' }),
	            React.createElement(
	              'label',
	              null,
	              'Axure'
	            )
	          ),
	          React.createElement(
	            Tile,
	            { align: 'center' },
	            React.createElement('img', { src: 'img/Balsamiq.png', alt: 'Balsamiq' }),
	            React.createElement(
	              'label',
	              null,
	              'Balsamiq'
	            )
	          )
	        )
	      ),
	      React.createElement(
	        HomeSection,
	        { colorIndex: 'neutral-3' },
	        React.createElement(
	          Headline,
	          null,
	          'Develop your next project with Grommet.'
	        ),
	        React.createElement(
	          Headline,
	          { size: 'small' },
	          'Let’s get an application on your local environment!'
	        ),
	        React.createElement(
	          Menu,
	          { direction: 'row', justify: 'center', full: 'horizontal', responsive: false },
	          React.createElement(
	            Link,
	            { to: this.context.routePrefix + "develop/get-started" },
	            React.createElement(Button, { label: 'Start project', onClick: this._onClick, large: true, primary: true })
	          )
	        ),
	        React.createElement(
	          'p',
	          null,
	          'or, just copy and paste into terminal:'
	        ),
	        React.createElement(
	          'div',
	          { className: 'console' },
	          React.createElement(
	            'h2',
	            null,
	            'Hello Grommet!'
	          ),
	          React.createElement(
	            'p',
	            null,
	            'The easiest way to learn a new framework is by writing a simple application on top of it. Grommet depends on ',
	            React.createElement(
	              'a',
	              { href: 'https://nodejs.org/',
	                target: '_blank' },
	              'Node'
	            ),
	            ' and ',
	            React.createElement(
	              'a',
	              { href: 'http://gulpjs.com/',
	                target: '_blank' },
	              'Gulp'
	            ),
	            '.'
	          ),
	          React.createElement(
	            'pre',
	            null,
	            React.createElement(
	              'code',
	              null,
	              "$ npm install -g grommet\n$ grommet init sample-app"
	            )
	          )
	        )
	      ),
	      React.createElement(
	        HomeSection,
	        null,
	        React.createElement(
	          Headline,
	          null,
	          'Built with the best stuff.'
	        ),
	        React.createElement(
	          Headline,
	          { size: 'small' },
	          'The tools you know and love, all packaged together in one easy-to-use solution.'
	        ),
	        React.createElement(
	          Menu,
	          { direction: 'row', justify: 'center', full: 'horizontal', responsive: false },
	          React.createElement(
	            'a',
	            { href: 'https://github.com/grommet/grommet' },
	            React.createElement(Button, { label: 'View project on Github', onClick: this._onClick, large: true, primary: true })
	          )
	        ),
	        React.createElement(
	          'p',
	          null,
	          'or, check out their sites, they have some cool stuff too...'
	        ),
	        React.createElement(
	          Tiles,
	          { size: 'small', fill: true, flush: false },
	          React.createElement(
	            Tile,
	            null,
	            React.createElement(
	              'a',
	              { href: 'http://www.w3.org/TR/html5/' },
	              React.createElement('img', { src: 'img/HTML5.png', alt: 'HTML5' })
	            )
	          ),
	          React.createElement(
	            Tile,
	            null,
	            React.createElement(
	              'a',
	              { href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3' },
	              React.createElement('img', { src: 'img/CSS3.png', alt: 'CSS3' })
	            )
	          ),
	          React.createElement(
	            Tile,
	            null,
	            React.createElement(
	              'a',
	              { href: 'https://nodejs.org' },
	              React.createElement('img', { src: 'img/NodeJS.png', alt: 'NodeJS' })
	            )
	          ),
	          React.createElement(
	            Tile,
	            null,
	            React.createElement(
	              'a',
	              { href: 'https://github.com/inuitcss' },
	              React.createElement('img', { src: 'img/InuitCSS.png', alt: 'InuitCSS' })
	            )
	          ),
	          React.createElement(
	            Tile,
	            null,
	            React.createElement(
	              'a',
	              { href: 'http://facebook.github.io/react/' },
	              React.createElement('img', { src: 'img/reactjs.png', alt: 'ReactJS' })
	            )
	          ),
	          React.createElement(
	            Tile,
	            null,
	            React.createElement(
	              'a',
	              { href: 'http://gulpjs.com' },
	              React.createElement('img', { src: 'img/gulp.png', alt: 'Gulp' })
	            )
	          ),
	          React.createElement(
	            Tile,
	            null,
	            React.createElement(
	              'a',
	              { href: 'http://webpack.github.io' },
	              React.createElement('img', { src: 'img/webpack.png', alt: 'Webpack' })
	            )
	          )
	        )
	      ),
	      React.createElement(
	        HomeSection,
	        { colorIndex: 'neutral-2' },
	        React.createElement(
	          Headline,
	          null,
	          'Let’s keep in touch!'
	        ),
	        React.createElement(
	          Headline,
	          { size: 'small' },
	          'Follow us on the Grommet blog to get the latest updates.'
	        ),
	        React.createElement(
	          Menu,
	          { direction: 'row', justify: 'center', full: 'horizontal', responsive: false },
	          React.createElement(Button, { label: 'Grommet blog', onClick: this._onRequestForBlog, large: true, primary: true })
	        ),
	        React.createElement(
	          'p',
	          null,
	          'We also pop our heads out at these place as well...'
	        ),
	        React.createElement(
	          Tiles,
	          { fill: true },
	          React.createElement(
	            Tile,
	            null,
	            React.createElement(
	              'a',
	              { href: 'http://slackin.grommet.io' },
	              React.createElement('img', { src: 'img/slack.png', alt: 'Slack' }),
	              React.createElement(
	                'div',
	                null,
	                'grommet'
	              )
	            )
	          ),
	          React.createElement(
	            Tile,
	            null,
	            React.createElement(
	              'a',
	              { href: 'https://twitter.com/grommetux' },
	              React.createElement('img', { src: 'img/twitter.png', alt: 'Twitter' }),
	              React.createElement(
	                'div',
	                null,
	                '@grommetux'
	              )
	            )
	          ),
	          React.createElement(
	            Tile,
	            null,
	            React.createElement(
	              'a',
	              { href: 'https://www.facebook.com/grommetux' },
	              React.createElement('img', { src: 'img/facebook.png', alt: 'Facebook' }),
	              React.createElement(
	                'div',
	                null,
	                'grommetux'
	              )
	            )
	          ),
	          React.createElement(
	            Tile,
	            null,
	            React.createElement(
	              'a',
	              { href: 'https://vimeo.com/grommetux' },
	              React.createElement('img', { src: 'img/vimeo.png', alt: 'Vimeo' }),
	              React.createElement(
	                'div',
	                null,
	                'grommetux'
	              )
	            )
	          ),
	          React.createElement(
	            Tile,
	            null,
	            React.createElement(
	              'a',
	              { href: 'http://youtube.com' },
	              React.createElement('img', { src: 'img/youtube.png', alt: 'Youtube' }),
	              React.createElement(
	                'div',
	                null,
	                'grommetux'
	              )
	            )
	          )
	        )
	      ),
	      React.createElement(
	        Footer,
	        { className: 'docs__footer', primary: true,
	          appCentered: true, direction: 'column', align: 'center', pad: 'large',
	          colorIndex: 'grey-1' },
	        React.createElement(
	          'h3',
	          null,
	          'Build your ideas with Grommet!'
	        ),
	        React.createElement(
	          'p',
	          null,
	          'This work is licensed under the ',
	          React.createElement(
	            'a',
	            { href: 'http://creativecommons.org/licenses/by/4.0/legalcode' },
	            'Creative Commons Attribution 4.0 International License'
	          ),
	          '.'
	        ),
	        React.createElement(
	          Menu,
	          { label: 'Theme' },
	          React.createElement(
	            Anchor,
	            { href: '/docs/', className: this.props.theme === 'generic' ? 'active' : '' },
	            'Grommet'
	          ),
	          React.createElement(
	            Anchor,
	            { href: '/docs/hpe/', className: this.props.theme === 'hpe' ? 'active' : '' },
	            'HPE'
	          ),
	          React.createElement(
	            Anchor,
	            { href: '/docs/hpinc/', className: this.props.theme === 'hpinc' ? 'active' : '' },
	            'HPInc'
	          ),
	          React.createElement(
	            Anchor,
	            { href: '/docs/aruba/', className: this.props.theme === 'aruba' ? 'active' : '' },
	            'Aruba'
	          )
	        )
	      )
	    );
	  }

	});

	module.exports = Home;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(69);

	var _extends3 = _interopRequireDefault(_extends2);

	var _keys = __webpack_require__(84);

	var _keys2 = _interopRequireDefault(_keys);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(88);

	var _Box = __webpack_require__(83);

	var _Box2 = _interopRequireDefault(_Box);

	var _KeyboardAccelerators = __webpack_require__(87);

	var _KeyboardAccelerators2 = _interopRequireDefault(_KeyboardAccelerators);

	var _DOM = __webpack_require__(89);

	var _DOM2 = _interopRequireDefault(_DOM);

	var _Props = __webpack_require__(91);

	var _Props2 = _interopRequireDefault(_Props);

	var _Scroll = __webpack_require__(107);

	var _Scroll2 = _interopRequireDefault(_Scroll);

	var _Responsive = __webpack_require__(99);

	var _Responsive2 = _interopRequireDefault(_Responsive);

	var _Button = __webpack_require__(96);

	var _Button2 = _interopRequireDefault(_Button);

	var _LinkNext = __webpack_require__(108);

	var _LinkNext2 = _interopRequireDefault(_LinkNext);

	var _LinkPrevious = __webpack_require__(109);

	var _LinkPrevious2 = _interopRequireDefault(_LinkPrevious);

	var _Up = __webpack_require__(110);

	var _Up2 = _interopRequireDefault(_Up);

	var _Down = __webpack_require__(100);

	var _Down2 = _interopRequireDefault(_Down);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import CarouselControls from './CarouselControls';
	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.ARTICLE;
	var DEFAULT_PLAY_INTERVAL = 10000; // 10s

	var Article = function (_Component) {
	  (0, _inherits3.default)(Article, _Component);

	  function Article(props) {
	    (0, _classCallCheck3.default)(this, Article);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Article).call(this, props));

	    _this._onFocusChange = _this._onFocusChange.bind(_this);
	    _this._onScroll = _this._onScroll.bind(_this);
	    _this._onWheel = _this._onWheel.bind(_this);
	    _this._onTouchStart = _this._onTouchStart.bind(_this);
	    _this._onTouchMove = _this._onTouchMove.bind(_this);
	    _this._onResize = _this._onResize.bind(_this);
	    _this._onNext = _this._onNext.bind(_this);
	    _this._onPrevious = _this._onPrevious.bind(_this);
	    _this._onTogglePlay = _this._onTogglePlay.bind(_this);
	    _this._onSelect = _this._onSelect.bind(_this);
	    _this._checkControls = _this._checkControls.bind(_this);
	    _this._checkPreviousNextControls = _this._checkPreviousNextControls.bind(_this);
	    _this._onResponsive = _this._onResponsive.bind(_this);
	    _this._updateHiddenElements = _this._updateHiddenElements.bind(_this);

	    // Necessary to detect for Firefox or Edge to implement accessibility
	    // tabbing
	    var accessibilityTabbingCompatible = typeof navigator !== 'undefined' && navigator.userAgent.indexOf("Firefox") === -1 && navigator.userAgent.indexOf("Edge") === -1;

	    _this.state = {
	      selectedIndex: props.selected || 0,
	      playing: false,
	      showControls: _this.props.controls,
	      accessibilityTabbingCompatible: accessibilityTabbingCompatible
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(Article, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {

	      if (this.props.scrollStep) {
	        this._keys = { up: this._onPrevious, down: this._onNext };
	        if ('row' === this.props.direction) {
	          this._keys = {
	            left: this._onPrevious,
	            right: this._onNext
	          };

	          if (this.state.accessibilityTabbingCompatible) {
	            this._updateHiddenElements();
	          }
	        }
	        //keys.space = this._onTogglePlay;
	        _KeyboardAccelerators2.default.startListeningToKeyboard(this, this._keys);

	        document.addEventListener('wheel', this._onWheel);
	        window.addEventListener('resize', this._onResize);

	        this._scrollParent = (0, _reactDom.findDOMNode)(this.refs.component);

	        this._checkControls();

	        if ('row' === this.props.direction && this.props.scrollStep) {
	          this._responsive = _Responsive2.default.start(this._onResponsive);
	        }
	      }

	      this._onSelect(this.state.selectedIndex);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // allow updates to selected props to trigger new chapter select
	      if (typeof nextProps.selected !== 'undefined' && nextProps.selected !== null && nextProps.selected !== this.state.selectedIndex) {
	        this._onSelect(nextProps.selected);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.props.scrollStep) {
	        _KeyboardAccelerators2.default.stopListeningToKeyboard(this, this._keys);
	        document.removeEventListener('wheel', this._onWheel);
	        window.removeEventListener('resize', this._onResize);
	      }
	      if (this._responsive) {
	        this._responsive.stop();
	      }
	    }
	  }, {
	    key: '_checkPreviousNextControls',
	    value: function _checkPreviousNextControls(currentScroll, nextProp, prevProp) {
	      if (currentScroll > 0) {
	        var nextStepNode = (0, _reactDom.findDOMNode)(this.refs[this.state.selectedIndex + 1]);

	        var previousStepNode = (0, _reactDom.findDOMNode)(this.refs[this.state.selectedIndex - 1]);

	        if (nextStepNode) {
	          var nextStepPosition = nextStepNode.getBoundingClientRect()[nextProp] * (this.state.selectedIndex + 1);

	          if (currentScroll > nextStepPosition) {
	            this.setState({ selectedIndex: this.state.selectedIndex + 1 });
	          }
	        }

	        if (previousStepNode) {
	          var previousStepPosition = previousStepNode.getBoundingClientRect()[prevProp] * this.state.selectedIndex;

	          if (currentScroll < previousStepPosition) {
	            this.setState({ selectedIndex: this.state.selectedIndex - 1 });
	          }
	        }
	      }
	    }
	  }, {
	    key: '_checkControls',
	    value: function _checkControls() {
	      if (this.props.direction === 'row') {
	        var currentScroll = this.refs.component.refs.boxContainer.scrollLeft;
	        this._checkPreviousNextControls(currentScroll, 'left', 'right');
	      } else {
	        var _currentScroll = this.refs.component.refs.boxContainer.scrollTop;
	        this._checkPreviousNextControls(_currentScroll, 'top', 'bottom');
	      }
	    }
	  }, {
	    key: '_visibleIndexes',
	    value: function _visibleIndexes() {
	      var _props = this.props;
	      var children = _props.children;
	      var direction = _props.direction;

	      var result = [];
	      var childCount = _react2.default.Children.count(children);
	      var limit = 'row' === direction ? window.innerWidth : window.innerHeight;
	      for (var index = 0; index < childCount; index += 1) {
	        var childElement = (0, _reactDom.findDOMNode)(this.refs[index]);
	        var rect = childElement.getBoundingClientRect();
	        // ignore small drifts of 10 pixels on either end
	        if ('row' === direction) {
	          if (rect.right > 10 && rect.left < limit - 10) {
	            result.push(index);
	          } else if (result.length > 0) {
	            break;
	          }
	        } else {
	          if (rect.bottom > 10 && rect.top < limit - 10) {
	            result.push(index);
	          } else if (result.length > 0) {
	            break;
	          }
	        }
	      }
	      return result;
	    }
	  }, {
	    key: '_shortTimer',
	    value: function _shortTimer(name, duration) {
	      var _this2 = this;

	      if (!this[name]) {
	        this[name] = true;
	      }
	      var timerName = this[name] + 'Timer';
	      clearTimeout(this[timerName]);
	      this[timerName] = setTimeout(function () {
	        _this2[name] = false;
	      }, duration);
	    }
	  }, {
	    key: '_onWheel',
	    value: function _onWheel(event) {
	      var _this3 = this;

	      if ('row' === this.props.direction) {
	        if (this._scrollingHorizontally) {
	          // no-op
	        } else if (!this._scrollingVertically) {
	          if (Math.abs(event.deltaY * 2) > Math.abs(event.deltaX)) {
	            // user is scrolling vertically
	            this._shortTimer('_scrollingVertically', 1000);
	          }
	        }
	      } else {
	        // Give the user lots of control.
	        var delta = event.deltaY;
	        if (Math.abs(delta) > 100) {
	          // The user is expressing a resolute interest in controlling the
	          // scrolling behavior. Stop doing any of our scroll step aligning
	          // until he stops expressing such interest.
	          clearInterval(this._wheelTimer);
	          clearInterval(this._wheelLongTimer);
	          this._wheelLongTimer = setTimeout(function () {
	            _this3._wheelLongTimer = null;
	          }, 2000);
	        } else if (!this._wheelLongTimer) {
	          if (delta > 10) {
	            clearInterval(this._wheelTimer);
	            this._wheelTimer = setTimeout(this._onNext, 200);
	          } else if (delta < -10) {
	            clearInterval(this._wheelTimer);
	            this._wheelTimer = setTimeout(this._onPrevious, 200);
	          } else {
	            clearInterval(this._controlTimer);
	            this._controlTimer = setTimeout(this._checkControls, 200);
	          }
	        }
	      }
	    }
	  }, {
	    key: '_onScroll',
	    value: function _onScroll(event) {
	      var _this4 = this;

	      if ('row' === this.props.direction) {
	        var selectedIndex = this.state.selectedIndex;

	        var childElement = (0, _reactDom.findDOMNode)(this.refs[selectedIndex]);
	        var rect = childElement.getBoundingClientRect();
	        if (event.target === this._scrollParent) {
	          // scrolling Article
	          if (this._scrollingVertically) {
	            // prevent Article horizontal scrolling while scrolling vertically
	            this._scrollParent.scrollLeft += rect.left;
	          } else {
	            (function () {
	              var scrollingRight = _this4._priorScrollLeft < _this4._scrollParent.scrollLeft;
	              // once we stop scrolling, align with child boundaries
	              clearTimeout(_this4._scrollTimer);
	              _this4._scrollTimer = setTimeout(function () {
	                if (!_this4._resizing) {
	                  var indexes = _this4._visibleIndexes();
	                  if (indexes.length > 1 && scrollingRight) {
	                    _this4._onSelect(indexes[1]);
	                  } else {
	                    _this4._onSelect(indexes[0]);
	                  }
	                }
	              }, 100);
	              _this4._priorScrollLeft = _this4._scrollParent.scrollLeft;
	            })();
	          }
	        } else if (event.target.parentNode === this._scrollParent) {
	          // scrolling child
	          // Has it scrolled near the bottom?
	          if (this.state.accessibilityTabbingCompatible) {
	            // only use lastGrandChild logic if we're not using Firefox or IE.
	            // causes flashing in Firefox, but required for Safari scrolling.
	            var grandchildren = event.target.children;
	            var lastGrandChild = grandchildren[grandchildren.length - 1];
	            rect = lastGrandChild.getBoundingClientRect();
	          }
	          if (rect.bottom <= window.innerHeight + 24) {
	            // at the bottom
	            this.setState({ atBottom: true });
	          } else {
	            // not at the bottom
	            this.setState({ atBottom: false });
	          }
	        }
	      }
	    }
	  }, {
	    key: '_onTouchStart',
	    value: function _onTouchStart(event) {
	      var touched = event.changedTouches[0];
	      this._touchStartX = touched.clientX;
	      this._touchStartY = touched.clientY;
	    }
	  }, {
	    key: '_onTouchMove',
	    value: function _onTouchMove(event) {
	      if (!this.state.ignoreScroll) {
	        var touched = event.changedTouches[0];
	        var deltaX = touched.clientX - this._touchStartX;
	        var deltaY = touched.clientY - this._touchStartY;
	        // Only step if the user isn't scrolling vertically, bias vertically
	        if (Math.abs(deltaY) < Math.abs(deltaX * 2)) {
	          if (deltaX < 0) {
	            this._onNext();
	          } else {
	            this._onPrevious();
	          }
	        }
	      }
	    }
	  }, {
	    key: '_onResize',
	    value: function _onResize() {
	      var _this5 = this;

	      clearTimeout(this._resizeTimer);
	      this._resizeTimer = setTimeout(function () {
	        _this5._onSelect(_this5.state.selectedIndex);
	        _this5._shortTimer('_resizing', 1000);
	      }, 50);
	    }
	  }, {
	    key: '_onNext',
	    value: function _onNext(event, wrap) {
	      // only process if the focus is NOT in a form element
	      if (!_DOM2.default.isFormElement(document.activeElement)) {
	        var children = this.props.children;
	        var selectedIndex = this.state.selectedIndex;

	        var childCount = _react2.default.Children.count(children);
	        if (event) {
	          this._stop();
	          event.preventDefault();
	        }
	        var targetIndex = this._visibleIndexes()[0] + 1;
	        if (targetIndex !== selectedIndex) {
	          if (targetIndex < childCount) {
	            this._onSelect(Math.min(childCount - 1, targetIndex));
	          } else if (wrap) {
	            this._onSelect(1);
	          }
	        }
	      }
	    }
	  }, {
	    key: '_onPrevious',
	    value: function _onPrevious(event) {
	      // only process if the focus is NOT in a form element
	      if (!_DOM2.default.isFormElement(document.activeElement)) {
	        var selectedIndex = this.state.selectedIndex;

	        if (event) {
	          this._stop();
	          event.preventDefault();
	        }
	        var targetIndex = this._visibleIndexes()[0] - 1;
	        if (targetIndex !== selectedIndex) {
	          this._onSelect(Math.max(0, targetIndex));
	        }
	      }
	    }
	  }, {
	    key: '_start',
	    value: function _start() {
	      var _this6 = this;

	      this._playTimer = setInterval(function () {
	        _this6._onNext(null, true);
	      }, DEFAULT_PLAY_INTERVAL);
	      this.setState({ playing: true });
	    }
	  }, {
	    key: '_stop',
	    value: function _stop() {
	      clearInterval(this._playTimer);
	      this.setState({ playing: false });
	    }
	  }, {
	    key: '_onTogglePlay',
	    value: function _onTogglePlay(event) {
	      event.preventDefault();
	      if (this.state.playing) {
	        this._stop();
	      } else {
	        this._start();
	      }
	    }
	  }, {
	    key: '_onSelect',
	    value: function _onSelect(selectedIndex) {
	      var _this7 = this;

	      var childElement = (0, _reactDom.findDOMNode)(this.refs[selectedIndex]);
	      var windowHeight = window.innerHeight + 24;

	      if (childElement) {
	        var parentElement = childElement.parentNode;
	        var atBottom = Math.round(parentElement.scrollTop) >= parentElement.scrollHeight - parentElement.clientHeight;

	        if (selectedIndex !== this.state.selectedIndex) {
	          // scroll child to top
	          childElement.scrollTop = 0;
	          // ensures controls are displayed when selecting a new index and
	          // scrollbar is at bottom of article
	          this.setState({
	            selectedIndex: selectedIndex,
	            atBottom: atBottom
	          }, function () {
	            if (_this7.props.onSelect) {
	              _this7.props.onSelect(selectedIndex);
	            }

	            // Necessary to detect for Firefox or Edge to implement accessibility
	            // tabbing
	            if (_this7.props.direction === 'row' && _this7.state.accessibilityTabbingCompatible) {
	              _this7.refs.anchorStep.focus();
	              _this7._updateHiddenElements();
	            }
	          });
	        } else if (childElement.scrollHeight <= windowHeight) {
	          // on initial chapter load, ensure arrows are rendered
	          // when there are no scrollbars
	          this.setState({ atBottom: true });
	        }

	        var rect = childElement.getBoundingClientRect();
	        if ('row' === this.props.direction) {
	          if (rect.left !== 0) {
	            this._scrollingHorizontally = true;
	            _Scroll2.default.scrollBy(this._scrollParent, 'scrollLeft', rect.left, function () {
	              _this7._scrollingHorizontally = false;
	            });
	          }
	        } else {
	          if (rect.top !== 0) {
	            this._scrollingVertically = true;
	            _Scroll2.default.scrollBy(this._scrollParent, 'scrollTop', rect.top, function () {
	              _this7._scrollingVertically = false;
	            });
	          }
	        }
	      }
	    }
	  }, {
	    key: '_onFocusChange',
	    value: function _onFocusChange(e) {
	      var _this8 = this;

	      _react2.default.Children.forEach(this.props.children, function (element, index) {
	        var parent = (0, _reactDom.findDOMNode)(_this8.refs[index]);
	        if (parent && parent.contains(e.target)) {
	          _this8._onSelect(index);
	          return false;
	        }
	      });
	    }
	  }, {
	    key: '_onResponsive',
	    value: function _onResponsive(small) {
	      this.setState({ narrow: small });
	    }
	  }, {
	    key: '_toggleDisableChapter',
	    value: function _toggleDisableChapter(chapter, disabled) {
	      var elements = _DOM2.default.filterByFocusable(chapter.getElementsByTagName('*'));

	      if (elements) {
	        elements.forEach(function (element) {
	          if (disabled) {
	            element.setAttribute('disabled', 'disabled');
	          } else {
	            element.removeAttribute('disabled');
	          }

	          element.setAttribute('tabindex', disabled ? '-1' : '0');
	        });
	      }
	    }
	  }, {
	    key: '_updateHiddenElements',
	    value: function _updateHiddenElements() {
	      var component = (0, _reactDom.findDOMNode)(this.refs.component);
	      var children = component.children;
	      for (var i = 0; i < children.length; i++) {
	        var child = children[i];
	        if (child.getAttribute('aria-hidden')) {
	          this._toggleDisableChapter(child, true);
	        } else {
	          this._toggleDisableChapter(child, false);
	        }
	      }
	    }
	  }, {
	    key: '_renderControls',
	    value: function _renderControls() {
	      var CONTROL_CLASS_PREFIX = CLASS_ROOT + '__control ' + CLASS_ROOT + '__control';
	      var childCount = _react2.default.Children.count(this.props.children);
	      var controls = [
	        // Don't use CarouselControls for now
	        // <CarouselControls key="carousel"
	        //   className={CONTROL_CLASS_PREFIX + "carousel"}
	        //   count={childCount}
	        //   direction={this.props.direction}
	        //   selected={this.state.selectedIndex} onChange={this._onSelect} />
	      ];

	      var a11yTitle = this.props.a11yTitle || {};
	      if ('row' === this.props.direction) {
	        if (!this.state.narrow || this.state.atBottom) {
	          if (this.state.selectedIndex > 0) {
	            controls.push(_react2.default.createElement(_Button2.default, { key: 'previous', ref: 'previous',
	              plain: true, a11yTitle: a11yTitle.previous,
	              className: CONTROL_CLASS_PREFIX + '-left',
	              onClick: this._onPrevious, icon: _react2.default.createElement(_LinkPrevious2.default, {
	                a11yTitle: 'article-previous-title',
	                a11yTitleId: 'article-previous-title-id',
	                size: 'large' }) }));
	          }
	          if (this.state.selectedIndex < childCount - 1) {
	            controls.push(_react2.default.createElement(_Button2.default, { key: 'next', ref: 'next',
	              plain: true, a11yTitle: a11yTitle.next,
	              className: CONTROL_CLASS_PREFIX + '-right',
	              onClick: this._onNext, icon: _react2.default.createElement(_LinkNext2.default, { size: 'large',
	                a11yTitle: 'article-next-title',
	                a11yTitleId: 'article-next-title-id' }) }));
	          }
	        }
	      } else {
	        if (this.state.selectedIndex > 0) {
	          controls.push(_react2.default.createElement(
	            _Button2.default,
	            { key: 'previous', ref: 'previous',
	              plain: true, a11yTitle: a11yTitle.previous,
	              className: CONTROL_CLASS_PREFIX + '-up',
	              onClick: this._onPrevious },
	            _react2.default.createElement(_Up2.default, null)
	          ));
	        }
	        if (this.state.selectedIndex < childCount - 1) {
	          controls.push(_react2.default.createElement(
	            _Button2.default,
	            { key: 'next', ref: 'next', plain: true, a11yTitle: a11yTitle.next,
	              className: CONTROL_CLASS_PREFIX + '-down',
	              onClick: this._onNext },
	            _react2.default.createElement(_Down2.default, { a11yTitle: 'article-down',
	              a11yTitleId: 'article-down-id' })
	          ));
	        }
	      }

	      return controls;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this9 = this;

	      var classes = [CLASS_ROOT];
	      var boxProps = _Props2.default.pick(this.props, (0, _keys2.default)(_Box2.default.propTypes));
	      var restProps = _Props2.default.omit(this.props, (0, _keys2.default)(Article.propTypes));
	      if (this.props.scrollStep) {
	        classes.push(CLASS_ROOT + '--scroll-step');
	      }
	      if (this.props.className) {
	        classes.push(this.props.className);
	      }

	      var controls = void 0;
	      if (this.props.controls) {
	        controls = this._renderControls();
	      }

	      var anchorStepNode = void 0;
	      if (this.state.accessibilityTabbingCompatible) {
	        anchorStepNode = _react2.default.createElement('a', { tabIndex: '-1', 'aria-hidden': 'true', ref: 'anchorStep' });
	      }

	      var children = this.props.children;
	      if (this.props.scrollStep || this.props.controls) {
	        children = _react.Children.map(this.props.children, function (element, index) {
	          if (element) {
	            var elementClone = _react2.default.cloneElement(element, {
	              ref: index
	            });

	            var elementNode = elementClone;

	            var ariaHidden = void 0;
	            if (_this9.state.selectedIndex !== index && _this9.state.accessibilityTabbingCompatible) {
	              ariaHidden = 'true';
	            }

	            if (_this9.props.controls) {
	              elementNode = _react2.default.createElement(
	                'div',
	                { 'aria-hidden': ariaHidden },
	                elementClone
	              );
	            }

	            return elementNode;
	          }

	          return undefined;
	        }, this);
	      }

	      delete boxProps.a11yTitle;

	      return _react2.default.createElement(
	        _Box2.default,
	        (0, _extends3.default)({}, restProps, boxProps, { ref: 'component', tag: 'article',
	          className: classes.join(' '), onFocus: this._onFocusChange,
	          onScroll: this._onScroll, onTouchStart: this._onTouchStart,
	          onTouchMove: this._onTouchMove, primary: this.props.primary }),
	        anchorStepNode,
	        children,
	        controls
	      );
	    }
	  }]);
	  return Article;
	}(_react.Component);

	Article.displayName = 'Article';
	exports.default = Article;


	Article.propTypes = (0, _extends3.default)({
	  controls: _react.PropTypes.bool,
	  primary: _react.PropTypes.bool,
	  scrollStep: _react.PropTypes.bool
	}, _Box2.default.propTypes, {
	  a11yTitle: _react.PropTypes.shape({
	    next: _react.PropTypes.string,
	    previous: _react.PropTypes.string
	  }),
	  onSelect: _react.PropTypes.func,
	  selected: _react.PropTypes.number
	});

	Article.defaultProps = {
	  pad: 'none',
	  direction: 'column'
	};
	module.exports = exports['default'];

/***/ },
/* 107 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

	/*
	 * Scroll provides smooth scrolling.
	 */

	var SCROLL_STEPS = 25;

	function easeInOutQuad(t) {
	  return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
	}

	exports.default = {

	  // component: component to scroll
	  // property: 'scrollTop' | 'scrollLeft'
	  // delta: amount to scroll
	  // doneHandler: optional function called when the scroll is done

	  scrollBy: function scrollBy(component, property, delta, doneHandler) {
	    var _this = this;

	    clearInterval(this._scrollToTimer);
	    var start = component[property];
	    var end = start + delta;
	    var step = 1;
	    this._scrollToTimer = setInterval(function () {
	      var current = component[property];
	      var next = void 0;
	      var easing = easeInOutQuad(step / SCROLL_STEPS);
	      if (end > start) {
	        next = Math.min(end, Math.max(current, Math.round(start + (end - start) * easing)));
	      } else {
	        next = Math.max(end, Math.min(current, Math.round(start - (start - end) * easing)));
	      }
	      component[property] = next;
	      step += 1;
	      if (step > SCROLL_STEPS) {
	        // we're done, but the browser/OS might still be easing from a
	        // mouse wheel interaction. So, set it one more time after a bit.
	        clearInterval(_this._scrollToTimer);
	        _this._scrollToTimer = setTimeout(function () {
	          component[property] = next;
	          if (doneHandler) {
	            doneHandler();
	          }
	        }, 200);
	      }
	    }, 8);
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _FormattedMessage = __webpack_require__(81);

	var _FormattedMessage2 = _interopRequireDefault(_FormattedMessage);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

	var Icon = function (_Component) {
	  (0, _inherits3.default)(Icon, _Component);

	  function Icon() {
	    (0, _classCallCheck3.default)(this, Icon);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var _props = this.props;
	      var a11yTitleId = _props.a11yTitleId;
	      var className = _props.className;
	      var colorIndex = _props.colorIndex;
	      var _props2 = this.props;
	      var a11yTitle = _props2.a11yTitle;
	      var size = _props2.size;


	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-link-next', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

	      a11yTitle = a11yTitle || _react2.default.createElement(_FormattedMessage2.default, { id: 'link-next', defaultMessage: 'link-next' });

	      return _react2.default.createElement(
	        'svg',
	        { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-labelledby': a11yTitleId },
	        _react2.default.createElement(
	          'title',
	          { id: a11yTitleId },
	          a11yTitle
	        ),
	        _react2.default.createElement(
	          'g',
	          null,
	          _react2.default.createElement('rect', { x: '0', y: '0', fill: 'none', width: '24', height: '24' }),
	          _react2.default.createElement('path', { fill: 'none', stroke: '#000000', strokeWidth: '2', strokeMiterlimit: '10', d: 'M13,3.9448l8,8l-8,8 M2,11.9448h19' })
	        )
	      );
	    }
	  }]);
	  return Icon;
	}(_react.Component);

	Icon.displayName = 'Icon';
	exports.default = Icon;
	;

	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  a11yTitleId: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge'])
	};

	Icon.defaultProps = {
	  a11yTitleId: 'link-next-title'
	};

	Icon.icon = true;

	Icon.displayName = 'LinkNext';
	module.exports = exports['default'];

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _FormattedMessage = __webpack_require__(81);

	var _FormattedMessage2 = _interopRequireDefault(_FormattedMessage);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

	var Icon = function (_Component) {
	  (0, _inherits3.default)(Icon, _Component);

	  function Icon() {
	    (0, _classCallCheck3.default)(this, Icon);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var _props = this.props;
	      var a11yTitleId = _props.a11yTitleId;
	      var className = _props.className;
	      var colorIndex = _props.colorIndex;
	      var _props2 = this.props;
	      var a11yTitle = _props2.a11yTitle;
	      var size = _props2.size;


	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-link-previous', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

	      a11yTitle = a11yTitle || _react2.default.createElement(_FormattedMessage2.default, { id: 'link-previous', defaultMessage: 'link-previous' });

	      return _react2.default.createElement(
	        'svg',
	        { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-labelledby': a11yTitleId },
	        _react2.default.createElement(
	          'title',
	          { id: a11yTitleId },
	          a11yTitle
	        ),
	        _react2.default.createElement(
	          'g',
	          null,
	          _react2.default.createElement('rect', { y: '0', fill: 'none', width: '24', height: '24' }),
	          _react2.default.createElement('path', { fill: 'none', stroke: '#000000', strokeWidth: '2', strokeMiterlimit: '10', d: 'M11.1397,20l-8-8l8-8 M3.1397,12h19' })
	        )
	      );
	    }
	  }]);
	  return Icon;
	}(_react.Component);

	Icon.displayName = 'Icon';
	exports.default = Icon;
	;

	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  a11yTitleId: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge'])
	};

	Icon.defaultProps = {
	  a11yTitleId: 'link-previous-title'
	};

	Icon.icon = true;

	Icon.displayName = 'LinkPrevious';
	module.exports = exports['default'];

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _FormattedMessage = __webpack_require__(81);

	var _FormattedMessage2 = _interopRequireDefault(_FormattedMessage);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

	var Icon = function (_Component) {
	  (0, _inherits3.default)(Icon, _Component);

	  function Icon() {
	    (0, _classCallCheck3.default)(this, Icon);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var _props = this.props;
	      var a11yTitleId = _props.a11yTitleId;
	      var className = _props.className;
	      var colorIndex = _props.colorIndex;
	      var _props2 = this.props;
	      var a11yTitle = _props2.a11yTitle;
	      var size = _props2.size;


	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-up', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

	      a11yTitle = a11yTitle || _react2.default.createElement(_FormattedMessage2.default, { id: 'up', defaultMessage: 'up' });

	      return _react2.default.createElement(
	        'svg',
	        { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-labelledby': a11yTitleId },
	        _react2.default.createElement(
	          'title',
	          { id: a11yTitleId },
	          a11yTitle
	        ),
	        _react2.default.createElement(
	          'g',
	          null,
	          _react2.default.createElement('rect', { y: '0', fill: 'none', width: '24', height: '24' }),
	          _react2.default.createElement('polyline', { fill: 'none', stroke: '#000000', strokeWidth: '2', strokeMiterlimit: '10', points: '23,14.5 12,3.5 1,14.5 \t' })
	        )
	      );
	    }
	  }]);
	  return Icon;
	}(_react.Component);

	Icon.displayName = 'Icon';
	exports.default = Icon;
	;

	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  a11yTitleId: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge'])
	};

	Icon.defaultProps = {
	  a11yTitleId: 'up-title'
	};

	Icon.icon = true;

	Icon.displayName = 'Up';
	module.exports = exports['default'];

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var React = __webpack_require__(1);
	var Header = __webpack_require__(112);
	var Title = __webpack_require__(113);
	var Box = __webpack_require__(83);
	var GrommetLogo = __webpack_require__(114);
	var Menu = __webpack_require__(97);
	var Anchor = __webpack_require__(115);
	var Link = __webpack_require__(2).Link;

	var DocsHeader = React.createClass({
	  displayName: 'DocsHeader',


	  propTypes: {
	    float: React.PropTypes.bool
	  },

	  contextTypes: {
	    routePrefix: React.PropTypes.string.isRequired
	  },

	  render: function render() {
	    return React.createElement(
	      Header,
	      { fixed: false, float: this.props.float,
	        appCentered: true, justify: 'between' },
	      React.createElement(
	        Title,
	        { responsive: false },
	        React.createElement(
	          Link,
	          { to: this.context.routePrefix },
	          React.createElement(
	            Box,
	            { align: 'center', direction: 'row' },
	            React.createElement(GrommetLogo, { a11yTitle: '' })
	          )
	        )
	      ),
	      React.createElement(
	        Menu,
	        { direction: 'row', responsive: true, dropAlign: { right: 'right' } },
	        React.createElement(
	          Link,
	          { id: 'design-link', to: this.context.routePrefix + 'design' },
	          React.createElement(
	            Anchor,
	            { tag: 'span' },
	            'Design'
	          )
	        ),
	        React.createElement(
	          Link,
	          { id: 'develop-link', to: this.context.routePrefix + 'develop' },
	          React.createElement(
	            Anchor,
	            { tag: 'span' },
	            'Develop'
	          )
	        ),
	        React.createElement(
	          Anchor,
	          { href: 'http://blog.grommet.io', target: '_blank' },
	          'Blog'
	        )
	      )
	    );
	  }
	});

	module.exports = DocsHeader;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(69);

	var _extends3 = _interopRequireDefault(_extends2);

	var _keys = __webpack_require__(84);

	var _keys2 = _interopRequireDefault(_keys);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(88);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Props = __webpack_require__(91);

	var _Props2 = _interopRequireDefault(_Props);

	var _Box = __webpack_require__(83);

	var _Box2 = _interopRequireDefault(_Box);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASS_ROOT = _CSSClassnames2.default.HEADER; // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var Header = function (_Component) {
	  (0, _inherits3.default)(Header, _Component);

	  function Header() {
	    (0, _classCallCheck3.default)(this, Header);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Header).call(this));

	    _this._onResize = _this._onResize.bind(_this);
	    return _this;
	  }

	  (0, _createClass3.default)(Header, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.fixed) {
	        this._alignMirror();
	        window.addEventListener('resize', this._onResize);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.props.fixed) {
	        this._alignMirror();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.props.fixed) {
	        window.removeEventListener('resize', this._onResize);
	      }
	    }
	  }, {
	    key: '_onResize',
	    value: function _onResize() {
	      this._alignMirror();
	    }
	  }, {
	    key: '_alignMirror',
	    value: function _alignMirror() {
	      var contentElement = _reactDom2.default.findDOMNode(this.refs.content);
	      var mirrorElement = this.refs.mirror;

	      // constrain fixed content to the width of the mirror
	      var mirrorRect = mirrorElement.getBoundingClientRect();
	      contentElement.style.width = Math.floor(mirrorRect.width) + 'px';

	      // align the mirror height with the content's height
	      var contentRect = contentElement.getBoundingClientRect();
	      mirrorElement.style.height = Math.floor(contentRect.height) + 'px';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = [CLASS_ROOT];
	      var containerClasses = [CLASS_ROOT + '__container'];
	      var wrapperClasses = [CLASS_ROOT + '__wrapper'];
	      var other = _Props2.default.pick(this.props, (0, _keys2.default)(_Box2.default.propTypes));
	      if (this.props.fixed) {
	        containerClasses.push(CLASS_ROOT + '__container--fixed');

	        // add default color index if none is provided
	        if (!this.props.colorIndex) {
	          containerClasses.push(CLASS_ROOT + '__container--fill');
	        }
	      }
	      if (this.props.float) {
	        classes.push(CLASS_ROOT + '--float');
	        containerClasses.push(CLASS_ROOT + '__container--float');
	      }
	      if (this.props.size) {
	        classes.push(CLASS_ROOT + '--' + this.props.size);
	        wrapperClasses.push(CLASS_ROOT + '__wrapper--' + this.props.size);
	        // don't transfer size to Box since it means something different
	        delete other.size;
	      }
	      if (this.props.splash) {
	        classes.push(CLASS_ROOT + '--splash');
	      }
	      if (this.props.strong) {
	        classes.push(CLASS_ROOT + '--strong');
	      }
	      if (this.props.className) {
	        classes.push(this.props.className);
	      }

	      if (this.props.fixed) {
	        return _react2.default.createElement(
	          'div',
	          { className: containerClasses.join(' ') },
	          _react2.default.createElement('div', { ref: 'mirror', className: CLASS_ROOT + '__mirror' }),
	          _react2.default.createElement(
	            'div',
	            { className: wrapperClasses.join(' ') },
	            _react2.default.createElement(
	              _Box2.default,
	              (0, _extends3.default)({ ref: 'content', tag: this.props.header }, other, {
	                className: classes.join(' ') }),
	              this.props.children
	            )
	          )
	        );
	      } else {
	        return _react2.default.createElement(
	          _Box2.default,
	          (0, _extends3.default)({ tag: this.props.header }, other, { className: classes.join(' '),
	            containerClassName: containerClasses.join(' ') }),
	          this.props.children
	        );
	      }
	    }
	  }]);
	  return Header;
	}(_react.Component);

	Header.displayName = 'Header';
	exports.default = Header;


	Header.propTypes = (0, _extends3.default)({
	  fixed: _react.PropTypes.bool,
	  float: _react.PropTypes.bool,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
	  splash: _react.PropTypes.bool,
	  strong: _react.PropTypes.bool,
	  tag: _react.PropTypes.string
	}, _Box2.default.propTypes);

	Header.defaultProps = {
	  pad: { horizontal: 'none', vertical: 'none', between: 'small' },
	  direction: 'row',
	  align: 'center',
	  responsive: false,
	  tag: 'header'
	};
	module.exports = exports['default'];

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Box = __webpack_require__(83);

	var _Box2 = _interopRequireDefault(_Box);

	var _Intl = __webpack_require__(90);

	var _Intl2 = _interopRequireDefault(_Intl);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.TITLE;

	var Title = function (_Component) {
	  (0, _inherits3.default)(Title, _Component);

	  function Title() {
	    (0, _classCallCheck3.default)(this, Title);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Title).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Title, [{
	    key: 'render',
	    value: function render() {
	      var classes = [CLASS_ROOT];
	      if (this.props.responsive) {
	        classes.push(CLASS_ROOT + "--responsive");
	      }
	      if (this.props.onClick) {
	        classes.push(CLASS_ROOT + "--interactive");
	      }
	      if (this.props.className) {
	        classes.push(this.props.className);
	      }

	      var a11yTitle = this.props.a11yTitle || _Intl2.default.getMessage(this.context.intl, 'Title');

	      var content = void 0;
	      if (typeof this.props.children === 'string') {
	        content = _react2.default.createElement(
	          'span',
	          null,
	          this.props.children
	        );
	      } else if (Array.isArray(this.props.children)) {
	        content = this.props.children.map(function (child, index) {
	          if (child && typeof child === 'string') {
	            return _react2.default.createElement(
	              'span',
	              { key: 'title_' + index },
	              child
	            );
	          }
	          return child;
	        });
	      } else {
	        content = this.props.children;
	      }

	      return _react2.default.createElement(
	        _Box2.default,
	        { align: 'center', direction: 'row', responsive: false,
	          className: classes.join(' '), a11yTitle: a11yTitle,
	          onClick: this.props.onClick },
	        content
	      );
	    }
	  }]);
	  return Title;
	}(_react.Component);

	Title.displayName = 'Title';
	exports.default = Title;


	Title.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  onClick: _react.PropTypes.func,
	  responsive: _react.PropTypes.bool
	};

	Title.contextTypes = {
	  intl: _react.PropTypes.object
	};

	Title.defaultProps = {
	  responsive: true
	};
	module.exports = exports['default'];

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _FormattedMessage = __webpack_require__(81);

	var _FormattedMessage2 = _interopRequireDefault(_FormattedMessage);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASS_ROOT = _CSSClassnames2.default.LOGO_ICON; // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

	var Grommet = function (_Component) {
	  (0, _inherits3.default)(Grommet, _Component);

	  function Grommet() {
	    (0, _classCallCheck3.default)(this, Grommet);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Grommet).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Grommet, [{
	    key: 'render',
	    value: function render() {
	      var classes = [CLASS_ROOT];
	      if (this.props.small) {
	        classes.push(CLASS_ROOT + '--small');
	      } else if (this.props.large) {
	        classes.push(CLASS_ROOT + '--large');
	      } else if (this.props.size) {
	        classes.push(CLASS_ROOT + '--' + this.props.size);
	      }
	      if (this.props.className) {
	        classes.push(this.props.className);
	      }
	      var title = void 0;
	      var a11yTitleId = this.props.a11yTitleId;
	      if (this.props.a11yTitle) {
	        title = _react2.default.createElement(
	          'title',
	          { id: this.props.a11yTitleId },
	          _react2.default.createElement(_FormattedMessage2.default, { id: this.props.a11yTitle,
	            defaultMessage: this.props.a11yTitle })
	        );
	      } else {
	        a11yTitleId = undefined;
	      }
	      return _react2.default.createElement(
	        'svg',
	        { className: classes.join(' '), viewBox: '0 0 182 182',
	          width: '182', height: '182',
	          version: '1.1', role: 'img', 'aria-labelledby': a11yTitleId },
	        title,
	        _react2.default.createElement('path', { role: 'presentation',
	          d: 'M 91,91 m 0,-82 a 82,82 0 1,1 0,164 a 82,82 0 1,1 0,-164',
	          strokeWidth: '18', stroke: '#865CD6', fill: 'none' })
	      );
	    }
	  }]);
	  return Grommet;
	}(_react.Component);

	Grommet.displayName = 'Grommet';
	exports.default = Grommet;


	Grommet.defaultProps = {
	  a11yTitle: 'Grommet',
	  a11yTitleId: 'grommet-logo-title'
	};

	Grommet.propTypes = {
	  a11yTitle: _react2.default.PropTypes.string,
	  a11yTitleId: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react2.default.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge'])
	};
	module.exports = exports['default'];

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _LinkNext = __webpack_require__(108);

	var _LinkNext2 = _interopRequireDefault(_LinkNext);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.ANCHOR;

	var Anchor = function (_Component) {
	  (0, _inherits3.default)(Anchor, _Component);

	  function Anchor() {
	    (0, _classCallCheck3.default)(this, Anchor);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Anchor).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Anchor, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var icon = void 0;
	      if (this.props.icon) {
	        icon = this.props.icon;
	      } else if (this.props.primary) {
	        icon = _react2.default.createElement(_LinkNext2.default, { a11yTitle: this.props.id + '-icon' || 'primary icon',
	          a11yTitleId: this.props.id + '-icon' || 'anchor-next-title-id' });
	      }

	      if (icon && !this.props.primary && !this.props.label) {
	        icon = _react2.default.createElement(
	          'span',
	          { className: CLASS_ROOT + '__icon' },
	          icon
	        );
	      }

	      var hasIcon = icon !== undefined;
	      var children = _react.Children.map(this.props.children, function (child) {
	        if (child && child.type && child.type.icon) {
	          hasIcon = true;
	          child = _react2.default.createElement(
	            'span',
	            { className: CLASS_ROOT + '__icon' },
	            child
	          );
	        }
	        return child;
	      });

	      var classes = (0, _classnames3.default)(CLASS_ROOT, this.props.className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--animate-icon', hasIcon && this.props.animateIcon !== false), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--disabled', this.props.disabled), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--icon', icon || hasIcon), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--icon-label', hasIcon && this.props.label), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--primary', this.props.primary), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--reverse', this.props.reverse), _classnames));

	      if (!children) {
	        children = this.props.label;
	      }

	      var first = this.props.reverse ? children : icon;
	      var second = this.props.reverse ? icon : children;

	      var Component = this.props.tag;
	      return _react2.default.createElement(
	        Component,
	        { id: this.props.id, className: classes,
	          href: this.props.href,
	          target: this.props.target,
	          onClick: this.props.onClick,
	          'aria-label': this.props.a11yTitle },
	        first,
	        second
	      );
	    }
	  }]);
	  return Anchor;
	}(_react.Component);

	Anchor.displayName = 'Anchor';
	exports.default = Anchor;
	;

	Anchor.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  animateIcon: _react.PropTypes.bool,
	  disabled: _react.PropTypes.bool,
	  href: _react.PropTypes.string,
	  icon: _react.PropTypes.element,
	  id: _react.PropTypes.string,
	  label: _react.PropTypes.node,
	  onClick: _react.PropTypes.func,
	  primary: _react.PropTypes.bool,
	  tag: _react.PropTypes.string,
	  target: _react.PropTypes.string,
	  reverse: _react.PropTypes.bool
	};

	Anchor.defaultProps = {
	  tag: 'a'
	};
	module.exports = exports['default'];

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(69);

	var _extends3 = _interopRequireDefault(_extends2);

	var _keys = __webpack_require__(84);

	var _keys2 = _interopRequireDefault(_keys);

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(88);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames4 = __webpack_require__(67);

	var _classnames5 = _interopRequireDefault(_classnames4);

	var _Box = __webpack_require__(83);

	var _Box2 = _interopRequireDefault(_Box);

	var _SkipLinkAnchor = __webpack_require__(92);

	var _SkipLinkAnchor2 = _interopRequireDefault(_SkipLinkAnchor);

	var _Props = __webpack_require__(91);

	var _Props2 = _interopRequireDefault(_Props);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASS_ROOT = _CSSClassnames2.default.FOOTER; // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var Footer = function (_Component) {
	  (0, _inherits3.default)(Footer, _Component);

	  function Footer() {
	    (0, _classCallCheck3.default)(this, Footer);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Footer).call(this));

	    _this._alignMirror = _this._alignMirror.bind(_this);
	    _this._onResize = _this._onResize.bind(_this);
	    return _this;
	  }

	  (0, _createClass3.default)(Footer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.fixed) {
	        this._alignMirror();
	        window.addEventListener('resize', this._onResize);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.props.fixed) {
	        this._alignMirror();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.props.fixed) {
	        window.removeEventListener('resize', this._onResize);
	      }
	    }
	  }, {
	    key: '_onResize',
	    value: function _onResize() {
	      this._alignMirror();
	    }
	  }, {
	    key: '_alignMirror',
	    value: function _alignMirror() {
	      var contentElement = _reactDom2.default.findDOMNode(this.refs.content);
	      var mirrorElement = this.refs.mirror;

	      // constrain fixed content to the width of the mirror
	      var mirrorRect = mirrorElement.getBoundingClientRect();
	      contentElement.style.width = Math.floor(mirrorRect.width) + 'px';

	      // align the mirror height with the content's height
	      var contentRect = contentElement.getBoundingClientRect();
	      mirrorElement.style.height = Math.floor(contentRect.height) + 'px';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classnames, _classnames2;

	      var classes = (0, _classnames5.default)(CLASS_ROOT, this.props.className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + this.props.size, this.props.size), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--float', this.props.float), _classnames));

	      var containerClasses = (0, _classnames5.default)(CLASS_ROOT + '__container', (_classnames2 = {}, (0, _defineProperty3.default)(_classnames2, CLASS_ROOT + '__container--float', this.props.float), (0, _defineProperty3.default)(_classnames2, CLASS_ROOT + '__container--fixed', this.props.fixed), (0, _defineProperty3.default)(_classnames2, CLASS_ROOT + '__container--fill',
	      // add default color index if none is provided
	      this.props.fixed && !this.props.colorIndex), _classnames2));

	      var wrapperClasses = (0, _classnames5.default)(CLASS_ROOT + '__wrapper', (0, _defineProperty3.default)({}, CLASS_ROOT + '__wrapper--' + this.props.size, this.props.size));

	      var footerSkipLink = void 0;
	      if (this.props.primary) {
	        footerSkipLink = _react2.default.createElement(_SkipLinkAnchor2.default, { label: 'Footer' });
	      }

	      var boxProps = _Props2.default.pick(this.props, (0, _keys2.default)(_Box2.default.propTypes));
	      // don't transfer size to Box since it means something different
	      delete boxProps.size;

	      if (this.props.fixed) {
	        return _react2.default.createElement(
	          'div',
	          { className: containerClasses },
	          _react2.default.createElement('div', { ref: 'mirror', className: CLASS_ROOT + '__mirror' }),
	          _react2.default.createElement(
	            'div',
	            { className: wrapperClasses },
	            _react2.default.createElement(
	              _Box2.default,
	              (0, _extends3.default)({ ref: 'content' }, boxProps, { tag: 'footer', className: classes,
	                primary: false }),
	              footerSkipLink,
	              this.props.children
	            )
	          )
	        );
	      } else {
	        return _react2.default.createElement(
	          _Box2.default,
	          (0, _extends3.default)({}, boxProps, { tag: 'footer', className: classes,
	            containerClassName: containerClasses,
	            primary: false }),
	          footerSkipLink,
	          this.props.children
	        );
	      }
	    }
	  }]);
	  return Footer;
	}(_react.Component);

	Footer.displayName = 'Footer';
	exports.default = Footer;
	;

	Footer.propTypes = (0, _extends3.default)({
	  fixed: _react.PropTypes.bool,
	  float: _react.PropTypes.bool,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
	  primary: _react.PropTypes.bool
	}, _Box2.default.propTypes);

	Footer.defaultProps = {
	  direction: 'row',
	  responsive: false
	};
	module.exports = exports['default'];

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(69);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(67);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Box = __webpack_require__(83);

	var _Box2 = _interopRequireDefault(_Box);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.SECTION;

	var Section = function (_Component) {
	  (0, _inherits3.default)(Section, _Component);

	  function Section() {
	    (0, _classCallCheck3.default)(this, Section);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Section).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Section, [{
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2.default)(CLASS_ROOT, this.props.className);

	      var boxProps = (0, _extends3.default)({}, this.props);
	      delete boxProps.className;
	      delete boxProps.children;

	      return _react2.default.createElement(
	        _Box2.default,
	        (0, _extends3.default)({}, boxProps, { tag: 'section', className: classes }),
	        this.props.children
	      );
	    }
	  }]);
	  return Section;
	}(_react.Component);

	Section.displayName = 'Section';
	exports.default = Section;
	;

	Section.propTypes = (0, _extends3.default)({
	  primary: _react.PropTypes.bool
	}, _Box2.default.propTypes);

	Section.defaultProps = {
	  pad: { vertical: 'medium' }
	};
	module.exports = exports['default'];

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASS_ROOT = _CSSClassnames2.default.HEADLINE; // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var Headline = function (_Component) {
	  (0, _inherits3.default)(Headline, _Component);

	  function Headline() {
	    (0, _classCallCheck3.default)(this, Headline);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Headline).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Headline, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var classes = (0, _classnames3.default)(CLASS_ROOT, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + this.props.size, this.props.size), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--align-' + this.props.align, this.props.align), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--margin-' + this.props.margin, this.props.margin), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--strong', this.props.strong), _classnames), this.props.className);

	      return _react2.default.createElement(
	        'div',
	        { className: classes },
	        this.props.children
	      );
	    }
	  }]);
	  return Headline;
	}(_react.Component);

	Headline.displayName = 'Headline';
	exports.default = Headline;
	;

	Headline.propTypes = {
	  align: _react.PropTypes.oneOf(['start', 'center', 'end']),
	  margin: _react.PropTypes.oneOf(['none', 'small', 'medium', 'large']),
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
	  strong: _react.PropTypes.bool
	};
	module.exports = exports['default'];

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(69);

	var _extends3 = _interopRequireDefault(_extends2);

	var _keys = __webpack_require__(84);

	var _keys2 = _interopRequireDefault(_keys);

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _from = __webpack_require__(120);

	var _from2 = _interopRequireDefault(_from);

	var _stringify = __webpack_require__(129);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(88);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _Props = __webpack_require__(91);

	var _Props2 = _interopRequireDefault(_Props);

	var _Box = __webpack_require__(83);

	var _Box2 = _interopRequireDefault(_Box);

	var _Button = __webpack_require__(96);

	var _Button2 = _interopRequireDefault(_Button);

	var _Spinning = __webpack_require__(131);

	var _Spinning2 = _interopRequireDefault(_Spinning);

	var _Scroll = __webpack_require__(107);

	var _Scroll2 = _interopRequireDefault(_Scroll);

	var _InfiniteScroll = __webpack_require__(132);

	var _InfiniteScroll2 = _interopRequireDefault(_InfiniteScroll);

	var _Selection = __webpack_require__(133);

	var _Selection2 = _interopRequireDefault(_Selection);

	var _LinkPrevious = __webpack_require__(109);

	var _LinkPrevious2 = _interopRequireDefault(_LinkPrevious);

	var _LinkNext = __webpack_require__(108);

	var _LinkNext2 = _interopRequireDefault(_LinkNext);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASS_ROOT = _CSSClassnames2.default.TILES; // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var TILE = _CSSClassnames2.default.TILE;
	var SELECTED_CLASS = TILE + '--selected';

	var Tiles = function (_Component) {
	  (0, _inherits3.default)(Tiles, _Component);

	  function Tiles(props) {
	    (0, _classCallCheck3.default)(this, Tiles);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Tiles).call(this, props));

	    _this._onLeft = _this._onLeft.bind(_this);
	    _this._onRight = _this._onRight.bind(_this);
	    _this._onScrollHorizontal = _this._onScrollHorizontal.bind(_this);
	    _this._onWheel = _this._onWheel.bind(_this);
	    _this._onResize = _this._onResize.bind(_this);
	    _this._layout = _this._layout.bind(_this);
	    _this._onClick = _this._onClick.bind(_this);

	    _this.state = {
	      overflow: false,
	      selected: _Selection2.default.normalizeIndexes(props.selected),
	      numColumns: _this.props.numColumns,
	      columnBreakpoints: null
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(Tiles, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      this._setSelection();
	      if (this.props.onMore) {
	        this._scroll = _InfiniteScroll2.default.startListeningForScroll(this.refs.more, this.props.onMore);
	      }
	      if ('row' === this.props.direction) {
	        window.addEventListener('resize', this._onResize);
	        document.addEventListener('wheel', this._onWheel);
	        this._trackHorizontalScroll();
	        // give browser a chance to stabilize
	        setTimeout(this._layout, 10);
	      } else if (this.props.masonry) {
	        (function () {
	          // grab CSS styles from DOM after component mounted
	          // default to medium tile size ($tile-size = 192px)
	          var minColumnWidth = 192;
	          var tile = document.querySelectorAll('.' + CLASS_ROOT + '__masonry-column .' + TILE);
	          if (tile && tile.length > 0) {
	            var columnTile = window.getComputedStyle(tile[0]);
	            if (columnTile && columnTile.width) {
	              minColumnWidth = parseFloat(columnTile.width);
	            }
	          }

	          // create array of breakpoints for 1 through this.props.numColumns
	          // number of columns of minColumnWidth width.
	          var columnBreakpoints = Array.apply(null, Array(_this2.props.numColumns)).map(function (currentNumColumns, index) {
	            return (index + 1) * minColumnWidth;
	          });
	          _this2.setState({ columnBreakpoints: columnBreakpoints });
	          window.addEventListener('resize', _this2._onResize);
	          setTimeout(_this2._layout, 10);
	        })();
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.selected) {
	        this.setState({
	          selected: _Selection2.default.normalizeIndexes(nextProps.selected)
	        });
	      }
	      if (this._scroll) {
	        _InfiniteScroll2.default.stopListeningForScroll(this._scroll);
	        this._scroll = null;
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      if ((0, _stringify2.default)(this.state.selected) !== (0, _stringify2.default)(prevState.selected)) {
	        this._setSelection();
	      }
	      if (this.props.onMore && !this._scroll) {
	        this._scroll = _InfiniteScroll2.default.startListeningForScroll(this.refs.more, this.props.onMore);
	      }
	      if ('row' === this.props.direction) {
	        this._trackHorizontalScroll();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this._scroll) {
	        _InfiniteScroll2.default.stopListeningForScroll(this._scroll);
	      }
	      if ('row' === this.props.direction) {
	        window.removeEventListener('resize', this._onResize);
	        document.removeEventListener('wheel', this._onWheel);
	        if (this._tracking) {
	          var tiles = (0, _reactDom.findDOMNode)(this.refs.tiles);
	          tiles.removeEventListener('scroll', this._onScrollHorizontal);
	        }
	      } else if (this.props.masonry) {
	        window.removeEventListener('resize', this._onResize);
	      }
	    }
	  }, {
	    key: '_onLeft',
	    value: function _onLeft() {
	      var tiles = (0, _reactDom.findDOMNode)(this.refs.tiles);
	      _Scroll2.default.scrollBy(tiles, 'scrollLeft', -tiles.offsetWidth);
	    }
	  }, {
	    key: '_onRight',
	    value: function _onRight() {
	      var tiles = (0, _reactDom.findDOMNode)(this.refs.tiles);
	      _Scroll2.default.scrollBy(tiles, 'scrollLeft', tiles.offsetWidth);
	    }
	  }, {
	    key: '_onScrollHorizontal',
	    value: function _onScrollHorizontal() {
	      // debounce
	      clearTimeout(this._scrollTimer);
	      this._scrollTimer = setTimeout(this._layout, 50);
	    }
	  }, {
	    key: '_onWheel',
	    value: function _onWheel(event) {
	      if (Math.abs(event.deltaX) > 100) {
	        clearInterval(this._scrollTimer);
	      } else if (event.deltaX > 5) {
	        this._onRight();
	      } else if (event.deltaX < -5) {
	        this._onLeft();
	      }
	    }
	  }, {
	    key: '_getNumberColumns',
	    value: function _getNumberColumns() {
	      var columnBreakpoints = this.state.columnBreakpoints;

	      var tiles = (0, _reactDom.findDOMNode)(this.refs.tiles);
	      var maxColumnWidthIndex = void 0;

	      if (tiles) {
	        maxColumnWidthIndex = columnBreakpoints.filter(function (currentMin) {
	          return currentMin <= tiles.offsetWidth;
	        }).reduce(function (maxIndex, currentMin, index, columnWidths) {
	          return currentMin > columnWidths[maxIndex] ? index : maxIndex;
	        }, 0);

	        return maxColumnWidthIndex + 1; // return appropriate number of columns
	      }

	      return maxColumnWidthIndex;
	    }
	  }, {
	    key: '_layout',
	    value: function _layout() {
	      var _this3 = this;

	      var _props = this.props;
	      var direction = _props.direction;
	      var masonry = _props.masonry;

	      if ('row' === direction) {
	        (function () {
	          // determine if we have more tiles than room to fit
	          var tiles = (0, _reactDom.findDOMNode)(_this3.refs.tiles);
	          // 20 is to allow some fuzziness as scrollbars come and go
	          _this3.setState({
	            overflow: tiles.scrollWidth > tiles.offsetWidth + 20,
	            overflowStart: tiles.scrollLeft <= 20,
	            overflowEnd: tiles.scrollLeft >= tiles.scrollWidth - tiles.offsetWidth
	          });

	          // mark any tiles that might be clipped
	          var rect = tiles.getBoundingClientRect();
	          var children = tiles.querySelectorAll('.' + TILE);

	          (0, _from2.default)(children).map(function (child, index) {
	            var childRect = child.getBoundingClientRect();
	            // 12 accounts for padding
	            if (childRect.left + 12 < rect.left || childRect.right - 12 > rect.right) {
	              child.classList.add(TILE + '--eclipsed');
	            } else {
	              child.classList.remove(TILE + '--eclipsed');
	            }
	          });
	        })();
	      } else if (masonry) {
	        // check for appropriate number of columns, if using masonry option
	        var numColumns = this.state.numColumns;

	        var newNumColumns = this._getNumberColumns();
	        if (newNumColumns && numColumns !== newNumColumns) {
	          this.setState({ numColumns: newNumColumns });
	        }
	      }
	    }
	  }, {
	    key: '_renderChild',
	    value: function _renderChild(element) {
	      var flush = this.props.flush;


	      if (element) {
	        var elementClone = _react2.default.cloneElement(element, {
	          hoverBorder: !flush
	        });

	        return elementClone;
	      }

	      return undefined;
	    }
	  }, {
	    key: '_renderMasonryColumns',
	    value: function _renderMasonryColumns() {
	      var _this4 = this;

	      var children = this.props.children;
	      var numColumns = this.state.numColumns;

	      var columnContents = {};

	      _react.Children.map(children, function (element, index) {
	        var currentColumn = index % numColumns;

	        if (!columnContents['column-' + currentColumn]) {
	          columnContents['column-' + currentColumn] = [];
	        }

	        // place children into appropriate column
	        var child = _this4._renderChild(element);
	        if (child) {
	          columnContents['column-' + currentColumn].push(child);
	        }
	      }, this);

	      var columnsArray = Array.apply(null, Array(numColumns));
	      var columns = columnsArray.map(function (current, i) {
	        return _react2.default.createElement(
	          _Box2.default,
	          { className: CLASS_ROOT + '__masonry-column',
	            key: 'column-' + numColumns + '-' + i },
	          columnContents['column-' + i]
	        );
	      });

	      return columns;
	    }
	  }, {
	    key: '_onResize',
	    value: function _onResize() {
	      // debounce
	      clearTimeout(this._resizeTimer);
	      this._resizeTimer = setTimeout(this._layout, 50);
	    }
	  }, {
	    key: '_trackHorizontalScroll',
	    value: function _trackHorizontalScroll() {
	      if (this.state.overflow && !this._tracking) {
	        var tiles = (0, _reactDom.findDOMNode)(this.refs.tiles);
	        tiles.addEventListener('scroll', this._onScrollHorizontal);
	        this._tracking = true;
	      }
	    }
	  }, {
	    key: '_setSelection',
	    value: function _setSelection() {
	      _Selection2.default.setClassFromIndexes({
	        containerElement: (0, _reactDom.findDOMNode)(this.refs.tiles),
	        childSelector: '.' + TILE,
	        selectedClass: SELECTED_CLASS,
	        selectedIndexes: this.state.selected
	      });
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick(event) {
	      var selected = _Selection2.default.onClick(event, {
	        containerElement: (0, _reactDom.findDOMNode)(this.refs.tiles),
	        childSelector: '.' + TILE,
	        selectedClass: SELECTED_CLASS,
	        multiSelect: 'multiple' === this.props.selectable,
	        priorSelectedIndexes: this.state.selected
	      });
	      // only set the selected state and classes if the caller isn't managing it.
	      if (!this.props.selected) {
	        this.setState({ selected: selected }, this._setSelection);
	      }

	      if (this.props.onSelect) {
	        // notify caller that the selection has changed
	        if (selected.length === 1) {
	          selected = selected[0];
	        }
	        this.props.onSelect(selected);
	      }
	    }

	    // children should be an array of Tile

	  }, {
	    key: 'render',
	    value: function render() {
	      var _classnames,
	          _this5 = this;

	      var _props2 = this.props;
	      var onMore = _props2.onMore;
	      var selectable = _props2.selectable;
	      var masonry = _props2.masonry;
	      var direction = _props2.direction;
	      var overflow = this.state.overflow;


	      var classes = (0, _classnames3.default)(CLASS_ROOT, this.props.className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--fill', this.props.fill), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--flush', this.props.flush), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + this.props.size, this.props.size), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--selectable', this.props.selectable), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--moreable', this.props.onMore), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--overflowed', this.state.overflow), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--masonry', this.props.masonry), _classnames));

	      var other = _Props2.default.pick(this.props, (0, _keys2.default)(_Box2.default.propTypes));

	      var more = null;
	      if (onMore) {
	        more = _react2.default.createElement(
	          'div',
	          { ref: 'more', className: CLASS_ROOT + '__more' },
	          _react2.default.createElement(_Spinning2.default, null)
	        );
	      }

	      var onClickHandler = void 0;
	      if (selectable) {
	        onClickHandler = this._onClick;
	      }

	      var children = this.props.children;
	      if (masonry) {
	        children = this._renderMasonryColumns();
	      } else {
	        children = _react.Children.map(this.props.children, function (element) {
	          return _this5._renderChild(element);
	        }, this);
	      }

	      var contents = _react2.default.createElement(
	        _Box2.default,
	        (0, _extends3.default)({ ref: 'tiles' }, other, {
	          wrap: direction ? false : true,
	          direction: direction ? direction : 'row',
	          className: classes,
	          onClick: onClickHandler,
	          focusable: false }),
	        children,
	        more
	      );

	      if (overflow) {
	        var left = void 0;
	        var right = void 0;

	        if (!this.state.overflowStart) {
	          left = _react2.default.createElement(_Button2.default, { className: CLASS_ROOT + '__left', icon: _react2.default.createElement(_LinkPrevious2.default, null),
	            onClick: this._onLeft });
	        }
	        if (!this.state.overflowEnd) {
	          right = _react2.default.createElement(_Button2.default, { className: CLASS_ROOT + '__right', icon: _react2.default.createElement(_LinkNext2.default, null),
	            onClick: this._onRight });
	        }

	        contents = _react2.default.createElement(
	          'div',
	          { className: CLASS_ROOT + '__container' },
	          left,
	          contents,
	          right
	        );
	      }

	      return contents;
	    }
	  }]);
	  return Tiles;
	}(_react.Component);

	Tiles.displayName = 'Tiles';
	exports.default = Tiles;


	Tiles.propTypes = (0, _extends3.default)({
	  fill: _react.PropTypes.bool,
	  flush: _react.PropTypes.bool,
	  onMore: _react.PropTypes.func,
	  onSelect: _react.PropTypes.func,
	  selectable: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['multiple'])]),
	  selected: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.arrayOf(_react.PropTypes.number)]),
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
	  numColumns: _react.PropTypes.number,
	  masonry: _react.PropTypes.bool
	}, _Box2.default.propTypes);

	Tiles.defaultProps = {
	  flush: true,
	  justify: 'start',
	  pad: 'small',
	  numColumns: 1
	};
	module.exports = exports['default'];

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(121), __esModule: true };

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27);
	__webpack_require__(122);
	module.exports = __webpack_require__(17).Array.from;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(18)
	  , $export     = __webpack_require__(15)
	  , toObject    = __webpack_require__(12)
	  , call        = __webpack_require__(123)
	  , isArrayIter = __webpack_require__(124)
	  , toLength    = __webpack_require__(125)
	  , getIterFn   = __webpack_require__(126);
	$export($export.S + $export.F * !__webpack_require__(128)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(57);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(37)
	  , ITERATOR   = __webpack_require__(40)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(29)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(127)
	  , ITERATOR  = __webpack_require__(40)('iterator')
	  , Iterators = __webpack_require__(37);
	module.exports = __webpack_require__(17).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(49)
	  , TAG = __webpack_require__(40)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(40)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(130), __esModule: true };

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(17);
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.SPINNING;

	var Spinning = function (_Component) {
	  (0, _inherits3.default)(Spinning, _Component);

	  function Spinning() {
	    (0, _classCallCheck3.default)(this, Spinning);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Spinning).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Spinning, [{
	    key: 'render',
	    value: function render() {
	      var classes = [CLASS_ROOT];
	      if (this.props.small) {
	        classes.push(CLASS_ROOT + "--small");
	      }
	      if (this.props.className) {
	        classes.push(this.props.className);
	      }
	      return _react2.default.createElement(
	        'svg',
	        { className: classes.join(' '), viewBox: '0 0 48 48', version: '1.1',
	          role: 'img' },
	        _react2.default.createElement(
	          'title',
	          null,
	          'Spinning'
	        ),
	        _react2.default.createElement('circle', { stroke: '#ddd', strokeWidth: '4', strokeDasharray: '24px 8px',
	          fill: 'none', cx: '24', cy: '24', r: '20' }),
	        _react2.default.createElement('circle', { stroke: '#333', strokeWidth: '4', strokeDasharray: '24px 104px',
	          fill: 'none', cx: '24', cy: '24', r: '20' })
	      );
	    }
	  }]);
	  return Spinning;
	}(_react.Component);

	Spinning.displayName = 'Spinning';
	exports.default = Spinning;
	module.exports = exports['default'];

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DOM = __webpack_require__(89);

	var _DOM2 = _interopRequireDefault(_DOM);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SCROLL_MORE_DELAY = 500; // when the user scrolls
	// (C) Copyright 2014 Hewlett Packard Enterprise Development LP

	var SCROLL_MORE_INITIAL_DELAY = 50; // when we start out at the bottom already

	function _evaluate(scrollState) {
	  if (scrollState.scrollParent) {
	    // are we at the bottom?
	    var bottom;
	    if (scrollState.scrollParent === document) {
	      bottom = window.innerHeight;
	    } else {
	      bottom = scrollState.scrollParent.getBoundingClientRect().bottom;
	    }
	    var indicatorRect = scrollState.indicatorElement.getBoundingClientRect();
	    // Only if bottom isn't zero. This can happen when content hasn't
	    // arrived yet.
	    // 10px offset is to ensure onEnd() gets called
	    if (bottom && indicatorRect.bottom <= bottom + 10) {
	      scrollState.onEnd();
	    }
	  }
	}

	function _onScroll(scrollState) {
	  // delay a bit to ride out quick users
	  clearTimeout(scrollState.scrollTimer);
	  scrollState.scrollTimer = setTimeout(function () {
	    _evaluate(scrollState);
	  }, SCROLL_MORE_DELAY);
	}

	function _onResize(scrollState) {
	  clearTimeout(scrollState.scrollTimer);
	  scrollState.scrollTimer = setTimeout(function () {
	    _evaluate(scrollState);
	  }, SCROLL_MORE_DELAY);
	}

	exports.default = {
	  startListeningForScroll: function startListeningForScroll(indicatorElement, onEnd) {
	    var scrollState = {
	      onEnd: onEnd,
	      indicatorElement: indicatorElement,
	      scrollParent: _DOM2.default.findScrollParents(indicatorElement)[0]
	    };

	    scrollState._onResize = _onResize.bind(null, scrollState);
	    scrollState._onScroll = _onScroll.bind(null, scrollState);

	    scrollState.scrollParent.addEventListener("scroll", scrollState._onScroll);
	    window.addEventListener("resize", scrollState._onResize);
	    // check in case we're already at the bottom and the indicator is visible
	    if (scrollState.scrollParent === document) {
	      var rect = indicatorElement.getBoundingClientRect();
	      if (rect.top < window.innerHeight) {
	        scrollState.scrollTimer = setTimeout(onEnd, SCROLL_MORE_INITIAL_DELAY);
	      }
	    }
	    return scrollState;
	  },
	  stopListeningForScroll: function stopListeningForScroll(scrollState) {
	    if (scrollState.scrollParent) {
	      clearTimeout(scrollState.scrollTimer);
	      scrollState.scrollParent.removeEventListener("scroll", scrollState._onScroll);
	      window.removeEventListener("resize", scrollState._onResize);
	      scrollState.scrollParent = null;
	    }
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 133 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// (C) Copyright 2015 Hewlett Packard Enterprise Development LP

	// Functions to manage selection via both child index and a specific class name.

	// Ensures it is an array.
	function normalizeIndexes(selectedIndexes) {
	  var result = void 0;
	  if (undefined === selectedIndexes || null === selectedIndexes) {
	    result = [];
	  } else if (typeof selectedIndexes === 'number') {
	    result = [selectedIndexes];
	  } else {
	    result = selectedIndexes;
	  }
	  return result;
	}

	// Clears any selected items
	// options: {containerElement: , selectedClass: }
	function clearClass(options) {
	  var items = options.containerElement.querySelectorAll("." + options.selectedClass);
	  for (var i = 0; i < items.length; i++) {
	    items[i].classList.remove(options.selectedClass);
	  }
	}

	// Sets the selectedClass on all children whose index is in selectedIndexes.
	// options: {containerElement: , childSelector: , selectedClass: ,
	//    selectedIndexes: []}
	function setClassFromIndexes(options) {
	  clearClass(options);
	  if (options.selectedIndexes) {
	    (function () {
	      var items = options.containerElement.querySelectorAll(options.childSelector);
	      options.selectedIndexes.forEach(function (index) {
	        if (items[index]) {
	          items[index].classList.add(options.selectedClass);
	        }
	      });
	    })();
	  }
	}

	// Gets the selected selectedClass on all children whose index is in
	// selectedIndexes.
	// options: {containerElement: , childSelector: , selectedClass: }
	function getIndexesFromClass(options) {
	  var items = options.containerElement.querySelectorAll(options.childSelector);
	  var selectedIndexes = [];
	  for (var i = 0; i < items.length; i++) {
	    if (items[i].classList.contains(options.selectedClass)) {
	      selectedIndexes.push(i);
	    }
	  }
	  return selectedIndexes;
	}

	// Returns a new selectedIndexes array with the latest selected indexes
	// options: {containerElement: , childSelector: , //selectedClass: ,
	//   multiSelect: true|false, priorSelectedIndexes: []}
	function onClick(event, options) {

	  // Go up the DOM tree until we match the childSelector
	  var item = event.target;
	  var matchFunction = item.matches || item.matchesElement || item.msMatchesSelector;
	  while (matchFunction && item && !matchFunction.bind(item, options.childSelector)()) {
	    item = item.parentNode;
	    matchFunction = item.matches || item.matchesElement || item.msMatchesSelector;
	  }

	  // determine the index of the clicked element
	  var indexInContainer = 0;
	  var previousItem = item.previousSibling;
	  while (previousItem != null) {
	    previousItem = previousItem.previousSibling;
	    indexInContainer += 1;
	  }

	  var selectedIndexes = void 0; // what will be returned

	  if (!event.ctrlKey && !event.metaKey && !event.shiftKey) {

	    selectedIndexes = [indexInContainer];
	  } else {
	    // was it selected?
	    var indexInPrior = options.priorSelectedIndexes.indexOf(indexInContainer);

	    if (!options.multiSelect) {

	      if (-1 !== indexInPrior && (event.ctrlKey || event.metaKey)) {
	        selectedIndexes = [];
	      } else {
	        selectedIndexes = options.priorSelectedIndexes;
	      }
	    } else {
	      // multi-select

	      // make a copy of the prior list so we can modify it
	      selectedIndexes = options.priorSelectedIndexes.slice(0);

	      if (event.shiftKey) {
	        var i;

	        (function () {

	          // select from nearest selected item to the currently selected item
	          var closestIndex = -1;
	          selectedIndexes.forEach(function (selectIndex, arrayIndex) {
	            if (-1 === closestIndex) {
	              closestIndex = selectIndex;
	            } else if (Math.abs(indexInContainer - selectIndex) < Math.abs(indexInContainer - closestIndex)) {
	              closestIndex = selectIndex;
	            }
	          });

	          for (i = indexInContainer; i !== closestIndex;) {
	            selectedIndexes.push(i);
	            if (closestIndex < indexInContainer) {
	              i -= 1;
	            } else {
	              i += 1;
	            }
	          }

	          // Remove text selection. This often happens when shift multi-selecting
	          window.getSelection().removeAllRanges();
	        })();
	      } else {
	        // toggle
	        if (-1 === indexInPrior) {
	          selectedIndexes.push(indexInContainer);
	        } else {
	          selectedIndexes.splice(indexInPrior, 1);
	        }
	      }
	    }
	  }

	  return selectedIndexes;
	}

	exports.default = {
	  normalizeIndexes: normalizeIndexes,
	  clearClass: clearClass,
	  getIndexesFromClass: getIndexesFromClass,
	  setClassFromIndexes: setClassFromIndexes,
	  onClick: onClick
	};
	module.exports = exports["default"];

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(69);

	var _extends3 = _interopRequireDefault(_extends2);

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _keys = __webpack_require__(84);

	var _keys2 = _interopRequireDefault(_keys);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _Props = __webpack_require__(91);

	var _Props2 = _interopRequireDefault(_Props);

	var _Box = __webpack_require__(83);

	var _Box2 = _interopRequireDefault(_Box);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASS_ROOT = _CSSClassnames2.default.TILE; // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var NAMESPACE = _CSSClassnames2.default.NAMESPACE;

	var Tile = function (_Component) {
	  (0, _inherits3.default)(Tile, _Component);

	  function Tile() {
	    (0, _classCallCheck3.default)(this, Tile);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Tile).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Tile, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var _props = this.props;
	      var children = _props.children;
	      var className = _props.className;
	      var onClick = _props.onClick;
	      var wide = _props.wide;
	      var status = _props.status;
	      var selected = _props.selected;
	      var hoverStyle = _props.hoverStyle;
	      var hoverColorIndex = _props.hoverColorIndex;
	      var hoverBorder = _props.hoverBorder;
	      var hoverBorderSize = _props.hoverBorderSize;

	      var restProps = _Props2.default.omit(this.props, (0, _keys2.default)(_Box2.default.propTypes));
	      delete restProps.hoverStyle;
	      delete restProps.hoverColorIndex;
	      delete restProps.hoverBorder;
	      delete restProps.hoverBorderSize;

	      if (selected) {
	        console.warn('Selected option has been deprecated, please use ' + 'selected option at the Tiles level.');
	      }

	      var statusClass = status ? status.toLowerCase() : undefined;
	      // if Tiles flush is true, default borderSize to small (1px)
	      var borderSize = hoverBorder ? hoverBorderSize ? hoverBorderSize : 'large' : 'small';

	      var classes = (0, _classnames3.default)(CLASS_ROOT, className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--status-' + statusClass, status), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--wide', wide), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--selectable', onClick), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--selected', selected), (0, _defineProperty3.default)(_classnames, '' + NAMESPACE + hoverStyle + (hoverStyle == 'border' ? borderSize ? '-' + borderSize : '-medium' : '') + '-hover-color-index-' + hoverColorIndex, hoverStyle), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--hover-border-' + borderSize, borderSize), _classnames));

	      var boxProps = _Props2.default.pick(this.props, (0, _keys2.default)(_Box2.default.propTypes));

	      return _react2.default.createElement(
	        _Box2.default,
	        (0, _extends3.default)({}, restProps, boxProps, { className: classes }),
	        children
	      );
	    }
	  }]);
	  return Tile;
	}(_react.Component);

	Tile.displayName = 'Tile';
	exports.default = Tile;


	Tile.propTypes = (0, _extends3.default)({
	  selected: _react.PropTypes.bool,
	  wide: _react.PropTypes.bool,
	  hoverStyle: _react.PropTypes.oneOf(['border', 'background', 'none']),
	  hoverColorIndex: _react.PropTypes.string,
	  hoverBorderSize: _react.PropTypes.oneOf(['small', 'medium', 'large'])
	}, _Box2.default.propTypes);

	Tile.defaultProps = {
	  pad: 'none',
	  direction: 'column',
	  align: 'center',
	  hoverStyle: 'none',
	  hoverColorIndex: 'disabled'
	};
	module.exports = exports['default'];

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var React = __webpack_require__(1);
	var Router = __webpack_require__(2);
	var Route = Router.Route;
	var Link = Router.Link;

	var Section = __webpack_require__(117);
	var DocsSplit = __webpack_require__(136);
	var DocsArticle = __webpack_require__(140);
	var Menu = __webpack_require__(97);
	var Anchor = __webpack_require__(115);

	var Philosophy = __webpack_require__(147);

	var CONTENTS = [{ route: "design_philosophy", label: 'Philosophy', component: Philosophy,
	  contents: [{ label: 'Best Practices', id: 'best-practices' }, { label: 'Usability', id: 'usability' }, { label: 'Interactions', id: 'interactions' }, { label: 'Mobile', id: 'mobile' }, { label: 'Accessibility', id: 'accessibility' }]
	}];

	var Design = React.createClass({
	  displayName: 'Design',


	  contextTypes: {
	    routePrefix: React.PropTypes.string.isRequired
	  },

	  childContextTypes: {
	    routePrefix: React.PropTypes.string.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      routePrefix: this.context.routePrefix + 'design/'
	    };
	  },

	  render: function render() {
	    var title = React.createElement(
	      Link,
	      { to: this.context.routePrefix + "design" },
	      'Design'
	    );
	    return React.createElement(
	      DocsSplit,
	      { title: title, contents: CONTENTS, onChange: this._highlightCode },
	      React.createElement(
	        DocsArticle,
	        { title: 'Design', colorIndex: 'neutral-2' },
	        React.createElement(
	          Section,
	          null,
	          React.createElement(
	            'p',
	            null,
	            'This application style guide was created by the designers at Hewlett Packard Enterprise. The guide covers the general design principles as well as specific design guidelines. You\'ll also find downloadable assets for the basic elements of the application style. These are meant to help designers quickly begin designing applications based on these styles and patterns. Finally, we\'ve also created a web-based development platform that enables developers to quickly begin implementing enterprise applications.'
	          ),
	          React.createElement(
	            Menu,
	            { direction: 'column' },
	            React.createElement(
	              Link,
	              { to: this.context.routePrefix + "design/resources" },
	              React.createElement(
	                Anchor,
	                { id: 'resources-button', tag: 'span', primary: true },
	                'Resources'
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var DesignDocument = React.createClass({
	  displayName: 'DesignDocument',


	  contextTypes: {
	    routePrefix: React.PropTypes.string.isRequired
	  },

	  childContextTypes: {
	    routePrefix: React.PropTypes.string.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      routePrefix: this.context.routePrefix + 'design/'
	    };
	  },

	  render: function render() {
	    var title = React.createElement(
	      Link,
	      { to: this.context.routePrefix + "design" },
	      'Design'
	    );
	    return React.createElement(
	      DocsSplit,
	      { title: title, contents: CONTENTS },
	      this.props.children
	    );
	  }
	});

	var Empty = React.createClass({
	  displayName: 'Empty',

	  render: function render() {
	    return React.createElement('div', null);
	  }
	});

	function createContentRoutes(contents) {
	  var result = [];
	  contents.forEach(function (content) {

	    var component = content.component || Empty;
	    result.push(React.createElement(Route, { key: content.label,
	      path: content.label.toLowerCase().replace(/ /g, "-"),
	      component: component }));

	    if (content.hasOwnProperty('contents')) {
	      result = result.concat(createContentRoutes(content.contents));
	    }
	  });
	  return result;
	}

	Design.routes = function () {
	  var routes = createContentRoutes(CONTENTS);
	  return [React.createElement(Route, { key: 'top', path: 'design', component: Design }), React.createElement(
	    Route,
	    { key: 'docs', path: 'design', component: DesignDocument },
	    routes
	  )];
	};

	module.exports = Design;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var React = __webpack_require__(1);
	var Link = __webpack_require__(2).Link;
	var Split = __webpack_require__(137);
	var Sidebar = __webpack_require__(138);
	var Header = __webpack_require__(112);
	var Title = __webpack_require__(113);
	var Box = __webpack_require__(83);
	var Menu = __webpack_require__(97);
	var Button = __webpack_require__(96);
	var CloseIcon = __webpack_require__(95);
	var GrommetLogo = __webpack_require__(114);
	var DocsMenu = __webpack_require__(139);
	var DOM = __webpack_require__(89);

	var DocsSplit = React.createClass({
	  displayName: 'DocsSplit',


	  propTypes: {
	    contents: React.PropTypes.arrayOf(React.PropTypes.object),
	    onChange: React.PropTypes.func,
	    title: React.PropTypes.node.isRequired
	  },

	  contextTypes: {
	    routePrefix: React.PropTypes.string.isRequired,
	    rootPath: React.PropTypes.string.isRequired
	  },

	  getInitialState: function getInitialState() {
	    return { showMenu: true, responsive: 'multiple' };
	  },

	  componentDidMount: function componentDidMount() {
	    this._scrollToAnchor();
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    this._scrollToAnchor();
	  },

	  _scrollToAnchor: function _scrollToAnchor() {
	    if (this.refs.doc) {
	      var doc = this.refs.doc;
	      var hash = window.location.hash.slice(1);
	      if (hash) {
	        var anchor = document.querySelectorAll('[id=' + hash + ']')[0];
	        var scrollParent = DOM.findScrollParents(anchor)[0];
	        scrollParent.scrollTop = anchor.offsetTop;
	      } else {
	        doc.scrollTop = 0;
	      }
	    }
	  },

	  _onResponsive: function _onResponsive(responsive) {
	    this.setState({ responsive: responsive });
	    if ('multiple' === responsive) {
	      this.setState({ showMenu: true });
	    }
	    if ('single' === responsive) {
	      this.setState({ showMenu: false });
	    }
	    if (this.props.onChange) {
	      this.props.onChange();
	    }
	  },

	  _onMenuOpen: function _onMenuOpen() {
	    this.setState({ showMenu: true });
	  },

	  _onMenuClick: function _onMenuClick() {
	    if ('single' === this.state.responsive) {
	      this.setState({ showMenu: false });
	    }
	    // allow time for hash to change
	    setTimeout(this._scrollToAnchor, 1);
	    if (this.props.onChange) {
	      this.props.onChange();
	    }
	  },

	  _renderTitle: function _renderTitle() {
	    return React.createElement(
	      Title,
	      { responsive: false },
	      React.createElement(
	        Link,
	        { to: this.context.rootPath },
	        React.createElement(
	          Box,
	          { align: 'center', direction: 'row' },
	          React.createElement(GrommetLogo, null)
	        )
	      )
	    );
	  },

	  _renderMenu: function _renderMenu() {
	    var title = this._renderTitle();
	    var closer;
	    if ('single' === this.state.responsive) {
	      closer = React.createElement(Button, { icon: React.createElement(CloseIcon, null), onClick: this._onMenuClick });
	    }
	    return React.createElement(
	      Sidebar,
	      { size: 'small', primary: true, separator: 'right' },
	      React.createElement(
	        Header,
	        { justify: 'between', large: true, pad: { horizontal: 'medium' } },
	        title,
	        closer
	      ),
	      React.createElement(DocsMenu, { direction: 'column',
	        title: this.props.title, contents: this.props.contents,
	        onClick: this._onMenuClick })
	    );
	  },

	  _renderDoc: function _renderDoc() {
	    var header;
	    if ('single' === this.state.responsive) {
	      var title = this._renderTitle();
	      header = React.createElement(
	        Header,
	        { justify: 'between', large: true, pad: { horizontal: 'large' } },
	        title,
	        React.createElement(
	          Menu,
	          { direction: 'row', responsive: false },
	          React.createElement(
	            'a',
	            { onClick: this._onMenuOpen },
	            'Contents'
	          )
	        )
	      );
	    }
	    return React.createElement(
	      'div',
	      { ref: 'doc', className: 'docs-split__doc' },
	      header,
	      this.props.children
	    );
	  },

	  render: function render() {
	    var left;
	    var right;
	    if (this.state.showMenu) {
	      left = this._renderMenu();
	      if ('multiple' === this.state.responsive) {
	        right = this._renderDoc();
	      }
	    } else {
	      left = this._renderDoc();
	    }

	    return React.createElement(
	      Split,
	      { flex: 'right', fixed: true, onResponsive: this._onResponsive },
	      left,
	      right
	    );
	  }
	});

	module.exports = DocsSplit;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.SPLIT;
	var BREAK_WIDTH = 720; //adds the breakpoint of single/multiple split

	var Split = function (_Component) {
	  (0, _inherits3.default)(Split, _Component);

	  function Split() {
	    (0, _classCallCheck3.default)(this, Split);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Split).call(this));

	    _this._onResize = _this._onResize.bind(_this);
	    _this._layout = _this._layout.bind(_this);

	    _this.state = { responsive: null };
	    return _this;
	  }

	  (0, _createClass3.default)(Split, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('resize', this._onResize);
	      this._layout();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // If we change the number of visible children, trigger a resize event
	      // so things like Table header can adjust. This will go away once
	      // CSS supports per element media queries.
	      // The 500ms delay is loosely tied to the CSS animation duration.
	      // We want any animations to finish before triggering the resize.
	      // TODO: consider using an animation end event instead of a timer.
	      if (this._nonNullChildCount(nextProps) !== this._nonNullChildCount(this.props)) {
	        clearTimeout(this._resizeTimer);
	        this._resizeTimer = setTimeout(function () {
	          var event = document.createEvent('HTMLEvents');
	          event.initEvent('resize', true, false);
	          window.dispatchEvent(event);
	        }, 500);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('resize', this._onResize);
	    }

	    // Support function for componentWillReceiveProps()

	  }, {
	    key: '_nonNullChildCount',
	    value: function _nonNullChildCount(props) {
	      var result = 0;
	      _react2.default.Children.forEach(props.children, function (child) {
	        if (child !== null) result += 1;
	      });
	      return result;
	    }
	  }, {
	    key: '_onResize',
	    value: function _onResize() {
	      // debounce
	      clearTimeout(this._resizeTimer);
	      this._resizeTimer = setTimeout(this._layout, 50);
	    }
	  }, {
	    key: '_setResponsive',
	    value: function _setResponsive(responsive) {
	      if (this.state.responsive !== responsive) {
	        this.setState({ responsive: responsive });
	        if (this.props.onResponsive) {
	          this.props.onResponsive(responsive);
	        }
	      }
	    }
	  }, {
	    key: '_layout',
	    value: function _layout() {
	      var splitElement = this.refs.split;
	      if (splitElement) {
	        if (splitElement.offsetWidth < BREAK_WIDTH && this.props.showOnResponsive === 'priority') {
	          this._setResponsive('single');
	        } else {
	          this._setResponsive('multiple');
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var priority = this.props.priority;
	      var responsive = this.state.responsive;

	      var classes = [CLASS_ROOT];
	      if (this.props.flex) {
	        classes.push(CLASS_ROOT + "--flex-" + this.props.flex);
	      }
	      if (this.props.fixed) {
	        classes.push(CLASS_ROOT + "--fixed");
	      }
	      if (this.props.separator) {
	        classes.push(CLASS_ROOT + "--separator");
	      }
	      if (this.props.className) {
	        classes.push(this.props.className);
	      }

	      var elements = _react.Children.toArray(this.props.children).filter(function (element) {
	        return element;
	      });
	      var children = elements.map(function (element, index) {
	        // When we only have room to show one child, hide the appropriate one
	        if ('single' === responsive && ('left' === priority && index > 0 || 'right' === priority && index === 0 && elements.length > 1)) {
	          element = _react2.default.cloneElement(element, { style: { display: 'none' } });
	        }
	        return element;
	      });

	      return _react2.default.createElement(
	        'div',
	        { ref: 'split', className: classes.join(' ') },
	        children
	      );
	    }
	  }]);
	  return Split;
	}(_react.Component);

	Split.displayName = 'Split';
	exports.default = Split;


	Split.propTypes = {
	  fixed: _react.PropTypes.bool,
	  flex: _react.PropTypes.oneOf(['left', 'right', 'both']),
	  priority: _react.PropTypes.oneOf(['left', 'right']),
	  separator: _react.PropTypes.bool,
	  showOnResponsive: _react.PropTypes.oneOf(['priority', 'both'])
	};

	Split.defaultProps = {
	  fixed: true,
	  flex: 'both',
	  priority: 'right',
	  showOnResponsive: 'priority'
	};
	module.exports = exports['default'];

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(69);

	var _extends3 = _interopRequireDefault(_extends2);

	var _keys = __webpack_require__(84);

	var _keys2 = _interopRequireDefault(_keys);

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _Box = __webpack_require__(83);

	var _Box2 = _interopRequireDefault(_Box);

	var _Props = __webpack_require__(91);

	var _Props2 = _interopRequireDefault(_Props);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASS_ROOT = _CSSClassnames2.default.SIDEBAR; // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var Sidebar = function (_Component) {
	  (0, _inherits3.default)(Sidebar, _Component);

	  function Sidebar() {
	    (0, _classCallCheck3.default)(this, Sidebar);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Sidebar).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Sidebar, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var classes = (0, _classnames3.default)(CLASS_ROOT, this.props.className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--fixed', this.props.fixed), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--full', this.props.full), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + this.props.size, this.props.size), _classnames));

	      var boxProps = _Props2.default.pick(this.props, (0, _keys2.default)(_Box2.default.propTypes));
	      var restProps = _Props2.default.omit(this.props, (0, _keys2.default)(Sidebar.propTypes));

	      return _react2.default.createElement(
	        _Box2.default,
	        (0, _extends3.default)({}, restProps, boxProps, { className: classes }),
	        this.props.children
	      );
	    }
	  }]);
	  return Sidebar;
	}(_react.Component);

	Sidebar.displayName = 'Sidebar';
	exports.default = Sidebar;
	;

	Sidebar.propTypes = (0, _extends3.default)({
	  fixed: _react.PropTypes.bool,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
	  full: _react.PropTypes.bool
	}, _Box2.default.propTypes);

	Sidebar.defaultProps = {
	  direction: 'column',
	  full: true
	};
	module.exports = exports['default'];

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var React = __webpack_require__(1);
	var Link = __webpack_require__(2).Link;
	var Menu = __webpack_require__(97);
	var Header = __webpack_require__(112);

	var DocsMenu = React.createClass({
	  displayName: 'DocsMenu',


	  propTypes: {
	    contents: React.PropTypes.arrayOf(React.PropTypes.object),
	    direction: React.PropTypes.oneOf(['column', 'row']),
	    onClick: React.PropTypes.func,
	    title: React.PropTypes.object
	  },

	  contextTypes: {
	    routePrefix: React.PropTypes.string.isRequired
	  },

	  _renderMenuItems: function _renderMenuItems(contents, routePrefix, context) {
	    var items = contents.map(function (content, index) {
	      var item;

	      if (content.route || context) {
	        var routeName = content.id ? context.label : content.label || context.label;
	        var href = routePrefix + routeName.toLowerCase().replace(/ /g, "-");
	        if (content.id) {
	          href += '#' + content.id;
	        }
	        item = React.createElement(
	          Link,
	          { key: content.label, to: href, onClick: this.props.onClick,
	            activeClassName: 'active' },
	          content.label
	        );
	        //item = <a key={content.label} href={href}>{content.label}</a>;
	      } else {
	        item = content.label;
	      }

	      if (!context) {
	        item = React.createElement(
	          Header,
	          { tag: 'h3', key: content.label, pad: { horizontal: 'medium' } },
	          React.createElement(
	            'strong',
	            null,
	            item
	          )
	        );
	      }

	      var subItems;
	      if (content.hasOwnProperty('contents')) {
	        subItems = this._renderMenuItems(content.contents, routePrefix, content);
	      }

	      if (!context || subItems) {
	        return React.createElement(
	          Menu,
	          { key: content.label, direction: 'column', align: 'start', primary: true },
	          item,
	          subItems
	        );
	      } else {
	        return item;
	      }
	    }.bind(this));

	    return items;
	  },

	  render: function render() {
	    var menuItems = this._renderMenuItems(this.props.contents, this.context.routePrefix, null);
	    return React.createElement(
	      Menu,
	      { direction: this.props.direction, align: 'start', justify: 'between', primary: true },
	      React.createElement(
	        Header,
	        { tag: 'h2', pad: { horizontal: 'medium' } },
	        this.props.title
	      ),
	      menuItems
	    );
	  }
	});

	module.exports = DocsMenu;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var React = __webpack_require__(1);
	var Article = __webpack_require__(106);
	var Header = __webpack_require__(112);
	var Box = __webpack_require__(83);
	var DocsFooter = __webpack_require__(141);

	//hjjs configuration
	var hljs = __webpack_require__(142);
	hljs.registerLanguage('bash', __webpack_require__(143));
	hljs.registerLanguage('xml', __webpack_require__(144));
	hljs.registerLanguage('javascript', __webpack_require__(145));
	hljs.registerLanguage('scss', __webpack_require__(146));

	var DocsArticle = React.createClass({
	  displayName: 'DocsArticle',


	  propTypes: {
	    colorIndex: React.PropTypes.string,
	    title: React.PropTypes.string.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return { colorIndex: 'neutral-1' };
	  },

	  componentDidMount: function componentDidMount() {
	    this._highlightCode();
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    this._highlightCode();
	  },

	  _highlightCode: function _highlightCode() {
	    var nodes = document.querySelectorAll('pre code');
	    for (var i = 0; i < nodes.length; i++) {
	      hljs.highlightBlock(nodes[i]);
	    }
	  },

	  render: function render() {
	    return React.createElement(
	      Article,
	      { primary: true },
	      React.createElement(
	        Header,
	        { size: 'large', pad: { horizontal: 'large' },
	          colorIndex: this.props.colorIndex },
	        React.createElement(
	          'h1',
	          null,
	          this.props.title
	        )
	      ),
	      React.createElement(
	        Box,
	        { pad: { horizontal: 'large' } },
	        this.props.children
	      ),
	      React.createElement(DocsFooter, null)
	    );
	  }
	});

	module.exports = DocsArticle;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var React = __webpack_require__(1);
	var Footer = __webpack_require__(116);

	var DocsFooter = React.createClass({
	  displayName: 'DocsFooter',


	  propTypes: {
	    centered: React.PropTypes.bool,
	    colorIndex: React.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return { centered: false };
	  },

	  render: function render() {
	    return React.createElement(
	      Footer,
	      { colorIndex: this.props.colorIndex, centered: this.props.centered,
	        large: true, pad: 'large' },
	      this.props.children,
	      React.createElement(
	        'div',
	        null,
	        'This work is licensed under the ',
	        React.createElement(
	          'a',
	          { href: 'http://creativecommons.org/licenses/by/4.0/legalcode' },
	          'Creative Commons Attribution 4.0 International License'
	        ),
	        '.'
	      )
	    );
	  }
	});

	module.exports = DocsFooter;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Syntax highlighting with language autodetection.
	https://highlightjs.org/
	*/

	(function(factory) {

	  // Find the global object for export to both the browser and web workers.
	  var globalObject = typeof window === 'object' && window ||
	                     typeof self === 'object' && self;

	  // Setup highlight.js for different environments. First is Node.js or
	  // CommonJS.
	  if(true) {
	    factory(exports);
	  } else if(globalObject) {
	    // Export hljs globally even when using AMD for cases when this script
	    // is loaded with others that may still expect a global hljs.
	    globalObject.hljs = factory({});

	    // Finally register the global hljs with AMD.
	    if(typeof define === 'function' && define.amd) {
	      define([], function() {
	        return globalObject.hljs;
	      });
	    }
	  }

	}(function(hljs) {
	  // Convenience variables for build-in objects
	  var ArrayProto = [],
	      objectKeys = Object.keys;

	  // Global internal variables used within the highlight.js library.
	  var languages = {},
	      aliases   = {};

	  // Regular expressions used throughout the highlight.js library.
	  var noHighlightRe    = /^(no-?highlight|plain|text)$/i,
	      languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i,
	      fixMarkupRe      = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;

	  var spanEndTag = '</span>';

	  // Global options used when within external APIs. This is modified when
	  // calling the `hljs.configure` function.
	  var options = {
	    classPrefix: 'hljs-',
	    tabReplace: null,
	    useBR: false,
	    languages: undefined
	  };

	  // Object map that is used to escape some common HTML characters.
	  var escapeRegexMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;'
	  };

	  /* Utility functions */

	  function escape(value) {
	    return value.replace(/[&<>]/gm, function(character) {
	      return escapeRegexMap[character];
	    });
	  }

	  function tag(node) {
	    return node.nodeName.toLowerCase();
	  }

	  function testRe(re, lexeme) {
	    var match = re && re.exec(lexeme);
	    return match && match.index === 0;
	  }

	  function isNotHighlighted(language) {
	    return noHighlightRe.test(language);
	  }

	  function blockLanguage(block) {
	    var i, match, length, _class;
	    var classes = block.className + ' ';

	    classes += block.parentNode ? block.parentNode.className : '';

	    // language-* takes precedence over non-prefixed class names.
	    match = languagePrefixRe.exec(classes);
	    if (match) {
	      return getLanguage(match[1]) ? match[1] : 'no-highlight';
	    }

	    classes = classes.split(/\s+/);

	    for (i = 0, length = classes.length; i < length; i++) {
	      _class = classes[i]

	      if (isNotHighlighted(_class) || getLanguage(_class)) {
	        return _class;
	      }
	    }
	  }

	  function inherit(parent, obj) {
	    var key;
	    var result = {};

	    for (key in parent)
	      result[key] = parent[key];
	    if (obj)
	      for (key in obj)
	        result[key] = obj[key];
	    return result;
	  }

	  /* Stream merging */

	  function nodeStream(node) {
	    var result = [];
	    (function _nodeStream(node, offset) {
	      for (var child = node.firstChild; child; child = child.nextSibling) {
	        if (child.nodeType === 3)
	          offset += child.nodeValue.length;
	        else if (child.nodeType === 1) {
	          result.push({
	            event: 'start',
	            offset: offset,
	            node: child
	          });
	          offset = _nodeStream(child, offset);
	          // Prevent void elements from having an end tag that would actually
	          // double them in the output. There are more void elements in HTML
	          // but we list only those realistically expected in code display.
	          if (!tag(child).match(/br|hr|img|input/)) {
	            result.push({
	              event: 'stop',
	              offset: offset,
	              node: child
	            });
	          }
	        }
	      }
	      return offset;
	    })(node, 0);
	    return result;
	  }

	  function mergeStreams(original, highlighted, value) {
	    var processed = 0;
	    var result = '';
	    var nodeStack = [];

	    function selectStream() {
	      if (!original.length || !highlighted.length) {
	        return original.length ? original : highlighted;
	      }
	      if (original[0].offset !== highlighted[0].offset) {
	        return (original[0].offset < highlighted[0].offset) ? original : highlighted;
	      }

	      /*
	      To avoid starting the stream just before it should stop the order is
	      ensured that original always starts first and closes last:

	      if (event1 == 'start' && event2 == 'start')
	        return original;
	      if (event1 == 'start' && event2 == 'stop')
	        return highlighted;
	      if (event1 == 'stop' && event2 == 'start')
	        return original;
	      if (event1 == 'stop' && event2 == 'stop')
	        return highlighted;

	      ... which is collapsed to:
	      */
	      return highlighted[0].event === 'start' ? original : highlighted;
	    }

	    function open(node) {
	      function attr_str(a) {return ' ' + a.nodeName + '="' + escape(a.value) + '"';}
	      result += '<' + tag(node) + ArrayProto.map.call(node.attributes, attr_str).join('') + '>';
	    }

	    function close(node) {
	      result += '</' + tag(node) + '>';
	    }

	    function render(event) {
	      (event.event === 'start' ? open : close)(event.node);
	    }

	    while (original.length || highlighted.length) {
	      var stream = selectStream();
	      result += escape(value.substr(processed, stream[0].offset - processed));
	      processed = stream[0].offset;
	      if (stream === original) {
	        /*
	        On any opening or closing tag of the original markup we first close
	        the entire highlighted node stack, then render the original tag along
	        with all the following original tags at the same offset and then
	        reopen all the tags on the highlighted stack.
	        */
	        nodeStack.reverse().forEach(close);
	        do {
	          render(stream.splice(0, 1)[0]);
	          stream = selectStream();
	        } while (stream === original && stream.length && stream[0].offset === processed);
	        nodeStack.reverse().forEach(open);
	      } else {
	        if (stream[0].event === 'start') {
	          nodeStack.push(stream[0].node);
	        } else {
	          nodeStack.pop();
	        }
	        render(stream.splice(0, 1)[0]);
	      }
	    }
	    return result + escape(value.substr(processed));
	  }

	  /* Initialization */

	  function compileLanguage(language) {

	    function reStr(re) {
	        return (re && re.source) || re;
	    }

	    function langRe(value, global) {
	      return new RegExp(
	        reStr(value),
	        'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
	      );
	    }

	    function compileMode(mode, parent) {
	      if (mode.compiled)
	        return;
	      mode.compiled = true;

	      mode.keywords = mode.keywords || mode.beginKeywords;
	      if (mode.keywords) {
	        var compiled_keywords = {};

	        var flatten = function(className, str) {
	          if (language.case_insensitive) {
	            str = str.toLowerCase();
	          }
	          str.split(' ').forEach(function(kw) {
	            var pair = kw.split('|');
	            compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
	          });
	        };

	        if (typeof mode.keywords === 'string') { // string
	          flatten('keyword', mode.keywords);
	        } else {
	          objectKeys(mode.keywords).forEach(function (className) {
	            flatten(className, mode.keywords[className]);
	          });
	        }
	        mode.keywords = compiled_keywords;
	      }
	      mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

	      if (parent) {
	        if (mode.beginKeywords) {
	          mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
	        }
	        if (!mode.begin)
	          mode.begin = /\B|\b/;
	        mode.beginRe = langRe(mode.begin);
	        if (!mode.end && !mode.endsWithParent)
	          mode.end = /\B|\b/;
	        if (mode.end)
	          mode.endRe = langRe(mode.end);
	        mode.terminator_end = reStr(mode.end) || '';
	        if (mode.endsWithParent && parent.terminator_end)
	          mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
	      }
	      if (mode.illegal)
	        mode.illegalRe = langRe(mode.illegal);
	      if (mode.relevance == null)
	        mode.relevance = 1;
	      if (!mode.contains) {
	        mode.contains = [];
	      }
	      var expanded_contains = [];
	      mode.contains.forEach(function(c) {
	        if (c.variants) {
	          c.variants.forEach(function(v) {expanded_contains.push(inherit(c, v));});
	        } else {
	          expanded_contains.push(c === 'self' ? mode : c);
	        }
	      });
	      mode.contains = expanded_contains;
	      mode.contains.forEach(function(c) {compileMode(c, mode);});

	      if (mode.starts) {
	        compileMode(mode.starts, parent);
	      }

	      var terminators =
	        mode.contains.map(function(c) {
	          return c.beginKeywords ? '\\.?(' + c.begin + ')\\.?' : c.begin;
	        })
	        .concat([mode.terminator_end, mode.illegal])
	        .map(reStr)
	        .filter(Boolean);
	      mode.terminators = terminators.length ? langRe(terminators.join('|'), true) : {exec: function(/*s*/) {return null;}};
	    }

	    compileMode(language);
	  }

	  /*
	  Core highlighting function. Accepts a language name, or an alias, and a
	  string with the code to highlight. Returns an object with the following
	  properties:

	  - relevance (int)
	  - value (an HTML string with highlighting markup)

	  */
	  function highlight(name, value, ignore_illegals, continuation) {

	    function subMode(lexeme, mode) {
	      for (var i = 0; i < mode.contains.length; i++) {
	        if (testRe(mode.contains[i].beginRe, lexeme)) {
	          return mode.contains[i];
	        }
	      }
	    }

	    function endOfMode(mode, lexeme) {
	      if (testRe(mode.endRe, lexeme)) {
	        while (mode.endsParent && mode.parent) {
	          mode = mode.parent;
	        }
	        return mode;
	      }
	      if (mode.endsWithParent) {
	        return endOfMode(mode.parent, lexeme);
	      }
	    }

	    function isIllegal(lexeme, mode) {
	      return !ignore_illegals && testRe(mode.illegalRe, lexeme);
	    }

	    function keywordMatch(mode, match) {
	      var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
	      return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
	    }

	    function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {
	      var classPrefix = noPrefix ? '' : options.classPrefix,
	          openSpan    = '<span class="' + classPrefix,
	          closeSpan   = leaveOpen ? '' : spanEndTag

	      openSpan += classname + '">';

	      return openSpan + insideSpan + closeSpan;
	    }

	    function processKeywords() {
	      var keyword_match, last_index, match, result;

	      if (!top.keywords)
	        return escape(mode_buffer);

	      result = '';
	      last_index = 0;
	      top.lexemesRe.lastIndex = 0;
	      match = top.lexemesRe.exec(mode_buffer);

	      while (match) {
	        result += escape(mode_buffer.substr(last_index, match.index - last_index));
	        keyword_match = keywordMatch(top, match);
	        if (keyword_match) {
	          relevance += keyword_match[1];
	          result += buildSpan(keyword_match[0], escape(match[0]));
	        } else {
	          result += escape(match[0]);
	        }
	        last_index = top.lexemesRe.lastIndex;
	        match = top.lexemesRe.exec(mode_buffer);
	      }
	      return result + escape(mode_buffer.substr(last_index));
	    }

	    function processSubLanguage() {
	      var explicit = typeof top.subLanguage === 'string';
	      if (explicit && !languages[top.subLanguage]) {
	        return escape(mode_buffer);
	      }

	      var result = explicit ?
	                   highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) :
	                   highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);

	      // Counting embedded language score towards the host language may be disabled
	      // with zeroing the containing mode relevance. Usecase in point is Markdown that
	      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
	      // score.
	      if (top.relevance > 0) {
	        relevance += result.relevance;
	      }
	      if (explicit) {
	        continuations[top.subLanguage] = result.top;
	      }
	      return buildSpan(result.language, result.value, false, true);
	    }

	    function processBuffer() {
	      result += (top.subLanguage != null ? processSubLanguage() : processKeywords());
	      mode_buffer = '';
	    }

	    function startNewMode(mode) {
	      result += mode.className? buildSpan(mode.className, '', true): '';
	      top = Object.create(mode, {parent: {value: top}});
	    }

	    function processLexeme(buffer, lexeme) {

	      mode_buffer += buffer;

	      if (lexeme == null) {
	        processBuffer();
	        return 0;
	      }

	      var new_mode = subMode(lexeme, top);
	      if (new_mode) {
	        if (new_mode.skip) {
	          mode_buffer += lexeme;
	        } else {
	          if (new_mode.excludeBegin) {
	            mode_buffer += lexeme;
	          }
	          processBuffer();
	          if (!new_mode.returnBegin && !new_mode.excludeBegin) {
	            mode_buffer = lexeme;
	          }
	        }
	        startNewMode(new_mode, lexeme);
	        return new_mode.returnBegin ? 0 : lexeme.length;
	      }

	      var end_mode = endOfMode(top, lexeme);
	      if (end_mode) {
	        var origin = top;
	        if (origin.skip) {
	          mode_buffer += lexeme;
	        } else {
	          if (!(origin.returnEnd || origin.excludeEnd)) {
	            mode_buffer += lexeme;
	          }
	          processBuffer();
	          if (origin.excludeEnd) {
	            mode_buffer = lexeme;
	          }
	        }
	        do {
	          if (top.className) {
	            result += spanEndTag;
	          }
	          if (!top.skip) {
	            relevance += top.relevance;
	          }
	          top = top.parent;
	        } while (top !== end_mode.parent);
	        if (end_mode.starts) {
	          startNewMode(end_mode.starts, '');
	        }
	        return origin.returnEnd ? 0 : lexeme.length;
	      }

	      if (isIllegal(lexeme, top))
	        throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');

	      /*
	      Parser should not reach this point as all types of lexemes should be caught
	      earlier, but if it does due to some bug make sure it advances at least one
	      character forward to prevent infinite looping.
	      */
	      mode_buffer += lexeme;
	      return lexeme.length || 1;
	    }

	    var language = getLanguage(name);
	    if (!language) {
	      throw new Error('Unknown language: "' + name + '"');
	    }

	    compileLanguage(language);
	    var top = continuation || language;
	    var continuations = {}; // keep continuations for sub-languages
	    var result = '', current;
	    for(current = top; current !== language; current = current.parent) {
	      if (current.className) {
	        result = buildSpan(current.className, '', true) + result;
	      }
	    }
	    var mode_buffer = '';
	    var relevance = 0;
	    try {
	      var match, count, index = 0;
	      while (true) {
	        top.terminators.lastIndex = index;
	        match = top.terminators.exec(value);
	        if (!match)
	          break;
	        count = processLexeme(value.substr(index, match.index - index), match[0]);
	        index = match.index + count;
	      }
	      processLexeme(value.substr(index));
	      for(current = top; current.parent; current = current.parent) { // close dangling modes
	        if (current.className) {
	          result += spanEndTag;
	        }
	      }
	      return {
	        relevance: relevance,
	        value: result,
	        language: name,
	        top: top
	      };
	    } catch (e) {
	      if (e.message && e.message.indexOf('Illegal') !== -1) {
	        return {
	          relevance: 0,
	          value: escape(value)
	        };
	      } else {
	        throw e;
	      }
	    }
	  }

	  /*
	  Highlighting with language detection. Accepts a string with the code to
	  highlight. Returns an object with the following properties:

	  - language (detected language)
	  - relevance (int)
	  - value (an HTML string with highlighting markup)
	  - second_best (object with the same structure for second-best heuristically
	    detected language, may be absent)

	  */
	  function highlightAuto(text, languageSubset) {
	    languageSubset = languageSubset || options.languages || objectKeys(languages);
	    var result = {
	      relevance: 0,
	      value: escape(text)
	    };
	    var second_best = result;
	    languageSubset.filter(getLanguage).forEach(function(name) {
	      var current = highlight(name, text, false);
	      current.language = name;
	      if (current.relevance > second_best.relevance) {
	        second_best = current;
	      }
	      if (current.relevance > result.relevance) {
	        second_best = result;
	        result = current;
	      }
	    });
	    if (second_best.language) {
	      result.second_best = second_best;
	    }
	    return result;
	  }

	  /*
	  Post-processing of the highlighted markup:

	  - replace TABs with something more useful
	  - replace real line-breaks with '<br>' for non-pre containers

	  */
	  function fixMarkup(value) {
	    return !(options.tabReplace || options.useBR)
	      ? value
	      : value.replace(fixMarkupRe, function(match, p1) {
	          if (options.useBR && match === '\n') {
	            return '<br>';
	          } else if (options.tabReplace) {
	            return p1.replace(/\t/g, options.tabReplace);
	          }
	      });
	  }

	  function buildClassName(prevClassName, currentLang, resultLang) {
	    var language = currentLang ? aliases[currentLang] : resultLang,
	        result   = [prevClassName.trim()];

	    if (!prevClassName.match(/\bhljs\b/)) {
	      result.push('hljs');
	    }

	    if (prevClassName.indexOf(language) === -1) {
	      result.push(language);
	    }

	    return result.join(' ').trim();
	  }

	  /*
	  Applies highlighting to a DOM node containing code. Accepts a DOM node and
	  two optional parameters for fixMarkup.
	  */
	  function highlightBlock(block) {
	    var node, originalStream, result, resultNode, text;
	    var language = blockLanguage(block);

	    if (isNotHighlighted(language))
	        return;

	    if (options.useBR) {
	      node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
	      node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
	    } else {
	      node = block;
	    }
	    text = node.textContent;
	    result = language ? highlight(language, text, true) : highlightAuto(text);

	    originalStream = nodeStream(node);
	    if (originalStream.length) {
	      resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
	      resultNode.innerHTML = result.value;
	      result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
	    }
	    result.value = fixMarkup(result.value);

	    block.innerHTML = result.value;
	    block.className = buildClassName(block.className, language, result.language);
	    block.result = {
	      language: result.language,
	      re: result.relevance
	    };
	    if (result.second_best) {
	      block.second_best = {
	        language: result.second_best.language,
	        re: result.second_best.relevance
	      };
	    }
	  }

	  /*
	  Updates highlight.js global options with values passed in the form of an object.
	  */
	  function configure(user_options) {
	    options = inherit(options, user_options);
	  }

	  /*
	  Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
	  */
	  function initHighlighting() {
	    if (initHighlighting.called)
	      return;
	    initHighlighting.called = true;

	    var blocks = document.querySelectorAll('pre code');
	    ArrayProto.forEach.call(blocks, highlightBlock);
	  }

	  /*
	  Attaches highlighting to the page load event.
	  */
	  function initHighlightingOnLoad() {
	    addEventListener('DOMContentLoaded', initHighlighting, false);
	    addEventListener('load', initHighlighting, false);
	  }

	  function registerLanguage(name, language) {
	    var lang = languages[name] = language(hljs);
	    if (lang.aliases) {
	      lang.aliases.forEach(function(alias) {aliases[alias] = name;});
	    }
	  }

	  function listLanguages() {
	    return objectKeys(languages);
	  }

	  function getLanguage(name) {
	    name = (name || '').toLowerCase();
	    return languages[name] || languages[aliases[name]];
	  }

	  /* Interface definition */

	  hljs.highlight = highlight;
	  hljs.highlightAuto = highlightAuto;
	  hljs.fixMarkup = fixMarkup;
	  hljs.highlightBlock = highlightBlock;
	  hljs.configure = configure;
	  hljs.initHighlighting = initHighlighting;
	  hljs.initHighlightingOnLoad = initHighlightingOnLoad;
	  hljs.registerLanguage = registerLanguage;
	  hljs.listLanguages = listLanguages;
	  hljs.getLanguage = getLanguage;
	  hljs.inherit = inherit;

	  // Common regexps
	  hljs.IDENT_RE = '[a-zA-Z]\\w*';
	  hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
	  hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
	  hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
	  hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
	  hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

	  // Common modes
	  hljs.BACKSLASH_ESCAPE = {
	    begin: '\\\\[\\s\\S]', relevance: 0
	  };
	  hljs.APOS_STRING_MODE = {
	    className: 'string',
	    begin: '\'', end: '\'',
	    illegal: '\\n',
	    contains: [hljs.BACKSLASH_ESCAPE]
	  };
	  hljs.QUOTE_STRING_MODE = {
	    className: 'string',
	    begin: '"', end: '"',
	    illegal: '\\n',
	    contains: [hljs.BACKSLASH_ESCAPE]
	  };
	  hljs.PHRASAL_WORDS_MODE = {
	    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/
	  };
	  hljs.COMMENT = function (begin, end, inherits) {
	    var mode = hljs.inherit(
	      {
	        className: 'comment',
	        begin: begin, end: end,
	        contains: []
	      },
	      inherits || {}
	    );
	    mode.contains.push(hljs.PHRASAL_WORDS_MODE);
	    mode.contains.push({
	      className: 'doctag',
	      begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
	      relevance: 0
	    });
	    return mode;
	  };
	  hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
	  hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
	  hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
	  hljs.NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.NUMBER_RE,
	    relevance: 0
	  };
	  hljs.C_NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.C_NUMBER_RE,
	    relevance: 0
	  };
	  hljs.BINARY_NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.BINARY_NUMBER_RE,
	    relevance: 0
	  };
	  hljs.CSS_NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.NUMBER_RE + '(' +
	      '%|em|ex|ch|rem'  +
	      '|vw|vh|vmin|vmax' +
	      '|cm|mm|in|pt|pc|px' +
	      '|deg|grad|rad|turn' +
	      '|s|ms' +
	      '|Hz|kHz' +
	      '|dpi|dpcm|dppx' +
	      ')?',
	    relevance: 0
	  };
	  hljs.REGEXP_MODE = {
	    className: 'regexp',
	    begin: /\//, end: /\/[gimuy]*/,
	    illegal: /\n/,
	    contains: [
	      hljs.BACKSLASH_ESCAPE,
	      {
	        begin: /\[/, end: /\]/,
	        relevance: 0,
	        contains: [hljs.BACKSLASH_ESCAPE]
	      }
	    ]
	  };
	  hljs.TITLE_MODE = {
	    className: 'title',
	    begin: hljs.IDENT_RE,
	    relevance: 0
	  };
	  hljs.UNDERSCORE_TITLE_MODE = {
	    className: 'title',
	    begin: hljs.UNDERSCORE_IDENT_RE,
	    relevance: 0
	  };
	  hljs.METHOD_GUARD = {
	    // excludes method names from keyword processing
	    begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
	    relevance: 0
	  };

	  return hljs;
	}));


/***/ },
/* 143 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var VAR = {
	    className: 'variable',
	    variants: [
	      {begin: /\$[\w\d#@][\w\d_]*/},
	      {begin: /\$\{(.*?)}/}
	    ]
	  };
	  var QUOTE_STRING = {
	    className: 'string',
	    begin: /"/, end: /"/,
	    contains: [
	      hljs.BACKSLASH_ESCAPE,
	      VAR,
	      {
	        className: 'variable',
	        begin: /\$\(/, end: /\)/,
	        contains: [hljs.BACKSLASH_ESCAPE]
	      }
	    ]
	  };
	  var APOS_STRING = {
	    className: 'string',
	    begin: /'/, end: /'/
	  };

	  return {
	    aliases: ['sh', 'zsh'],
	    lexemes: /-?[a-z\.]+/,
	    keywords: {
	      keyword:
	        'if then else elif fi for while in do done case esac function',
	      literal:
	        'true false',
	      built_in:
	        // Shell built-ins
	        // http://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
	        'break cd continue eval exec exit export getopts hash pwd readonly return shift test times ' +
	        'trap umask unset ' +
	        // Bash built-ins
	        'alias bind builtin caller command declare echo enable help let local logout mapfile printf ' +
	        'read readarray source type typeset ulimit unalias ' +
	        // Shell modifiers
	        'set shopt ' +
	        // Zsh built-ins
	        'autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles ' +
	        'compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate ' +
	        'fc fg float functions getcap getln history integer jobs kill limit log noglob popd print ' +
	        'pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit ' +
	        'unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof ' +
	        'zpty zregexparse zsocket zstyle ztcp',
	      _:
	        '-ne -eq -lt -gt -f -d -e -s -l -a' // relevance booster
	    },
	    contains: [
	      {
	        className: 'meta',
	        begin: /^#![^\n]+sh\s*$/,
	        relevance: 10
	      },
	      {
	        className: 'function',
	        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
	        returnBegin: true,
	        contains: [hljs.inherit(hljs.TITLE_MODE, {begin: /\w[\w\d_]*/})],
	        relevance: 0
	      },
	      hljs.HASH_COMMENT_MODE,
	      QUOTE_STRING,
	      APOS_STRING,
	      VAR
	    ]
	  };
	};

/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
	  var TAG_INTERNALS = {
	    endsWithParent: true,
	    illegal: /</,
	    relevance: 0,
	    contains: [
	      {
	        className: 'attr',
	        begin: XML_IDENT_RE,
	        relevance: 0
	      },
	      {
	        begin: /=\s*/,
	        relevance: 0,
	        contains: [
	          {
	            className: 'string',
	            endsParent: true,
	            variants: [
	              {begin: /"/, end: /"/},
	              {begin: /'/, end: /'/},
	              {begin: /[^\s"'=<>`]+/}
	            ]
	          }
	        ]
	      }
	    ]
	  };
	  return {
	    aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist'],
	    case_insensitive: true,
	    contains: [
	      {
	        className: 'meta',
	        begin: '<!DOCTYPE', end: '>',
	        relevance: 10,
	        contains: [{begin: '\\[', end: '\\]'}]
	      },
	      hljs.COMMENT(
	        '<!--',
	        '-->',
	        {
	          relevance: 10
	        }
	      ),
	      {
	        begin: '<\\!\\[CDATA\\[', end: '\\]\\]>',
	        relevance: 10
	      },
	      {
	        begin: /<\?(php)?/, end: /\?>/,
	        subLanguage: 'php',
	        contains: [{begin: '/\\*', end: '\\*/', skip: true}]
	      },
	      {
	        className: 'tag',
	        /*
	        The lookahead pattern (?=...) ensures that 'begin' only matches
	        '<style' as a single word, followed by a whitespace or an
	        ending braket. The '$' is needed for the lexeme to be recognized
	        by hljs.subMode() that tests lexemes outside the stream.
	        */
	        begin: '<style(?=\\s|>|$)', end: '>',
	        keywords: {name: 'style'},
	        contains: [TAG_INTERNALS],
	        starts: {
	          end: '</style>', returnEnd: true,
	          subLanguage: ['css', 'xml']
	        }
	      },
	      {
	        className: 'tag',
	        // See the comment in the <style tag about the lookahead pattern
	        begin: '<script(?=\\s|>|$)', end: '>',
	        keywords: {name: 'script'},
	        contains: [TAG_INTERNALS],
	        starts: {
	          end: '\<\/script\>', returnEnd: true,
	          subLanguage: ['actionscript', 'javascript', 'handlebars', 'xml']
	        }
	      },
	      {
	        className: 'meta',
	        variants: [
	          {begin: /<\?xml/, end: /\?>/, relevance: 10},
	          {begin: /<\?\w+/, end: /\?>/}
	        ]
	      },
	      {
	        className: 'tag',
	        begin: '</?', end: '/?>',
	        contains: [
	          {
	            className: 'name', begin: /[^\/><\s]+/, relevance: 0
	          },
	          TAG_INTERNALS
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 145 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['js', 'jsx'],
	    keywords: {
	      keyword:
	        'in of if for while finally var new function do return void else break catch ' +
	        'instanceof with throw case default try this switch continue typeof delete ' +
	        'let yield const export super debugger as async await static ' +
	        // ECMAScript 6 modules import
	        'import from as'
	      ,
	      literal:
	        'true false null undefined NaN Infinity',
	      built_in:
	        'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
	        'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
	        'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
	        'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
	        'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
	        'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
	        'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' +
	        'Promise'
	    },
	    contains: [
	      {
	        className: 'meta',
	        relevance: 10,
	        begin: /^\s*['"]use (strict|asm)['"]/
	      },
	      {
	        className: 'meta',
	        begin: /^#!/, end: /$/
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      { // template string
	        className: 'string',
	        begin: '`', end: '`',
	        contains: [
	          hljs.BACKSLASH_ESCAPE,
	          {
	            className: 'subst',
	            begin: '\\$\\{', end: '\\}'
	          }
	        ]
	      },
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'number',
	        variants: [
	          { begin: '\\b(0[bB][01]+)' },
	          { begin: '\\b(0[oO][0-7]+)' },
	          { begin: hljs.C_NUMBER_RE }
	        ],
	        relevance: 0
	      },
	      { // "value" container
	        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
	        keywords: 'return throw case',
	        contains: [
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE,
	          hljs.REGEXP_MODE,
	          { // E4X / JSX
	            begin: /</, end: /(\/\w+|\w+\/)>/,
	            subLanguage: 'xml',
	            contains: [
	              {begin: /<\w+\s*\/>/, skip: true},
	              {begin: /<\w+/, end: /(\/\w+|\w+\/)>/, skip: true, contains: ['self']}
	            ]
	          }
	        ],
	        relevance: 0
	      },
	      {
	        className: 'function',
	        beginKeywords: 'function', end: /\{/, excludeEnd: true,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {begin: /[A-Za-z$_][0-9A-Za-z$_]*/}),
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            excludeBegin: true,
	            excludeEnd: true,
	            contains: [
	              hljs.C_LINE_COMMENT_MODE,
	              hljs.C_BLOCK_COMMENT_MODE
	            ]
	          }
	        ],
	        illegal: /\[|%/
	      },
	      {
	        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
	      },
	      hljs.METHOD_GUARD,
	      { // ES6 class
	        className: 'class',
	        beginKeywords: 'class', end: /[{;=]/, excludeEnd: true,
	        illegal: /[:"\[\]]/,
	        contains: [
	          {beginKeywords: 'extends'},
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        beginKeywords: 'constructor', end: /\{/, excludeEnd: true
	      }
	    ],
	    illegal: /#(?!!)/
	  };
	};

/***/ },
/* 146 */
/***/ function(module, exports) {

	module.exports = function(hljs) {
	  var IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
	  var VARIABLE = {
	    className: 'variable',
	    begin: '(\\$' + IDENT_RE + ')\\b'
	  };
	  var HEXCOLOR = {
	    className: 'number', begin: '#[0-9A-Fa-f]+'
	  };
	  var DEF_INTERNALS = {
	    className: 'attribute',
	    begin: '[A-Z\\_\\.\\-]+', end: ':',
	    excludeEnd: true,
	    illegal: '[^\\s]',
	    starts: {
	      endsWithParent: true, excludeEnd: true,
	      contains: [
	        HEXCOLOR,
	        hljs.CSS_NUMBER_MODE,
	        hljs.QUOTE_STRING_MODE,
	        hljs.APOS_STRING_MODE,
	        hljs.C_BLOCK_COMMENT_MODE,
	        {
	          className: 'meta', begin: '!important'
	        }
	      ]
	    }
	  };
	  return {
	    case_insensitive: true,
	    illegal: '[=/|\']',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'selector-id', begin: '\\#[A-Za-z0-9_-]+',
	        relevance: 0
	      },
	      {
	        className: 'selector-class', begin: '\\.[A-Za-z0-9_-]+',
	        relevance: 0
	      },
	      {
	        className: 'selector-attr', begin: '\\[', end: '\\]',
	        illegal: '$'
	      },
	      {
	        className: 'selector-tag', // begin: IDENT_RE, end: '[,|\\s]'
	        begin: '\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b',
	        relevance: 0
	      },
	      {
	        begin: ':(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)'
	      },
	      {
	        begin: '::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)'
	      },
	      VARIABLE,
	      {
	        className: 'attribute',
	        begin: '\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b',
	        illegal: '[^\\s]'
	      },
	      {
	        begin: '\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b'
	      },
	      {
	        begin: ':', end: ';',
	        contains: [
	          VARIABLE,
	          HEXCOLOR,
	          hljs.CSS_NUMBER_MODE,
	          hljs.QUOTE_STRING_MODE,
	          hljs.APOS_STRING_MODE,
	          {
	            className: 'meta', begin: '!important'
	          }
	        ]
	      },
	      {
	        begin: '@', end: '[{;]',
	        keywords: 'mixin include extend for if else each while charset import debug media page content font-face namespace warn',
	        contains: [
	          VARIABLE,
	          hljs.QUOTE_STRING_MODE,
	          hljs.APOS_STRING_MODE,
	          HEXCOLOR,
	          hljs.CSS_NUMBER_MODE,
	          {
	            begin: '\\s[A-Za-z0-9_.-]+',
	            relevance: 0
	          }
	        ]
	      }
	    ]
	  };
	};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var React = __webpack_require__(1);
	var DocsArticle = __webpack_require__(140);

	var Philosophy = React.createClass({
	  displayName: 'Philosophy',

	  render: function render() {
	    return React.createElement(
	      DocsArticle,
	      { title: 'Philosophy', colorIndex: 'neutral-1' },
	      React.createElement(
	        'p',
	        null,
	        'Our philosophy of user experience design is based on understanding our users, and understanding their needs.  These principles serve as the design rationale for the style guide and the accompanying implementation. With any list of this nature, there is always more that could be added. Indeed a small library of books has been written on this topic. We hope these serve as the footing of your next project.'
	      ),
	      React.createElement(
	        'section',
	        null,
	        React.createElement(
	          'a',
	          { className: 'reference', id: 'best-practices' },
	          ' '
	        ),
	        React.createElement(
	          'h2',
	          null,
	          'Best Practices'
	        ),
	        React.createElement(
	          'dl',
	          null,
	          React.createElement(
	            'dt',
	            null,
	            'Know your users'
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'It\'s critically important that you know your users.  Get to know some of them on a personal level such that you are able to generalize their behavior and the rational for their work practices and decisions.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            'Your users are not like you'
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'You are likely an advanced user of your application and are aware of every detail of an application.  That can lead to elevated expectations of your users.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            'All users are not the same'
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Different users have different background and goals.  Each user has a set of previous experiences that influence their expectations of your application.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            'Let the user take control'
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Provide ways for users to experience work with purpose and efficiency by eliminating their pain points and allow them to craft their experience.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            'Content over chrome'
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'You can have a gorgeous interface but if your content is hidden or the interactions are clumsy you are missing the point. Focus on the things that will deliver the greatest value to your user.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            'Don’t drown the user in data'
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Carefully choose what you present to your users. If there is too much information available they may miss the relevant details.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            'Innovate with intention'
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Let your innovation shine through but remember that your product will be used by users who are using other products in a portfolio of applications.  You do not want your application to feel or behave differently in the core areas of navigation and interaction.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            'Consistency across the application'
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Use common elements described in this style guide throughout your application. Users prefer repetition and are comfortable with familiar patterns.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            'Tell a story and use metaphors'
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Stories are irresistible to humans. Telling a story will help users connect with your product.  Metaphors help users quickly establish a mental model of your product.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            'There are no user errors'
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Humans are error prone.  It is our job to design interfaces that expect human error and handle it robustly.  You should prevent errors wherever possible and clearly inform users of the consequences of a pending operation.  Use a friendly voice for system errors and take accountability for the interruption.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            'Think about the entire user experience'
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Understand how your customers will interact with your product. Talk with different users to understand all the touch points. Consider creating a user journey for each persona. Share this deliverable with your team to leverage the impact of each person’s role in the project, increasing individual ownership and commitment.'
	          )
	        )
	      ),
	      React.createElement(
	        'section',
	        null,
	        React.createElement(
	          'a',
	          { className: 'reference', id: 'usability' },
	          ' '
	        ),
	        React.createElement(
	          'h2',
	          null,
	          'Usability'
	        ),
	        React.createElement(
	          'dl',
	          null,
	          React.createElement(
	            'dt',
	            null,
	            'Use progressive disclosure to create depth of content'
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Minimize content and avoid clutter in the interface by presenting the user with only the elements that make sense at a given point in the experience. Then progressively grow the experience as necessary.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            'Use simple messages'
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'In user interfaces, massive amounts of text are usually treated as blocks of irrelevant information. If you want people to be aware of your content use short phrases or bullet points instead, or highlight important data and messages with proper styling.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            'Provided tutorials vs. contextual help'
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Well designed tutorials enable your user to remember how the product works and they will need less hand holding while navigating through your interface.'
	          )
	        )
	      ),
	      React.createElement(
	        'section',
	        null,
	        React.createElement(
	          'a',
	          { className: 'reference', id: 'interactions' },
	          ' '
	        ),
	        React.createElement(
	          'h2',
	          null,
	          'Interactions'
	        ),
	        React.createElement(
	          'dl',
	          null,
	          React.createElement(
	            'dt',
	            null,
	            'Use device appropriate gestures and interactions'
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Users expect interfaces to work naturally on their device. Delight your users by providing the expected interactions for the device they are using.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            'Use animation to explain transitions and aid discovery'
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Animations should be natural and reinforce the user’s interaction with  your application.  They should not be distracting or disruptive.'
	          )
	        )
	      ),
	      React.createElement(
	        'section',
	        null,
	        React.createElement(
	          'a',
	          { className: 'reference', id: 'mobile' },
	          ' '
	        ),
	        React.createElement(
	          'h2',
	          null,
	          'Mobile'
	        ),
	        React.createElement(
	          'p',
	          null,
	          'Mobile is not just different screen sizes. Mobile devices actually change the fundamental user user experience of common tasks. Embrace the devices and their native capabilities.'
	        ),
	        React.createElement(
	          'dl',
	          null,
	          React.createElement(
	            'dt',
	            null,
	            'Think mobile first'
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Designing for mobile first is very beneficial even if your main focus is not on mobile. Doing so can help eliminate non-essential information while reinforcing the most important information.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            'Consider new use cases'
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'What are the scenarios where people will be using your application outside of the traditional desktop environment? Reevaluate the need to have some features and capabilities designed for smaller screens. Take advantage of the capabilities that mobile devices have to offer such as a camera and notifications when designing your application.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            'New devices sizes'
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Do not plan your designs with a specific and unique resolution in mind. Consider that new devices are launched through the year. The more fluid your design is the better your application will behave, regardless of the resolution and density of the screen.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            'New device capabilities: GPS, camera, accelerometer, etc.'
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'You can use these new capabilities to implement features that require geopositioning and location. Use the device orientation to provide a different view of the same screen or some related data.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            'Gestures'
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Users become accustomed to gesture support on their platform. Swiping, pinching, zooming, and even multi-finger gestures are becoming commonplace in mobile applications.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            'Appropriately sized tap targets'
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'A fingertip is less precise than a mouse pointer therefore needs a larger target. When designing for mobile remember to increase the size of buttons, form elements and controls.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            'No hover'
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Without the capacity to hover elements on a touch screen, be careful with the type of information or interaction that you associate with this action on the desktop version.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            'A desktop experience is not a mobile experience'
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Consider the context in which people will be using your application. Desktop and mobile experiences are far from seamless. For example, if you have a secondary feature that is composed of several steps and interactions, you may leave this experience for the desktop version only.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            'Selection is preferred over input controls'
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'It is much easier to select a value from a pre-populated list than it is to input a value into a field using a (virtual) keyboard.'
	          )
	        )
	      ),
	      React.createElement(
	        'section',
	        null,
	        React.createElement(
	          'a',
	          { className: 'reference', id: 'accessibility' },
	          ' '
	        ),
	        React.createElement(
	          'h2',
	          null,
	          'Accessibility'
	        ),
	        React.createElement(
	          'p',
	          null,
	          'Products that are accessible to all users are good for people, products, and business.  All users should be empowered with access and the ability to have a pleasant experience with your application.'
	        ),
	        React.createElement(
	          'p',
	          null,
	          'We follow the ',
	          React.createElement(
	            'a',
	            { href: 'http://www.w3.org/TR/WCAG20/' },
	            'Web Content Accessibility Guidelines (WCAG)'
	          ),
	          '.  By following this style guide and utilizing the accompanying implementation platform, you will be well on your way to satisfying the WCAG recommendations.'
	        )
	      )
	    );
	  }
	});

	module.exports = Philosophy;

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var React = __webpack_require__(1);
	var Router = __webpack_require__(2);
	var Route = Router.Route;
	var Link = Router.Link;

	var DocsSplit = __webpack_require__(136);
	var DocsArticle = __webpack_require__(140);
	var Menu = __webpack_require__(97);
	var Anchor = __webpack_require__(115);

	var HelloWorld = __webpack_require__(149);
	var GetStarted = __webpack_require__(150);

	var ActionsDoc = __webpack_require__(151);
	var BoxDoc = __webpack_require__(152);
	var DashboardDoc = __webpack_require__(153);
	var NavigationDoc = __webpack_require__(167);
	var MarqueeDoc = __webpack_require__(168);
	var WorldMapDoc = __webpack_require__(174);
	var AccordionDoc = __webpack_require__(177);
	var ContentCardDoc = __webpack_require__(191);
	var StackDoc = __webpack_require__(193);

	//hjjs configuration
	var hljs = __webpack_require__(142);
	hljs.registerLanguage('bash', __webpack_require__(143));
	hljs.registerLanguage('xml', __webpack_require__(144));
	hljs.registerLanguage('javascript', __webpack_require__(145));
	hljs.registerLanguage('scss', __webpack_require__(146));

	var CONTENTS = [{ label: 'Guides',
	  contents: [{ route: 'develop_helloworld', label: 'Hello World',
	    component: HelloWorld }, { route: 'develop_getstarted', label: 'Get Started',
	    component: GetStarted }]
	}, { label: 'Patterns',
	  contents: [{ route: 'develop_dashboard', label: 'Dashboard', component: DashboardDoc }, { route: 'develop_navigation', label: 'Navigation', component: NavigationDoc }, { route: 'develop_actions', label: 'Actions', component: ActionsDoc }]
	}, { label: 'Components',
	  contents: [{ route: 'develop_box', label: 'Box', component: BoxDoc }, { route: 'develop_marquee', label: 'Marquee', component: MarqueeDoc }, { route: 'develop_accordion', label: 'Accordion', component: AccordionDoc }, { route: 'develop_content-card', label: 'ContentCard', component: ContentCardDoc }, { route: 'develop_stack', label: 'Stack', component: StackDoc }, { route: 'develop_world-map', label: 'WorldMap', component: WorldMapDoc }]
	}];

	var Develop = React.createClass({
	  displayName: 'Develop',

	  contextTypes: {
	    routePrefix: React.PropTypes.string.isRequired
	  },

	  childContextTypes: {
	    routePrefix: React.PropTypes.string.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      routePrefix: this.context.routePrefix + 'develop/'
	    };
	  },

	  render: function render() {
	    var title = React.createElement(
	      Link,
	      { to: this.context.routePrefix + "develop" },
	      'Develop'
	    );
	    return React.createElement(
	      DocsSplit,
	      { title: title, contents: CONTENTS, onChange: this._highlightCode },
	      React.createElement(
	        DocsArticle,
	        { title: 'Develop', colorIndex: 'neutral-1' },
	        React.createElement(
	          'section',
	          null,
	          React.createElement(
	            'p',
	            null,
	            'Grommet was created to give developers and designers alike access to tools that otherwise are out of reach of most product teams. Grommet’s goal is to assist in creating experiences that work accross the many different interaction methods and screen sizes.'
	          ),
	          React.createElement(
	            Menu,
	            { direction: 'column' },
	            React.createElement(
	              Link,
	              { to: this.context.routePrefix + "develop/hello-world" },
	              React.createElement(
	                Anchor,
	                { tag: 'span', primary: true },
	                'Hello Grommet!'
	              )
	            ),
	            React.createElement(
	              Link,
	              { to: this.context.routePrefix + "develop/get-started" },
	              React.createElement(
	                Anchor,
	                { tag: 'span', primary: true },
	                'Get Started'
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var DevelopDocument = React.createClass({
	  displayName: 'DevelopDocument',


	  contextTypes: {
	    routePrefix: React.PropTypes.string.isRequired
	  },

	  childContextTypes: {
	    routePrefix: React.PropTypes.string.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      routePrefix: this.context.routePrefix + 'develop/'
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    this._highlightCode();
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    this._highlightCode();
	  },

	  _highlightCode: function _highlightCode() {
	    var nodes = document.querySelectorAll('pre code');
	    for (var i = 0; i < nodes.length; i++) {
	      hljs.highlightBlock(nodes[i]);
	    }
	  },

	  render: function render() {
	    var title = React.createElement(
	      Link,
	      { to: this.context.routePrefix + "develop" },
	      'Develop'
	    );
	    return React.createElement(
	      DocsSplit,
	      { title: title, contents: CONTENTS, onChange: this._highlightCode },
	      this.props.children
	    );
	  }
	});

	function createContentRoutes(contents) {
	  var result = [];
	  contents.forEach(function (content) {
	    result.push(React.createElement(Route, { key: content.label,
	      path: content.label.toLowerCase().replace(/ /g, "-"),
	      component: content.component }));
	    if (content.hasOwnProperty('contents')) {
	      result = result.concat(createContentRoutes(content.contents));
	    }
	  });
	  return result;
	}

	Develop.routes = function () {
	  var routes = createContentRoutes(CONTENTS);
	  return [React.createElement(Route, { key: 'top', path: 'develop', component: Develop }), React.createElement(
	    Route,
	    { key: 'docs', path: 'develop', component: DevelopDocument },
	    routes
	  )];
	};

	module.exports = Develop;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var React = __webpack_require__(1);
	var DocsArticle = __webpack_require__(140);

	var Router = __webpack_require__(2);
	var Link = Router.Link;

	var Anchor = __webpack_require__(115);

	var HelloWorld = React.createClass({
	  displayName: 'HelloWorld',

	  contextTypes: {
	    routePrefix: React.PropTypes.string.isRequired
	  },

	  render: function render() {
	    return React.createElement(
	      DocsArticle,
	      { title: 'Hello World', colorIndex: 'neutral-1' },
	      React.createElement(
	        'section',
	        null,
	        React.createElement(
	          'p',
	          null,
	          'The easiest way to learn a framework is by writing a simple application. In this section you will access the Grommet source from our server and you will be able to experiment with Grommet using just an HTML file and your browser.  You\'ll use hosted JavaScript files in this exercise which is not meant to be used in production.'
	        ),
	        React.createElement(
	          'p',
	          null,
	          'To help you get started quickly we provide the following ',
	          React.createElement(
	            'a',
	            { href: 'http://codepen.io/grommet/pen/gaEGPY/', target: '_blank' },
	            'codepen'
	          ),
	          ' template:'
	        ),
	        React.createElement(
	          'iframe',
	          { height: '268', scrolling: 'no',
	            src: '//codepen.io/grommet/embed/gaEGPY/?height=268&theme-id=0&default-tab=result',
	            frameBorder: 'no', allowTransparency: 'true', allowFullScreen: 'true',
	            style: { width: '100%' } },
	          'See the Pen',
	          React.createElement(
	            'a',
	            { href: 'http://codepen.io/grommet/pen/gaEGPY/' },
	            'Grommet Hello World'
	          ),
	          'by Grommet UX (',
	          React.createElement(
	            'a',
	            { href: 'http://codepen.io/grommet' },
	            '@grommet'
	          ),
	          ') on',
	          React.createElement(
	            'a',
	            { href: 'http://codepen.io' },
	            'CodePen'
	          ),
	          '.'
	        ),
	        React.createElement(
	          'p',
	          null,
	          'Also, there is a Github ',
	          React.createElement(
	            'a',
	            { href: 'https://gist.github.com/grommetux/fb257dcd546a58070db9',
	              target: '_blank' },
	            'Gist'
	          ),
	          ' that you can use to load this same Hello World app in your local computer.'
	        )
	      ),
	      React.createElement(
	        'section',
	        null,
	        React.createElement(
	          'h2',
	          null,
	          'Next Steps'
	        ),
	        React.createElement(
	          'p',
	          null,
	          'Now that you\'ve already played with Grommet, we recommend that you check out the ',
	          React.createElement(
	            Link,
	            { to: this.context.routePrefix + "get-started" },
	            React.createElement(
	              Anchor,
	              { tag: 'span' },
	              'Get Started'
	            )
	          ),
	          ' page and learn how to install Grommet in your local environment.'
	        )
	      )
	    );
	  }
	});

	module.exports = HelloWorld;

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(2);

	var _DocsArticle = __webpack_require__(140);

	var _DocsArticle2 = _interopRequireDefault(_DocsArticle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var GetStarted = function (_Component) {
	  _inherits(GetStarted, _Component);

	  function GetStarted() {
	    _classCallCheck(this, GetStarted);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(GetStarted).apply(this, arguments));
	  }

	  _createClass(GetStarted, [{
	    key: 'render',
	    value: function render() {
	      var architectureLink = _react2.default.createElement(
	        _reactRouter.Link,
	        { to: this.context.routePrefix + "architecture" },
	        'Architecture'
	      );

	      return _react2.default.createElement(
	        _DocsArticle2.default,
	        { title: 'Get Started', colorIndex: 'neutral-1' },
	        _react2.default.createElement(
	          'p',
	          null,
	          'Welcome to the Grommet Get Started page. Here you will find instructions on how to install Grommet in your local environment.'
	        ),
	        _react2.default.createElement(
	          'section',
	          null,
	          _react2.default.createElement(
	            'h2',
	            null,
	            'Get Dependencies'
	          ),
	          _react2.default.createElement(
	            'ol',
	            null,
	            _react2.default.createElement(
	              'li',
	              null,
	              'Install ',
	              _react2.default.createElement(
	                'a',
	                { href: 'http://git-scm.com/', target: '_blank' },
	                'Git'
	              ),
	              '. For Windows, you may like ',
	              _react2.default.createElement(
	                'a',
	                { href: 'http://msysgit.github.io/',
	                  target: '_blank' },
	                'Git for Windows'
	              ),
	              '.'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              'Install ',
	              _react2.default.createElement(
	                'a',
	                { href: 'https://nodejs.org/', target: '_blank' },
	                'Node.js'
	              ),
	              ' ',
	              _react2.default.createElement(
	                'i',
	                null,
	                '(at least Node 4.4.x+ and NPM 3.0.x+ required)'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              'Install ',
	              _react2.default.createElement(
	                'a',
	                { href: 'https://www.python.org/downloads/',
	                  target: '_blank' },
	                'Python 2.7'
	              ),
	              ' and add the installation directory to your system Path variable.'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              'For Windows, install ',
	              _react2.default.createElement(
	                'a',
	                {
	                  href: 'http://www.microsoft.com/en-us/download/details.aspx?id=11310',
	                  target: '_blank' },
	                'Windows SDK for Windows Server 2008 and .NET Framework 3.5'
	              ),
	              ' ',
	              _react2.default.createElement(
	                'i',
	                null,
	                '(Ensure that a C compiler is installed)'
	              ),
	              '.'
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                'p',
	                null,
	                'Setup your NPM proxy (only required if you\'re behind a proxy server).'
	              ),
	              _react2.default.createElement(
	                'pre',
	                null,
	                _react2.default.createElement(
	                  'code',
	                  { className: 'hljs bash' },
	                  "npm config set proxy http://{host}:{port}",
	                  _react2.default.createElement('br', null),
	                  "npm config set https-proxy https://{host}:{port}"
	                )
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                'If you encounter problems while downloading packages through an https proxy, try using the http protocol in your https-proxy variable, as in:'
	              ),
	              _react2.default.createElement(
	                'pre',
	                null,
	                _react2.default.createElement(
	                  'code',
	                  { className: 'hljs bash' },
	                  "npm config set https-proxy http://{host}:{port}"
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'h2',
	            null,
	            'Get Going'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'You can install Grommet using either of the methods below.'
	          ),
	          _react2.default.createElement(
	            'h4',
	            null,
	            'NPM'
	          ),
	          _react2.default.createElement(
	            'ol',
	            null,
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                'p',
	                null,
	                'Install Gulp globally (make sure to run as an admin).'
	              ),
	              _react2.default.createElement(
	                'pre',
	                null,
	                _react2.default.createElement(
	                  'code',
	                  { className: 'hljs bash' },
	                  'npm install -g gulp'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                'p',
	                null,
	                'Install Grommet globally (make sure to run as an admin).'
	              ),
	              _react2.default.createElement(
	                'pre',
	                null,
	                _react2.default.createElement(
	                  'code',
	                  { className: 'hljs bash' },
	                  'npm install -g grommet'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                'p',
	                null,
	                'Use the Grommet generator to bootstrap your new app.'
	              ),
	              _react2.default.createElement(
	                'pre',
	                null,
	                _react2.default.createElement(
	                  'code',
	                  { className: 'hljs bash' },
	                  "grommet init sample-app",
	                  _react2.default.createElement('br', null),
	                  "cd sample-app"
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                'p',
	                null,
	                'Start a development server with hot reload enabled.'
	              ),
	              _react2.default.createElement(
	                'pre',
	                null,
	                _react2.default.createElement(
	                  'code',
	                  { className: 'hljs bash' },
	                  'gulp dev'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                'p',
	                null,
	                'Open http://localhost:9000/webpack-dev-server/'
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                'At this point, you should be able to see the application dashboard running.'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'h4',
	            null,
	            'Bower'
	          ),
	          _react2.default.createElement(
	            'ol',
	            null,
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                'p',
	                null,
	                'Install ',
	                _react2.default.createElement(
	                  'a',
	                  { href: 'http://bower.io/', target: '_blank' },
	                  'Bower'
	                ),
	                _react2.default.createElement(
	                  'i',
	                  null,
	                  '(at least 1.x required)'
	                ),
	                '.'
	              ),
	              _react2.default.createElement(
	                'pre',
	                null,
	                _react2.default.createElement(
	                  'code',
	                  { className: 'hljs bash' },
	                  'npm install -g bower'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                'p',
	                null,
	                'Create an environment variable with your proxy settings (only required if you\'re behind a proxy server).'
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                _react2.default.createElement(
	                  'b',
	                  null,
	                  'Windows'
	                )
	              ),
	              _react2.default.createElement(
	                'pre',
	                null,
	                _react2.default.createElement(
	                  'code',
	                  { className: 'hljs bash' },
	                  "set HTTPS_PROXY=https://{host}:{port}"
	                )
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                _react2.default.createElement(
	                  'b',
	                  null,
	                  'Linux/OS X'
	                )
	              ),
	              _react2.default.createElement(
	                'pre',
	                null,
	                _react2.default.createElement(
	                  'code',
	                  { className: 'hljs bash' },
	                  "export HTTPS_PROXY=https://{host}:{port}"
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                'p',
	                null,
	                'Install Grommet.'
	              ),
	              _react2.default.createElement(
	                'pre',
	                null,
	                _react2.default.createElement(
	                  'code',
	                  { className: 'hljs bash' },
	                  'bower install grommet'
	                )
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                'At this point, a ',
	                _react2.default.createElement(
	                  'i',
	                  null,
	                  'bower_components'
	                ),
	                ' folder will be created which contains Grommet and its dependencies.'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                'p',
	                null,
	                'Open the sample application in your web browser.'
	              ),
	              _react2.default.createElement(
	                'pre',
	                null,
	                _react2.default.createElement(
	                  'code',
	                  { className: 'hljs bash' },
	                  'bower_components/grommet/sample-grommet.html'
	                )
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                'You can now play with Grommet using local Bower.'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'section',
	          null,
	          _react2.default.createElement(
	            'h2',
	            null,
	            'Next Steps'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'We recommend that you check out the ',
	            architectureLink,
	            ' page and learn how Grommet works internally.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'We also have a ',
	            _react2.default.createElement(
	              'a',
	              { href: 'http://vimeo.com/grommetux/videos' },
	              'Grommet Vimeo channel'
	            ),
	            ' with additional training materials.'
	          )
	        )
	      );
	    }
	  }]);

	  return GetStarted;
	}(_react.Component);

	GetStarted.contextTypes = {
	  routePrefix: _react2.default.PropTypes.string.isRequired
	};

	module.exports = GetStarted;

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var React = __webpack_require__(1);
	var DocsArticle = __webpack_require__(140);

	var ActionsDoc = React.createClass({
	  displayName: 'ActionsDoc',

	  render: function render() {
	    return React.createElement(
	      DocsArticle,
	      { title: 'Actions', colorIndex: 'neutral-2' },
	      React.createElement(
	        'p',
	        null,
	        'TBD'
	      ),
	      React.createElement(
	        'section',
	        null,
	        React.createElement(
	          'h2',
	          null,
	          'Example'
	        ),
	        React.createElement('div', { className: 'example' })
	      ),
	      React.createElement(
	        'section',
	        null,
	        React.createElement(
	          'h2',
	          null,
	          'Details'
	        ),
	        React.createElement(
	          'div',
	          { className: 'tbd' },
	          'TBD'
	        )
	      )
	    );
	  }
	});

	module.exports = ActionsDoc;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var React = __webpack_require__(1);
	var DocsArticle = __webpack_require__(140);
	var Box = __webpack_require__(83);

	var COLORS = ['brand', 'neutral-1', 'neutral-1-t', 'neutral-2', 'neutral-2-t', 'neutral-3', 'neutral-3-t', 'neutral-4', 'accent-1', 'accent-1-t', 'accent-2', 'accent-2-t', 'grey-1', 'grey-2', 'grey-3', 'grey-4', 'light-2', 'light-1', 'critical', 'warning', 'ok', 'unknown'];

	var BoxDoc = React.createClass({
	  displayName: 'BoxDoc',


	  render: function render() {
	    var inline = "<Box>\n  ...\n</Box>";

	    var coloredBoxes = COLORS.map(function (color) {
	      return React.createElement(
	        Box,
	        { key: color, colorIndex: color, pad: 'small' },
	        color
	      );
	    });

	    return React.createElement(
	      DocsArticle,
	      { title: 'Box', colorIndex: 'neutral-3' },
	      React.createElement(
	        'p',
	        null,
	        'General purpose flexible box layout. This does not support all of the',
	        React.createElement(
	          'a',
	          { href: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' },
	          ' flexbox capabilities'
	        ),
	        '.'
	      ),
	      React.createElement(
	        'pre',
	        null,
	        React.createElement(
	          'code',
	          { className: 'html hljs xml' },
	          inline
	        )
	      ),
	      React.createElement(
	        'section',
	        null,
	        React.createElement(
	          'h2',
	          null,
	          'Options'
	        ),
	        React.createElement(
	          'dl',
	          null,
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'a11yTitle    ',
	              "{string}"
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Custom title used by screen readers. Default is "Box". Only used if onClick handler is specified.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'align        start|center|end'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'How to align the contents along the cross axis.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'appCentered  true|false'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Whether the box background should stretch across an App that is centered.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'colorIndex   ',
	              "{category}-{index}"
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'The color identifier to use for the background color. For example: ',
	            React.createElement(
	              'code',
	              null,
	              '"neutral-1"'
	            )
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'direction    row|column'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'The orientation to layout the child components in. Defaults to ',
	            React.createElement(
	              'code',
	              null,
	              'column'
	            ),
	            '.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'focusable         true|false'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Whether keyboard focus should be added for clickable Boxes. Defaults to ',
	            React.createElement(
	              'code',
	              null,
	              'true'
	            ),
	            '.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'full         true|horizontal|vertical|false'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Whether the width and/or height should take the full viewport size.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'onClick      ',
	              "{func}"
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Optional click handler.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'justify      start|center|between|end'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'How to align the contents along the main axis.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'pad          ',
	              "none|small|medium|large|{...}"
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'The amount of padding to put around the contents. An object can be specified to distinguish horizontal padding, vertical padding, and padding between child components: ',
	            React.createElement(
	              'code',
	              null,
	              "{horizontal: none|small|medium|large, vertical: none|small|medium|large, between: none|small|medium|large}"
	            ),
	            '. Defaults to ',
	            React.createElement(
	              'code',
	              null,
	              'none'
	            ),
	            '. Padding set using ',
	            React.createElement(
	              'code',
	              null,
	              'between'
	            ),
	            ' only affects components based on the direction set (adds horizontal padding between components for ',
	            React.createElement(
	              'code',
	              null,
	              'row'
	            ),
	            ', or vertical padding between components for ',
	            React.createElement(
	              'code',
	              null,
	              'column'
	            ),
	            ').'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'primary      true|false'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Whether this is a primary Box that will receive skip to main content anchor. Default is false.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'reverse      true|false'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Whether to reverse the order of the child components.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'responsive   true|false'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Whether children laid out in a row direction should be switched to a column layout when the display area narrows. Defaults to ',
	            React.createElement(
	              'code',
	              null,
	              'true'
	            ),
	            '.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'separator   top|bottom|left|right'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Add a separator.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'size         auto|small|medium|large'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'The width of the Box.  Defaults to ',
	            React.createElement(
	              'code',
	              null,
	              'auto'
	            ),
	            '.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'tag          ',
	              "{text}"
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'The DOM tag to use for the element. Defaults to ',
	            React.createElement(
	              'code',
	              null,
	              'div'
	            ),
	            '.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'texture      ',
	              "{url}"
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'A texture image to apply to the background.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'wrap         true|false'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Whether children can wrap if they can\'t all fit. Defaults to ',
	            React.createElement(
	              'code',
	              null,
	              'true'
	            ),
	            '.'
	          )
	        )
	      ),
	      React.createElement(
	        'section',
	        null,
	        React.createElement(
	          'h2',
	          null,
	          'Examples'
	        ),
	        React.createElement(
	          'h3',
	          null,
	          'Default'
	        ),
	        React.createElement(
	          'div',
	          { className: 'example' },
	          React.createElement(
	            Box,
	            null,
	            React.createElement(
	              'div',
	              null,
	              'first'
	            ),
	            React.createElement(
	              'div',
	              null,
	              'second'
	            )
	          )
	        ),
	        React.createElement(
	          'pre',
	          null,
	          React.createElement(
	            'code',
	            { className: 'html hljs xml' },
	            "<Box> ..."
	          )
	        ),
	        React.createElement(
	          'h3',
	          null,
	          'Row'
	        ),
	        React.createElement(
	          'div',
	          { className: 'example' },
	          React.createElement(
	            Box,
	            { direction: 'row' },
	            React.createElement(
	              'div',
	              null,
	              'first'
	            ),
	            React.createElement(
	              'div',
	              null,
	              'second'
	            )
	          )
	        ),
	        React.createElement(
	          'pre',
	          null,
	          React.createElement(
	            'code',
	            { className: 'html hljs xml' },
	            "<Box direction=\"row\"> ..."
	          )
	        ),
	        React.createElement(
	          'h3',
	          null,
	          'Kitchen sink'
	        ),
	        React.createElement(
	          'div',
	          { className: 'example' },
	          React.createElement(
	            Box,
	            { direction: 'row', align: 'center', colorIndex: 'neutral-1', justify: 'between',
	              pad: 'large', reverse: true, tag: 'aside' },
	            React.createElement(
	              'div',
	              null,
	              'first'
	            ),
	            React.createElement(
	              'div',
	              null,
	              'second'
	            )
	          )
	        ),
	        React.createElement(
	          'pre',
	          null,
	          React.createElement(
	            'code',
	            { className: 'html hljs xml' },
	            "<Box direction=\"row\" align=\"center\" colorIndex=\"neutral-1\"\n  justify=\"between\" reverse={true} tag=\"aside\"> ..."
	          )
	        ),
	        React.createElement(
	          'h3',
	          null,
	          'Color indexes'
	        ),
	        React.createElement(
	          'div',
	          { className: 'example' },
	          React.createElement(
	            Box,
	            { direction: 'row', wrap: true },
	            coloredBoxes
	          )
	        ),
	        React.createElement(
	          'pre',
	          null,
	          React.createElement(
	            'code',
	            { className: 'html hljs xml' },
	            "<Box colorIndex=\"...\" pad=\"small\"> ..."
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = BoxDoc;

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var React = __webpack_require__(1);
	var DocsArticle = __webpack_require__(140);
	var Title = __webpack_require__(113);
	var Header = __webpack_require__(112);
	var Search = __webpack_require__(154);
	var Gravatar = __webpack_require__(156);
	var Tiles = __webpack_require__(119);
	var Tile = __webpack_require__(134);
	var Chart = __webpack_require__(157);
	var Meter = __webpack_require__(159);

	var dateSeries = [{ label: 'first', values: [[new Date(Date.parse("2015-05-22")), 4], [new Date(Date.parse("2015-05-21")), 2], [new Date(Date.parse("2015-05-20")), 3], [new Date(Date.parse("2015-05-19")), 3], [new Date(Date.parse("2015-05-18")), 2]], colorIndex: "graph-4" }];
	var dateSeriesXAxis = [{ label: 'May 22', value: dateSeries[0].values[0][0] }, { label: 'May 21', value: dateSeries[0].values[1][0] }, { label: 'May 20', value: dateSeries[0].values[2][0] }, { label: 'May 19', value: dateSeries[0].values[3][0] }, { label: 'May 18', value: dateSeries[0].values[4][0] }];

	var DashboardDoc = React.createClass({
	  displayName: 'DashboardDoc',

	  render: function render() {
	    return React.createElement(
	      DocsArticle,
	      { title: 'Dashboard', colorIndex: 'neutral-2' },
	      React.createElement(
	        'p',
	        null,
	        'The dashboard shows the most important information in the simplest way possible. Content on the dashboard provides direct navigation to further detail.'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'Typically it is the initial content shown after logging in. And, because the content is navigable, the dashboard functions well as a home page.'
	      ),
	      React.createElement(
	        'section',
	        null,
	        React.createElement(
	          'h2',
	          null,
	          'Example'
	        ),
	        React.createElement(
	          'div',
	          { className: 'example' },
	          React.createElement(
	            Header,
	            null,
	            React.createElement(
	              'span',
	              null,
	              React.createElement(
	                Title,
	                null,
	                React.createElement(
	                  'span',
	                  null,
	                  'App'
	                )
	              ),
	              React.createElement(Search, { inline: true })
	            ),
	            React.createElement(Gravatar, { email: '', 'default': 'mm' })
	          ),
	          React.createElement(
	            Tiles,
	            { fill: true, flush: false },
	            React.createElement(
	              Tile,
	              { wide: true },
	              React.createElement(Chart, { series: dateSeries, min: 0, max: 5, threshold: 2,
	                type: 'area', smooth: true, legend: {}, small: true,
	                xAxis: dateSeriesXAxis })
	            ),
	            React.createElement(
	              Tile,
	              null,
	              React.createElement(
	                Header,
	                { small: true },
	                React.createElement(
	                  'h4',
	                  null,
	                  'Utilization'
	                )
	              ),
	              React.createElement(Meter, { value: 40, type: 'arc', units: 'TB' })
	            ),
	            React.createElement(
	              Tile,
	              null,
	              React.createElement(
	                Header,
	                { small: true },
	                React.createElement(
	                  'h4',
	                  null,
	                  'Throughput'
	                )
	              ),
	              React.createElement(Meter, { value: 80, type: 'arc', units: 'GB/s' })
	            )
	          )
	        )
	      ),
	      React.createElement(
	        'section',
	        null,
	        React.createElement(
	          'h2',
	          null,
	          'Details'
	        ),
	        React.createElement(
	          'div',
	          { className: 'tbd' },
	          'TBD'
	        )
	      )
	    );
	  }
	});

	module.exports = DashboardDoc;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _typeof2 = __webpack_require__(24);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames4 = __webpack_require__(67);

	var _classnames5 = _interopRequireDefault(_classnames4);

	var _KeyboardAccelerators = __webpack_require__(87);

	var _KeyboardAccelerators2 = _interopRequireDefault(_KeyboardAccelerators);

	var _Drop = __webpack_require__(98);

	var _Drop2 = _interopRequireDefault(_Drop);

	var _Responsive = __webpack_require__(99);

	var _Responsive2 = _interopRequireDefault(_Responsive);

	var _Button = __webpack_require__(96);

	var _Button2 = _interopRequireDefault(_Button);

	var _Search = __webpack_require__(155);

	var _Search2 = _interopRequireDefault(_Search);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.SEARCH;
	var BACKGROUND_COLOR_INDEX = _CSSClassnames2.default.BACKGROUND_COLOR_INDEX;

	var Search = function (_Component) {
	  (0, _inherits3.default)(Search, _Component);

	  function Search(props) {
	    (0, _classCallCheck3.default)(this, Search);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Search).call(this, props));

	    _this._onAddDrop = _this._onAddDrop.bind(_this);
	    _this._onRemoveDrop = _this._onRemoveDrop.bind(_this);
	    _this._onFocusControl = _this._onFocusControl.bind(_this);
	    _this._onBlurControl = _this._onBlurControl.bind(_this);
	    _this._onFocusInput = _this._onFocusInput.bind(_this);
	    _this._onBlurInput = _this._onBlurInput.bind(_this);
	    _this._onChangeInput = _this._onChangeInput.bind(_this);
	    _this._onNextSuggestion = _this._onNextSuggestion.bind(_this);
	    _this._onPreviousSuggestion = _this._onPreviousSuggestion.bind(_this);
	    _this._onEnter = _this._onEnter.bind(_this);
	    _this._onClickSuggestion = _this._onClickSuggestion.bind(_this);
	    _this._onSink = _this._onSink.bind(_this);
	    _this._onResponsive = _this._onResponsive.bind(_this);

	    _this.state = {
	      align: 'left',
	      controlFocused: false,
	      inline: props.inline,
	      dropActive: false,
	      activeSuggestionIndex: -1
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(Search, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.inline && this.props.responsive) {
	        this._responsive = _Responsive2.default.start(this._onResponsive);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.suggestions && nextProps.suggestions.length > 0 && !this.state.dropActive && this.refs.input === document.activeElement) {
	        this.setState({ dropActive: true });
	      } else if ((!nextProps.suggestions || nextProps.suggestions.length === 0) && this.state.inline) {
	        this.setState({ dropActive: false });
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      // Set up keyboard listeners appropriate to the current state.

	      var activeKeyboardHandlers = {
	        esc: this._onRemoveDrop,
	        tab: this._onRemoveDrop,
	        up: this._onPreviousSuggestion,
	        down: this._onNextSuggestion,
	        enter: this._onEnter
	      };
	      var focusedKeyboardHandlers = {
	        space: this._onAddDrop
	      };

	      // the order here is important, need to turn off keys before turning on

	      if (!this.state.controlFocused && prevState.controlFocused) {
	        _KeyboardAccelerators2.default.stopListeningToKeyboard(this, focusedKeyboardHandlers);
	      }

	      if (!this.state.dropActive && prevState.dropActive) {
	        document.removeEventListener('click', this._onRemoveDrop);
	        _KeyboardAccelerators2.default.stopListeningToKeyboard(this, activeKeyboardHandlers);
	        if (this._drop) {
	          this._drop.remove();
	          this._drop = null;
	        }
	      }

	      if (this.state.controlFocused && !prevState.controlFocused) {
	        _KeyboardAccelerators2.default.startListeningToKeyboard(this, focusedKeyboardHandlers);
	      }

	      if (this.state.dropActive && !prevState.dropActive) {
	        // Slow down adding the click handler,
	        // otherwise the drop will close when the mouse is released.
	        // Not observable in Safari, 1ms is sufficient for Chrome,
	        // Firefox needs 100ms though. :(
	        // TODO: re-evaluate how to solve this without a timeout.
	        document.addEventListener('click', this._onRemoveDrop);
	        _KeyboardAccelerators2.default.startListeningToKeyboard(this, activeKeyboardHandlers);

	        var baseElement = void 0;
	        if (this.refs.control) {
	          baseElement = this.refs.control.firstChild;
	        } else {
	          baseElement = this.refs.input;
	        }
	        var dropAlign = this.props.dropAlign || {
	          top: this.state.inline ? 'bottom' : 'top',
	          left: 'left'
	        };
	        this._drop = _Drop2.default.add(baseElement, this._renderDrop(), { align: dropAlign });

	        if (!this.state.inline) {
	          document.getElementById('search-drop-input').focus();
	        }
	      } else if (this._drop) {
	        this._drop.render(this._renderDrop());
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      document.removeEventListener('click', this._onRemoveDrop);
	      _KeyboardAccelerators2.default.stopListeningToKeyboard(this);
	      if (this._responsive) {
	        this._responsive.stop();
	      }
	      if (this._drop) {
	        this._drop.remove();
	      }
	    }
	  }, {
	    key: '_onAddDrop',
	    value: function _onAddDrop(event) {
	      event.preventDefault();
	      this.setState({ dropActive: true, activeSuggestionIndex: -1 });
	    }
	  }, {
	    key: '_onRemoveDrop',
	    value: function _onRemoveDrop() {
	      this.setState({ dropActive: false });
	    }
	  }, {
	    key: '_onFocusControl',
	    value: function _onFocusControl() {
	      this.setState({
	        controlFocused: true,
	        dropActive: true,
	        activeSuggestionIndex: -1
	      });
	    }
	  }, {
	    key: '_onBlurControl',
	    value: function _onBlurControl() {
	      this.setState({ controlFocused: false });
	    }
	  }, {
	    key: '_onFocusInput',
	    value: function _onFocusInput() {
	      this.refs.input.select();
	      this.setState({
	        activeSuggestionIndex: -1
	      });
	    }
	  }, {
	    key: '_onBlurInput',
	    value: function _onBlurInput() {
	      //this.setState({drop: false});
	    }
	  }, {
	    key: '_fireDOMChange',
	    value: function _fireDOMChange() {
	      var event = void 0;
	      try {
	        event = new Event('change', {
	          'bubbles': true,
	          'cancelable': true
	        });
	      } catch (e) {
	        // IE11 workaround.
	        event = document.createEvent('Event');
	        event.initEvent('change', true, true);
	      }
	      var controlInput = document.getElementById('search-drop-input');
	      var target = this.refs.input || controlInput;
	      target.dispatchEvent(event);
	      this.props.onDOMChange(event);
	    }
	  }, {
	    key: '_onChangeInput',
	    value: function _onChangeInput(event) {
	      this.setState({ activeSuggestionIndex: -1 });
	      if (this.props.onDOMChange) {
	        this._fireDOMChange();
	      }
	    }
	  }, {
	    key: '_onNextSuggestion',
	    value: function _onNextSuggestion() {
	      var index = this.state.activeSuggestionIndex;
	      index = Math.min(index + 1, this.props.suggestions.length - 1);
	      this.setState({ activeSuggestionIndex: index });
	    }
	  }, {
	    key: '_onPreviousSuggestion',
	    value: function _onPreviousSuggestion() {
	      var index = this.state.activeSuggestionIndex;
	      index = Math.max(index - 1, 0);
	      this.setState({ activeSuggestionIndex: index });
	    }
	  }, {
	    key: '_onEnter',
	    value: function _onEnter(event) {

	      // for not inline search the enter should NOT submit the form
	      // in this case double enter is required
	      if (!this.props.inline) {
	        event.preventDefault(); // prevent submitting forms
	      }

	      this._onRemoveDrop();
	      var suggestion = void 0;
	      if (this.state.activeSuggestionIndex >= 0) {
	        suggestion = this.props.suggestions[this.state.activeSuggestionIndex];
	        this.setState({ value: suggestion });
	        if (this.props.onSelect) {
	          this.props.onSelect({
	            target: this.refs.input || this.refs.control,
	            suggestion: suggestion
	          }, true);
	        }
	      }
	    }
	  }, {
	    key: '_onClickSuggestion',
	    value: function _onClickSuggestion(suggestion) {
	      this._onRemoveDrop();

	      if (this.props.onSelect) {
	        this.props.onSelect({
	          target: this.refs.input || this.refs.control,
	          suggestion: suggestion
	        }, true);
	      }
	    }
	  }, {
	    key: '_onSink',
	    value: function _onSink(event) {
	      event.stopPropagation();
	      event.nativeEvent.stopImmediatePropagation();
	    }
	  }, {
	    key: '_onResponsive',
	    value: function _onResponsive(small) {
	      if (small) {
	        this.setState({ inline: false });
	      } else {
	        this.setState({ inline: this.props.inline });
	      }
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      var ref = this.refs.input || this.refs.control;
	      if (ref) {
	        ref.focus();
	      }
	    }
	  }, {
	    key: '_renderLabel',
	    value: function _renderLabel(suggestion) {
	      if ((typeof suggestion === 'undefined' ? 'undefined' : (0, _typeof3.default)(suggestion)) === 'object') {
	        return suggestion.label || suggestion.value;
	      } else {
	        return suggestion;
	      }
	    }
	  }, {
	    key: '_renderDrop',
	    value: function _renderDrop() {
	      var _classnames;

	      var classes = (0, _classnames5.default)((_classnames = {}, (0, _defineProperty3.default)(_classnames, BACKGROUND_COLOR_INDEX + '-' + this.props.dropColorIndex, this.props.dropColorIndex), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '__drop', true), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '__drop--controlled', !this.state.inline), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '__drop--large', this.props.large), _classnames));

	      var input = void 0;
	      if (!this.state.inline) {
	        input = _react2.default.createElement('input', { key: 'input', id: 'search-drop-input', type: 'search',
	          autoComplete: 'off',
	          defaultValue: this.props.defaultValue,
	          value: this.props.value,
	          className: CLASS_ROOT + '__input',
	          onChange: this._onChangeInput });
	      }

	      var suggestions = void 0;
	      if (this.props.suggestions) {
	        suggestions = this.props.suggestions.map(function (suggestion, index) {
	          var _classnames2;

	          var classes = (0, _classnames5.default)((_classnames2 = {}, (0, _defineProperty3.default)(_classnames2, CLASS_ROOT + '__suggestion', true), (0, _defineProperty3.default)(_classnames2, CLASS_ROOT + '__suggestion--active', index === this.state.activeSuggestionIndex), _classnames2));

	          return _react2.default.createElement(
	            'div',
	            { key: index,
	              className: classes,
	              onClick: this._onClickSuggestion.bind(this, suggestion) },
	            this._renderLabel(suggestion)
	          );
	        }, this);
	        suggestions = _react2.default.createElement(
	          'div',
	          { key: 'suggestions', className: CLASS_ROOT + '__suggestions' },
	          suggestions
	        );
	      }

	      var contents = [input, suggestions];

	      if (!this.state.inline) {
	        contents = [_react2.default.createElement(_Button2.default, { key: 'icon', icon: _react2.default.createElement(_Search2.default, null),
	          className: CLASS_ROOT + '__drop-control',
	          onClick: this._onRemoveDrop }), _react2.default.createElement(
	          'div',
	          { key: 'contents', className: CLASS_ROOT + '__drop-contents',
	            onClick: this._onSink },
	          contents
	        )];
	        if (this.props.dropAlign && !this.props.dropAlign.left) {
	          contents.reverse();
	        }
	      }

	      return _react2.default.createElement(
	        'div',
	        { id: 'search-drop', className: classes },
	        contents
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classnames3;

	      var classes = (0, _classnames5.default)(CLASS_ROOT, (_classnames3 = {}, (0, _defineProperty3.default)(_classnames3, CLASS_ROOT + '--controlled', !this.state.inline), (0, _defineProperty3.default)(_classnames3, CLASS_ROOT + '--fill', this.props.fill), (0, _defineProperty3.default)(_classnames3, CLASS_ROOT + '--icon-align-' + this.props.iconAlign, this.props.iconAlign), (0, _defineProperty3.default)(_classnames3, CLASS_ROOT + '--inline', this.state.inline), (0, _defineProperty3.default)(_classnames3, CLASS_ROOT + '--large', this.props.large && !this.props.size), (0, _defineProperty3.default)(_classnames3, CLASS_ROOT + '--' + this.props.size, this.props.size), _classnames3), this.props.className);

	      if (this.state.inline) {
	        return _react2.default.createElement(
	          'div',
	          { className: classes },
	          _react2.default.createElement('input', { ref: 'input', type: 'search',
	            id: this.props.id,
	            placeholder: this.props.placeHolder,
	            autoComplete: 'off',
	            defaultValue: this._renderLabel(this.props.defaultValue),
	            value: this._renderLabel(this.props.value),
	            className: CLASS_ROOT + '__input',
	            onFocus: this._onFocusInput,
	            onBlur: this._onBlurInput,
	            onChange: this._onChangeInput }),
	          _react2.default.createElement(_Search2.default, null)
	        );
	      } else {
	        return _react2.default.createElement(
	          'div',
	          { ref: 'control' },
	          _react2.default.createElement(_Button2.default, { id: this.props.id,
	            className: classes,
	            icon: _react2.default.createElement(_Search2.default, null),
	            tabIndex: '0',
	            onClick: this._onAddDrop,
	            onFocus: this._onFocusControl,
	            onBlur: this._onBlurControl })
	        );
	      }
	    }
	  }]);
	  return Search;
	}(_react.Component);

	Search.displayName = 'Search';
	exports.default = Search;


	Search.propTypes = {
	  defaultValue: _react.PropTypes.string,
	  dropAlign: _Drop2.default.alignPropType,
	  dropColorIndex: _react.PropTypes.string,
	  fill: _react.PropTypes.bool,
	  iconAlign: _react2.default.PropTypes.oneOf(['start', 'end']),
	  id: _react2.default.PropTypes.string,
	  inline: _react.PropTypes.bool,
	  onDOMChange: _react.PropTypes.func,
	  onSelect: _react.PropTypes.func,
	  placeHolder: _react.PropTypes.string,
	  responsive: _react.PropTypes.bool,
	  size: _react2.default.PropTypes.oneOf(['small', 'medium', 'large']),
	  suggestions: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.shape({
	    label: _react.PropTypes.node,
	    value: _react.PropTypes.any
	  }), _react.PropTypes.string])),
	  value: _react.PropTypes.string
	};

	Search.defaultProps = {
	  align: 'left',
	  iconAlign: 'end',
	  inline: false,
	  responsive: true
	};
	module.exports = exports['default'];

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _FormattedMessage = __webpack_require__(81);

	var _FormattedMessage2 = _interopRequireDefault(_FormattedMessage);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

	var Icon = function (_Component) {
	  (0, _inherits3.default)(Icon, _Component);

	  function Icon() {
	    (0, _classCallCheck3.default)(this, Icon);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var _props = this.props;
	      var a11yTitleId = _props.a11yTitleId;
	      var className = _props.className;
	      var colorIndex = _props.colorIndex;
	      var _props2 = this.props;
	      var a11yTitle = _props2.a11yTitle;
	      var size = _props2.size;


	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-search', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

	      a11yTitle = a11yTitle || _react2.default.createElement(_FormattedMessage2.default, { id: 'search', defaultMessage: 'search' });

	      return _react2.default.createElement(
	        'svg',
	        { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-labelledby': a11yTitleId },
	        _react2.default.createElement(
	          'title',
	          { id: a11yTitleId },
	          a11yTitle
	        ),
	        _react2.default.createElement(
	          'g',
	          null,
	          _react2.default.createElement('rect', { x: '0', fill: 'none', width: '24', height: '24' }),
	          _react2.default.createElement('path', { fill: 'none', stroke: '#000000', strokeWidth: '2', strokeMiterlimit: '10', d: 'M18,9.5c0,4.6944-3.8056,8.5-8.5,8.5\r S1,14.1944,1,9.5S4.8056,1,9.5,1S18,4.8056,18,9.5z M16,16l7,7' })
	        )
	      );
	    }
	  }]);
	  return Icon;
	}(_react.Component);

	Icon.displayName = 'Icon';
	exports.default = Icon;
	;

	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  a11yTitleId: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge'])
	};

	Icon.defaultProps = {
	  a11yTitleId: 'search-title'
	};

	Icon.icon = true;

	Icon.displayName = 'Search';
	module.exports = exports['default'];

/***/ },
/* 156 */
/***/ function(module, exports) {

	module.exports = require("react-gravatar");

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(88);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Legend = __webpack_require__(158);

	var _Legend2 = _interopRequireDefault(_Legend);

	var _Intl = __webpack_require__(90);

	var _Intl2 = _interopRequireDefault(_Intl);

	var _KeyboardAccelerators = __webpack_require__(87);

	var _KeyboardAccelerators2 = _interopRequireDefault(_KeyboardAccelerators);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.CHART;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

	var DEFAULT_WIDTH = 384;
	var DEFAULT_HEIGHT = 192;
	var XAXIS_HEIGHT = 24;
	var YAXIS_WIDTH = 12;
	var BAR_PADDING = 2;
	var MIN_LABEL_WIDTH = 48;
	var SPARKLINE_STEP_WIDTH = 6;
	var SPARKLINE_BAR_PADDING = 1;
	var POINT_RADIUS = 6;
	var BAR_SEGMENT_HEIGHT = 18; // 12 + 6 tied to stroke-dashoffset in CSS

	var Chart = function (_Component) {
	  (0, _inherits3.default)(Chart, _Component);

	  function Chart(props) {
	    (0, _classCallCheck3.default)(this, Chart);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Chart).call(this, props));

	    _this._onRequestForNextLegend = _this._onRequestForNextLegend.bind(_this);
	    _this._onRequestForPreviousLegend = _this._onRequestForPreviousLegend.bind(_this);
	    _this._onMouseOver = _this._onMouseOver.bind(_this);
	    _this._onMouseOut = _this._onMouseOut.bind(_this);
	    _this._onResize = _this._onResize.bind(_this);
	    _this._layout = _this._layout.bind(_this);

	    _this.state = _this._stateFromProps(props, DEFAULT_WIDTH, DEFAULT_HEIGHT);
	    return _this;
	  }

	  (0, _createClass3.default)(Chart, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('resize', this._onResize);
	      this._onResize();

	      //only add listerners if graph is interactive
	      if (this.props.legend) {
	        this._keyboardHandlers = {
	          left: this._onRequestForPreviousLegend,
	          up: this._onRequestForPreviousLegend,
	          right: this._onRequestForNextLegend,
	          down: this._onRequestForNextLegend
	        };
	        _KeyboardAccelerators2.default.startListeningToKeyboard(this, this._keyboardHandlers);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var state = this._stateFromProps(newProps, this.state.width, this.state.height);
	      this.setState(state);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this._layout();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this._resizeTimer);
	      window.removeEventListener('resize', this._onResize);

	      if (this.props.legend) {
	        _KeyboardAccelerators2.default.stopListeningToKeyboard(this, this._keyboardHandlers);
	      }
	    }
	  }, {
	    key: '_onRequestForNextLegend',
	    value: function _onRequestForNextLegend(event) {
	      if (document.activeElement === this.refs.chart) {
	        event.preventDefault();
	        var totalBandCount = _reactDom2.default.findDOMNode(this.refs.front).childNodes.length;

	        if (this.state.highlightXIndex - 1 < 0) {
	          this._onMouseOver(totalBandCount - 1);
	        } else {
	          this._onMouseOver(this.state.highlightXIndex - 1);
	        }

	        //stop event propagation
	        return true;
	      }
	    }
	  }, {
	    key: '_onRequestForPreviousLegend',
	    value: function _onRequestForPreviousLegend(event) {
	      if (document.activeElement === this.refs.chart) {
	        event.preventDefault();
	        var totalBandCount = _reactDom2.default.findDOMNode(this.refs.front).childNodes.length;

	        if (this.state.highlightXIndex + 1 >= totalBandCount) {
	          this._onMouseOver(0);
	        } else {
	          this._onMouseOver(this.state.highlightXIndex + 1);
	        }

	        //stop event propagation
	        return true;
	      }
	    }
	  }, {
	    key: '_onMouseOver',
	    value: function _onMouseOver(xIndex) {
	      this.setState({ highlightXIndex: xIndex });
	    }
	  }, {
	    key: '_onMouseOut',
	    value: function _onMouseOut() {
	      this.setState({ highlightXIndex: this.state.defaultXIndex });
	    }
	  }, {
	    key: '_onResize',
	    value: function _onResize() {
	      // debounce
	      clearTimeout(this._resizeTimer);
	      this._resizeTimer = setTimeout(this._layout, 50);
	    }

	    // Performs some initial calculations to make subsequent calculations easier.

	  }, {
	    key: '_bounds',
	    value: function _bounds(series, xAxisArg, width, height) {
	      // normalize xAxis
	      var xAxis = void 0;
	      if (xAxisArg) {
	        if (xAxisArg.data) {
	          xAxis = xAxisArg;
	        } else {
	          xAxis = {
	            data: xAxisArg,
	            placement: 'top'
	          };
	        }
	      } else {
	        xAxis = { data: [] };
	      }

	      // analyze series data
	      var minX = null;
	      var maxX = null;
	      var minY = null;
	      var maxY = null;

	      series.forEach(function (item) {
	        item.values.forEach(function (value, xIndex) {
	          var x = void 0,
	              y = void 0;
	          if (Array.isArray(value)) {
	            x = value[0];
	            y = value[1];
	          } else {
	            x = value.x;
	            y = value.y;
	          }

	          if (null === minX) {
	            minX = x;
	            maxX = x;
	            minY = y;
	            maxY = y;
	          } else {
	            minX = Math.min(minX, x);
	            maxX = Math.max(maxX, x);
	            minY = Math.min(minY, y);
	            maxY = Math.max(maxY, y);
	          }
	          if (xIndex >= xAxis.data.length) {
	            xAxis.data.push({ value: x, label: '' });
	          }
	        });
	      });

	      if (null === minX) {
	        minX = 0;
	        maxX = 1;
	        minY = 0;
	        maxY = 100;
	      }

	      if ('bar' === this.props.type) {
	        xAxis.data.forEach(function (obj, xIndex) {
	          var sumY = 0;
	          series.forEach(function (item) {
	            var value = item.values[xIndex];
	            var y = Array.isArray(value) ? value[1] : value.y;
	            sumY += y;
	          });
	          maxY = Math.max(maxY, sumY);
	        });
	      }

	      if (this.props.threshold) {
	        minY = Math.min(minY, this.props.threshold);
	        maxY = Math.max(maxY, this.props.threshold);
	      }
	      if (this.props.thresholds) {
	        this.props.thresholds.forEach(function (obj) {
	          maxY = Math.max(maxY, obj.value);
	        });
	      }
	      if (this.props.hasOwnProperty('min')) {
	        minY = this.props.min;
	      }
	      if (this.props.hasOwnProperty('max')) {
	        maxY = this.props.max;
	      }
	      var spanX = maxX - minX;
	      var spanY = maxY - minY;

	      if (this.props.sparkline) {
	        width = spanX * (SPARKLINE_STEP_WIDTH + SPARKLINE_BAR_PADDING);
	      }

	      var graphWidth = width;
	      var graphHeight = height;
	      if (this.props.legend && 'inline' === this.props.legend.position) {
	        // provides a buffer at the top of the graph to ensure
	        // none of the labels are cutoff by the bounds
	        graphHeight -= XAXIS_HEIGHT;
	      }
	      if (this.props.thresholds) {
	        graphWidth -= YAXIS_WIDTH;
	      }
	      if (xAxis.placement) {
	        graphHeight -= XAXIS_HEIGHT;
	      }
	      var graphTop = 'top' === xAxis.placement ? XAXIS_HEIGHT : 0;
	      // graphBottom is the bottom graph Y value
	      var graphBottom = 'bottom' === xAxis.placement ? height - XAXIS_HEIGHT : height;

	      var graphLeft = 0;
	      var graphRight = graphWidth;
	      if (this.props.points) {
	        graphLeft += POINT_RADIUS + 2;
	        graphRight -= POINT_RADIUS + 2;
	      }

	      var scaleX = graphWidth / spanX;
	      var xStepWidth = Math.round(graphWidth / (xAxis.data.length - 1));
	      if ('bar' === this.props.type) {
	        // allow room for bar width for last bar
	        scaleX = graphWidth / (spanX + spanX / (xAxis.data.length - 1));
	        xStepWidth = Math.round(graphWidth / xAxis.data.length);
	      }
	      var scaleY = graphHeight / spanY;
	      var barPadding = Math.max(BAR_PADDING, Math.round(xStepWidth / 8));
	      if (this.props.sparkline) {
	        xStepWidth = SPARKLINE_STEP_WIDTH;
	        barPadding = SPARKLINE_BAR_PADDING;
	      }

	      var result = {
	        minX: minX,
	        maxX: maxX,
	        minY: minY,
	        maxY: maxY,
	        spanX: spanX,
	        spanY: spanY,
	        scaleX: scaleX,
	        scaleY: scaleY,
	        graphWidth: graphWidth,
	        graphHeight: graphHeight,
	        graphTop: graphTop,
	        graphBottom: graphBottom,
	        graphLeft: graphLeft,
	        graphRight: graphRight,
	        xStepWidth: xStepWidth,
	        barPadding: barPadding,
	        xAxis: xAxis
	      };

	      return result;
	    }

	    // Aligns the legend with the current position of the cursor, if any.

	  }, {
	    key: '_alignLegend',
	    value: function _alignLegend() {
	      if (this.state.highlightXIndex >= 0 && this.refs.cursor) {
	        var bounds = this.state.bounds;
	        var cursorElement = this.refs.cursor;
	        var cursorRect = cursorElement.getBoundingClientRect();
	        var element = this.refs.chart;
	        var rect = element.getBoundingClientRect();
	        var legendElement = _reactDom2.default.findDOMNode(this.refs.legend);
	        var legendRect = legendElement.getBoundingClientRect();

	        var left = cursorRect.left - rect.left - legendRect.width - 1;
	        // if the legend would be outside the graphic, orient it to the right.
	        if (left < 0) {
	          left += legendRect.width + 2;
	        }

	        legendElement.style.left = '' + left + 'px ';
	        legendElement.style.top = '' + bounds.graphTop + 'px ';
	      }
	    }

	    // Adjusts the legend position and set the width, height, and
	    // redo the bounds calculations.
	    // Called whenever the browser resizes or new properties arrive.

	  }, {
	    key: '_layout',
	    value: function _layout() {
	      if (this.props.legend && 'overlay' === this.props.legend.position) {
	        this._alignLegend();
	      }
	      var element = this.refs.chart;
	      var rect = element.getBoundingClientRect();
	      if (rect.width !== this.state.width || rect.height !== this.state.height) {
	        var bounds = this._bounds(this.props.series, this.props.xAxis, rect.width, rect.height);
	        var width = rect.width;
	        if (this.props.sparkline) {
	          width = bounds.graphWidth;
	        }
	        this.setState({
	          width: width,
	          height: rect.height,
	          bounds: bounds
	        });
	      }
	    }

	    // Generates state based on the provided props.

	  }, {
	    key: '_stateFromProps',
	    value: function _stateFromProps(props, width, height) {
	      var bounds = this._bounds(props.series, props.xAxis, width, height);
	      var defaultXIndex = -1;
	      if (props.series && props.series.length > 0) {
	        defaultXIndex = 0;
	      }
	      if (props.hasOwnProperty('important')) {
	        defaultXIndex = props.important;
	      }
	      var highlightXIndex = defaultXIndex;
	      if (this.state && this.state.highlightXIndex >= 0) {
	        highlightXIndex = this.state.highlightXIndex;
	      }
	      // normalize size
	      var size = props.size || (props.small ? 'small' : props.large ? 'large' : null);
	      return {
	        bounds: bounds,
	        defaultXIndex: defaultXIndex,
	        highlightXIndex: highlightXIndex,
	        width: width,
	        height: height,
	        size: size
	      };
	    }

	    // Translates X value to X coordinate.

	  }, {
	    key: '_translateX',
	    value: function _translateX(x) {
	      var bounds = this.state.bounds;
	      return Math.max(bounds.graphLeft, Math.min(bounds.graphRight, Math.round((x - bounds.minX) * bounds.scaleX)));
	    }

	    // Translates Y value to Y coordinate.

	  }, {
	    key: '_translateY',
	    value: function _translateY(y) {
	      var bounds = this.state.bounds;
	      // leave room for line width since strokes are aligned to the center
	      return Math.max(1, bounds.graphBottom - Math.max(1, this._translateHeight(y)));
	    }

	    // Translates Y value to graph height.

	  }, {
	    key: '_translateHeight',
	    value: function _translateHeight(y) {
	      var bounds = this.state.bounds;
	      return Math.round((y - bounds.minY) * bounds.scaleY);
	    }

	    // Translates X and Y values to X and Y coordinates.

	  }, {
	    key: '_coordinates',
	    value: function _coordinates(value) {
	      var x = void 0,
	          y = void 0;
	      if (Array.isArray(value)) {
	        x = value[0];
	        y = value[1];
	      } else {
	        x = value.x;
	        y = value.y;
	      }
	      return [this._translateX(x), this._translateY(y)];
	    }

	    // Uses the provided colorIndex or provides one based on the seriesIndex.

	  }, {
	    key: '_itemColorIndex',
	    value: function _itemColorIndex(item, seriesIndex) {
	      return item.colorIndex || 'graph-' + (seriesIndex + 1);
	    }

	    // Determines what the appropriate control coordinates are on
	    // either side of the coordinate at the specified index.
	    // This calculation is a simplified smoothing function that
	    // just looks at whether the line through this coordinate is
	    // ascending, descending or not. Peaks, valleys, and flats are
	    // treated the same.

	  }, {
	    key: '_controlCoordinates',
	    value: function _controlCoordinates(coordinates, index) {
	      var current = coordinates[index];
	      // Use previous and next coordinates when available, otherwise use
	      // the current coordinate for them.
	      var previous = current;
	      if (index > 0) {
	        previous = coordinates[index - 1];
	      }
	      var next = current;
	      if (index < coordinates.length - 1) {
	        next = coordinates[index + 1];
	      }

	      // Put the control X coordinates midway between the coordinates.
	      var deltaX = (current[0] - previous[0]) / 2;
	      var deltaY = void 0;

	      // Start with a flat slope. This works for peaks, valleys, and flats.
	      var first = [current[0] - deltaX, current[1]];
	      var second = [current[0] + deltaX, current[1]];

	      if (previous[1] < current[1] && current[1] < next[1]) {
	        // Ascending, use the minimum positive slope.
	        deltaY = Math.min((current[1] - previous[1]) / 2, (next[1] - current[1]) / 2);
	        first[1] = current[1] - deltaY;
	        second[1] = current[1] + deltaY;
	      } else if (previous[1] > current[1] && current[1] > next[1]) {
	        // Descending, use the minimum negative slope.
	        deltaY = Math.min((previous[1] - current[1]) / 2, (current[1] - next[1]) / 2);
	        first[1] = current[1] + deltaY;
	        second[1] = current[1] - deltaY;
	      }
	      return [first, second];
	    }

	    // Converts the series data into paths for line or area types.

	  }, {
	    key: '_renderLinesOrAreas',
	    value: function _renderLinesOrAreas() {
	      var _this2 = this;

	      var bounds = this.state.bounds;
	      var values = this.props.series.map(function (item, seriesIndex) {

	        // Get all coordinates up front so they are available
	        // if we are drawing a smooth chart.
	        var coordinates = item.values.map(function (value) {
	          return _this2._coordinates(value);
	        });

	        var colorIndex = _this2._itemColorIndex(item, seriesIndex);
	        var commands = null;
	        var controlCoordinates = null;
	        var previousControlCoordinates = null;
	        var points = [];

	        // Build the commands for this set of coordinates.
	        coordinates.forEach(function (coordinate, index) {
	          if (_this2.props.smooth) {
	            controlCoordinates = _this2._controlCoordinates(coordinates, index);
	          }
	          if (0 === index) {
	            commands = "M" + coordinate.join(',');
	          } else {
	            if (_this2.props.smooth) {
	              // Use the previous right control coordinate and the current
	              // left control coordinate. We do this because we calculate
	              // the left and right sides for a particular index together,
	              // so the path is smooth but the SVG C command needs the
	              // right one from the previous index and the left one from
	              // the current index.
	              commands += " C" + previousControlCoordinates[1].join(',') + " " + controlCoordinates[0].join(',') + " " + coordinate.join(',');
	            } else {
	              commands += " L" + coordinate.join(',');
	            }
	          }

	          if (_this2.props.points && !_this2.props.sparkline) {
	            var x = Math.max(POINT_RADIUS + 1, Math.min(bounds.graphWidth - (POINT_RADIUS + 1), coordinate[0]));
	            var value = item.values[index];
	            points.push(_react2.default.createElement('circle', { key: index,
	              className: CLASS_ROOT + '__values-point ' + (COLOR_INDEX + '-' + colorIndex),
	              cx: x, cy: coordinate[1], r: POINT_RADIUS,
	              onClick: value.onClick }));
	          }

	          previousControlCoordinates = controlCoordinates;
	        });

	        var linePath = void 0;
	        if ('line' === _this2.props.type || _this2.props.points) {
	          var classes = [CLASS_ROOT + '__values-line', COLOR_INDEX + '-' + colorIndex];
	          if (item.onClick) {
	            classes.push(CLASS_ROOT + '__values-line--active');
	          }
	          linePath = _react2.default.createElement('path', { fill: 'none', className: classes.join(' '), d: commands });
	        }

	        var areaPath = void 0;
	        if ('area' === _this2.props.type) {
	          // For area charts, close the path by drawing down to the bottom
	          // and across to the bottom of where we started.
	          var close = 'L' + coordinates[coordinates.length - 1][0] + ',' + bounds.graphBottom + 'L' + coordinates[0][0] + ',' + bounds.graphBottom + 'Z';
	          var areaCommands = commands + close;
	          var _classes = [CLASS_ROOT + '__values-area', COLOR_INDEX + '-' + colorIndex];
	          if (item.onClick) {
	            _classes.push(CLASS_ROOT + '__values-area--active');
	          }

	          areaPath = _react2.default.createElement('path', { stroke: 'none', className: _classes.join(' '), d: areaCommands });
	        }

	        return _react2.default.createElement(
	          'g',
	          { key: 'line_group_' + seriesIndex, onClick: item.onClick },
	          areaPath,
	          linePath,
	          points
	        );
	      });

	      return values;
	    }

	    // Converts the series data into rects for bar types.

	  }, {
	    key: '_renderBars',
	    value: function _renderBars() {
	      var _this3 = this;

	      var segmented = this.props.segmented;
	      var bounds = this.state.bounds;


	      var values = bounds.xAxis.data.map(function (obj, xIndex) {
	        var baseY = bounds.minY;
	        var legend = [];
	        var stepBars = _this3.props.series.map(function (item, seriesIndex) {

	          var colorIndex = item.colorIndex || 'graph-' + (seriesIndex + 1);
	          var value = item.values[xIndex];
	          var valueX = void 0,
	              valueY = void 0;
	          if (Array.isArray(value)) {
	            valueX = value[0];
	            valueY = value[1];
	          } else {
	            valueX = value.x;
	            valueY = value.y;
	          }
	          var stepBarHeight = _this3._translateHeight(valueY);
	          var stepBarBase = _this3._translateHeight(baseY);
	          baseY += valueY;

	          var classes = [CLASS_ROOT + '__values-bar', COLOR_INDEX + '-' + colorIndex];
	          if (!_this3.props.legend || 'inline' === _this3.props.legend.position || xIndex === _this3.state.highlightXIndex) {
	            classes.push(CLASS_ROOT + '__values-bar--highlight');
	          }
	          if (value.onClick) {
	            classes.push(CLASS_ROOT + '__values-bar--active');
	          }

	          if ('bottom' === bounds.xAxis.placement) {
	            stepBarBase += XAXIS_HEIGHT;
	          }

	          var width = bounds.xStepWidth - 2 * bounds.barPadding;
	          var x = _this3._translateX(valueX) + bounds.barPadding + width / 2;
	          if (segmented) {
	            stepBarBase = Math.floor(stepBarBase / BAR_SEGMENT_HEIGHT) * BAR_SEGMENT_HEIGHT;
	            stepBarHeight = Math.floor(stepBarHeight / BAR_SEGMENT_HEIGHT) * BAR_SEGMENT_HEIGHT;
	          }
	          var y = _this3.state.height - (stepBarHeight + stepBarBase);

	          var labeledValue = void 0;
	          var unitsValue = item.units || _this3.props.units;
	          if (unitsValue) {
	            if (unitsValue.prefix && unitsValue.suffix) {
	              labeledValue = '' + unitsValue.prefix + value[1] + ' ' + unitsValue.suffix;
	            } else if (unitsValue.prefix) {
	              labeledValue = '' + unitsValue.prefix + value[1];
	            } else if (unitsValue.suffix || typeof unitsValue === 'string' || unitsValue instanceof String) {
	              labeledValue = value[1] + ' ' + (unitsValue.suffix || unitsValue);
	            }
	          }

	          if (_this3.props.legend && 'inline' === _this3.props.legend.position) {
	            legend.push(_react2.default.createElement(
	              'text',
	              { key: 'bar-value_' + item.label || seriesIndex,
	                x: x, y: y, role: 'presentation', textAnchor: 'middle', fontSize: 16 },
	              labeledValue
	            ));
	          }

	          return _react2.default.createElement('line', { key: 'bar_' + item.label || seriesIndex,
	            className: classes.join(' '),
	            x1: x, y1: y + stepBarHeight, x2: x, y2: y,
	            strokeWidth: width, onClick: value.onClick });
	        });

	        return _react2.default.createElement(
	          'g',
	          { key: 'bar_' + xIndex },
	          stepBars,
	          legend
	        );
	      });

	      return values;
	    }

	    // Converts the threshold value into a line.

	  }, {
	    key: '_renderThreshold',
	    value: function _renderThreshold() {
	      var y = this._translateY(this.props.threshold);
	      var commands = 'M0,' + y + 'L' + this.state.width + ',' + y;
	      return _react2.default.createElement(
	        'g',
	        { className: CLASS_ROOT + '__threshold', role: 'presentation' },
	        _react2.default.createElement('path', { fill: 'none', d: commands })
	      );
	    }
	  }, {
	    key: '_labelPosition',
	    value: function _labelPosition(valueX, bounds) {
	      var x = this._translateX(valueX);
	      var startX = x;
	      var anchor = void 0;
	      if ('line' === this.props.type || 'area' === this.props.type) {
	        // Place the text in the middle for line and area type charts.
	        anchor = 'middle';
	        startX = x - MIN_LABEL_WIDTH / 2;
	      }
	      if (x <= 0) {
	        // This is the first data point, align the text to the left edge.
	        x = 0;
	        startX = x;
	        anchor = 'start';
	      }
	      if (x >= bounds.graphWidth - MIN_LABEL_WIDTH) {
	        // This is the last data point, align the text to the right edge.
	        x = bounds.graphWidth;
	        startX = x - MIN_LABEL_WIDTH;
	        anchor = 'end';
	      } else if ('bar' === this.props.type) {
	        x += bounds.barPadding;
	        startX = x;
	      }
	      return { x: x, anchor: anchor, startX: startX,
	        endX: startX + MIN_LABEL_WIDTH };
	    }
	  }, {
	    key: '_labelOverlaps',
	    value: function _labelOverlaps(pos1, pos2) {
	      return pos1 && pos2 && pos1.endX > pos2.startX && pos1.startX < pos2.endX;
	    }

	    // Converts the xAxis labels into texts.

	  }, {
	    key: '_renderXAxis',
	    value: function _renderXAxis() {
	      var _this4 = this;

	      var bounds = this.state.bounds;
	      var labelY = void 0;
	      if ('bottom' === bounds.xAxis.placement) {
	        labelY = this.state.height - Math.round(XAXIS_HEIGHT * 0.3);
	      } else {
	        labelY = Math.round(XAXIS_HEIGHT * 0.6);
	      }
	      var priorPosition = null;
	      var highlightPosition = null;
	      if (this.state.highlightXIndex >= 0 && bounds.xAxis.data.length > this.state.highlightXIndex) {
	        highlightPosition = this._labelPosition(bounds.xAxis.data[this.state.highlightXIndex].value, bounds);
	      }
	      var lastPosition = null;
	      if (bounds.xAxis.data.length > 0) {
	        lastPosition = this._labelPosition(bounds.xAxis.data[bounds.xAxis.data.length - 1].value, bounds);
	      }

	      var labels = bounds.xAxis.data.map(function (obj, xIndex) {
	        var classes = [CLASS_ROOT + '__xaxis-index'];
	        if (xIndex === _this4.state.highlightXIndex) {
	          classes.push(CLASS_ROOT + '__xaxis-index--highlight');
	        }
	        var position = _this4._labelPosition(obj.value, bounds);

	        // Ensure we don't overlap labels. But, make sure we show the first and
	        // last ones.
	        if (_this4._labelOverlaps(position, highlightPosition) || xIndex !== 0 && xIndex !== bounds.xAxis.data.length - 1 && (_this4._labelOverlaps(position, priorPosition) || _this4._labelOverlaps(position, lastPosition))) {
	          classes.push(CLASS_ROOT + '__xaxis-index--eclipse');
	        } else {
	          priorPosition = position;
	        }

	        return _react2.default.createElement(
	          'g',
	          { key: 'x_axis_' + xIndex, className: classes.join(' ') },
	          _react2.default.createElement(
	            'text',
	            { x: position.x, y: labelY, role: 'presentation',
	              textAnchor: position.anchor, fontSize: 16 },
	            obj.label
	          )
	        );
	      });

	      return _react2.default.createElement(
	        'g',
	        { ref: 'xAxis', className: CLASS_ROOT + '__xaxis' },
	        labels
	      );
	    }

	    // Vertical bars for thresholds.

	  }, {
	    key: '_renderYAxis',
	    value: function _renderYAxis() {
	      var _this5 = this;

	      var bounds = this.state.bounds;
	      var start = bounds.minY;
	      var end = void 0;
	      var width = Math.max(4, YAXIS_WIDTH / 2);

	      var bars = this.props.thresholds.map(function (item, index) {
	        var classes = [CLASS_ROOT + '__bar'];
	        classes.push(COLOR_INDEX + '-' + (item.colorIndex || 'graph-' + (index + 1)));
	        if (index < _this5.props.thresholds.length - 1) {
	          end = _this5.props.thresholds[index + 1].value;
	        } else {
	          end = bounds.maxY;
	        }
	        var height = _this5._translateHeight(end - start);
	        var y = _this5._translateY(end);
	        start = end;

	        return _react2.default.createElement('rect', { key: 'y_rect_' + index,
	          className: classes.join(' '),
	          x: _this5.state.width - width,
	          y: y,
	          width: width,
	          height: height });
	      });

	      return _react2.default.createElement(
	        'g',
	        { ref: 'yAxis', className: CLASS_ROOT + '__yaxis' },
	        bars
	      );
	    }
	  }, {
	    key: '_highlightSeriesAsString',
	    value: function _highlightSeriesAsString() {
	      var total = 0;
	      var seriesText = this._getHighlightSeries().map(function (currentSeries) {
	        total += currentSeries.value;

	        var stringify = [currentSeries.label];

	        if (currentSeries.value !== undefined) {
	          if (currentSeries.units) {
	            var _unitsSuffix = void 0;
	            var _unitsPrefix = currentSeries.units.prefix;

	            if (currentSeries.units.suffix || typeof currentSeries.units === 'string' || currentSeries.units instanceof String) {
	              _unitsSuffix = currentSeries.units.suffix || currentSeries.units;
	            }
	            if (_unitsPrefix && _unitsSuffix) {
	              stringify.push(': ' + _unitsPrefix + currentSeries.value + ' ' + _unitsSuffix);
	            } else if (_unitsPrefix) {
	              stringify.push(': ' + _unitsPrefix + currentSeries.value);
	            } else if (_unitsSuffix) {
	              stringify.push(': ' + currentSeries.value + ' ' + _unitsSuffix);
	            }
	          } else {
	            stringify.push(': ' + currentSeries.value);
	          }
	        }

	        return stringify.join('');
	      }).join('; ');

	      var totalText = '';
	      var labeledTotal = void 0;
	      var unitsPrefix = void 0;
	      var unitsSuffix = void 0;

	      if (this.props.units) {
	        if (this.props.units.prefix) {
	          unitsPrefix = this.props.units.prefix;
	        }
	        if (this.props.units.suffix || typeof this.props.units === 'string' || this.props.units instanceof String) {
	          unitsSuffix = this.props.units.suffix || this.props.units;
	        }
	        if (unitsPrefix && unitsSuffix) {
	          labeledTotal = '' + unitsPrefix + total + ' ' + unitsSuffix;
	        } else if (unitsPrefix) {
	          labeledTotal = '' + unitsPrefix + total;
	        } else if (unitsSuffix) {
	          labeledTotal = total + ' ' + unitsSuffix;
	        }
	      }
	      if (this.props.legend.total) {
	        var totalMessage = _Intl2.default.getMessage(this.context.intl, 'Total');
	        totalText = totalMessage + ': ' + labeledTotal || '';

	        seriesText += ', ' + totalText;
	      }

	      return seriesText;
	    }

	    // Create vertical rects for each X data point.
	    // These are used to track the mouse hover.

	  }, {
	    key: '_renderXBands',
	    value: function _renderXBands(layer) {
	      var _this6 = this;

	      var className = CLASS_ROOT + '__' + layer;
	      var bounds = this.state.bounds;

	      var bands = bounds.xAxis.data.map(function (obj, xIndex) {
	        var classes = [className + '-xband'];
	        if (xIndex === _this6.state.highlightXIndex) {
	          classes.push(className + '-xband--highlight');
	        }

	        // For bar charts, the band is left aligned with the bars.
	        var x = _this6._translateX(obj.value);
	        if ('line' === _this6.props.type || 'area' === _this6.props.type) {
	          // For line and area charts, the band is centered.
	          x -= bounds.xStepWidth / 2;
	        }

	        var onMouseOver = void 0;
	        var onMouseOut = void 0;
	        if ('front' === layer) {
	          onMouseOver = _this6._onMouseOver.bind(_this6, xIndex);
	          onMouseOut = _this6._onMouseOut.bind(_this6, xIndex);
	        }

	        var xBandId = _this6.props.a11yTitleId + '_x_band_' + xIndex;
	        var xBandTitleId = _this6.props.a11yTitleId + '_x_band_title_' + xIndex;

	        var seriesText = _this6._highlightSeriesAsString();

	        return _react2.default.createElement(
	          'g',
	          { key: xBandId, id: xBandId, className: classes.join(' '),
	            onMouseOver: onMouseOver, onMouseOut: onMouseOut, role: 'tab',
	            'aria-labelledby': xBandTitleId },
	          _react2.default.createElement(
	            'title',
	            { id: xBandTitleId },
	            obj.label + ' ' + seriesText
	          ),
	          _react2.default.createElement('rect', { role: 'presentation', className: className + '-xband-background',
	            x: x, y: 0, width: bounds.xStepWidth, height: _this6.state.height })
	        );
	      });

	      return _react2.default.createElement(
	        'g',
	        { ref: layer, className: className },
	        bands
	      );
	    }

	    // Converts the highlight X index to a line.

	  }, {
	    key: '_renderCursor',
	    value: function _renderCursor() {
	      var _this7 = this;

	      var bounds = this.state.bounds;
	      var value = this.props.series[0].values[this.state.highlightXIndex];
	      var coordinates = this._coordinates(value);
	      if ('bar' === this.props.type) {
	        coordinates[0] += this.state.bounds.barPadding;
	      }
	      // Offset it just a little if it is at an edge.
	      var x = Math.max(1, Math.min(coordinates[0], this.state.bounds.graphWidth - 1));
	      var line = _react2.default.createElement('line', { fill: 'none', x1: x, y1: bounds.graphTop, x2: x,
	        y2: bounds.graphBottom });

	      var points = void 0;
	      if (this.props.points) {
	        // for area and line charts, include a dot at the intersection
	        if ('line' === this.props.type || 'area' === this.props.type) {
	          points = this.props.series.map(function (item, seriesIndex) {
	            value = item.values[_this7.state.highlightXIndex];
	            coordinates = _this7._coordinates(value);
	            var colorIndex = _this7._itemColorIndex(item, seriesIndex);
	            return _react2.default.createElement('circle', { key: seriesIndex,
	              className: CLASS_ROOT + '__cursor-point ' + (COLOR_INDEX + '-' + colorIndex),
	              cx: x, cy: coordinates[1], r: Math.round(POINT_RADIUS * 1.2) });
	          });
	        }
	      }

	      return _react2.default.createElement(
	        'g',
	        { ref: 'cursor', role: 'presentation', className: CLASS_ROOT + '__cursor' },
	        line,
	        points
	      );
	    }
	  }, {
	    key: '_getHighlightSeries',
	    value: function _getHighlightSeries(addColorIndex) {
	      var _this8 = this;

	      return this.props.series.map(function (item) {
	        var datum = {
	          value: item.values[_this8.state.highlightXIndex][1],
	          units: item.units || _this8.props.units
	        };
	        // only show label and swatch if we have more than one series
	        if (_this8.props.series.length > 1) {
	          datum.label = item.label;
	          if (addColorIndex) {
	            datum.colorIndex = item.colorIndex;
	          }
	        }
	        return datum;
	      });
	    }

	    // Builds a Legend appropriate for the currently highlight X index.

	  }, {
	    key: '_renderLegend',
	    value: function _renderLegend() {
	      var highlightSeries = this._getHighlightSeries(true);
	      var classes = [CLASS_ROOT + '__legend', CLASS_ROOT + '__legend--' + (this.props.legend.position || 'overlay')];

	      return _react2.default.createElement(_Legend2.default, { ref: 'legend', className: classes.join(' '),
	        series: highlightSeries,
	        total: this.props.legend.total,
	        units: this.props.units });
	    }
	  }, {
	    key: '_renderA11YTitle',
	    value: function _renderA11YTitle() {
	      var a11yTitle = this.props.a11yTitle;
	      if (!this.props.a11yTitle) {
	        var chartLabel = _Intl2.default.getMessage(this.context.intl, 'Chart');
	        var typeLabel = _Intl2.default.getMessage(this.context.intl, this.props.type);
	        a11yTitle = typeLabel + ' ' + chartLabel;
	      }

	      return a11yTitle;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = [CLASS_ROOT];
	      classes.push(CLASS_ROOT + '--' + this.props.type);
	      if (this.state.size) {
	        classes.push(CLASS_ROOT + '--' + this.state.size);
	      }
	      if (this.props.segmented) {
	        classes.push(CLASS_ROOT + '--segmented');
	      }
	      if (this.props.sparkline) {
	        classes.push(CLASS_ROOT + '--sparkline');
	      }

	      var values = [];
	      if ('line' === this.props.type || 'area' === this.props.type) {
	        values = this._renderLinesOrAreas();
	      } else if ('bar' === this.props.type) {
	        values = this._renderBars();
	      }

	      if (values.length === 0) {
	        classes.push(CLASS_ROOT + '--loading');
	        var valueClasses = [CLASS_ROOT + '__values'];
	        valueClasses.push(CLASS_ROOT + '__values--loading');
	        valueClasses.push(COLOR_INDEX + '-loading');
	        var commands = "M0," + this.state.height / 2 + " L" + this.state.width + "," + this.state.height / 2;
	        values.push(_react2.default.createElement(
	          'g',
	          { key: 'loading' },
	          _react2.default.createElement('path', { stroke: 'none', className: valueClasses.join(' '), d: commands })
	        ));
	      }

	      var threshold = null;
	      if (this.props.threshold) {
	        threshold = this._renderThreshold();
	      }

	      var cursor = null;
	      var legend = null;
	      if (this.props.legend && 'inline' !== this.props.legend.position && this.state.highlightXIndex >= 0 && this.props.series[0].values.length > 0) {
	        cursor = this._renderCursor();
	        legend = this._renderLegend();
	      }

	      var xAxis = null;
	      if (this.props.xAxis) {
	        xAxis = this._renderXAxis();
	      }

	      var yAxis = null;
	      if (this.props.thresholds) {
	        yAxis = this._renderYAxis();
	      }

	      var frontBands = void 0;
	      var activeDescendant = void 0;
	      var role = 'img';
	      if (this.props.legend) {
	        frontBands = this._renderXBands('front');
	        activeDescendant = this.props.a11yTitleId + '_x_band_' + this.state.highlightXIndex;
	        role = 'tablist';
	      }

	      var a11yTitle = this._renderA11YTitle();
	      var a11yTitleNode = void 0;
	      if (a11yTitle) {
	        a11yTitleNode = _react2.default.createElement(
	          'title',
	          { id: this.props.a11yTitleId },
	          a11yTitle
	        );
	      }

	      var a11yDescNode = void 0;
	      if (this.props.a11yDesc) {
	        a11yDescNode = _react2.default.createElement(
	          'desc',
	          { id: this.props.a11yDescId },
	          this.props.a11yDesc
	        );
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: classes.join(' ') },
	        _react2.default.createElement(
	          'svg',
	          { ref: 'chart', className: CLASS_ROOT + '__graphic',
	            viewBox: "0 0 " + this.state.width + " " + this.state.height,
	            preserveAspectRatio: 'none', role: role, tabIndex: '0',
	            'aria-activedescendant': activeDescendant,
	            'aria-labelledby': this.props.a11yTitleId + ' ' + this.props.a11yDescId },
	          a11yTitleNode,
	          a11yDescNode,
	          xAxis,
	          yAxis,
	          _react2.default.createElement(
	            'g',
	            { className: CLASS_ROOT + '__values' },
	            values
	          ),
	          frontBands,
	          threshold,
	          cursor
	        ),
	        legend
	      );
	    }
	  }]);
	  return Chart;
	}(_react.Component);

	Chart.displayName = 'Chart';
	exports.default = Chart;


	Chart.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  a11yTitleId: _react.PropTypes.string,
	  a11yDescId: _react.PropTypes.string,
	  a11yDesc: _react.PropTypes.string,
	  important: _react.PropTypes.number,
	  legend: _react.PropTypes.shape({
	    position: _react.PropTypes.oneOf(['overlay', 'after', 'inline']),
	    total: _react.PropTypes.bool
	  }),
	  max: _react.PropTypes.number,
	  min: _react.PropTypes.number,
	  points: _react.PropTypes.bool,
	  segmented: _react.PropTypes.bool,
	  series: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    colorIndex: _react.PropTypes.string,
	    onClick: _react.PropTypes.func,
	    label: _react.PropTypes.string,
	    units: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.shape({
	      prefix: _react.PropTypes.string,
	      suffix: _react.PropTypes.string
	    })]),
	    values: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.object // Date
	    ])), _react.PropTypes.shape({
	      onClick: _react.PropTypes.func,
	      x: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.object // Date
	      ]).isRequired,
	      y: _react.PropTypes.number.isRequired
	    })])).isRequired
	  })).isRequired,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
	  smooth: _react.PropTypes.bool,
	  sparkline: _react.PropTypes.bool,
	  threshold: _react.PropTypes.number,
	  thresholds: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    label: _react.PropTypes.string,
	    value: _react.PropTypes.number.isRequired,
	    colorIndex: _react.PropTypes.string
	  })),
	  type: _react.PropTypes.oneOf(['line', 'bar', 'area']),
	  units: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.shape({
	    prefix: _react.PropTypes.string,
	    suffix: _react.PropTypes.string
	  })]),
	  xAxis: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.shape({
	    value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.object // Date
	    ]).isRequired,
	    label: _react.PropTypes.string.isRequired
	  })), _react.PropTypes.shape({
	    placement: _react.PropTypes.oneOf(['top', 'bottom']),
	    data: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	      value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.object // Date
	      ]).isRequired,
	      label: _react.PropTypes.string.isRequired
	    }).isRequired)
	  })])
	};

	Chart.contextTypes = {
	  intl: _react.PropTypes.object
	};

	Chart.defaultProps = {
	  a11yTitleId: 'chart-title',
	  a11yDescId: 'chart-desc',
	  min: 0,
	  type: 'line'
	};
	module.exports = exports['default'];

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _FormattedMessage = __webpack_require__(81);

	var _FormattedMessage2 = _interopRequireDefault(_FormattedMessage);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASS_ROOT = _CSSClassnames2.default.LEGEND; // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

	var Legend = function (_Component) {
	  (0, _inherits3.default)(Legend, _Component);

	  function Legend(props) {
	    (0, _classCallCheck3.default)(this, Legend);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Legend).call(this, props));

	    _this._onActive = _this._onActive.bind(_this);

	    _this.state = { activeIndex: _this.props.activeIndex };
	    return _this;
	  }

	  (0, _createClass3.default)(Legend, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      this.setState({ activeIndex: newProps.activeIndex });
	    }
	  }, {
	    key: '_onActive',
	    value: function _onActive(index) {
	      this.setState({ activeIndex: index });
	      if (this.props.onActive) {
	        this.props.onActive(index);
	      }
	    }
	  }, {
	    key: '_itemColorIndex',
	    value: function _itemColorIndex(item, index) {
	      return item.colorIndex || 'graph-' + (index + 1);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = [CLASS_ROOT];
	      if (this.props.series.length === 1) {
	        classes.push(CLASS_ROOT + "--single");
	      }
	      if (this.props.className) {
	        classes.push(this.props.className);
	      }

	      var totalValue = 0;
	      var items = this.props.series.map(function (item, index) {
	        var legendClasses = [CLASS_ROOT + "__item"];
	        if (index === this.state.activeIndex) {
	          legendClasses.push(CLASS_ROOT + "__item--active");
	        }
	        if (item.onClick) {
	          legendClasses.push(CLASS_ROOT + "__item--clickable");
	        }
	        var colorIndex = this._itemColorIndex(item, index);
	        if (typeof item.value === 'number') {
	          totalValue += item.value;
	        }

	        var valueClasses = [CLASS_ROOT + "__item-value"];
	        if (1 === this.props.series.length) {
	          valueClasses.push("large-number-font");
	        }

	        var swatch;
	        if (item.hasOwnProperty('colorIndex')) {
	          swatch = _react2.default.createElement(
	            'svg',
	            {
	              className: CLASS_ROOT + '__item-swatch ' + (COLOR_INDEX + '-' + colorIndex),
	              viewBox: '0 0 12 12' },
	            _react2.default.createElement('path', { className: item.className, d: 'M 5 0 l 0 12' })
	          );
	        }

	        var label;
	        if (item.hasOwnProperty('label')) {
	          if (swatch) {
	            label = _react2.default.createElement(
	              'span',
	              { className: CLASS_ROOT + "__item-label" },
	              swatch,
	              item.label
	            );
	          } else {
	            label = _react2.default.createElement(
	              'span',
	              { className: CLASS_ROOT + "__item-label" },
	              item.label
	            );
	          }
	        }

	        var value;
	        if (item.hasOwnProperty('value')) {
	          var unitsValue = item.units || this.props.units;
	          var unitsPrefix;
	          var unitsSuffix;
	          if (unitsValue) {
	            if (unitsValue.prefix) {
	              unitsPrefix = _react2.default.createElement(
	                'span',
	                { className: CLASS_ROOT + "__item-units" },
	                unitsValue.prefix
	              );
	            }
	            if (unitsValue.suffix || typeof unitsValue === 'string' || unitsValue instanceof String) {
	              unitsSuffix = _react2.default.createElement(
	                'span',
	                { className: CLASS_ROOT + "__item-units" },
	                unitsValue.suffix || unitsValue
	              );
	            }
	          }
	          value = _react2.default.createElement(
	            'span',
	            { className: valueClasses.join(' ') },
	            unitsPrefix,
	            item.value,
	            unitsSuffix
	          );
	        }

	        return _react2.default.createElement(
	          'li',
	          { key: item.label || index, className: legendClasses.join(' '),
	            onClick: item.onClick,
	            onMouseOver: this._onActive.bind(this, index),
	            onMouseOut: this._onActive.bind(this, undefined) },
	          label,
	          value
	        );
	      }, this);

	      // build legend from bottom to top, to align with Meter bar stacking
	      items.reverse();

	      var total;
	      if (this.props.total && this.props.series.length > 1) {
	        if (true !== this.props.total) {
	          totalValue = this.props.total;
	        }
	        var unitsPrefix;
	        var unitsSuffix;

	        if (this.props.units && this.props.units.prefix) {
	          unitsPrefix = _react2.default.createElement(
	            'span',
	            { className: CLASS_ROOT + "__total-units" },
	            this.props.units.prefix
	          );
	        }
	        if (this.props.units && (this.props.units.suffix || typeof this.props.units === 'string' || this.props.units instanceof String)) {
	          unitsSuffix = _react2.default.createElement(
	            'span',
	            { className: CLASS_ROOT + "__total-units" },
	            this.props.units.suffix || this.props.units
	          );
	        }

	        total = _react2.default.createElement(
	          'li',
	          { className: CLASS_ROOT + "__total" },
	          _react2.default.createElement(
	            'span',
	            { className: CLASS_ROOT + "__total-label" },
	            _react2.default.createElement(_FormattedMessage2.default, { id: 'Total', defaultMessage: 'Total' })
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: CLASS_ROOT + "__total-value" },
	            unitsPrefix,
	            totalValue,
	            unitsSuffix
	          )
	        );
	      }

	      return _react2.default.createElement(
	        'ol',
	        { className: classes.join(' '), role: 'presentation' },
	        items.reverse(),
	        total
	      );
	    }
	  }]);
	  return Legend;
	}(_react.Component);

	Legend.displayName = 'Legend';
	exports.default = Legend;


	Legend.propTypes = {
	  activeIndex: _react.PropTypes.number,
	  onActive: _react.PropTypes.func,
	  series: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    label: _react.PropTypes.string,
	    value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.node]),
	    units: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.shape({
	      prefix: _react.PropTypes.string,
	      suffix: _react.PropTypes.string
	    })]),
	    colorIndex: _react.PropTypes.oneOfType([_react.PropTypes.number, // 1-6
	    _react.PropTypes.string // status
	    ]),
	    onClick: _react.PropTypes.func
	  })).isRequired,
	  total: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.node]),
	  units: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.shape({
	    prefix: _react.PropTypes.string,
	    suffix: _react.PropTypes.string
	  })]),
	  value: _react.PropTypes.number
	};
	module.exports = exports['default'];

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(69);

	var _extends3 = _interopRequireDefault(_extends2);

	var _keys = __webpack_require__(84);

	var _keys2 = _interopRequireDefault(_keys);

	var _typeof2 = __webpack_require__(24);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(88);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Props = __webpack_require__(91);

	var _Props2 = _interopRequireDefault(_Props);

	var _Responsive = __webpack_require__(99);

	var _Responsive2 = _interopRequireDefault(_Responsive);

	var _Legend = __webpack_require__(158);

	var _Legend2 = _interopRequireDefault(_Legend);

	var _Bar = __webpack_require__(160);

	var _Bar2 = _interopRequireDefault(_Bar);

	var _Spiral = __webpack_require__(164);

	var _Spiral2 = _interopRequireDefault(_Spiral);

	var _Circle = __webpack_require__(165);

	var _Circle2 = _interopRequireDefault(_Circle);

	var _Arc = __webpack_require__(166);

	var _Arc2 = _interopRequireDefault(_Arc);

	var _Intl = __webpack_require__(90);

	var _Intl2 = _interopRequireDefault(_Intl);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASS_ROOT = _CSSClassnames2.default.METER; // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

	var TYPE_COMPONENT = {
	  'bar': _Bar2.default,
	  'circle': _Circle2.default,
	  'arc': _Arc2.default,
	  'spiral': _Spiral2.default
	};

	var Meter = function (_Component) {
	  (0, _inherits3.default)(Meter, _Component);

	  function Meter(props) {
	    (0, _classCallCheck3.default)(this, Meter);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Meter).call(this));

	    _this._onResponsive = _this._onResponsive.bind(_this);
	    _this._initialTimeout = _this._initialTimeout.bind(_this);
	    _this._layout = _this._layout.bind(_this);
	    _this._onResize = _this._onResize.bind(_this);
	    _this._onActivate = _this._onActivate.bind(_this);

	    _this.state = _this._stateFromProps(props);
	    if (_this.state.placeLegend) {
	      _this.state.legendPlacement = 'bottom';
	    }
	    _this.state.initial = true;
	    _this.state.limitMeterSize = false;
	    return _this;
	  }

	  (0, _createClass3.default)(Meter, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.responsive) {
	        this._responsive = _Responsive2.default.start(this._onResponsive);
	      }

	      this._initialTimer = setTimeout(this._initialTimeout, 10);
	      window.addEventListener('resize', this._onResize);
	      this._onResize();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var state = this._stateFromProps(nextProps);
	      this.setState(state);
	      this._onResize();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this._initialTimer);
	      clearTimeout(this._resizeTimer);
	      window.removeEventListener('resize', this._onResize);

	      if (this._responsive) {
	        this._responsive.stop();
	      }
	    }
	  }, {
	    key: '_initialTimeout',
	    value: function _initialTimeout() {
	      this.setState({
	        initial: false,
	        activeIndex: this.state.importantIndex
	      });
	      clearTimeout(this._initialTimer);
	    }
	  }, {
	    key: '_onResponsive',
	    value: function _onResponsive(small) {
	      if (small) {
	        this.setState({ limitMeterSize: true });
	      } else {
	        this.setState({ limitMeterSize: false });
	      }
	    }
	  }, {
	    key: '_onActivate',
	    value: function _onActivate(index) {
	      var onActive = this.props.onActive;
	      var importantIndex = this.state.importantIndex;

	      if (index === undefined) {
	        index = importantIndex;
	      }
	      this.setState({ initial: false, activeIndex: index });
	      if (onActive) {
	        onActive(index);
	      }
	    }
	  }, {
	    key: '_onResize',
	    value: function _onResize() {
	      // debounce
	      clearTimeout(this._resizeTimer);
	      this._resizeTimer = setTimeout(this._layout, 50);
	    }
	  }, {
	    key: '_layout',
	    value: function _layout() {
	      var _state = this.state;
	      var placeLegend = _state.placeLegend;
	      var legendPlacement = _state.legendPlacement;

	      if (placeLegend) {
	        // legendPlacement based on available window orientation
	        var ratio = window.innerWidth / window.innerHeight;
	        if (ratio < 0.8) {
	          this.setState({ legendPlacement: 'bottom' });
	        } else if (ratio > 1.2) {
	          this.setState({ legendPlacement: 'right' });
	        }
	      }

	      if ('right' === legendPlacement) {
	        if (this.refs.legend) {
	          var graphicHeight = this.refs.activeGraphic.offsetHeight;
	          var legendHeight = _reactDom2.default.findDOMNode(this.refs.legend).offsetHeight;
	          this.setState({ tallLegend: legendHeight > graphicHeight });
	        }
	      }
	    }
	  }, {
	    key: '_normalizeSeries',
	    value: function _normalizeSeries(props, min, max, thresholds) {
	      var series = [];
	      if (props.series) {
	        series = props.series;
	      } else if (props.value || props.value === 0) {
	        series = [{ value: props.value }];
	        if (props.colorIndex) {
	          series[0].colorIndex = props.colorIndex;
	        }
	      }

	      // set color index
	      if (series.length === 1 && props.thresholds) {
	        (function () {
	          var item = series[0];
	          if (!item.colorIndex) {
	            (function () {
	              // see which threshold color index to use
	              var cumulative = 0;
	              thresholds.some(function (threshold) {
	                cumulative += threshold.value;
	                if (item.value < cumulative) {
	                  item.colorIndex = threshold.colorIndex || 'graph-1';
	                  return true;
	                }
	                return false;
	              });
	            })();
	          }
	        })();
	      } else {
	        series.forEach(function (item, index) {
	          if (!item.colorIndex) {
	            item.colorIndex = 'graph-' + (index + 1);
	          }
	        });
	      }

	      return series;
	    }
	  }, {
	    key: '_normalizeThresholds',
	    value: function _normalizeThresholds(props, min, max) {
	      var thresholds = [];
	      if (props.thresholds) {
	        // Convert thresholds from absolute values to cummulative,
	        // so we can re-use the series drawing code.
	        var priorValue = min.value;
	        thresholds.push({ hidden: true });
	        for (var i = 0; i < props.thresholds.length; i += 1) {
	          var threshold = props.thresholds[i];
	          // The value for the prior threshold ends at the beginning of this
	          // threshold. Series drawing code expects the end value.
	          thresholds[i].value = threshold.value - priorValue;
	          thresholds.push({
	            label: threshold.label,
	            colorIndex: threshold.colorIndex,
	            ariaLabel: threshold.value + ' ' + (props.units || '') + ' ' + (threshold.label || '')
	          });
	          priorValue = threshold.value;
	          if (i === props.thresholds.length - 1) {
	            thresholds[thresholds.length - 1].value = max.value - priorValue;
	          }
	        }
	      } else if (props.threshold) {
	        // let remaining = max.value - props.threshold;
	        thresholds = [{ value: props.threshold, hidden: true }, {
	          value: max.value - props.threshold,
	          colorIndex: 'critical',
	          ariaLabel: props.threshold + ' ' + (props.units || '')
	        }];
	      }
	      return thresholds;
	    }
	  }, {
	    key: '_importantIndex',
	    value: function _importantIndex(props, series) {
	      var result = undefined;
	      // removed to ensure important is set solely based on props
	      // if (series.length === 1) {
	      //   result = 0;
	      // }
	      if (props.hasOwnProperty('important')) {
	        result = props.important;
	      }
	      series.some(function (data, index) {
	        if (data.important) {
	          result = index;
	          return true;
	        }
	        return false;
	      });
	      return result;
	    }

	    // Normalize min or max to an object.

	  }, {
	    key: '_terminal',
	    value: function _terminal(terminal) {
	      if (typeof terminal === 'number') {
	        terminal = { value: terminal };
	      }
	      return terminal;
	    }
	  }, {
	    key: '_seriesTotal',
	    value: function _seriesTotal(series) {
	      var total = 0;
	      series.some(function (item) {
	        total += item.value;
	      });
	      return total;
	    }
	  }, {
	    key: '_seriesMax',
	    value: function _seriesMax(series) {
	      var max = 0;
	      series.some(function (item) {
	        max = Math.max(max, item.value);
	      });
	      return max;
	    }

	    // Generates state based on the provided props.

	  }, {
	    key: '_stateFromProps',
	    value: function _stateFromProps(props) {
	      var total = void 0;
	      if (props.series) {
	        total = this._seriesTotal(props.series);
	      } else if (props.hasOwnProperty('value')) {
	        total = props.value;
	      } else {
	        total = 0;
	      }
	      var seriesMax = void 0;
	      // only care about series max when there are multiple values
	      if (props.series && props.series.length > 1) {
	        seriesMax = this._seriesMax(props.series);
	      }
	      // Normalize min and max
	      var min = this._terminal(props.min || 0);
	      // Max could be provided in props or come from the total of
	      // a multi-value series.
	      var max = this._terminal(props.max || (props.stacked ? Math.max(seriesMax, total || 0, 100) : seriesMax || Math.max(total || 0, 100)));
	      // Normalize simple threshold prop to an array, if needed.
	      var thresholds = this._normalizeThresholds(props, min, max);
	      // Normalize simple value prop to a series, if needed.
	      var series = this._normalizeSeries(props, min, max, thresholds);
	      // Determine important index.
	      var importantIndex = this._importantIndex(props, series);

	      var state = {
	        importantIndex: importantIndex,
	        // we should preserve activeIndex across property updates
	        // activeIndex: importantIndex,
	        series: series,
	        thresholds: thresholds,
	        min: min,
	        max: max,
	        total: total
	      };

	      if (props.hasOwnProperty('activeIndex')) {
	        state.activeIndex = props.activeIndex;
	      } else if (props.hasOwnProperty('active')) {
	        state.activeIndex = props.active ? 0 : undefined;
	      }

	      // legend
	      state.placeLegend = !(props.legend && props.legend.placement);
	      if (!state.placeLegend) {
	        state.legendPlacement = props.legend.placement;
	      }

	      return state;
	    }
	  }, {
	    key: '_getActiveFields',
	    value: function _getActiveFields() {
	      var _state2 = this.state;
	      var activeIndex = _state2.activeIndex;
	      var total = _state2.total;
	      var series = _state2.series;

	      var fields = void 0;
	      if (undefined === activeIndex) {
	        fields = {
	          value: total
	        };
	        if (series.length > 1) {
	          fields.label = _Intl2.default.getMessage(this.context.intl, 'Total');
	        }
	      } else {
	        var active = series[activeIndex];
	        if (!active) {
	          active = series[0];
	        }
	        fields = {
	          value: active.value,
	          label: active.label,
	          onClick: active.onClick
	        };
	      }
	      return fields;
	    }
	  }, {
	    key: '_renderActiveValue',
	    value: function _renderActiveValue() {
	      var fields = this._getActiveFields();
	      var classes = [CLASS_ROOT + '__value'];
	      if (fields.onClick) {
	        classes.push(CLASS_ROOT + '__value--active');
	      }
	      var units = void 0;
	      if (this.props.units) {
	        units = _react2.default.createElement(
	          'span',
	          { className: CLASS_ROOT + '__value-units large-number-font' },
	          this.props.units
	        );
	      }

	      return _react2.default.createElement(
	        'div',
	        { 'aria-hidden': 'true', role: 'presentation',
	          className: classes.join(' '), onClick: fields.onClick },
	        _react2.default.createElement(
	          'span',
	          {
	            className: CLASS_ROOT + '__value-value large-number-font' },
	          fields.value,
	          units
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: CLASS_ROOT + '__value-label' },
	          fields.label
	        )
	      );
	    }
	  }, {
	    key: '_renderMinMax',
	    value: function _renderMinMax(classes) {
	      var _state3 = this.state;
	      var min = _state3.min;
	      var max = _state3.max;

	      var minLabel = void 0;
	      if (min.label) {
	        minLabel = _react2.default.createElement(
	          'div',
	          { className: CLASS_ROOT + '__minmax-min' },
	          min.label
	        );
	      }
	      var maxLabel = void 0;
	      if (max.label) {
	        maxLabel = _react2.default.createElement(
	          'div',
	          { className: CLASS_ROOT + '__minmax-max' },
	          max.label
	        );
	      }
	      var minMax = void 0;
	      if (minLabel || maxLabel) {
	        minMax = _react2.default.createElement(
	          'div',
	          { className: CLASS_ROOT + '__minmax-container' },
	          _react2.default.createElement(
	            'div',
	            { className: CLASS_ROOT + '__minmax' },
	            minLabel,
	            maxLabel
	          )
	        );
	        classes.push(CLASS_ROOT + '--minmax');
	      }
	      return minMax;
	    }
	  }, {
	    key: '_renderLegend',
	    value: function _renderLegend() {
	      var _props = this.props;
	      var legend = _props.legend;
	      var units = _props.units;
	      var _state4 = this.state;
	      var activeIndex = _state4.activeIndex;
	      var series = _state4.series;

	      var total = (typeof legend === 'undefined' ? 'undefined' : (0, _typeof3.default)(legend)) === 'object' && legend.total;
	      return _react2.default.createElement(_Legend2.default, { ref: 'legend', className: CLASS_ROOT + '__legend',
	        series: series, units: units, total: total,
	        activeIndex: activeIndex, onActive: this._onActivate });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var active = _props2.active;
	      var label = _props2.label;
	      var legend = _props2.legend;
	      var size = _props2.size;
	      var stacked = _props2.stacked;
	      var type = _props2.type;
	      var vertical = _props2.vertical;
	      var _state5 = this.state;
	      var legendPlacement = _state5.legendPlacement;
	      var limitMeterSize = _state5.limitMeterSize;
	      var tallLegend = _state5.tallLegend;
	      var series = _state5.series;

	      var classes = [CLASS_ROOT];
	      classes.push(CLASS_ROOT + '--' + type);
	      if (vertical) {
	        classes.push(CLASS_ROOT + '--vertical');
	      }
	      if (stacked) {
	        classes.push(CLASS_ROOT + '--stacked');
	      }
	      if (size) {
	        var responsiveSize = size;
	        // shrink Meter to medium size if large and up
	        if (limitMeterSize && (size === 'large' || size === 'xlarge')) {
	          responsiveSize = 'medium';
	        }
	        classes.push(CLASS_ROOT + '--' + responsiveSize);
	      }
	      if (series.length === 0) {
	        classes.push(CLASS_ROOT + '--loading');
	      } else if (series.length === 1) {
	        classes.push(CLASS_ROOT + '--single');
	      } else {
	        classes.push(CLASS_ROOT + '--count-' + series.length);
	      }
	      if (active) {
	        classes.push(CLASS_ROOT + '--active');
	      }
	      if (tallLegend) {
	        classes.push(CLASS_ROOT + '--tall-legend');
	      }
	      if (this.props.className) {
	        classes.push(this.props.className);
	      }

	      var restProps = _Props2.default.omit(this.props, (0, _keys2.default)(Meter.propTypes));

	      var minMax = this._renderMinMax(classes);
	      var labelElement = void 0;
	      if (label && true !== label) {
	        labelElement = _react2.default.createElement(
	          'div',
	          { className: CLASS_ROOT + '__label' },
	          label
	        );
	      } else if (label && series.length > 0) {
	        labelElement = this._renderActiveValue();
	      }
	      var legendElement = void 0;
	      var a11yRole = void 0;

	      if (legend || series) {
	        a11yRole = 'tablist';

	        if (legend) {
	          if ('inline' !== legend.placement) {
	            legendElement = this._renderLegend();
	          } else {
	            // Hide value (displaying total), if legend is inline
	            // and total is set to false
	            if (!legend.total && true === label) {
	              labelElement = undefined;
	            }
	          }
	          classes.push(CLASS_ROOT + '--legend-' + legendPlacement);
	          if (legend.align) {
	            classes.push(CLASS_ROOT + '--legend-align-' + legend.align);
	          }
	        }
	      }

	      var GraphicComponent = TYPE_COMPONENT[this.props.type];
	      var graphic = _react2.default.createElement(GraphicComponent, {
	        a11yTitle: this.props.a11yTitle,
	        a11yTitleId: this.props.a11yTitleId,
	        a11yDesc: this.props.a11yDesc,
	        a11yDescId: this.props.a11yDescId,
	        a11yRole: a11yRole,
	        activeIndex: this.state.activeIndex,
	        min: this.state.min, max: this.state.max,
	        legend: legend,
	        onActivate: this._onActivate,
	        series: series,
	        stacked: stacked,
	        thresholds: this.state.thresholds,
	        total: this.state.total,
	        units: this.props.units,
	        vertical: vertical });

	      var graphicContainer = _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, restProps, { className: CLASS_ROOT + '__graphic-container' }),
	        graphic,
	        minMax
	      );

	      return _react2.default.createElement(
	        'div',
	        { className: classes.join(' ') },
	        _react2.default.createElement(
	          'div',
	          { ref: 'activeGraphic', className: CLASS_ROOT + '__value-container' },
	          graphicContainer,
	          labelElement
	        ),
	        legendElement
	      );
	    }
	  }]);
	  return Meter;
	}(_react.Component);

	Meter.displayName = 'Meter';
	exports.default = Meter;


	Meter.propTypes = {
	  active: _react.PropTypes.bool, // when single value
	  activeIndex: _react.PropTypes.number, // for series values
	  a11yTitle: _react.PropTypes.string,
	  a11yTitleId: _react.PropTypes.string,
	  a11yDescId: _react.PropTypes.string,
	  a11yDesc: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  // deprecated in favor of activeIndex?
	  important: _react.PropTypes.number,
	  label: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.node]),
	  // deprecated, caller can use Legend as needed
	  legend: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.shape({
	    align: _react.PropTypes.oneOf(['start', 'center', 'end']),
	    placement: _react.PropTypes.oneOf(['right', 'bottom', 'inline']),
	    total: _react.PropTypes.bool
	  })]),
	  max: _react.PropTypes.oneOfType([_react.PropTypes.shape({
	    value: _react.PropTypes.number.isRequired,
	    label: _react.PropTypes.string
	  }), _react.PropTypes.number]),
	  min: _react.PropTypes.oneOfType([_react.PropTypes.shape({
	    value: _react.PropTypes.number.isRequired,
	    label: _react.PropTypes.string
	  }), _react.PropTypes.number]),
	  onActive: _react.PropTypes.func,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
	  series: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    label: _react.PropTypes.string,
	    value: _react.PropTypes.number.isRequired,
	    colorIndex: _react.PropTypes.string,
	    important: _react.PropTypes.bool,
	    onClick: _react.PropTypes.func
	  })),
	  stacked: _react.PropTypes.bool,
	  threshold: _react.PropTypes.number,
	  thresholds: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    label: _react.PropTypes.string,
	    value: _react.PropTypes.number.isRequired,
	    colorIndex: _react.PropTypes.string
	  })),
	  type: _react.PropTypes.oneOf(['bar', 'arc', 'circle', 'spiral']),
	  units: _react.PropTypes.string,
	  value: _react.PropTypes.number,
	  vertical: _react.PropTypes.bool,
	  responsive: _react.PropTypes.bool
	};

	Meter.defaultProps = {
	  a11yTitleId: 'meter-title',
	  a11yDescId: 'meter-desc',
	  label: true,
	  type: 'bar'
	};

	Meter.contextTypes = {
	  intl: _react.PropTypes.object
	};
	module.exports = exports['default'];

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Graphics = __webpack_require__(161);

	var _utils = __webpack_require__(162);

	var _Graphic2 = __webpack_require__(163);

	var _Graphic3 = _interopRequireDefault(_Graphic2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var BAR_LENGTH = _utils.baseDimension;
	var BAR_THICKNESS = _Graphics.baseUnit;
	var MID_BAR_THICKNESS = BAR_THICKNESS / 2;

	var Bar = function (_Graphic) {
	  (0, _inherits3.default)(Bar, _Graphic);

	  function Bar(props) {
	    (0, _classCallCheck3.default)(this, Bar);

	    //needed in Graphic.js to fix minification issues

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Bar).call(this, props));

	    _this.displayName = 'Bar';
	    return _this;
	  }

	  (0, _createClass3.default)(Bar, [{
	    key: '_viewBoxDimensions',
	    value: function _viewBoxDimensions(props) {
	      var viewBoxHeight = void 0;
	      var viewBoxWidth = void 0;
	      if (props.vertical) {
	        if (props.stacked) {
	          viewBoxWidth = BAR_THICKNESS;
	        } else {
	          viewBoxWidth = BAR_THICKNESS * Math.max(1, props.series.length);
	        }
	        viewBoxHeight = BAR_LENGTH;
	      } else {
	        viewBoxWidth = BAR_LENGTH;
	        if (props.stacked) {
	          viewBoxHeight = BAR_THICKNESS;
	        } else {
	          viewBoxHeight = BAR_THICKNESS * Math.max(1, props.series.length);
	          if (props.legend && 'inline' === props.legend.placement) {
	            viewBoxHeight *= 2;
	          }
	        }
	      }
	      return [viewBoxWidth, viewBoxHeight];
	    }
	  }, {
	    key: '_stateFromProps',
	    value: function _stateFromProps(props) {
	      var viewBoxDimensions = this._viewBoxDimensions(props);

	      var state = {
	        scale: BAR_LENGTH / (props.max.value - props.min.value),
	        viewBoxWidth: viewBoxDimensions[0],
	        viewBoxHeight: viewBoxDimensions[1]
	      };

	      return state;
	    }
	  }, {
	    key: '_translateBarWidth',
	    value: function _translateBarWidth(value) {
	      return Math.ceil(this.state.scale * value);
	    }
	  }, {
	    key: '_sliceCommands',
	    value: function _sliceCommands(trackIndex, item, startValue) {
	      var value = item.value - this.props.min.value;
	      var start = this._translateBarWidth(startValue);
	      var distance = Math.max(item.value > 0 ? MID_BAR_THICKNESS : 0, this._translateBarWidth(value));
	      var commands = void 0;
	      if (this.props.legend && 'inline' === this.props.legend.placement) {
	        trackIndex *= 2;
	      }
	      var spot = trackIndex * BAR_THICKNESS + MID_BAR_THICKNESS;
	      if (this.props.legend && 'inline' === this.props.legend.placement) {
	        spot += MID_BAR_THICKNESS;
	      }
	      if (this.props.vertical) {
	        commands = "M" + spot + "," + (BAR_LENGTH - start) + " L" + spot + "," + (BAR_LENGTH - (start + distance));
	      } else {
	        commands = "M" + start + "," + spot + " L" + (start + distance) + "," + spot;
	      }
	      return commands;
	    }
	  }, {
	    key: '_renderInlineLegend',
	    value: function _renderInlineLegend() {
	      var result = void 0;
	      if (this.props.legend && 'inline' === this.props.legend.placement) {
	        result = this.props.series.map(function (item, index) {
	          var spot = index * BAR_THICKNESS * 2 + MID_BAR_THICKNESS;

	          var label;
	          if (item.hasOwnProperty('label')) {
	            label = _react2.default.createElement(
	              'text',
	              { key: 'label', x: '0', y: spot, role: 'presentation',
	                textAnchor: 'start', fontSize: 16 },
	              item.label
	            );
	          }

	          var value;
	          if (item.hasOwnProperty('value')) {
	            var text = item.value;
	            if (item.units || this.props.units) {
	              text += ' ' + (item.units || this.props.units);
	            }
	            var x = this._translateBarWidth(this.props.max.value);
	            value = _react2.default.createElement(
	              'text',
	              { key: 'value', x: x, y: spot, role: 'presentation',
	                textAnchor: 'end', fontSize: 16 },
	              text
	            );
	          }

	          return [label, value];
	        }, this);
	      }
	      return result;
	    }
	  }]);
	  return Bar;
	}(_Graphic3.default);

	//needed in Graphic.js to fix minification issues


	exports.default = Bar;
	Bar.displayName = 'Bar';
	module.exports = exports['default'];

/***/ },
/* 161 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.polarToCartesian = polarToCartesian;
	exports.arcCommands = arcCommands;
	exports.translateEndAngle = translateEndAngle;
	// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

	var baseUnit = exports.baseUnit = 24;

	function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
	  var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
	  return {
	    x: centerX + radius * Math.cos(angleInRadians),
	    y: centerY + radius * Math.sin(angleInRadians)
	  };
	};

	function arcCommands(centerX, centerY, radius, startAngle, endAngle) {
	  // handle that we can't draw a complete circle
	  if (endAngle - startAngle >= 360) {
	    endAngle = startAngle + 359.99;
	  }
	  var start = polarToCartesian(centerX, centerY, radius, endAngle);
	  var end = polarToCartesian(centerX, centerY, radius, startAngle);
	  var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
	  var d = ["M", start.x, start.y, "A", radius, radius, 0, arcSweep, 0, end.x, end.y].join(" ");
	  return d;
	};

	function translateEndAngle(startAngle, anglePer, value) {
	  return Math.min(360, Math.max(0, startAngle + anglePer * value));
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.propTypes = exports.baseDimension = undefined;

	var _extends2 = __webpack_require__(69);

	var _extends3 = _interopRequireDefault(_extends2);

	exports.buildPath = buildPath;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Graphics = __webpack_require__(161);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASS_ROOT = _CSSClassnames2.default.METER; // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

	var baseDimension = exports.baseDimension = _Graphics.baseUnit * 8;

	var propTypes = exports.propTypes = {
	  activeIndex: _react.PropTypes.number,
	  a11yDesc: _react.PropTypes.string,
	  a11yDescId: _react.PropTypes.string,
	  a11yTitle: _react.PropTypes.string,
	  a11yTitleId: _react.PropTypes.string,
	  max: _react.PropTypes.shape({
	    value: _react.PropTypes.number,
	    label: _react.PropTypes.string
	  }).isRequired,
	  min: _react.PropTypes.shape({
	    value: _react.PropTypes.number,
	    label: _react.PropTypes.string
	  }).isRequired,
	  onActivate: _react.PropTypes.func.isRequired,
	  // size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
	  series: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    label: _react.PropTypes.string,
	    value: _react.PropTypes.number.isRequired,
	    colorIndex: _react.PropTypes.string,
	    important: _react.PropTypes.bool,
	    onClick: _react.PropTypes.func
	  })).isRequired,
	  total: _react.PropTypes.number,
	  units: _react.PropTypes.string
	};

	function buildPath(itemIndex, commands, classes, onActivate, onClick, a11yDescId, a11yTitle, activeMeterSlice) {
	  if (onActivate) {
	    var onOver = onActivate.bind(null, itemIndex);
	    var onOut = onActivate.bind(null, undefined);

	    var a11yRoles = {};
	    var titleComponent = void 0;
	    var activeSlice = void 0;
	    if (a11yTitle && a11yDescId) {
	      activeSlice = activeMeterSlice;
	      var pathTitleId = 'title_' + a11yDescId;
	      a11yRoles['aria-labelledby'] = pathTitleId;
	      a11yRoles.id = a11yDescId;
	      a11yRoles.role = 'tab';
	      titleComponent = _react2.default.createElement(
	        'title',
	        { id: pathTitleId },
	        a11yTitle
	      );
	    }

	    return _react2.default.createElement(
	      'g',
	      (0, _extends3.default)({ key: itemIndex, ref: a11yDescId }, a11yRoles),
	      titleComponent,
	      _react2.default.createElement('path', { ref: activeSlice, className: classes.join(' '), d: commands,
	        'data-index': itemIndex, onFocus: onOver, onBlur: onOut }),
	      _react2.default.createElement('path', { className: CLASS_ROOT + '__hot', d: commands, fill: 'none',
	        onMouseOver: onOver, onMouseOut: onOut,
	        onClick: onClick })
	    );
	  } else {
	    return _react2.default.createElement('path', { key: itemIndex, className: classes.join(' '), d: commands });
	  }
	};

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(69);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(88);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Intl = __webpack_require__(90);

	var _Intl2 = _interopRequireDefault(_Intl);

	var _KeyboardAccelerators = __webpack_require__(87);

	var _KeyboardAccelerators2 = _interopRequireDefault(_KeyboardAccelerators);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	var _utils = __webpack_require__(162);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.METER;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

	var MIN_WIDTH = 0.033;

	var Graphic = function (_Component) {
	  (0, _inherits3.default)(Graphic, _Component);

	  function Graphic(props) {
	    (0, _classCallCheck3.default)(this, Graphic);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Graphic).call(this));

	    _this.state = _this._stateFromProps(props);

	    _this._onEnter = _this._onEnter.bind(_this);
	    _this._onRequestForNextLegend = _this._onRequestForNextLegend.bind(_this);
	    _this._onRequestForPreviousLegend = _this._onRequestForPreviousLegend.bind(_this);
	    return _this;
	  }

	  (0, _createClass3.default)(Graphic, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._keyboardHandlers = {
	        left: this._onRequestForPreviousLegend,
	        up: this._onRequestForPreviousLegend,
	        right: this._onRequestForNextLegend,
	        down: this._onRequestForNextLegend,
	        enter: this._onEnter,
	        space: this._onEnter
	      };
	      _KeyboardAccelerators2.default.startListeningToKeyboard(this, this._keyboardHandlers);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var state = this._stateFromProps(newProps);
	      this.setState(state);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _KeyboardAccelerators2.default.stopListeningToKeyboard(this, this._keyboardHandlers);
	    }

	    // override

	  }, {
	    key: '_stateFromProps',
	    value: function _stateFromProps(props) {
	      return {};
	    }

	    // override

	  }, {
	    key: '_sliceCommands',
	    value: function _sliceCommands(trackIndex, item, startValue) {
	      return "";
	    }
	  }, {
	    key: '_renderSlice',
	    value: function _renderSlice(trackIndex, item, itemIndex, startValue, maxValue, track, threshold) {
	      var path = void 0;
	      if (!item.hidden) {
	        var classes = [CLASS_ROOT + '__slice'];
	        var activeMeterSlice = void 0;
	        if (itemIndex === this.props.activeIndex) {
	          activeMeterSlice = 'activeMeterSlice';
	          classes.push(CLASS_ROOT + '__slice--active');
	        }
	        if (item.onClick) {
	          classes.push(CLASS_ROOT + "__slice--clickable");
	        }
	        if (item.colorIndex) {
	          classes.push(COLOR_INDEX + '-' + item.colorIndex);
	        }

	        var commands = this._sliceCommands(trackIndex, item, startValue, maxValue);

	        if (threshold) {
	          path = (0, _utils.buildPath)(itemIndex, commands, classes);
	        } else if (track) {
	          path = (0, _utils.buildPath)(itemIndex, commands, classes, this.props.onActivate, item.onClick);
	        } else {
	          var a11yDescId = this.props.a11yDescId + '_' + itemIndex;
	          var a11yTitle = item.value + ' ' + (item.label || this.props.units || '');

	          path = (0, _utils.buildPath)(itemIndex, commands, classes, this.props.onActivate, item.onClick, a11yDescId, a11yTitle, activeMeterSlice);
	        }
	      }

	      return path;
	    }
	  }, {
	    key: '_renderSlices',
	    value: function _renderSlices(series, trackIndex, track, threshold) {
	      var _this2 = this;

	      var _props = this.props;
	      var min = _props.min;
	      var max = _props.max;

	      var startValue = min.value;

	      var paths = series.map(function (item, itemIndex) {
	        var path = _this2._renderSlice(trackIndex, item, itemIndex, startValue, max.value, track, threshold);

	        startValue += Math.max(MIN_WIDTH * max.value, item.value);

	        return path;
	      });

	      return paths;
	    }
	  }, {
	    key: '_loadingCommands',
	    value: function _loadingCommands() {
	      return this._sliceCommands(0, this.props.max, this.props.min.value);
	    }
	  }, {
	    key: '_onRequestForPreviousLegend',
	    value: function _onRequestForPreviousLegend(event) {
	      if (document.activeElement === this.refs.meter) {
	        event.preventDefault();
	        var totalValueCount = _reactDom2.default.findDOMNode(this.refs.meterValues).childNodes.length;

	        if (this.props.activeIndex - 1 < 0) {
	          this.props.onActivate(totalValueCount - 1);
	        } else {
	          this.props.onActivate(this.props.activeIndex - 1);
	        }

	        //stop event propagation
	        return true;
	      }
	    }
	  }, {
	    key: '_onRequestForNextLegend',
	    value: function _onRequestForNextLegend(event) {
	      if (document.activeElement === this.refs.meter) {
	        event.preventDefault();
	        var totalValueCount = _reactDom2.default.findDOMNode(this.refs.meterValues).childNodes.length;

	        if (this.props.activeIndex + 1 >= totalValueCount) {
	          this.props.onActivate(0);
	        } else {
	          this.props.onActivate(this.props.activeIndex + 1);
	        }

	        //stop event propagation
	        return true;
	      }
	    }
	  }, {
	    key: '_onEnter',
	    value: function _onEnter(event) {
	      if (document.activeElement === this.refs.meter) {
	        if (this.refs.activeMeterSlice) {
	          var index = this.refs.activeMeterSlice.getAttribute('data-index');

	          //trigger click on active meter slice
	          if (this.props.series[index].onClick) {
	            this.props.series[index].onClick();
	          }
	        }
	      }
	    }
	  }, {
	    key: '_renderLoading',
	    value: function _renderLoading() {
	      var classes = [CLASS_ROOT + '__slice'];
	      classes.push(CLASS_ROOT + '__slice--loading');
	      classes.push(COLOR_INDEX + '-loading');
	      var commands = this._loadingCommands();
	      return [_react2.default.createElement('path', { key: 'loading', className: classes.join(' '), d: commands })];
	    }
	  }, {
	    key: '_renderValues',
	    value: function _renderValues() {
	      var _this3 = this;

	      var _props2 = this.props;
	      var min = _props2.min;
	      var max = _props2.max;

	      var values = void 0;
	      if (this.props.stacked) {
	        values = this._renderSlices(this.props.series, 0);
	      } else {
	        values = this.props.series.map(function (item, index) {
	          return _this3._renderSlice(index, item, index, min.value, max.value);
	        });
	      }
	      if (values.length === 0) {
	        values = this._renderLoading();
	      }
	      return _react2.default.createElement(
	        'g',
	        { ref: 'meterValues', className: CLASS_ROOT + '__values' },
	        values
	      );
	    }
	  }, {
	    key: '_renderTracks',
	    value: function _renderTracks() {
	      var _this4 = this;

	      var _props3 = this.props;
	      var min = _props3.min;
	      var max = _props3.max;

	      var trackValue = { value: max.value };
	      var tracks = void 0;
	      if (this.props.stacked) {
	        tracks = this._renderSlice(0, trackValue, 0, min.value, max.value, true, false);
	      } else {
	        tracks = this.props.series.map(function (item, index) {
	          return _this4._renderSlice(index, trackValue, index, min.value, max.value, true, false);
	        });
	      }
	      return _react2.default.createElement(
	        'g',
	        { className: CLASS_ROOT + '__tracks' },
	        tracks
	      );
	    }
	  }, {
	    key: '_renderThresholds',
	    value: function _renderThresholds() {
	      var result = void 0;
	      var thresholds = this._renderSlices(this.props.thresholds, -0.4, false, true);
	      if (thresholds.length > 0) {
	        result = _react2.default.createElement(
	          'g',
	          { className: CLASS_ROOT + '__thresholds' },
	          thresholds
	        );
	      }
	      return result;
	    }
	  }, {
	    key: '_renderTotal',
	    value: function _renderTotal() {
	      return this.props.series.map(function (s) {
	        return s.value;
	      }).reduce(function (prev, curr) {
	        return prev + curr;
	      }, 0);
	    }
	  }, {
	    key: '_renderTopLayer',
	    value: function _renderTopLayer() {
	      return null;
	    }
	  }, {
	    key: '_renderInlineLegend',
	    value: function _renderInlineLegend() {
	      return null;
	    }
	  }, {
	    key: '_renderA11YTitle',
	    value: function _renderA11YTitle() {
	      var a11yTitle = this.props.a11yTitle;
	      if (!a11yTitle) {
	        var graphicTitle = _Intl2.default.getMessage(this.context.intl, this.displayName);
	        var meterTitle = _Intl2.default.getMessage(this.context.intl, 'Meter');

	        a11yTitle = graphicTitle + ' ' + meterTitle;
	      }

	      return a11yTitle;
	    }
	  }, {
	    key: '_renderA11YDesc',
	    value: function _renderA11YDesc() {
	      var _this5 = this;

	      var a11yDesc = this.props.a11yDesc;
	      var units = this.props.units || '';
	      if (!a11yDesc) {
	        var valueLabel = _Intl2.default.getMessage(this.context.intl, 'Value');
	        a11yDesc = ', ' + valueLabel + ': ' + this._renderTotal() + ' ' + units;

	        if (this.props.min) {
	          var minLabel = _Intl2.default.getMessage(this.context.intl, 'Min');
	          a11yDesc += ', ' + minLabel + ': ' + this.props.min.value + ' ' + units;
	        }

	        if (this.props.max) {
	          var maxLabel = _Intl2.default.getMessage(this.context.intl, 'Max');
	          a11yDesc += ', ' + maxLabel + ': ' + this.props.max.value + ' ' + units;
	        }

	        if (this.props.thresholds) {
	          (function () {
	            var thresholdLabel = _Intl2.default.getMessage(_this5.context.intl, 'Threshold');
	            _this5.props.thresholds.forEach(function (threshold) {
	              if (threshold.ariaLabel) {
	                a11yDesc += ', ' + thresholdLabel + ': ' + threshold.ariaLabel;
	              }
	            });
	          })();
	        }
	      }

	      return a11yDesc;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = [CLASS_ROOT];
	      if (this.props.className) {
	        classes.push(this.props.className);
	      }

	      var tracks = this._renderTracks();
	      var values = this._renderValues();
	      var thresholds = this._renderThresholds();
	      var topLayer = this._renderTopLayer();
	      var inlineLegend = this._renderInlineLegend();

	      var a11yTitle = this._renderA11YTitle();
	      var a11yDesc = this._renderA11YDesc();

	      var activeDescendant = this.props.a11yDescId + '_' + (this.props.activeIndex || 0);

	      return _react2.default.createElement(
	        'svg',
	        { ref: 'meter', className: CLASS_ROOT + '__graphic',
	          tabIndex: '0', role: this.props.a11yRole,
	          width: this.state.viewBoxWidth,
	          height: this.state.viewBoxHeight,
	          viewBox: "0 0 " + this.state.viewBoxWidth + " " + this.state.viewBoxHeight,
	          preserveAspectRatio: 'xMidYMid meet',
	          'aria-activedescendant': activeDescendant,
	          'aria-labelledby': this.props.a11yTitleId + ' ' + this.props.a11yDescId },
	        _react2.default.createElement(
	          'title',
	          { id: this.props.a11yTitleId },
	          a11yTitle
	        ),
	        _react2.default.createElement(
	          'desc',
	          { id: this.props.a11yDescId },
	          a11yDesc
	        ),
	        tracks,
	        thresholds,
	        values,
	        inlineLegend,
	        topLayer
	      );
	    }
	  }]);
	  return Graphic;
	}(_react.Component);

	Graphic.displayName = 'Graphic';
	exports.default = Graphic;


	Graphic.propTypes = (0, _extends3.default)({
	  a11yRole: _react.PropTypes.string,
	  stacked: _react.PropTypes.bool,
	  thresholds: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    label: _react.PropTypes.string,
	    value: _react.PropTypes.number.isRequired,
	    colorIndex: _react.PropTypes.string
	  })).isRequired,
	  vertical: _react.PropTypes.bool
	}, _utils.propTypes);

	Graphic.contextTypes = {
	  intl: _react.PropTypes.object
	};

	Graphic.defaultProps = {
	  a11yRole: 'img'
	};
	module.exports = exports['default'];

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Graphics = __webpack_require__(161);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	var _utils = __webpack_require__(162);

	var _Graphic2 = __webpack_require__(163);

	var _Graphic3 = _interopRequireDefault(_Graphic2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASS_ROOT = _CSSClassnames2.default.METER; // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

	var SPIRAL_WIDTH = _utils.baseDimension;
	var SPIRAL_RADIUS = _utils.baseDimension / 2 - _Graphics.baseUnit / 2;
	var RING_THICKNESS = _Graphics.baseUnit;
	// Allow for active value content next to a spiral meter

	var Spiral = function (_Graphic) {
	  (0, _inherits3.default)(Spiral, _Graphic);

	  function Spiral(props) {
	    (0, _classCallCheck3.default)(this, Spiral);

	    //needed in Graphic.js to fix minification issues

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Spiral).call(this, props));

	    _this.displayName = 'Spiral';
	    return _this;
	  }

	  (0, _createClass3.default)(Spiral, [{
	    key: '_stateFromProps',
	    value: function _stateFromProps(props) {
	      var viewBoxHeight = Math.max(SPIRAL_WIDTH, RING_THICKNESS * (props.series.length + 1) * 2);
	      var viewBoxWidth = viewBoxHeight;

	      var state = {
	        startAngle: 0,
	        anglePer: 270.0 / props.max.value,
	        angleOffset: 180,
	        // The last spiral ends out near but not quite at the edge of the
	        // view box.
	        startRadius: Math.max(SPIRAL_RADIUS, RING_THICKNESS * (props.series.length + 0.5)) - Math.max(0, props.series.length - 1) * RING_THICKNESS,
	        viewBoxWidth: viewBoxWidth,
	        viewBoxHeight: viewBoxHeight
	      };

	      return state;
	    }
	  }, {
	    key: '_sliceCommands',
	    value: function _sliceCommands(trackIndex, item, startValue) {
	      var startAngle = (0, _Graphics.translateEndAngle)(this.state.startAngle, this.state.anglePer, startValue);
	      var endAngle = (0, _Graphics.translateEndAngle)(startAngle, this.state.anglePer, item.value);
	      var radius = Math.min(SPIRAL_RADIUS, this.state.startRadius + trackIndex * RING_THICKNESS);
	      return (0, _Graphics.arcCommands)(SPIRAL_WIDTH / 2, SPIRAL_WIDTH / 2, radius, startAngle + this.state.angleOffset, endAngle + this.state.angleOffset);
	    }
	  }, {
	    key: '_renderThresholds',
	    value: function _renderThresholds() {
	      return null;
	    }
	  }, {
	    key: '_renderTopLayer',
	    value: function _renderTopLayer() {
	      var x = SPIRAL_RADIUS + RING_THICKNESS;
	      var y = SPIRAL_RADIUS + RING_THICKNESS * 2.2;
	      var labels = this.props.series.map(function (item, index) {
	        var classes = [CLASS_ROOT + "__label"];
	        if (index === this.props.activeIndex) {
	          classes.push(CLASS_ROOT + "__label--active");
	        }

	        var textX = x;
	        var textY = y;

	        y += RING_THICKNESS;

	        return _react2.default.createElement(
	          'text',
	          { key: item.label || index, x: textX, y: textY,
	            textAnchor: 'start', fontSize: 16,
	            className: classes.join(' '),
	            onMouseOver: this.props.onActivate.bind(null, index),
	            onMouseOut: this.props.onActivate.bind(null, null),
	            onClick: item.onClick },
	          item.label
	        );
	      }, this);

	      return _react2.default.createElement(
	        'g',
	        { className: CLASS_ROOT + "__labels" },
	        labels
	      );
	    }
	  }]);
	  return Spiral;
	}(_Graphic3.default);

	exports.default = Spiral;


	Spiral.defaultProps = {
	  thresholds: []
	};

	//needed in Graphic.js to fix minification issues
	Spiral.displayName = 'Spiral';
	module.exports = exports['default'];

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _utils = __webpack_require__(162);

	var _Graphic2 = __webpack_require__(163);

	var _Graphic3 = _interopRequireDefault(_Graphic2);

	var _Graphics = __webpack_require__(161);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CIRCLE_WIDTH = _utils.baseDimension; // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CIRCLE_RADIUS = _utils.baseDimension / 2 - _Graphics.baseUnit / 2;
	var RING_THICKNESS = _Graphics.baseUnit;

	var Circle = function (_Graphic) {
	  (0, _inherits3.default)(Circle, _Graphic);

	  function Circle(props) {
	    (0, _classCallCheck3.default)(this, Circle);

	    //needed in Graphic.js to fix minification issues

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Circle).call(this, props));

	    _this.displayName = 'Circle';
	    return _this;
	  }

	  (0, _createClass3.default)(Circle, [{
	    key: '_stateFromProps',
	    value: function _stateFromProps(props) {
	      if (!props.stacked && (props.series.length - 1) * RING_THICKNESS > CIRCLE_RADIUS) {
	        console.warn("You cannot have more than " + Math.round(CIRCLE_RADIUS / RING_THICKNESS) + " data values in a circle Meter");
	      }

	      var state = {
	        startAngle: 0,
	        anglePer: !props.max ? 0 : 360 / (props.max.value - props.min.value),
	        angleOffset: 180,
	        viewBoxWidth: CIRCLE_WIDTH,
	        viewBoxHeight: CIRCLE_WIDTH
	      };

	      return state;
	    }
	  }, {
	    key: '_sliceCommands',
	    value: function _sliceCommands(trackIndex, item, startValue, maxValue) {
	      var startAngle = (0, _Graphics.translateEndAngle)(this.state.startAngle, this.state.anglePer, startValue);

	      var endAngle;
	      if (!item.value) {
	        endAngle = startAngle;
	      } else if (startValue + item.value >= maxValue) {
	        endAngle = 360;
	      } else {
	        endAngle = Math.min(360 - RING_THICKNESS / 2, Math.max(startAngle + RING_THICKNESS / 2, (0, _Graphics.translateEndAngle)(startAngle, this.state.anglePer, item.value)));
	      }

	      var radius = Math.max(1, CIRCLE_RADIUS - trackIndex * RING_THICKNESS);
	      return (0, _Graphics.arcCommands)(CIRCLE_WIDTH / 2, CIRCLE_WIDTH / 2, radius, startAngle + this.state.angleOffset, endAngle + this.state.angleOffset);
	    }
	  }]);
	  return Circle;
	}(_Graphic3.default);

	//needed in Graphic.js to fix minification issues


	exports.default = Circle;
	Circle.displayName = 'Circle';
	module.exports = exports['default'];

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Graphics = __webpack_require__(161);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	var _utils = __webpack_require__(162);

	var _Graphic2 = __webpack_require__(163);

	var _Graphic3 = _interopRequireDefault(_Graphic2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASS_ROOT = _CSSClassnames2.default.METER; // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

	var ARC_WIDTH = _utils.baseDimension;
	var ARC_HEIGHT = Math.round(_utils.baseDimension * 0.75);
	var ARC_RADIUS = _utils.baseDimension / 2 - _Graphics.baseUnit / 2;
	var INDICATOR_HUB_RADIUS = _Graphics.baseUnit / 4;
	var RING_THICKNESS = _Graphics.baseUnit;

	function singleIndicatorCommands(centerX, centerY, radius, startAngle, endAngle, length) {
	  var point = (0, _Graphics.polarToCartesian)(centerX, centerY, radius - (length - INDICATOR_HUB_RADIUS), endAngle - 1);
	  var start = (0, _Graphics.polarToCartesian)(centerX, centerY, radius, endAngle - 1);
	  var d = ["M", centerX, centerY - INDICATOR_HUB_RADIUS, "A", INDICATOR_HUB_RADIUS, INDICATOR_HUB_RADIUS, 0, 1, 1, centerX, centerY + INDICATOR_HUB_RADIUS, "A", INDICATOR_HUB_RADIUS, INDICATOR_HUB_RADIUS, 0, 1, 1, centerX, centerY - INDICATOR_HUB_RADIUS, "M", point.x, point.y, "L", start.x, start.y].join(" ");
	  return d;
	}

	var Arc = function (_Graphic) {
	  (0, _inherits3.default)(Arc, _Graphic);

	  function Arc(props) {
	    (0, _classCallCheck3.default)(this, Arc);

	    //needed in Graphic.js to fix minification issues

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Arc).call(this, props));

	    _this.displayName = 'Arc';
	    return _this;
	  }

	  (0, _createClass3.default)(Arc, [{
	    key: '_viewBoxDimensions',
	    value: function _viewBoxDimensions(props) {
	      var viewBoxWidth;
	      var viewBoxHeight;
	      if (props.vertical) {
	        viewBoxWidth = ARC_HEIGHT;
	        viewBoxHeight = ARC_WIDTH;
	      } else {
	        viewBoxWidth = ARC_WIDTH;
	        viewBoxHeight = ARC_HEIGHT;
	      }
	      return [viewBoxWidth, viewBoxHeight];
	    }
	  }, {
	    key: '_stateFromProps',
	    value: function _stateFromProps(props) {
	      var viewBoxDimensions = this._viewBoxDimensions(props);

	      var state = {
	        startAngle: 60,
	        anglePer: !props.max ? 0 : 240.0 / (props.max.value - props.min.value),
	        angleOffset: 180,
	        viewBoxWidth: viewBoxDimensions[0],
	        viewBoxHeight: viewBoxDimensions[1]
	      };
	      if (props.vertical) {
	        state.angleOffset = 90;
	      } else {
	        state.angleOffset = 180;
	      }

	      return state;
	    }
	  }, {
	    key: '_sliceCommands',
	    value: function _sliceCommands(trackIndex, item, startValue) {
	      var startAngle = (0, _Graphics.translateEndAngle)(this.state.startAngle, this.state.anglePer, startValue);
	      var endAngle = Math.max(startAngle + (item.value > 0 ? RING_THICKNESS / 2 : 0), (0, _Graphics.translateEndAngle)(startAngle, this.state.anglePer, item.value));
	      var radius = Math.max(1, ARC_RADIUS - trackIndex * RING_THICKNESS);
	      return (0, _Graphics.arcCommands)(ARC_WIDTH / 2, ARC_WIDTH / 2, radius, startAngle + this.state.angleOffset, endAngle + this.state.angleOffset);
	    }
	  }, {
	    key: '_renderTopLayer',
	    value: function _renderTopLayer() {
	      var indicator;
	      if (this.props.series.length === 1) {
	        var item = this.props.series[0];
	        var startAngle = this.state.startAngle;
	        var endAngle = (0, _Graphics.translateEndAngle)(startAngle, this.state.anglePer, item.value);
	        var length = ARC_RADIUS;
	        var x = ARC_WIDTH / 2;
	        var y = ARC_WIDTH / 2;
	        var indicatorCommands = singleIndicatorCommands(x, y, ARC_RADIUS, startAngle + this.state.angleOffset, endAngle + this.state.angleOffset, length);
	        indicator = _react2.default.createElement('path', { fill: 'none',
	          className: CLASS_ROOT + '__slice-indicator ' + (COLOR_INDEX + '-' + item.colorIndex),
	          d: indicatorCommands });
	      }

	      return indicator;
	    }
	  }]);
	  return Arc;
	}(_Graphic3.default);

	exports.default = Arc;
	module.exports = exports['default'];

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var React = __webpack_require__(1);
	var DocsArticle = __webpack_require__(140);
	var Sidebar = __webpack_require__(138);
	var Header = __webpack_require__(112);
	var Footer = __webpack_require__(116);
	var Title = __webpack_require__(113);
	var Menu = __webpack_require__(97);
	var CloseIcon = __webpack_require__(95);
	var Gravatar = __webpack_require__(156);
	var Search = __webpack_require__(154);

	var NavigationDoc = React.createClass({
	  displayName: 'NavigationDoc',

	  render: function render() {
	    return React.createElement(
	      DocsArticle,
	      { title: 'Navigation', colorIndex: 'neutral-2' },
	      React.createElement(
	        'section',
	        null,
	        React.createElement(
	          'h2',
	          null,
	          'Primary menu'
	        ),
	        React.createElement(
	          'p',
	          null,
	          'A primary navigation menu provides top level navigation to sub-areas of the application. When real estate allows, it can remain open for quick, frequent access.'
	        ),
	        React.createElement(
	          'div',
	          { className: 'example' },
	          React.createElement(
	            Sidebar,
	            { primary: true },
	            React.createElement(
	              Header,
	              { large: true, flush: false },
	              React.createElement(
	                Title,
	                null,
	                React.createElement(
	                  'span',
	                  null,
	                  'App'
	                )
	              ),
	              React.createElement(
	                Menu,
	                null,
	                React.createElement(
	                  'div',
	                  null,
	                  React.createElement(CloseIcon, null)
	                )
	              )
	            ),
	            React.createElement(
	              Menu,
	              { direction: 'column', flush: false },
	              React.createElement(
	                'a',
	                null,
	                'First area'
	              ),
	              React.createElement(
	                'a',
	                null,
	                'Second area'
	              ),
	              React.createElement(
	                'a',
	                null,
	                'Third area'
	              )
	            ),
	            React.createElement(
	              Footer,
	              null,
	              React.createElement(
	                Menu,
	                { icon: React.createElement(Gravatar, { email: '', 'default': 'mm' }), dropAlign: { bottom: 'bottom' } },
	                React.createElement(
	                  'a',
	                  null,
	                  'Logout'
	                )
	              )
	            )
	          )
	        )
	      ),
	      React.createElement(
	        'section',
	        null,
	        React.createElement(
	          'h2',
	          null,
	          'Search'
	        ),
	        React.createElement(
	          'p',
	          null,
	          'Search is both a primary navigation capability from the dashboard page and an integral part of reducing content lists to enable simple navigation to a particular item.'
	        ),
	        React.createElement(
	          'div',
	          { className: 'example' },
	          React.createElement(
	            Header,
	            null,
	            React.createElement(
	              'span',
	              null,
	              React.createElement(
	                Title,
	                null,
	                'App'
	              ),
	              React.createElement(Search, { inline: true })
	            ),
	            React.createElement(
	              Menu,
	              null,
	              React.createElement(Gravatar, { email: '', 'default': 'mm' })
	            )
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = NavigationDoc;

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var React = __webpack_require__(1);
	var jsxToString = __webpack_require__(169);
	var DocsArticle = __webpack_require__(140);
	var Marquee = __webpack_require__(170);

	Marquee.displayName = 'Marquee';

	var inline = "<Marquee />";

	var MarqueeDoc = React.createClass({
	  displayName: 'MarqueeDoc',


	  contextTypes: {
	    routePrefix: React.PropTypes.string.isRequired
	  },

	  _renderCode: function _renderCode(name, jsx) {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        name
	      ),
	      React.createElement(
	        'div',
	        { className: 'example' },
	        jsx
	      ),
	      React.createElement(
	        'pre',
	        null,
	        React.createElement(
	          'code',
	          { className: 'html hljs xml' },
	          jsxToString(jsx)
	        )
	      )
	    );
	  },


	  render: function render() {
	    var simpleMarquee = React.createElement(Marquee, { darkTheme: false,
	      backgroundImage: '../img/MarqueeImage_051916_H.jpg',
	      headline: 'Accelerate your transformation with the cloud',
	      subHeadline: 'HPE can help you benefit now from your right mix of cloud',
	      link: 'http://www.grommet.io/docs/' });

	    return React.createElement(
	      DocsArticle,
	      { title: 'Marquee', colorIndex: 'neutral-3' },
	      React.createElement(
	        'p',
	        null,
	        'The Marquee module.'
	      ),
	      React.createElement(
	        'pre',
	        null,
	        React.createElement(
	          'code',
	          { className: 'html hljs xml' },
	          inline
	        )
	      ),
	      React.createElement(
	        'section',
	        null,
	        React.createElement(
	          'h2',
	          null,
	          'Options'
	        ),
	        React.createElement(
	          'dl',
	          null,
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'backgroundImage            string'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Background image for the marquee. Required.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'darkTheme                  true|false'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Text will be light-colored if true, dark if false.  Defaults to ',
	            React.createElement(
	              'code',
	              null,
	              'true'
	            ),
	            '.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'flush                      true|false'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'If true, the marquee will horizontally fill the browser screen.  Defaults to true.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'headline                   string'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Headline of the marquee.  Required.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'headlineSize               small|medium|large'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Size of the headline.  Defaults to ',
	            React.createElement(
	              'code',
	              null,
	              'large'
	            ),
	            '.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'justify                    start|center|end'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Position of the text on the marquee.  Defaults to ',
	            React.createElement(
	              'code',
	              null,
	              'end'
	            ),
	            '.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'link                       string'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'External URL where the "Learn More" link should go.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'onClick                    function'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Click handler for the "Learn More" link.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'subHeadline                string'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Content for the subtext.  Required.'
	          )
	        )
	      ),
	      React.createElement(
	        'section',
	        null,
	        React.createElement(
	          'h2',
	          null,
	          'Examples'
	        ),
	        this._renderCode('Default', simpleMarquee)
	      ),
	      React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'p',
	          null,
	          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae rhoncus dui, eu gravida est. Cras consectetur enim eget erat rutrum, et suscipit lorem iaculis. Maecenas sed metus nulla. Vestibulum nibh risus, facilisis non sem a, mattis venenatis lacus. Maecenas condimentum interdum arcu eu consectetur. Etiam magna ligula, elementum ac leo vel, sagittis tempus neque. Duis dapibus at velit aliquam varius. Nulla facilisi. Donec rutrum augue neque. Suspendisse ut metus neque. Praesent interdum ornare condimentum.'
	        ),
	        React.createElement(
	          'p',
	          null,
	          'Ut vel varius arcu. Suspendisse bibendum turpis eu nunc hendrerit suscipit. In feugiat nibh sed justo tincidunt, nec pellentesque quam tempor. Etiam condimentum iaculis dolor et semper. Curabitur tincidunt imperdiet ante, eu consequat nulla facilisis cursus. Cras metus ipsum, vehicula non vestibulum in, lacinia ut erat. Curabitur sed nulla porttitor, sollicitudin risus molestie, auctor massa. Curabitur porttitor sodales tincidunt. In in enim dapibus, lobortis dui vitae, vehicula augue. Quisque quis cursus ipsum, ut tincidunt dui. Donec eget bibendum turpis. Integer porttitor libero at luctus sodales. Donec varius consectetur quam, a vestibulum nulla rhoncus sit amet. Nunc blandit molestie dapibus. Etiam eleifend neque justo, et imperdiet augue euismod sed.'
	        ),
	        React.createElement(
	          'p',
	          null,
	          'Nullam mauris neque, dictum in nibh pulvinar, facilisis faucibus enim. Nullam semper sem vitae finibus molestie. Fusce sollicitudin lacus dolor, at placerat eros rhoncus et. Suspendisse id neque vel metus lobortis tristique at interdum nisl. Fusce pretium nulla in neque feugiat, ut fermentum libero pellentesque. Sed et malesuada ligula. Quisque quis blandit massa.'
	        ),
	        React.createElement(
	          'p',
	          null,
	          'Aliquam porta aliquam varius. Suspendisse interdum turpis sit amet bibendum efficitur. Phasellus finibus justo ac nisi porta sollicitudin. Vivamus lorem diam, dignissim ac posuere finibus, auctor nec nisi. Aenean pulvinar rhoncus eros sit amet porta. Nam egestas gravida risus quis dignissim. Nullam quis nibh vitae ipsum aliquam tristique vitae at ex. Praesent ultricies felis sit amet dolor interdum, vitae placerat diam lacinia. Quisque vitae pharetra magna, vitae commodo urna.'
	        ),
	        React.createElement(
	          'p',
	          null,
	          'Praesent lectus felis, malesuada vel tellus ut, maximus blandit orci. Nunc semper maximus nisi, a ornare magna vestibulum sit amet. Morbi rutrum ante quis nunc gravida porttitor. Nullam dignissim ex a odio tincidunt, in posuere massa dapibus. Duis pretium rutrum metus. Aliquam nulla sapien, aliquet ac efficitur sed, tempor vitae quam. Integer scelerisque tempus lorem eu volutpat. Integer egestas laoreet felis at convallis. Vivamus commodo euismod mauris, ut pulvinar mi iaculis non. Morbi tempor urna et gravida vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi vel neque libero.'
	        ),
	        React.createElement(
	          'p',
	          null,
	          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae rhoncus dui, eu gravida est. Cras consectetur enim eget erat rutrum, et suscipit lorem iaculis. Maecenas sed metus nulla. Vestibulum nibh risus, facilisis non sem a, mattis venenatis lacus. Maecenas condimentum interdum arcu eu consectetur. Etiam magna ligula, elementum ac leo vel, sagittis tempus neque. Duis dapibus at velit aliquam varius. Nulla facilisi. Donec rutrum augue neque. Suspendisse ut metus neque. Praesent interdum ornare condimentum.'
	        )
	      )
	    );
	  }
	});

	module.exports = MarqueeDoc;

/***/ },
/* 169 */
/***/ function(module, exports) {

	module.exports = require("jsx-to-string");

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _Box = __webpack_require__(83);

	var _Box2 = _interopRequireDefault(_Box);

	var _Headline = __webpack_require__(118);

	var _Headline2 = _interopRequireDefault(_Headline);

	var _Paragraph = __webpack_require__(171);

	var _Paragraph2 = _interopRequireDefault(_Paragraph);

	var _Anchor = __webpack_require__(115);

	var _Anchor2 = _interopRequireDefault(_Anchor);

	var _Image = __webpack_require__(172);

	var _Image2 = _interopRequireDefault(_Image);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = 'marquee';
	var LIGHT_COLORINDEX = 'light-1';
	var DARK_COLORINDEX = 'grey-1';
	var PALM_BREAKPOINT = 720;

	var Marquee = function (_Component) {
	  _inherits(Marquee, _Component);

	  function Marquee(props) {
	    _classCallCheck(this, Marquee);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Marquee).call(this, props));

	    _this._setReverse = _this._setReverse.bind(_this);
	    _this._setBackgroundColorIndex = _this._setBackgroundColorIndex.bind(_this);

	    _this.state = {
	      colorIndex: props.darkTheme ? DARK_COLORINDEX : LIGHT_COLORINDEX,
	      reverse: props.justify === 'start' ? true : false
	    };
	    return _this;
	  }

	  _createClass(Marquee, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('resize', this._setReverse);
	      window.addEventListener('resize', this._setBackgroundColorIndex);
	      this._setReverse();
	      this._setBackgroundColorIndex();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('resize', this._setReverse);
	      window.removeEventListener('resize', this._setBackgroundColorIndex);
	    }
	  }, {
	    key: '_setBackgroundColorIndex',
	    value: function _setBackgroundColorIndex() {
	      var darkTheme = this.props.darkTheme;


	      if (window.innerWidth < PALM_BREAKPOINT) {
	        this.setState({ colorIndex: LIGHT_COLORINDEX });
	      } else {
	        this.setState({ colorIndex: darkTheme ? DARK_COLORINDEX : LIGHT_COLORINDEX });
	      }
	    }
	  }, {
	    key: '_setReverse',
	    value: function _setReverse() {
	      var justify = this.props.justify;


	      if (window.innerWidth < PALM_BREAKPOINT) {
	        this.setState({ reverse: false });
	      } else {
	        this.setState({ reverse: justify === 'start' ? true : false });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var _props = this.props;
	      var backgroundImage = _props.backgroundImage;
	      var flush = _props.flush;
	      var headlineSize = _props.headlineSize;
	      var headline = _props.headline;
	      var image = _props.image;
	      var justify = _props.justify;
	      var link = _props.link;
	      var linkIcon = _props.linkIcon;
	      var linkText = _props.linkText;
	      var onClick = _props.onClick;
	      var subHeadline = _props.subHeadline;


	      var classes = (0, _classnames3.default)(CLASS_ROOT, this.props.className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + this.props.size, this.props.size), _defineProperty(_classnames, CLASS_ROOT + '--bg-' + this.props.responsiveBackgroundPosition, this.props.responsiveBackgroundPosition), _defineProperty(_classnames, CLASS_ROOT + '--mobile-separator', this.props.separator), _classnames));

	      var full = flush ? 'horizontal' : false;
	      var pad = flush ? 'none' : 'large';

	      var subHeadlineMarkup = void 0;
	      if (subHeadline) {
	        subHeadlineMarkup = _react2.default.createElement(
	          _Paragraph2.default,
	          { size: 'large', margin: 'none' },
	          subHeadline
	        );
	      }

	      var linkMarkup = void 0;
	      if (link || onClick) {
	        linkMarkup = _react2.default.createElement(
	          'h3',
	          null,
	          _react2.default.createElement(_Anchor2.default, { href: link, primary: true, label: linkText, icon: linkIcon, onClick: onClick })
	        );
	      }

	      var contentMarkup = void 0;
	      if (justify === 'center') {
	        contentMarkup = _react2.default.createElement(
	          _Box2.default,
	          { className: 'marquee__overlay', justify: justify, align: 'center', primary: true, full: full, direction: 'row' },
	          _react2.default.createElement(
	            _Box2.default,
	            { pad: { horizontal: 'large', vertical: 'large', between: 'medium' } },
	            _react2.default.createElement(
	              _Headline2.default,
	              { size: headlineSize, strong: true, margin: 'none' },
	              headline
	            ),
	            subHeadlineMarkup,
	            linkMarkup
	          )
	        );
	      } else {
	        contentMarkup = _react2.default.createElement(
	          _Box2.default,
	          { className: 'marquee__overlay', align: 'center', primary: true, full: full, direction: 'row', reverse: this.state.reverse },
	          _react2.default.createElement(
	            _Box2.default,
	            { className: 'marquee__image', align: 'center', justify: 'center' },
	            _react2.default.createElement(_Image2.default, { src: 'url(' + image + ')' })
	          ),
	          _react2.default.createElement(
	            _Box2.default,
	            { pad: { horizontal: 'large', vertical: 'large', between: 'medium' } },
	            _react2.default.createElement(
	              _Headline2.default,
	              { size: headlineSize, strong: true, margin: 'none' },
	              headline
	            ),
	            subHeadlineMarkup,
	            linkMarkup
	          )
	        );
	      }

	      return _react2.default.createElement(
	        _Box2.default,
	        { className: classes, colorIndex: this.state.colorIndex },
	        _react2.default.createElement(_Box2.default, { containerClassName: 'marquee__background', appCentered: true, pad: pad, backgroundImage: 'url(' + backgroundImage + ')', full: full }),
	        contentMarkup
	      );
	    }
	  }]);

	  return Marquee;
	}(_react.Component);

	exports.default = Marquee;
	;

	Marquee.propTypes = {
	  backgroundImage: _react.PropTypes.string.isRequired,
	  darkTheme: _react.PropTypes.bool,
	  flush: _react.PropTypes.bool,
	  headline: _react.PropTypes.string.isRequired,
	  headlineSize: _react.PropTypes.oneOf(['small', 'medium', 'large']),
	  image: _react.PropTypes.string,
	  justify: _react.PropTypes.oneOf(['start', 'center', 'end']),
	  link: _react.PropTypes.string,
	  linkIcon: _react.PropTypes.element,
	  linkText: _react.PropTypes.string,
	  onClick: _react.PropTypes.func,
	  responsiveBackgroundPosition: _react.PropTypes.oneOf(['left', 'center', 'right']),
	  separator: _react.PropTypes.bool,
	  size: _react.PropTypes.oneOf(['small', 'large']),
	  subHeadline: _react.PropTypes.string
	};

	Marquee.defaultProps = {
	  darkTheme: true,
	  flush: true,
	  headlineSize: 'large',
	  justify: 'end',
	  linkText: 'Learn More',
	  responsiveBackgroundPosition: 'center',
	  separator: false,
	  size: 'large'
	};
	module.exports = exports['default'];

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASS_ROOT = _CSSClassnames2.default.PARAGRAPH; // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var Paragraph = function (_Component) {
	  (0, _inherits3.default)(Paragraph, _Component);

	  function Paragraph() {
	    (0, _classCallCheck3.default)(this, Paragraph);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Paragraph).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Paragraph, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var classes = (0, _classnames3.default)(CLASS_ROOT, this.props.className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + this.props.size, this.props.size), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--align-' + this.props.align, this.props.align), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--margin-' + this.props.margin, this.props.margin), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--width-' + this.props.width, this.props.width), _classnames));

	      // we handle dangerouslySetInnerHTML to allow using Paragraph with Markdown.
	      return _react2.default.createElement(
	        'p',
	        { id: this.props.id, className: classes,
	          dangerouslySetInnerHTML: this.props.dangerouslySetInnerHTML },
	        this.props.children
	      );
	    }
	  }]);
	  return Paragraph;
	}(_react.Component);

	Paragraph.displayName = 'Paragraph';
	exports.default = Paragraph;
	;

	Paragraph.propTypes = {
	  align: _react.PropTypes.oneOf(['start', 'center', 'end']),
	  id: _react.PropTypes.string,
	  margin: _react.PropTypes.oneOf(['none', 'small', 'medium', 'large']),
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
	  width: _react.PropTypes.oneOf(['small', 'medium', 'large'])
	};
	module.exports = exports['default'];

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames3 = __webpack_require__(67);

	var _classnames4 = _interopRequireDefault(_classnames3);

	var _Label = __webpack_require__(173);

	var _Label2 = _interopRequireDefault(_Label);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.IMAGE;

	var Image = function (_Component) {
	  (0, _inherits3.default)(Image, _Component);

	  function Image() {
	    (0, _classCallCheck3.default)(this, Image);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Image).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Image, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var _props = this.props;
	      var alt = _props.alt;
	      var caption = _props.caption;
	      var className = _props.className;
	      var full = _props.full;
	      var id = _props.id;
	      var size = _props.size;
	      var src = _props.src;
	      var title = _props.title;
	      var mask = _props.mask;

	      var classes = (0, _classnames4.default)(CLASS_ROOT, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--full', typeof full === 'boolean' && full), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--full-' + full, typeof full === 'string'), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--mask', mask), _classnames), className);

	      var captionText = typeof caption === 'string' ? caption : alt;
	      var imgNode = _react2.default.createElement('img', { id: id, src: src, alt: alt, title: title, className: classes });

	      var labelRoot = CLASS_ROOT + '__caption';
	      var labelClasses = (0, _classnames4.default)(labelRoot, (0, _defineProperty3.default)({}, labelRoot + '--' + size, size));
	      return caption && captionText ? _react2.default.createElement(
	        'span',
	        { className: CLASS_ROOT + '__container' },
	        imgNode,
	        _react2.default.createElement(
	          _Label2.default,
	          { className: labelClasses },
	          captionText
	        )
	      ) : imgNode;
	    }
	  }]);
	  return Image;
	}(_react.Component);

	Image.displayName = 'Image';
	exports.default = Image;
	;

	Image.propTypes = {
	  alt: _react.PropTypes.string,
	  caption: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string]),
	  className: _react.PropTypes.string,
	  full: _react.PropTypes.oneOf([true, 'horizontal', 'vertical', false]),
	  id: _react.PropTypes.string,
	  mask: _react.PropTypes.bool,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'thumb']),
	  src: _react.PropTypes.string,
	  title: _react.PropTypes.string
	};

	Image.defaultProps = {
	  size: 'medium'
	};
	module.exports = exports['default'];

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(69);

	var _extends3 = _interopRequireDefault(_extends2);

	var _keys = __webpack_require__(84);

	var _keys2 = _interopRequireDefault(_keys);

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	var _Props = __webpack_require__(91);

	var _Props2 = _interopRequireDefault(_Props);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.LABEL;

	var Label = function (_Component) {
	  (0, _inherits3.default)(Label, _Component);

	  function Label() {
	    (0, _classCallCheck3.default)(this, Label);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Label).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Label, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var _props = this.props;
	      var margin = _props.margin;
	      var size = _props.size;

	      margin = margin ? margin : 'small' === size ? 'none' : 'medium';
	      var classes = (0, _classnames3.default)(CLASS_ROOT, this.props.className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--uppercase', this.props.uppercase), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--margin-' + margin, margin), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), _classnames));
	      var restProps = _Props2.default.omit(this.props, (0, _keys2.default)(Label.propTypes));

	      return _react2.default.createElement(
	        'label',
	        (0, _extends3.default)({}, restProps, { className: classes, htmlFor: this.props.labelFor }),
	        this.props.children
	      );
	    }
	  }]);
	  return Label;
	}(_react.Component);

	Label.displayName = 'Label';
	exports.default = Label;
	;

	Label.propTypes = {
	  labelFor: _react.PropTypes.string,
	  margin: _react.PropTypes.oneOf(['none', 'small', 'medium', 'large']),
	  size: _react.PropTypes.oneOf(['small', 'medium']),
	  uppercase: _react.PropTypes.bool
	};

	Label.defaultProps = {
	  size: 'medium'
	};
	module.exports = exports['default'];

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _DocsArticle = __webpack_require__(140);

	var _DocsArticle2 = _interopRequireDefault(_DocsArticle);

	var _Example = __webpack_require__(175);

	var _Example2 = _interopRequireDefault(_Example);

	var _WorldMap = __webpack_require__(176);

	var _WorldMap2 = _interopRequireDefault(_WorldMap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

	_WorldMap2.default.displayName = 'WorldMap';

	var series = [{ continent: 'NorthAmerica', label: 'North America', value: 40,
	  colorIndex: 'graph-1', onClick: function onClick() {
	    alert('North America');
	  } }, { continent: 'SouthAmerica', label: 'South America', value: 30,
	  colorIndex: 'accent-2', onClick: function onClick() {
	    alert('North America');
	  } }, { continent: 'Europe', label: 'Europe', value: 20,
	  colorIndex: 'unset', onClick: function onClick() {
	    alert('Europe');
	  } }, { continent: 'Africa', label: 'Africa', value: 10,
	  colorIndex: 'graph-2', onClick: function onClick() {
	    alert('Africa');
	  } }, { continent: 'Asia', label: 'Asia', value: 15,
	  colorIndex: 'graph-3', onClick: function onClick() {
	    alert('Asia');
	  } }, { continent: 'Australia', label: 'Australia', value: 10,
	  colorIndex: 'graph-4', onClick: function onClick() {
	    alert('Australia');
	  } }];

	var WorldMapDoc = function (_Component) {
	  _inherits(WorldMapDoc, _Component);

	  function WorldMapDoc() {
	    _classCallCheck(this, WorldMapDoc);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(WorldMapDoc).apply(this, arguments));
	  }

	  _createClass(WorldMapDoc, [{
	    key: 'render',
	    value: function render() {

	      return _react2.default.createElement(
	        _DocsArticle2.default,
	        { title: 'WorldMap', colorIndex: 'neutral-3' },
	        _react2.default.createElement(
	          'p',
	          null,
	          'A world map of continents.'
	        ),
	        _react2.default.createElement(
	          'pre',
	          null,
	          _react2.default.createElement(
	            'code',
	            { className: 'html hljs xml' },
	            "<WorldMap series={[...]} />"
	          )
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          'Note: It is a good idea to include a ',
	          _react2.default.createElement(
	            'code',
	            null,
	            'Legend'
	          ),
	          ' along with this visualization. You can use the same ',
	          _react2.default.createElement(
	            'code',
	            null,
	            'series'
	          ),
	          'property for both ',
	          _react2.default.createElement(
	            'code',
	            null,
	            'WorldMap'
	          ),
	          ' and ',
	          _react2.default.createElement(
	            'code',
	            null,
	            'Legend'
	          ),
	          '.'
	        ),
	        _react2.default.createElement(
	          'section',
	          null,
	          _react2.default.createElement(
	            'h2',
	            null,
	            'Options'
	          ),
	          _react2.default.createElement(
	            'dl',
	            null,
	            _react2.default.createElement(
	              'dt',
	              null,
	              _react2.default.createElement(
	                'code',
	                null,
	                'series      ',
	                "[{continent: , colorIndex: , onClick: }, ...]"
	              )
	            ),
	            _react2.default.createElement(
	              'dd',
	              null,
	              'An array of objects describing the data. The available continents are: ',
	              _react2.default.createElement(
	                'code',
	                null,
	                'NorthAmerica'
	              ),
	              ', ',
	              _react2.default.createElement(
	                'code',
	                null,
	                'SouthAmerica'
	              ),
	              ', ',
	              _react2.default.createElement(
	                'code',
	                null,
	                'Europe'
	              ),
	              ', ',
	              _react2.default.createElement(
	                'code',
	                null,
	                'Africa'
	              ),
	              ', ',
	              _react2.default.createElement(
	                'code',
	                null,
	                'Asia'
	              ),
	              ', and ',
	              _react2.default.createElement(
	                'code',
	                null,
	                'Australia'
	              ),
	              '. You must specify a continent in order for it to be rendered.'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'section',
	          null,
	          _react2.default.createElement(_Example2.default, { name: 'Example', code: _react2.default.createElement(_WorldMap2.default, { series: series, legend: true, units: 'B' }) })
	        )
	      );
	    }
	  }]);

	  return WorldMapDoc;
	}(_react.Component);

	exports.default = WorldMapDoc;
	;
	module.exports = exports['default'];

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _jsxToString = __webpack_require__(169);

	var _jsxToString2 = _interopRequireDefault(_jsxToString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var Example = function (_Component) {
	  _inherits(Example, _Component);

	  function Example() {
	    _classCallCheck(this, Example);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Example).apply(this, arguments));
	  }

	  _createClass(Example, [{
	    key: '_renderCode',
	    value: function _renderCode() {
	      var _props = this.props;
	      var code = _props.code;
	      var overrides = _props.overrides;

	      var keyValueOverride = {};
	      if (overrides) {
	        overrides.forEach(function (override) {
	          keyValueOverride[override] = 'this._' + override;
	        });
	      }
	      return (0, _jsxToString2.default)(code, { keyValueOverride: keyValueOverride });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var code = _props2.code;
	      var name = _props2.name;

	      var heading = void 0;
	      if (name) {
	        heading = _react2.default.createElement(
	          'h3',
	          null,
	          name
	        );
	      }
	      return _react2.default.createElement(
	        'div',
	        null,
	        heading,
	        _react2.default.createElement(
	          'div',
	          { className: 'example' },
	          code
	        ),
	        _react2.default.createElement(
	          'pre',
	          null,
	          _react2.default.createElement(
	            'code',
	            { className: 'html hljs xml' },
	            this._renderCode()
	          )
	        )
	      );
	    }
	  }]);

	  return Example;
	}(_react.Component);

	exports.default = Example;


	Example.propTypes = {
	  code: _react.PropTypes.node.isRequired,
	  name: _react.PropTypes.string,
	  overrides: _react.PropTypes.arrayOf(_react.PropTypes.string)
	};
	module.exports = exports['default'];

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.WORLD_MAP;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

	var CONTINENTS = [{
	  id: "Australia",
	  origin: [74, 32],
	  area: [[4, 0], [7, 1], [15, 7], [13, 9], [0, 6], [0, 2]],
	  dots: [[4, 0, 1], [2, 1, 6], [0, 2, 9], [0, 3, 10], [0, 4, 10], [0, 5, 3], [5, 5, 5], [5, 6, 4], [15, 7, 1], [14, 8, 1], [13, 9, 1]]
	}, {
	  id: "Asia",
	  origin: [52, 1],
	  area: [[16, 0], [38, 5], [40, 7], [28, 17], [24, 25], [29, 29], [19, 29], [11, 24], [3, 23], [0, 20], [0, 19], [6, 13], [7, 6]],
	  dots: [[16, 0, 1], [17, 1, 2], [18, 2, 2], [15, 3, 6], [28, 3, 1], [30, 3, 1], [10, 4, 2], [13, 4, 10], [24, 4, 1], [9, 5, 22], [32, 5, 1], [38, 5, 1], [7, 6, 2], [10, 6, 1], [12, 6, 27], [7, 7, 34], [7, 8, 31], [7, 9, 26], [34, 9, 3], [7, 10, 22], [31, 10, 1], [33, 10, 1], [7, 11, 21], [32, 11, 2], [7, 12, 21], [32, 12, 1], [6, 13, 22], [32, 13, 1], [6, 14, 22], [5, 15, 22], [3, 16, 2], [6, 16, 20], [2, 17, 3], [6, 17, 16], [24, 17, 1], [28, 17, 1], [1, 18, 22], [26, 18, 2], [0, 19, 24], [0, 20, 5], [6, 20, 17], [2, 21, 5], [10, 21, 14], [2, 22, 5], [11, 22, 4], [16, 22, 4], [3, 23, 3], [11, 23, 2], [17, 23, 3], [23, 23, 1], [11, 24, 2], [18, 24, 2], [23, 24, 1], [24, 25, 1], [18, 26, 1], [22, 26, 1], [18, 27, 1], [20, 27, 4], [18, 28, 1], [21, 28, 1], [23, 28, 1], [26, 28, 3], [19, 29, 1], [28, 29, 2]]
	}, {
	  // 21X, 40Y
	  id: "Africa",
	  origin: [40, 19],
	  area: [[3, 0], [6, 0], [11, 2], [16, 7], [16, 15], [11, 18], [9, 18], [0, 6], [0, 3]],
	  dots: [[3, 0, 4], [2, 1, 6], [9, 1, 2], [1, 2, 11], [0, 3, 13], [0, 4, 14], [0, 5, 14], [0, 6, 16], [1, 7, 16], [2, 8, 2], [6, 8, 11], [7, 9, 9], [7, 10, 8], [7, 11, 7], [8, 12, 7], [7, 13, 8], [7, 14, 7], [16, 14, 1], [8, 15, 5], [15, 15, 2], [8, 16, 5], [9, 17, 3], [9, 18, 3]]
	}, {
	  id: "Europe",
	  origin: [39, 2],
	  area: [[8, 0], [10, 0], [20, 2], [19, 11], [18, 13], [14, 16], [3, 16], [0, 7]],
	  dots: [[8, 0, 3], [9, 1, 1], [20, 2, 1], [19, 3, 1], [12, 4, 1], [19, 4, 1], [9, 5, 6], [9, 6, 7], [17, 6, 3], [0, 7, 1], [8, 7, 12], [7, 8, 3], [11, 8, 9], [7, 9, 3], [11, 9, 9], [4, 10, 1], [7, 10, 1], [9, 10, 1], [11, 10, 9], [3, 11, 2], [7, 11, 13], [4, 12, 1], [6, 12, 13], [4, 13, 15], [5, 14, 3], [9, 14, 4], [15, 14, 2], [3, 15, 3], [8, 15, 1], [10, 15, 5], [6, 15, 2], [3, 16, 2], [10, 16, 5]]
	}, {
	  id: "SouthAmerica",
	  origin: [22, 26],
	  area: [[2, 0], [5, 0], [11, 4], [11, 8], [3, 18], [2, 17], [0, 4], [0, 3]],
	  dots: [[2, 0, 4], [1, 1, 7], [1, 2, 7], [0, 3, 10], [0, 4, 12], [1, 5, 11], [2, 6, 9], [3, 7, 8], [3, 8, 8], [3, 9, 6], [3, 10, 6], [3, 11, 5], [3, 12, 3], [2, 13, 3], [2, 14, 3], [2, 15, 2], [2, 16, 2], [2, 17, 2], [3, 18, 1]]
	}, {
	  id: "NorthAmerica",
	  origin: [0, 0],
	  area: [[21, 0], [39, 0], [39, 6], [22, 26], [16, 23], [2, 12], [0, 7]],
	  dots: [[22, 0, 6], [29, 0, 1], [31, 0, 1], [33, 0, 5], [20, 1, 1], [22, 1, 1], [24, 1, 2], [27, 1, 13], [17, 2, 1], [20, 2, 5], [26, 2, 13], [13, 3, 1], [19, 3, 1], [21, 3, 3], [26, 3, 14], [14, 4, 1], [16, 4, 4], [21, 4, 3], [29, 4, 11], [12, 5, 3], [16, 5, 1], [18, 5, 1], [20, 5, 3], [24, 5, 1], [30, 5, 8], [14, 6, 3], [19, 6, 1], [22, 6, 4], [31, 6, 8], [0, 7, 15], [16, 7, 1], [18, 7, 4], [24, 7, 2], [30, 7, 7], [2, 8, 20], [24, 8, 3], [29, 8, 5], [2, 9, 20], [24, 9, 2], [30, 9, 3], [1, 10, 18], [23, 10, 2], [31, 10, 1], [2, 11, 2], [8, 11, 11], [23, 11, 2], [26, 11, 1], [2, 12, 1], [8, 12, 13], [24, 12, 3], [10, 13, 12], [23, 13, 5], [11, 14, 17], [11, 15, 9], [21, 15, 6], [28, 15, 2], [11, 16, 11], [23, 16, 4], [11, 17, 14], [12, 18, 11], [12, 19, 12], [13, 20, 9], [15, 21, 3], [22, 21, 1], [16, 22, 2], [16, 23, 2], [20, 23, 1], [23, 23, 1], [18, 24, 3], [21, 25, 1], [22, 26, 1]]
	}];

	var FACTOR = 10;

	var WorldMap = function (_Component) {
	  (0, _inherits3.default)(WorldMap, _Component);

	  function WorldMap() {
	    (0, _classCallCheck3.default)(this, WorldMap);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(WorldMap).call(this));

	    _this._onActivate = _this._onActivate.bind(_this);
	    _this._onDeactivate = _this._onDeactivate.bind(_this);
	    _this._renderContinent = _this._renderContinent.bind(_this);

	    _this.state = _this._buildState();
	    return _this;
	  }

	  (0, _createClass3.default)(WorldMap, [{
	    key: '_buildState',
	    value: function _buildState() {
	      var state = { activeIndex: -1, dots: {}, area: {} };
	      var width = 0;
	      var height = 0;
	      CONTINENTS.forEach(function (continent) {
	        var origin = continent.origin;
	        state.dots[continent.id] = continent.dots.map(function (segment) {
	          var dots = Array.apply(null, Array(segment[2])).map(function () {
	            return 'h0';
	          }).join(' m10,0 ');
	          var x = FACTOR * (origin[0] + segment[0] + 1);
	          var y = FACTOR * (origin[1] + segment[1] + 1);
	          width = Math.max(width, FACTOR * (origin[0] + segment[0] + segment[2]));
	          height = Math.max(height, y);
	          return 'M' + x + ',' + y + ' ' + dots;
	        }).join(' ');
	        state.area[continent.id] = continent.area.map(function (point, index) {
	          var x = FACTOR * (point[0] + origin[0] + 1);
	          var y = FACTOR * (point[1] + origin[1] + 1);
	          return '' + (index === 0 ? 'M' : 'L') + x + ',' + y;
	        }).join(' ');
	        if (state.area[continent.id]) {
	          state.area[continent.id] += ' Z';
	        }
	      });
	      state.width = width + FACTOR;
	      state.height = height + FACTOR;
	      return state;
	    }
	  }, {
	    key: '_onActivate',
	    value: function _onActivate(index) {
	      this.setState({ activeIndex: index });
	    }
	  }, {
	    key: '_onDeactivate',
	    value: function _onDeactivate() {
	      this.setState({ activeIndex: -1 });
	    }
	  }, {
	    key: '_renderContinent',
	    value: function _renderContinent(seriesData, index) {
	      var continent = seriesData.continent;
	      var colorIndex = seriesData.colorIndex || 'graph-' + index;
	      var classes = [CLASS_ROOT + '__continent', COLOR_INDEX + '-' + colorIndex];
	      if (index === this.state.activeIndex) {
	        classes.push(CLASS_ROOT + '__continent--active');
	      }
	      var onMouseOver = void 0,
	          onMouseLeave = void 0,
	          onClick = void 0,
	          area = void 0;
	      if (seriesData.onClick) {
	        onMouseOver = this._onActivate.bind(this, index);
	        onMouseLeave = this._onDeactivate;
	        onClick = seriesData.onClick;
	        area = _react2.default.createElement('path', { stroke: 'none', fill: '#fff', fillOpacity: '0.01',
	          d: this.state.area[continent] });
	      }
	      // We add the area so the mouse events work for the whole region,
	      // not just the dots
	      return _react2.default.createElement(
	        'g',
	        { key: continent, id: continent, className: classes.join(' '),
	          onMouseOver: onMouseOver, onMouseLeave: onMouseLeave, onClick: onClick },
	        area,
	        _react2.default.createElement('path', { d: this.state.dots[continent] })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var series = this.props.series;
	      var _state = this.state;
	      var width = _state.width;
	      var height = _state.height;

	      var continents = series.map(this._renderContinent);

	      return _react2.default.createElement(
	        'svg',
	        { className: CLASS_ROOT, version: '1.1',
	          preserveAspectRatio: 'xMidYMid meet',
	          width: width + 'px', viewBox: '0 0 ' + width + ' ' + height },
	        _react2.default.createElement(
	          'g',
	          { stroke: 'none', fill: 'none', fillRule: 'evenodd' },
	          continents
	        )
	      );
	    }
	  }]);
	  return WorldMap;
	}(_react.Component);

	WorldMap.displayName = 'WorldMap';
	exports.default = WorldMap;


	WorldMap.propTypes = {
	  series: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    continent: _react.PropTypes.oneOf(['NorthAmerica', 'SouthAmerica', 'Europe', 'Africa', 'Asia', 'Australia']),
	    // value: PropTypes.number,
	    colorIndex: _react.PropTypes.string,
	    // important: PropTypes.bool,
	    onClick: _react.PropTypes.func
	  }))
	};
	module.exports = exports['default'];

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var React = __webpack_require__(1);
	var jsxToString = __webpack_require__(169);
	var DocsArticle = __webpack_require__(140);
	var Heading = __webpack_require__(178);
	var Paragraph = __webpack_require__(171);
	var Accordion = __webpack_require__(179);
	var AccordionPanel = __webpack_require__(181);
	var ContentCard = __webpack_require__(185);

	Accordion.displayName = 'Accordion';

	var inline = "<Accordion>\n" + "  <AccordionPanel>\n" + "   ...\n" + "  </AccordionPanel>\n" + "  ...\n" + "</Accordion>";

	var AccordionDoc = React.createClass({
	  displayName: 'AccordionDoc',


	  contextTypes: {
	    routePrefix: React.PropTypes.string.isRequired
	  },

	  _renderCode: function _renderCode(name, jsx) {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        name
	      ),
	      React.createElement(
	        'div',
	        { className: 'example' },
	        jsx
	      ),
	      React.createElement(
	        'pre',
	        null,
	        React.createElement(
	          'code',
	          { className: 'html hljs xml' },
	          jsxToString(jsx)
	        )
	      )
	    );
	  },


	  render: function render() {
	    var simpleAccordionPanel = React.createElement(
	      AccordionPanel,
	      { panelTitle: 'Enterprise Mobility Services' },
	      React.createElement(
	        Heading,
	        { tag: 'h3', margin: 'none' },
	        'Empower your employees while ensuring your workplace remains enterprise grade, scalable and secure.'
	      ),
	      React.createElement(
	        Paragraph,
	        { margin: 'none' },
	        'See how Hewlett Packard Enterprise delivers mobile solutions to improve quality of life and help eliminate poverty in South America.'
	      ),
	      React.createElement(ContentCard, {
	        thumbnail: '/docs/img/Case_Study_image.png',
	        overline: 'Case Study',
	        heading: 'The Key Steps to Reducing Software Spend',
	        description: 'HPE Software Licensing and Management Solutions can help you optimize your software investments through control of complex negotiations and renewal processes',
	        link: '#'
	      })
	    );

	    var simpleAccordion = React.createElement(
	      Accordion,
	      {
	        colorIndex: 'light-2',
	        headline: 'Services Portfolio',
	        subHeadline: 'Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo copiosae facilisi an. Sumo accumsan mel ea, eu ignota hendrerit consequuntur me'
	      },
	      simpleAccordionPanel,
	      simpleAccordionPanel,
	      simpleAccordionPanel
	    );

	    return React.createElement(
	      DocsArticle,
	      { title: 'Accordion', colorIndex: 'neutral-3' },
	      React.createElement(
	        'p',
	        null,
	        'The Accordion module.'
	      ),
	      React.createElement(
	        'pre',
	        null,
	        React.createElement(
	          'code',
	          { className: 'html hljs xml' },
	          inline
	        )
	      ),
	      React.createElement(
	        'section',
	        null,
	        React.createElement(
	          'h2',
	          null,
	          'Accordion Options'
	        ),
	        React.createElement(
	          'dl',
	          null,
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'headline            ',
	              '{string}'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Headline of the section.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'subHeadline         ',
	              '{string}'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Content for the subheadline.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'colorIndex          ',
	              '{category}-{index}'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'The color identifier to use for the background color. For example: ',
	            React.createElement(
	              'code',
	              null,
	              '"neutral-1"'
	            )
	          )
	        )
	      ),
	      React.createElement(
	        'section',
	        null,
	        React.createElement(
	          'h2',
	          null,
	          'AccordionPanel Options'
	        ),
	        React.createElement(
	          'dl',
	          null,
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'panelTitle          ',
	              '{string}'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Title of panel, displayed when panel is collapsed. Required.'
	          )
	        )
	      ),
	      React.createElement(
	        'section',
	        null,
	        React.createElement(
	          'h2',
	          null,
	          'Examples'
	        ),
	        this._renderCode('Default', simpleAccordion)
	      )
	    );
	  }
	});

	module.exports = AccordionDoc;

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.HEADING;

	var Heading = function (_Component) {
	  (0, _inherits3.default)(Heading, _Component);

	  function Heading() {
	    (0, _classCallCheck3.default)(this, Heading);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Heading).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Heading, [{
	    key: 'render',
	    value: function render() {
	      var classes = [CLASS_ROOT];
	      if (this.props.size) {
	        classes.push(CLASS_ROOT + '--' + this.props.size);
	      }
	      if (this.props.strong) {
	        classes.push(CLASS_ROOT + '--strong');
	      }
	      if (this.props.align) {
	        classes.push(CLASS_ROOT + '--align-' + this.props.align);
	      }
	      if (this.props.margin) {
	        classes.push(CLASS_ROOT + '--margin-' + this.props.margin);
	      }
	      if (this.props.uppercase) {
	        classes.push(CLASS_ROOT + '--uppercase');
	      }
	      if (this.props.className) {
	        classes.push(this.props.className);
	      }

	      // we handle dangerouslySetInnerHTML to allow using Heading with Markdown.
	      return _react2.default.createElement(
	        this.props.tag,
	        { id: this.props.id, className: classes.join(' '),
	          dangerouslySetInnerHTML: this.props.dangerouslySetInnerHTML },
	        this.props.children
	      );
	    }
	  }]);
	  return Heading;
	}(_react.Component);

	Heading.displayName = 'Heading';
	exports.default = Heading;


	Heading.propTypes = {
	  align: _react.PropTypes.oneOf(['start', 'center', 'end']),
	  margin: _react.PropTypes.oneOf(['none', 'small', 'medium', 'large']),
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
	  strong: _react.PropTypes.bool,
	  tag: _react.PropTypes.string,
	  uppercase: _react.PropTypes.bool
	};

	Heading.defaultProps = {
	  tag: 'h1'
	};
	module.exports = exports['default'];

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(67);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Box = __webpack_require__(83);

	var _Box2 = _interopRequireDefault(_Box);

	var _Headline = __webpack_require__(118);

	var _Headline2 = _interopRequireDefault(_Headline);

	var _List = __webpack_require__(180);

	var _List2 = _interopRequireDefault(_List);

	var _Paragraph = __webpack_require__(171);

	var _Paragraph2 = _interopRequireDefault(_Paragraph);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = 'accordion';

	var Accordion = function (_Component) {
	  _inherits(Accordion, _Component);

	  function Accordion() {
	    _classCallCheck(this, Accordion);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Accordion).apply(this, arguments));
	  }

	  _createClass(Accordion, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var headline = _props.headline;
	      var subHeadline = _props.subHeadline;
	      var colorIndex = _props.colorIndex;
	      var children = _props.children;


	      var classes = (0, _classnames2.default)(CLASS_ROOT, this.props.className);

	      var headlineMarkup = void 0;
	      if (headline) {
	        headlineMarkup = _react2.default.createElement(
	          _Headline2.default,
	          { size: 'large', strong: true, margin: 'none', align: 'center' },
	          headline
	        );
	      }

	      var subHeadlineMarkup = void 0;
	      if (subHeadline) {
	        subHeadlineMarkup = _react2.default.createElement(
	          _Paragraph2.default,
	          {
	            className: CLASS_ROOT + '__sub-headline',
	            size: 'large',
	            align: 'center'
	          },
	          subHeadline
	        );
	      }

	      var content = void 0;
	      if (headline || subHeadline) {
	        content = _react2.default.createElement(
	          _Box2.default,
	          { align: 'center' },
	          headlineMarkup,
	          subHeadlineMarkup
	        );
	      }

	      return _react2.default.createElement(
	        _Box2.default,
	        { className: classes, colorIndex: colorIndex },
	        content,
	        _react2.default.createElement(
	          _Box2.default,
	          { separator: 'top' },
	          _react2.default.createElement(
	            _List2.default,
	            null,
	            children
	          )
	        )
	      );
	    }
	  }]);

	  return Accordion;
	}(_react.Component);

	exports.default = Accordion;
	;

	Accordion.propTypes = {
	  headline: _react.PropTypes.string,
	  subHeadline: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string
	};
	module.exports = exports['default'];

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(129);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Spinning = __webpack_require__(131);

	var _Spinning2 = _interopRequireDefault(_Spinning);

	var _InfiniteScroll = __webpack_require__(132);

	var _InfiniteScroll2 = _interopRequireDefault(_InfiniteScroll);

	var _Selection = __webpack_require__(133);

	var _Selection2 = _interopRequireDefault(_Selection);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASS_ROOT = _CSSClassnames2.default.LIST; // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var LIST_ITEM = _CSSClassnames2.default.LIST_ITEM;
	var SELECTED_CLASS = CLASS_ROOT + "-item--selected";

	var List = function (_Component) {
	  (0, _inherits3.default)(List, _Component);

	  function List(props) {
	    (0, _classCallCheck3.default)(this, List);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(List).call(this, props));

	    _this._onClick = _this._onClick.bind(_this);

	    _this.state = {
	      selected: _Selection2.default.normalizeIndexes(props.selected)
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(List, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._setSelection();
	      if (this.props.onMore) {
	        this._scroll = _InfiniteScroll2.default.startListeningForScroll(this.refs.more, this.props.onMore);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this._scroll) {
	        _InfiniteScroll2.default.stopListeningForScroll(this._scroll);
	        this._scroll = null;
	      }
	      if (nextProps.hasOwnProperty('selected')) {
	        this.setState({
	          selected: _Selection2.default.normalizeIndexes(nextProps.selected)
	        });
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      if ((0, _stringify2.default)(this.state.selected) !== (0, _stringify2.default)(prevState.selected)) {
	        this._setSelection();
	      }
	      if (this.props.onMore && !this._scroll) {
	        this._scroll = _InfiniteScroll2.default.startListeningForScroll(this.refs.more, this.props.onMore);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this._scroll) {
	        _InfiniteScroll2.default.stopListeningForScroll(this._scroll);
	      }
	    }
	  }, {
	    key: '_setSelection',
	    value: function _setSelection() {
	      _Selection2.default.setClassFromIndexes({
	        containerElement: this.refs.list,
	        childSelector: '.' + LIST_ITEM,
	        selectedClass: SELECTED_CLASS,
	        selectedIndexes: this.state.selected
	      });
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick(event) {
	      if (!this.props.selectable) {
	        return;
	      }

	      var selected = _Selection2.default.onClick(event, {
	        containerElement: this.refs.list,
	        childSelector: '.' + LIST_ITEM,
	        selectedClass: SELECTED_CLASS,
	        multiSelect: 'multiple' === this.props.selectable,
	        priorSelectedIndexes: this.state.selected
	      });
	      // only set the selected state and classes if the caller isn't managing it.
	      if (!this.props.selected) {
	        this.setState({ selected: selected }, this._setSelection);
	      }

	      if (this.props.onSelect) {
	        // notify caller that the selection has changed
	        if (selected.length === 1) {
	          selected = selected[0];
	        }
	        this.props.onSelect(selected);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = [CLASS_ROOT];
	      if (this.props.selectable) {
	        classes.push(CLASS_ROOT + "--selectable");
	      }
	      if (this.props.className) {
	        classes.push(this.props.className);
	      }

	      var empty = void 0;
	      if (this.props.emptyIndicator) {
	        empty = _react2.default.createElement(
	          'li',
	          { className: CLASS_ROOT + "__empty" },
	          this.props.emptyIndicator
	        );
	      }

	      var more;
	      if (this.props.onMore) {
	        classes.push(CLASS_ROOT + "--moreable");
	        more = _react2.default.createElement(
	          'li',
	          { ref: 'more', className: CLASS_ROOT + "__more" },
	          _react2.default.createElement(_Spinning2.default, null)
	        );
	      }

	      return _react2.default.createElement(
	        'ul',
	        { ref: 'list', className: classes.join(' '), onClick: this._onClick },
	        empty,
	        this.props.children,
	        more
	      );
	    }
	  }]);
	  return List;
	}(_react.Component);

	List.displayName = 'List';
	exports.default = List;


	List.propTypes = {
	  emptyIndicator: _react.PropTypes.node,
	  onMore: _react.PropTypes.func,
	  onSelect: _react.PropTypes.func,
	  selectable: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['multiple'])]),
	  selected: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.arrayOf(_react.PropTypes.number)])
	};
	module.exports = exports['default'];

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(67);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Box = __webpack_require__(83);

	var _Box2 = _interopRequireDefault(_Box);

	var _Heading = __webpack_require__(178);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _ListItem = __webpack_require__(182);

	var _ListItem2 = _interopRequireDefault(_ListItem);

	var _Add = __webpack_require__(183);

	var _Add2 = _interopRequireDefault(_Add);

	var _Subtract = __webpack_require__(184);

	var _Subtract2 = _interopRequireDefault(_Subtract);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = 'accordion-panel';

	var AccordionPanel = function (_Component) {
	  _inherits(AccordionPanel, _Component);

	  function AccordionPanel(props) {
	    _classCallCheck(this, AccordionPanel);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AccordionPanel).call(this, props));

	    _this._onClickPanel = _this._onClickPanel.bind(_this);

	    _this.state = {
	      isOpen: false
	    };
	    return _this;
	  }

	  _createClass(AccordionPanel, [{
	    key: '_onClickPanel',
	    value: function _onClickPanel() {
	      this.setState({ isOpen: !this.state.isOpen });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var panelTitle = _props.panelTitle;
	      var children = _props.children;


	      var classes = (0, _classnames2.default)(CLASS_ROOT, this.props.className);

	      var panelControlIcon = _react2.default.createElement(_Add2.default, { colorIndex: 'brand' });
	      var panelContent = void 0;

	      if (this.state.isOpen) {
	        panelControlIcon = _react2.default.createElement(_Subtract2.default, { colorIndex: 'brand' });

	        panelContent = _react2.default.createElement(
	          _Box2.default,
	          { full: 'horizontal', pad: { vertical: "medium" } },
	          children
	        );
	      }

	      return _react2.default.createElement(
	        _ListItem2.default,
	        { className: classes, direction: 'column' },
	        _react2.default.createElement(
	          _Box2.default,
	          { full: 'horizontal', direction: 'row', justify: 'between', align: 'center', onClick: this._onClickPanel, responsive: false },
	          _react2.default.createElement(
	            _Heading2.default,
	            { tag: 'h2', margin: 'small' },
	            panelTitle
	          ),
	          panelControlIcon
	        ),
	        panelContent
	      );
	    }
	  }]);

	  return AccordionPanel;
	}(_react.Component);

	exports.default = AccordionPanel;
	;

	AccordionPanel.propTypes = {
	  panelTitle: _react.PropTypes.string.isRequired
	};
	module.exports = exports['default'];

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(69);

	var _extends3 = _interopRequireDefault(_extends2);

	var _keys = __webpack_require__(84);

	var _keys2 = _interopRequireDefault(_keys);

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _Box = __webpack_require__(83);

	var _Box2 = _interopRequireDefault(_Box);

	var _Props = __webpack_require__(91);

	var _Props2 = _interopRequireDefault(_Props);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASS_ROOT = _CSSClassnames2.default.LIST_ITEM; // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var ListItem = function (_Component) {
	  (0, _inherits3.default)(ListItem, _Component);

	  function ListItem() {
	    (0, _classCallCheck3.default)(this, ListItem);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ListItem).apply(this, arguments));
	  }

	  (0, _createClass3.default)(ListItem, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var _props = this.props;
	      var children = _props.children;
	      var className = _props.className;
	      var onClick = _props.onClick;
	      var selected = _props.selected;


	      if (selected) {
	        console.warn('Selected option has been deprecated, please use selected ' + 'option at the List level.');
	      }

	      var classes = (0, _classnames3.default)(CLASS_ROOT, className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--selected', selected), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--selectable', onClick), _classnames));

	      var boxProps = _Props2.default.pick(this.props, (0, _keys2.default)(_Box2.default.propTypes));

	      return _react2.default.createElement(
	        _Box2.default,
	        (0, _extends3.default)({}, boxProps, { tag: 'li', className: classes }),
	        children
	      );
	    }
	  }]);
	  return ListItem;
	}(_react.Component);

	ListItem.displayName = 'ListItem';
	exports.default = ListItem;
	;

	ListItem.propTypes = (0, _extends3.default)({
	  selected: _react.PropTypes.bool
	}, _Box2.default.propTypes);

	ListItem.defaultProps = {
	  align: 'center',
	  direction: 'row',
	  pad: { horizontal: 'medium', vertical: 'small' },
	  separator: 'bottom'
	};
	module.exports = exports['default'];

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _FormattedMessage = __webpack_require__(81);

	var _FormattedMessage2 = _interopRequireDefault(_FormattedMessage);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

	var Icon = function (_Component) {
	  (0, _inherits3.default)(Icon, _Component);

	  function Icon() {
	    (0, _classCallCheck3.default)(this, Icon);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var _props = this.props;
	      var a11yTitleId = _props.a11yTitleId;
	      var className = _props.className;
	      var colorIndex = _props.colorIndex;
	      var _props2 = this.props;
	      var a11yTitle = _props2.a11yTitle;
	      var size = _props2.size;


	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-add', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

	      a11yTitle = a11yTitle || _react2.default.createElement(_FormattedMessage2.default, { id: 'add', defaultMessage: 'add' });

	      return _react2.default.createElement(
	        'svg',
	        { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-labelledby': a11yTitleId },
	        _react2.default.createElement(
	          'title',
	          { id: a11yTitleId },
	          a11yTitle
	        ),
	        _react2.default.createElement(
	          'g',
	          null,
	          _react2.default.createElement('rect', { x: '0', fill: 'none', width: '24', height: '24' }),
	          _react2.default.createElement('path', { fill: 'none', stroke: '#000000', strokeWidth: '2', strokeMiterlimit: '10', d: 'M0,12h24 M12,24V0' })
	        )
	      );
	    }
	  }]);
	  return Icon;
	}(_react.Component);

	Icon.displayName = 'Icon';
	exports.default = Icon;
	;

	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  a11yTitleId: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge'])
	};

	Icon.defaultProps = {
	  a11yTitleId: 'add-title'
	};

	Icon.icon = true;

	Icon.displayName = 'Add';
	module.exports = exports['default'];

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _FormattedMessage = __webpack_require__(81);

	var _FormattedMessage2 = _interopRequireDefault(_FormattedMessage);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

	var Icon = function (_Component) {
	  (0, _inherits3.default)(Icon, _Component);

	  function Icon() {
	    (0, _classCallCheck3.default)(this, Icon);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var _props = this.props;
	      var a11yTitleId = _props.a11yTitleId;
	      var className = _props.className;
	      var colorIndex = _props.colorIndex;
	      var _props2 = this.props;
	      var a11yTitle = _props2.a11yTitle;
	      var size = _props2.size;


	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-subtract', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

	      a11yTitle = a11yTitle || _react2.default.createElement(_FormattedMessage2.default, { id: 'subtract', defaultMessage: 'subtract' });

	      return _react2.default.createElement(
	        'svg',
	        { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-labelledby': a11yTitleId },
	        _react2.default.createElement(
	          'title',
	          { id: a11yTitleId },
	          a11yTitle
	        ),
	        _react2.default.createElement(
	          'g',
	          null,
	          _react2.default.createElement('rect', { x: '0', y: '0', fill: 'none', width: '24', height: '24' }),
	          _react2.default.createElement('line', { fill: 'none', stroke: '#000000', strokeWidth: '2', strokeMiterlimit: '10', x1: '0', y1: '12', x2: '24', y2: '12' })
	        )
	      );
	    }
	  }]);
	  return Icon;
	}(_react.Component);

	Icon.displayName = 'Icon';
	exports.default = Icon;
	;

	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  a11yTitleId: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge'])
	};

	Icon.defaultProps = {
	  a11yTitleId: 'subtract-title'
	};

	Icon.icon = true;

	Icon.displayName = 'Subtract';
	module.exports = exports['default'];

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _Props = __webpack_require__(91);

	var _Props2 = _interopRequireDefault(_Props);

	var _Box = __webpack_require__(83);

	var _Box2 = _interopRequireDefault(_Box);

	var _Tile = __webpack_require__(134);

	var _Tile2 = _interopRequireDefault(_Tile);

	var _Heading = __webpack_require__(178);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _Paragraph = __webpack_require__(171);

	var _Paragraph2 = _interopRequireDefault(_Paragraph);

	var _Anchor = __webpack_require__(115);

	var _Anchor2 = _interopRequireDefault(_Anchor);

	var _Layer = __webpack_require__(94);

	var _Layer2 = _interopRequireDefault(_Layer);

	var _Video = __webpack_require__(186);

	var _Video2 = _interopRequireDefault(_Video);

	var _LinkNext = __webpack_require__(108);

	var _LinkNext2 = _interopRequireDefault(_LinkNext);

	var _Play = __webpack_require__(188);

	var _Play2 = _interopRequireDefault(_Play);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = 'content-card';

	var ContentCard = function (_Component) {
	  _inherits(ContentCard, _Component);

	  function ContentCard(props) {
	    _classCallCheck(this, ContentCard);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ContentCard).call(this, props));

	    _this._handleClick = _this._handleClick.bind(_this);
	    _this.state = {
	      activeVideo: false
	    };
	    return _this;
	  }

	  _createClass(ContentCard, [{
	    key: '_handleClick',
	    value: function _handleClick(event) {
	      var _props = this.props;
	      var video = _props.video;
	      var link = _props.link;


	      if (video) {
	        event.preventDefault();
	        this.setState({ activeVideo: !this.state.activeVideo });
	      } else if (link) {
	        window.location.href = link;
	      }
	    }
	  }, {
	    key: '_renderChildren',
	    value: function _renderChildren() {
	      var _props2 = this.props;
	      var children = _props2.children;
	      var socialIcon = _props2.socialIcon;


	      if (socialIcon) {
	        return _react2.default.createElement(
	          _Box2.default,
	          { className: 'flex', pad: { between: 'large' } },
	          children,
	          _react2.default.createElement(
	            _Box2.default,
	            { className: CLASS_ROOT + '__social-icon', align: 'end' },
	            socialIcon
	          )
	        );
	      }

	      return children;
	    }
	  }, {
	    key: '_renderLinkMarkup',
	    value: function _renderLinkMarkup() {
	      var _props3 = this.props;
	      var link = _props3.link;
	      var linkIcon = _props3.linkIcon;
	      var linkText = _props3.linkText;
	      var onClick = _props3.onClick;
	      var video = _props3.video;


	      var linkMarkup = void 0;
	      var anchorLabel = linkText;
	      if (!linkText) {
	        anchorLabel = video ? 'Watch Now' : 'Learn More';
	      }

	      var anchorIcon = linkIcon;
	      if (!linkIcon) {
	        anchorIcon = video ? _react2.default.createElement(_Play2.default, null) : _react2.default.createElement(_LinkNext2.default, null);
	      }

	      if (link || onClick || video) {
	        linkMarkup = _react2.default.createElement(
	          _Box2.default,
	          { pad: { vertical: "small" } },
	          _react2.default.createElement(_Anchor2.default, { href: link, icon: anchorIcon, label: anchorLabel,
	            onClick: this._handleClick })
	        );
	      }

	      return linkMarkup;
	    }
	  }, {
	    key: '_renderVideoMarkup',
	    value: function _renderVideoMarkup() {
	      var video = this.props.video;
	      var activeVideo = this.state.activeVideo;

	      var videoMarkup = void 0;

	      if (video && video.source && activeVideo) {
	        videoMarkup = _react2.default.createElement(
	          _Layer2.default,
	          { onClose: this._handleClick, closer: true, flush: true },
	          _react2.default.createElement(
	            _Video2.default,
	            null,
	            _react2.default.createElement('source', { src: video.source, type: 'video/' + video.type })
	          )
	        );
	      }

	      return videoMarkup;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var _props4 = this.props;
	      var thumbnail = _props4.thumbnail;
	      var description = _props4.description;
	      var heading = _props4.heading;
	      var overline = _props4.overline;
	      var link = _props4.link;
	      var onClick = _props4.onClick;
	      var video = _props4.video;
	      var socialIcon = _props4.socialIcon;
	      var direction = _props4.direction;
	      var contentPlacement = _props4.contentPlacement;
	      var pad = _props4.pad;
	      var className = _props4.className;

	      var tileProps = _Props2.default.pick(this.props, Object.keys(_Tile2.default.propTypes));
	      delete tileProps.onClick;
	      delete tileProps.pad;

	      var classes = (0, _classnames3.default)(CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--direction-' + direction, direction), _defineProperty(_classnames, CLASS_ROOT + '--selectable', link || onClick || video), _classnames), className);

	      var onContentCardClick = onClick;
	      if (!onContentCardClick && (link || video)) {
	        onContentCardClick = this._handleClick;
	      }

	      var contentMarkup = _react2.default.createElement(
	        _Box2.default,
	        { className: CLASS_ROOT + '__content', pad: 'medium' },
	        _react2.default.createElement(
	          _Heading2.default,
	          { tag: 'h5', uppercase: true, margin: 'none' },
	          overline
	        ),
	        _react2.default.createElement(
	          _Heading2.default,
	          { tag: 'h2', strong: true },
	          heading
	        ),
	        _react2.default.createElement(
	          _Paragraph2.default,
	          { margin: 'none' },
	          description
	        ),
	        this._renderChildren(),
	        !socialIcon ? this._renderLinkMarkup() : null
	      );

	      var thumbnailMarkup = void 0;
	      if (thumbnail) {
	        thumbnailMarkup = _react2.default.createElement(_Box2.default, { className: CLASS_ROOT + '__thumbnail', backgroundImage: 'url(' + thumbnail + ')' });
	      }

	      var first = thumbnailMarkup;
	      var second = contentMarkup;
	      var cardJustify = void 0;

	      if (contentPlacement === 'bottom') {
	        first = contentMarkup;
	        second = thumbnailMarkup;
	        // align thumbnail to bottom of card for bottom cardPlacement
	        cardJustify = 'between';
	      }

	      var cardPad = 'small';
	      var cardFull = void 0;
	      if (direction === 'row') {
	        cardPad = { vertical: 'small' };
	        cardFull = 'horizontal';
	      }

	      return _react2.default.createElement(
	        _Tile2.default,
	        _extends({ className: classes, onClick: onContentCardClick,
	          pad: pad || cardPad }, tileProps),
	        _react2.default.createElement(
	          _Box2.default,
	          { className: 'flex', direction: direction, justify: cardJustify,
	            full: cardFull, colorIndex: 'light-1' },
	          first,
	          second,
	          this._renderVideoMarkup()
	        )
	      );
	    }
	  }]);

	  return ContentCard;
	}(_react.Component);

	exports.default = ContentCard;
	;

	ContentCard.propTypes = _extends({
	  thumbnail: _react.PropTypes.string,
	  description: _react.PropTypes.string,
	  heading: _react.PropTypes.string,
	  overline: _react.PropTypes.string,
	  link: _react.PropTypes.string,
	  linkIcon: _react.PropTypes.element,
	  linkText: _react.PropTypes.string,
	  video: _react.PropTypes.shape({
	    source: _react.PropTypes.string.isRequired,
	    type: _react.PropTypes.string
	  }),
	  contentPlacement: _react.PropTypes.oneOf(['top', 'bottom']),
	  socialIcon: _react.PropTypes.element
	}, _Tile2.default.propTypes);

	ContentCard.defaultProps = {
	  contentPlacement: 'top',
	  direction: 'column'
	};
	module.exports = exports['default'];

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames4 = __webpack_require__(67);

	var _classnames5 = _interopRequireDefault(_classnames4);

	var _Intl = __webpack_require__(90);

	var _Intl2 = _interopRequireDefault(_Intl);

	var _Responsive = __webpack_require__(99);

	var _Responsive2 = _interopRequireDefault(_Responsive);

	var _Button = __webpack_require__(96);

	var _Button2 = _interopRequireDefault(_Button);

	var _Box = __webpack_require__(83);

	var _Box2 = _interopRequireDefault(_Box);

	var _Expand = __webpack_require__(187);

	var _Expand2 = _interopRequireDefault(_Expand);

	var _Play = __webpack_require__(188);

	var _Play2 = _interopRequireDefault(_Play);

	var _Pause = __webpack_require__(189);

	var _Pause2 = _interopRequireDefault(_Pause);

	var _Refresh = __webpack_require__(190);

	var _Refresh2 = _interopRequireDefault(_Refresh);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASS_ROOT = _CSSClassnames2.default.VIDEO; // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var BACKGROUND_COLOR_INDEX = _CSSClassnames2.default.BACKGROUND_COLOR_INDEX;

	var Video = function (_Component) {
	  (0, _inherits3.default)(Video, _Component);

	  function Video() {
	    (0, _classCallCheck3.default)(this, Video);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Video).call(this));

	    _this._onResponsive = _this._onResponsive.bind(_this);
	    _this._onPlaying = _this._onPlaying.bind(_this);
	    _this._onPause = _this._onPause.bind(_this);
	    _this._onEnded = _this._onEnded.bind(_this);
	    _this._onClickControl = _this._onClickControl.bind(_this);
	    _this._onMouseMove = _this._onMouseMove.bind(_this);
	    _this._onClickChapter = _this._onClickChapter.bind(_this);
	    _this._onFullScreen = _this._onFullScreen.bind(_this);

	    _this.state = { playing: false, progress: 0, iconSize: 'large' };
	    return _this;
	  }

	  (0, _createClass3.default)(Video, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._responsive = _Responsive2.default.start(this._onResponsive);
	      var video = this.refs.video;
	      video.addEventListener('playing', this._onPlaying);
	      video.addEventListener('pause', this._onPause);
	      video.addEventListener('ended', this._onEnded);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // Dynamically modifying a source element and its attribute when
	      // the element is already inserted in a video or audio element will
	      // have no effect.
	      // From HTML Specs:
	      // https://html.spec.whatwg.org/multipage/embedded-content.html
	      //   #the-source-element
	      // Using forceUpdate to force redraw of video when receiving new <source>
	      this.forceUpdate();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var video = this.refs.video;
	      video.removeEventListener('playing', this._onPlaying);
	      video.removeEventListener('pause', this._onPause);
	      video.removeEventListener('ended', this._onEnded);

	      if (this._responsive) {
	        this._responsive.stop();
	      }
	    }
	  }, {
	    key: '_onResponsive',
	    value: function _onResponsive(small) {
	      if (small) {
	        this.setState({ iconSize: 'small' });
	      } else {
	        var iconSize = 'small' === this.props.size ? null : 'large';
	        this.setState({ iconSize: iconSize });
	      }
	    }
	  }, {
	    key: '_onPlaying',
	    value: function _onPlaying() {
	      var video = this.refs.video;
	      if (!this._progressTimer) {
	        this._progressTimer = setInterval(function () {
	          this.setState({ progress: this.state.progress + 0.5 });
	        }.bind(this), 500);
	      }
	      this.setState({ playing: true, progress: video.currentTime, ended: null });
	    }
	  }, {
	    key: '_onPause',
	    value: function _onPause() {
	      clearInterval(this._progressTimer);
	      this._progressTimer = null;
	      this.setState({ playing: false });
	    }
	  }, {
	    key: '_onEnded',
	    value: function _onEnded() {
	      clearInterval(this._progressTimer);
	      this._progressTimer = null;
	      this.setState({ playing: false, ended: true });
	    }
	  }, {
	    key: '_onClickControl',
	    value: function _onClickControl() {
	      var video = this.refs.video;
	      if (this.state.playing) {
	        video.pause();
	      } else {
	        video.play();
	      }
	    }
	  }, {
	    key: '_onMouseMove',
	    value: function _onMouseMove() {
	      this.setState({ interacting: true });
	      clearTimeout(this._moveTimer);
	      this._moveTimer = setTimeout(function () {
	        this.setState({ interacting: false });
	      }.bind(this), 1000);
	    }
	  }, {
	    key: '_onClickChapter',
	    value: function _onClickChapter(time) {
	      this.refs.video.currentTime = time;
	      this.setState({ progress: time });
	    }
	  }, {
	    key: '_onFullScreen',
	    value: function _onFullScreen() {
	      var video = this.refs.video;

	      // check if webkit and mozilla fullscreen is available
	      if (video.webkitRequestFullScreen) {
	        video.webkitRequestFullScreen();
	      } else if (video.mozRequestFullScreen) {
	        video.mozRequestFullScreen();
	      } else {
	        console.warn('Your browser doesn\'t support fullscreen.');
	      }
	    }
	  }, {
	    key: '_renderTimeline',
	    value: function _renderTimeline() {
	      var timeline = void 0;
	      if (this.props.timeline && this.props.duration) {

	        var chapters = this.props.timeline.map(function (chapter, index, chapters) {
	          var percent = Math.round(chapter.time / this.props.duration * 100);
	          var seconds = chapter.time % 60;
	          var time = Math.floor(chapter.time / 60) + ':' + (seconds < 10 ? '0' + seconds : seconds);
	          var currentProgress = this.state.progress;
	          var nextChapter = chapters[Math.min(chapters.length - 1, index + 1)];
	          var lastChapter = chapters[chapters.length - 1];

	          var timelineClasses = (0, _classnames5.default)(CLASS_ROOT + '__timeline-chapter', (0, _defineProperty3.default)({}, CLASS_ROOT + '__timeline-active', currentProgress !== 0 && (currentProgress >= chapter.time && currentProgress < nextChapter.time || index === chapters.length - 1 && currentProgress >= lastChapter.time)));

	          return _react2.default.createElement(
	            _Box2.default,
	            { key: chapter.time, className: timelineClasses,
	              pad: { vertical: 'small' },
	              style: { left: percent.toString() + '%' },
	              onClick: this._onClickChapter.bind(this, chapter.time) },
	            _react2.default.createElement(
	              'label',
	              null,
	              chapter.label
	            ),
	            _react2.default.createElement(
	              'time',
	              null,
	              time
	            )
	          );
	        }, this);

	        timeline = _react2.default.createElement(
	          'div',
	          { className: CLASS_ROOT + '__timeline' },
	          chapters
	        );
	      }

	      return timeline;
	    }
	  }, {
	    key: '_renderControls',
	    value: function _renderControls() {
	      var controlIconSize = this.state.iconSize;
	      var controlIcon = this.state.playing ? _react2.default.createElement(_Pause2.default, { size: controlIconSize }) : this.state.ended ? _react2.default.createElement(_Refresh2.default, { size: controlIconSize }) : _react2.default.createElement(_Play2.default, { size: controlIconSize });
	      var a11yControlButtonMessage = this.state.playing ? 'Pause Video' : this.state.ended ? 'Restart Video' : 'Play Video';
	      var a11yControlButtonTitle = _Intl2.default.getMessage(this.context.intl, a11yControlButtonMessage);

	      var videoHeader = void 0;
	      var videoSummaryJustify = 'between';
	      if (this.props.videoHeader) {
	        videoHeader = this.props.videoHeader;
	      } else if (this.props.allowFullScreen) {
	        var a11yExpandButtonTitle = _Intl2.default.getMessage(this.context.intl, 'Toggle Fullscreen');
	        // fallback to only displaying full screen icon in header
	        // if allowing fullscreen

	        videoHeader = _react2.default.createElement(
	          _Box2.default,
	          { align: 'end', full: 'horizontal' },
	          _react2.default.createElement(_Button2.default, { plain: true, onClick: this._onFullScreen,
	            icon: _react2.default.createElement(_Expand2.default, null), a11yTitle: a11yExpandButtonTitle })
	        );
	      } else {
	        videoSummaryJustify = 'center';
	      }

	      var title = void 0;
	      if (this.props.title) {
	        title = _react2.default.createElement(
	          _Box2.default,
	          { align: 'center', justify: 'center', className: CLASS_ROOT + '__title' },
	          this.props.title
	        );
	      }

	      var onClickControl = this.props.onClick || this._onClickControl;
	      // when iconSize is small (mobile screen sizes), remove the extra padding
	      // so that the play control is centered
	      var emptyBox = this.state.iconSize === 'small' ? null : _react2.default.createElement(_Box2.default, null);

	      var controlsContent = _react2.default.createElement(
	        _Box2.default,
	        { pad: 'none', align: 'center', justify: videoSummaryJustify,
	          className: CLASS_ROOT + '__summary' },
	        videoHeader,
	        _react2.default.createElement(
	          _Box2.default,
	          { pad: 'medium', align: 'center', justify: 'center' },
	          _react2.default.createElement(_Button2.default, { className: CLASS_ROOT + '__control', plain: true,
	            primary: true, onClick: onClickControl,
	            icon: controlIcon, a11yTitle: a11yControlButtonTitle }),
	          title
	        ),
	        emptyBox
	      );

	      return controlsContent;
	    }
	  }, {
	    key: '_renderProgress',
	    value: function _renderProgress() {
	      var progressTicks = void 0;
	      if (this.props.timeline && this.props.duration) {

	        var chapters = this.props.timeline.map(function (chapter, index, chapters) {
	          var percent = Math.round(chapter.time / this.props.duration * 100);
	          var currentProgress = this.state.progress;
	          var nextChapter = chapters[Math.min(chapters.length - 1, index + 1)];

	          var progressTicksClasses = (0, _classnames5.default)(CLASS_ROOT + '__progress-ticks-chapter', (0, _defineProperty3.default)({}, CLASS_ROOT + '__progress-ticks-active', currentProgress !== 0 && currentProgress >= chapter.time && currentProgress < nextChapter.time));

	          return _react2.default.createElement('div', { key: chapter.time, className: progressTicksClasses,
	            style: { left: percent.toString() + '%' },
	            onClick: this._onClickChapter.bind(this, chapter.time) });
	        }, this);

	        progressTicks = _react2.default.createElement(
	          'div',
	          { className: CLASS_ROOT + '__progress-ticks' },
	          chapters
	        );
	      }

	      var progress = void 0;
	      if (this.props.duration) {
	        var progressClass = (0, _classnames5.default)(CLASS_ROOT + '__progress', (0, _defineProperty3.default)({}, CLASS_ROOT + '--has-timeline', this.props.timeline));

	        var percent = Math.min(Math.round(this.state.progress / this.props.duration * 100), 100);
	        progress = _react2.default.createElement(
	          'div',
	          { className: progressClass },
	          _react2.default.createElement('div', { className: CLASS_ROOT + '__progress-meter',
	            style: { width: percent.toString() + '%' } }),
	          progressTicks
	        );
	      }

	      return progress;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = [CLASS_ROOT];
	      if (this.props.size) {
	        classes.push(CLASS_ROOT + '--' + this.props.size);
	      }
	      if (this.props.full) {
	        classes.push(CLASS_ROOT + '--full');
	      }
	      if (this.state.playing) {
	        classes.push(CLASS_ROOT + '--playing');
	      }
	      if (this.state.interacting) {
	        classes.push(CLASS_ROOT + '--interacting');
	      }
	      if (this.props.videoHeader) {
	        classes.push(CLASS_ROOT + '--video-header');
	      }
	      if (this.props.colorIndex) {
	        classes.push(BACKGROUND_COLOR_INDEX + '-' + this.props.colorIndex);
	      }
	      if (this.props.className) {
	        classes.push(this.props.className);
	      }
	      if (this.props.title) {
	        classes.push(CLASS_ROOT + '--titled');
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: classes.join(' '), onMouseMove: this._onMouseMove },
	        _react2.default.createElement(
	          'video',
	          { ref: 'video',
	            poster: this.props.poster,
	            autoPlay: this.props.autoPlay ? 'autoplay' : false,
	            loop: this.props.loop ? 'loop' : false,
	            muted: this.props.muted ? 'muted' : false },
	          this.props.children
	        ),
	        this.props.showControls ? this._renderControls() : undefined,
	        this.props.showControls ? this._renderTimeline() : undefined,
	        this.props.showControls ? this._renderProgress() : undefined
	      );
	    }
	  }]);
	  return Video;
	}(_react.Component);

	Video.displayName = 'Video';
	exports.default = Video;


	Video.propTypes = {
	  colorIndex: _react.PropTypes.string,
	  duration: _react.PropTypes.number,
	  full: _react.PropTypes.oneOf([true, 'horizontal', 'vertical', false]),
	  poster: _react.PropTypes.string,
	  size: _react2.default.PropTypes.oneOf(['small', 'medium', 'large']),
	  timeline: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    label: _react.PropTypes.string,
	    time: _react.PropTypes.number
	  })),
	  title: _react.PropTypes.node,
	  videoHeader: _react.PropTypes.node,
	  onClick: _react.PropTypes.func,
	  allowFullScreen: _react.PropTypes.bool,
	  autoPlay: _react.PropTypes.bool,
	  showControls: _react.PropTypes.bool,
	  muted: _react.PropTypes.bool,
	  loop: _react.PropTypes.bool
	};

	Video.defaultProps = {
	  autoPlay: false,
	  showControls: true,
	  muted: false,
	  loop: false
	};
	module.exports = exports['default'];

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _FormattedMessage = __webpack_require__(81);

	var _FormattedMessage2 = _interopRequireDefault(_FormattedMessage);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

	var Icon = function (_Component) {
	  (0, _inherits3.default)(Icon, _Component);

	  function Icon() {
	    (0, _classCallCheck3.default)(this, Icon);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var _props = this.props;
	      var a11yTitleId = _props.a11yTitleId;
	      var className = _props.className;
	      var colorIndex = _props.colorIndex;
	      var _props2 = this.props;
	      var a11yTitle = _props2.a11yTitle;
	      var size = _props2.size;


	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-expand', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

	      a11yTitle = a11yTitle || _react2.default.createElement(_FormattedMessage2.default, { id: 'expand', defaultMessage: 'expand' });

	      return _react2.default.createElement(
	        'svg',
	        { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-labelledby': a11yTitleId },
	        _react2.default.createElement(
	          'title',
	          { id: a11yTitleId },
	          a11yTitle
	        ),
	        _react2.default.createElement(
	          'g',
	          null,
	          _react2.default.createElement('rect', { y: '0', fill: 'none', width: '24', height: '24' }),
	          _react2.default.createElement('path', { fill: 'none', stroke: '#000000', strokeWidth: '2', strokeMiterlimit: '10', d: 'M15,1h8v8 M22,2l-8,8 M1,15v8h8 M10,14l-8,8' })
	        )
	      );
	    }
	  }]);
	  return Icon;
	}(_react.Component);

	Icon.displayName = 'Icon';
	exports.default = Icon;
	;

	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  a11yTitleId: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge'])
	};

	Icon.defaultProps = {
	  a11yTitleId: 'expand-title'
	};

	Icon.icon = true;

	Icon.displayName = 'Expand';
	module.exports = exports['default'];

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _FormattedMessage = __webpack_require__(81);

	var _FormattedMessage2 = _interopRequireDefault(_FormattedMessage);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

	var Icon = function (_Component) {
	  (0, _inherits3.default)(Icon, _Component);

	  function Icon() {
	    (0, _classCallCheck3.default)(this, Icon);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var _props = this.props;
	      var a11yTitleId = _props.a11yTitleId;
	      var className = _props.className;
	      var colorIndex = _props.colorIndex;
	      var _props2 = this.props;
	      var a11yTitle = _props2.a11yTitle;
	      var size = _props2.size;


	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-play', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

	      a11yTitle = a11yTitle || _react2.default.createElement(_FormattedMessage2.default, { id: 'play', defaultMessage: 'play' });

	      return _react2.default.createElement(
	        'svg',
	        { version: '1.1', viewBox: '0 0 24 24.3317', width: '24px', height: '24px', role: 'img', className: classes, 'aria-labelledby': a11yTitleId },
	        _react2.default.createElement(
	          'title',
	          { id: a11yTitleId },
	          a11yTitle
	        ),
	        _react2.default.createElement(
	          'g',
	          null,
	          _react2.default.createElement('rect', { y: '0.1658', fill: 'none', width: '24', height: '24' }),
	          _react2.default.createElement('polygon', { fill: '#000000', stroke: '#000000', strokeWidth: '2', strokeMiterlimit: '10', points: '6,1.9658 6,22.3658 20,12.1658 \t' })
	        )
	      );
	    }
	  }]);
	  return Icon;
	}(_react.Component);

	Icon.displayName = 'Icon';
	exports.default = Icon;
	;

	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  a11yTitleId: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge'])
	};

	Icon.defaultProps = {
	  a11yTitleId: 'play-title'
	};

	Icon.icon = true;

	Icon.displayName = 'Play';
	module.exports = exports['default'];

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _FormattedMessage = __webpack_require__(81);

	var _FormattedMessage2 = _interopRequireDefault(_FormattedMessage);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

	var Icon = function (_Component) {
	  (0, _inherits3.default)(Icon, _Component);

	  function Icon() {
	    (0, _classCallCheck3.default)(this, Icon);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var _props = this.props;
	      var a11yTitleId = _props.a11yTitleId;
	      var className = _props.className;
	      var colorIndex = _props.colorIndex;
	      var _props2 = this.props;
	      var a11yTitle = _props2.a11yTitle;
	      var size = _props2.size;


	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-pause', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

	      a11yTitle = a11yTitle || _react2.default.createElement(_FormattedMessage2.default, { id: 'pause', defaultMessage: 'pause' });

	      return _react2.default.createElement(
	        'svg',
	        { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-labelledby': a11yTitleId },
	        _react2.default.createElement(
	          'title',
	          { id: a11yTitleId },
	          a11yTitle
	        ),
	        _react2.default.createElement(
	          'g',
	          null,
	          _react2.default.createElement('rect', { y: '0', fill: 'none', width: '24', height: '24' }),
	          _react2.default.createElement('path', { fill: '#000000', stroke: '#000000', strokeWidth: '2', strokeMiterlimit: '10', d: 'M15,22V2h5v20H15z M9,22V2H4v20H9z' })
	        )
	      );
	    }
	  }]);
	  return Icon;
	}(_react.Component);

	Icon.displayName = 'Icon';
	exports.default = Icon;
	;

	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  a11yTitleId: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge'])
	};

	Icon.defaultProps = {
	  a11yTitleId: 'pause-title'
	};

	Icon.icon = true;

	Icon.displayName = 'Pause';
	module.exports = exports['default'];

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _FormattedMessage = __webpack_require__(81);

	var _FormattedMessage2 = _interopRequireDefault(_FormattedMessage);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

	var Icon = function (_Component) {
	  (0, _inherits3.default)(Icon, _Component);

	  function Icon() {
	    (0, _classCallCheck3.default)(this, Icon);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var _props = this.props;
	      var a11yTitleId = _props.a11yTitleId;
	      var className = _props.className;
	      var colorIndex = _props.colorIndex;
	      var _props2 = this.props;
	      var a11yTitle = _props2.a11yTitle;
	      var size = _props2.size;


	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-refresh', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

	      a11yTitle = a11yTitle || _react2.default.createElement(_FormattedMessage2.default, { id: 'refresh', defaultMessage: 'refresh' });

	      return _react2.default.createElement(
	        'svg',
	        { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-labelledby': a11yTitleId },
	        _react2.default.createElement(
	          'title',
	          { id: a11yTitleId },
	          a11yTitle
	        ),
	        _react2.default.createElement(
	          'g',
	          null,
	          _react2.default.createElement('rect', { y: '0', fill: 'none', width: '24', height: '24' }),
	          _react2.default.createElement('path', { fill: 'none', stroke: '#000000', strokeWidth: '2', strokeMiterlimit: '10', d: 'M23,1v7h-7 M22.0006,7.4123\r C20.2616,3.6278,16.4377,1,12,1C5.9249,1,1,5.9249,1,12s4.9249,11,11,11s11-4.9249,11-11' })
	        )
	      );
	    }
	  }]);
	  return Icon;
	}(_react.Component);

	Icon.displayName = 'Icon';
	exports.default = Icon;
	;

	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  a11yTitleId: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge'])
	};

	Icon.defaultProps = {
	  a11yTitleId: 'refresh-title'
	};

	Icon.icon = true;

	Icon.displayName = 'Refresh';
	module.exports = exports['default'];

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var React = __webpack_require__(1);
	var jsxToString = __webpack_require__(169);
	var DocsArticle = __webpack_require__(140);
	var ContentCard = __webpack_require__(185);
	var Box = __webpack_require__(83);
	var Tiles = __webpack_require__(119);
	var Heading = __webpack_require__(178);
	var SocialTwitterIcon = __webpack_require__(192);

	ContentCard.displayName = 'ContentCard';

	var inline = "<ContentCard ... />";

	var ContentCardDoc = React.createClass({
	  displayName: 'ContentCardDoc',


	  contextTypes: {
	    routePrefix: React.PropTypes.string.isRequired
	  },

	  _renderCode: function _renderCode(name, jsx) {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        name
	      ),
	      React.createElement(
	        'div',
	        { className: 'example' },
	        jsx
	      ),
	      React.createElement(
	        'pre',
	        null,
	        React.createElement(
	          'code',
	          { className: 'html hljs xml' },
	          jsxToString(jsx)
	        )
	      )
	    );
	  },


	  render: function render() {
	    var simpleContentCard = React.createElement(
	      Box,
	      { colorIndex: 'light-2' },
	      React.createElement(ContentCard, {
	        thumbnail: '/docs/img/Case_Study_image.png',
	        overline: 'Featured Post',
	        heading: 'The Key Steps to Reducing Software Spend',
	        description: 'HPE Software Licensing and Management Solutions can help you optimize your software investments through control of complex negotiations and renewal processes'
	      })
	    );

	    var linkContentCard = React.createElement(
	      Box,
	      { colorIndex: 'light-2' },
	      React.createElement(ContentCard, {
	        contentPlacement: 'bottom',
	        thumbnail: '/docs/img/Case_Study_image.png',
	        overline: 'Featured Post',
	        heading: 'The Key Steps to Reducing Software Spend',
	        description: 'HPE Software Licensing and Management Solutions can help you optimize your software investments through control of complex negotiations and renewal processes',
	        link: '#'
	      })
	    );

	    var videoContentCard = React.createElement(
	      Box,
	      { colorIndex: 'light-2' },
	      React.createElement(ContentCard, {
	        direction: 'row',
	        thumbnail: '/docs/img/Video_image.png',
	        overline: 'Video - 4:27',
	        heading: 'Foundation Paraguay Empowers Microbusinesses',
	        description: 'See how Hewlett Packard Enterprise delivers mobile solutions to improve quality of life and help eliminate poverty in South America.',
	        video: {
	          source: 'video/test.mp4',
	          type: 'mp4'
	        }
	      })
	    );

	    var socialFeedCard = React.createElement(
	      ContentCard,
	      {
	        direction: 'column',
	        overline: 'Social',
	        socialIcon: React.createElement(SocialTwitterIcon, null),
	        link: 'http://www.twitter.com' },
	      React.createElement(
	        Heading,
	        { tag: 'h2' },
	        'Protect Your Digital Enterprise ipsum lorem dolores aeat el'
	      )
	    );

	    var blogPostCard = React.createElement(
	      ContentCard,
	      {
	        direction: 'column',
	        overline: 'Featured Post',
	        link: 'http://www.twitter.com' },
	      React.createElement(
	        Heading,
	        { tag: 'h2' },
	        'Protect Your Digital Enterprise ipsum lorem dolores aeat el'
	      )
	    );

	    var featuredPostCard = React.createElement(
	      ContentCard,
	      {
	        thumbnail: '/docs/img/Case_Study_image.png',
	        direction: 'column',
	        overline: 'Featured Post',
	        link: 'http://www.twitter.com' },
	      React.createElement(
	        Heading,
	        { tag: 'h2' },
	        'Protect Your Digital Enterprise ipsum lorem dolores aeat el'
	      )
	    );

	    var socialCards = React.createElement(
	      Tiles,
	      { size: 'large', colorIndex: 'light-2' },
	      socialFeedCard,
	      blogPostCard
	    );

	    var contentCardTiles = React.createElement(
	      Tiles,
	      { size: 'large', colorIndex: 'light-2' },
	      React.createElement(ContentCard, {
	        direction: 'column',
	        thumbnail: '/docs/img/Case_Study_image.png',
	        overline: 'Featured Post',
	        heading: 'Protect Your Digital Enterprise ipsum Learn More lorem dolores aeat',
	        description: 'It’s not an either/or world. It’s about finding the right platform for each app, workload and service. Learn how hybrid infrastructure can help you achieve cloud agility with traditional IT predictability. It’s not an either/or world. It’s about finding the right platform for each app, workload and service. Learn how hybrid infrastructure can help you achieve cloud agility with traditional IT predictability. It’s not an either/or world. It’s about finding the right platform for each app, workload and service. Learn how hybrid infrastructure can help you achieve cloud agility with traditional IT predictability. ',
	        link: 'http://grommet.io'
	      }),
	      React.createElement(ContentCard, {
	        direction: 'column',
	        thumbnail: '/docs/img/Video_image.png',
	        overline: 'Video - 4:27',
	        heading: 'Foundation Paraguay Empowers Microbusinesses',
	        description: 'See how Hewlett Packard Enterprise delivers mobile solutions to improve quality of life and help eliminate poverty in South America.',
	        video: {
	          source: 'video/test.mp4',
	          type: 'mp4'
	        }
	      }),
	      React.createElement(ContentCard, {
	        direction: 'column',
	        thumbnail: '/docs/img/Case_Study_image.png',
	        overline: 'Featured Post',
	        heading: 'The Key Steps to Reducing Software Spend',
	        description: 'HPE Software Licensing and Management Solutions can help you optimize your software investments through control of complex negotiations and renewal processes'
	      }),
	      React.createElement(ContentCard, {
	        direction: 'column',
	        thumbnail: '/docs/img/Case_Study_image.png',
	        overline: 'Featured Post',
	        heading: 'The Key Steps to Reducing Software Spend',
	        description: 'HPE Software Licensing and Management Solutions can help you optimize your software investments through control of complex negotiations and renewal processes'
	      })
	    );

	    var contentCardTilesMasonry = React.createElement(
	      Tiles,
	      { size: 'large', masonry: true, numColumns: 7, colorIndex: 'light-2' },
	      blogPostCard,
	      featuredPostCard,
	      socialFeedCard,
	      socialFeedCard,
	      blogPostCard,
	      featuredPostCard,
	      featuredPostCard,
	      blogPostCard
	    );

	    return React.createElement(
	      DocsArticle,
	      { title: 'ContentCard', colorIndex: 'neutral-3' },
	      React.createElement(
	        'p',
	        null,
	        'The ContentCard module.'
	      ),
	      React.createElement(
	        'pre',
	        null,
	        React.createElement(
	          'code',
	          { className: 'html hljs xml' },
	          inline
	        )
	      ),
	      React.createElement(
	        'section',
	        null,
	        React.createElement(
	          'h2',
	          null,
	          'ContentCard Options'
	        ),
	        React.createElement(
	          'dl',
	          null,
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'thumbnail            ',
	              '{url}'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Url path to image. Use contentPlacement option to position thumbnail within card.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'overline             ',
	              '{string}'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Content label.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'heading              ',
	              '{string}'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Content heading.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'description          ',
	              '{string}'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Content description.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'link                 ',
	              '{location}'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Anchor hyperlink reference.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'linkIcon             ',
	              '{element}'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Anchor Icon element. If video is provided, default is ',
	            React.createElement(
	              'code',
	              null,
	              '<Play>'
	            ),
	            ' icon, else it is ',
	            React.createElement(
	              'code',
	              null,
	              '<LinkNext>'
	            ),
	            ' icon. See ',
	            React.createElement(
	              'a',
	              { href: 'http://www.grommet.io/docs/develop/icon' },
	              'Icon'
	            ),
	            '. If no ',
	            React.createElement(
	              'code',
	              null,
	              'link, onClick, or video'
	            ),
	            ' is provided, ',
	            React.createElement(
	              'code',
	              null,
	              'linkIcon'
	            ),
	            ' will not be displayed.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'linkText             ',
	              '{string}'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Anchor text. If video is provided, default is "Watch Now", else it is "Learn More". If no ',
	            React.createElement(
	              'code',
	              null,
	              'link, onClick, or video'
	            ),
	            ' is provided, ',
	            React.createElement(
	              'code',
	              null,
	              'linkText'
	            ),
	            ' will not be displayed.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'onClick              ',
	              '{func}'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Click handler.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'video                ',
	              '{source: <string>, type: mp4|webm|ogg}'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Video media type and source path.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'socialIcon           ',
	              '{element}'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Icon element. See ',
	            React.createElement(
	              'a',
	              { href: 'http://www.grommet.io/docs/develop/icon' },
	              'Icon'
	            ),
	            '. If ',
	            React.createElement(
	              'code',
	              null,
	              'socialIcon'
	            ),
	            ' is present, Anchor (',
	            React.createElement(
	              'code',
	              null,
	              'linkIcon'
	            ),
	            ' and ',
	            React.createElement(
	              'code',
	              null,
	              'linkText'
	            ),
	            ') will not be displayed.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'direction            ',
	              'column|row'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'Applies the ContentCards in a column (default) or row direction. Expects multiple ContentCard modules to be wrapped in a ',
	            React.createElement(
	              'a',
	              { href: 'http://www.grommet.io/docs/hpe/develop/tiles' },
	              'Tiles'
	            ),
	            ' component.'
	          ),
	          React.createElement(
	            'dt',
	            null,
	            React.createElement(
	              'code',
	              null,
	              'contentPlacement     ',
	              'top|bottom'
	            )
	          ),
	          React.createElement(
	            'dd',
	            null,
	            'If thumbnail url is set, align thumbnail to top or bottom of card. Defaults to ',
	            React.createElement(
	              'code',
	              null,
	              '\'top\''
	            ),
	            '.'
	          )
	        )
	      ),
	      React.createElement(
	        'section',
	        null,
	        React.createElement(
	          'h2',
	          null,
	          'Examples'
	        ),
	        this._renderCode('Default', simpleContentCard),
	        this._renderCode('Bottom contentPlacement, Link', linkContentCard),
	        this._renderCode('Row, Video', videoContentCard),
	        this._renderCode('Custom Children, with and without socialIcon (Tiles)', socialCards),
	        this._renderCode('Link, Video, Simple, Simple (Tiles)', contentCardTiles),
	        this._renderCode('Tiles with Masonry', contentCardTilesMasonry)
	      )
	    );
	  }
	});

	module.exports = ContentCardDoc;

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(5);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(9);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(21);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(22);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(23);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(60);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _FormattedMessage = __webpack_require__(81);

	var _FormattedMessage2 = _interopRequireDefault(_FormattedMessage);

	var _CSSClassnames = __webpack_require__(93);

	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

	var Icon = function (_Component) {
	  (0, _inherits3.default)(Icon, _Component);

	  function Icon() {
	    (0, _classCallCheck3.default)(this, Icon);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Icon).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var _props = this.props;
	      var a11yTitleId = _props.a11yTitleId;
	      var className = _props.className;
	      var colorIndex = _props.colorIndex;
	      var _props2 = this.props;
	      var a11yTitle = _props2.a11yTitle;
	      var size = _props2.size;


	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-social-twitter', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

	      a11yTitle = a11yTitle || _react2.default.createElement(_FormattedMessage2.default, { id: 'social-twitter', defaultMessage: 'social-twitter' });

	      return _react2.default.createElement(
	        'svg',
	        { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-labelledby': a11yTitleId },
	        _react2.default.createElement(
	          'title',
	          { id: a11yTitleId },
	          a11yTitle
	        ),
	        _react2.default.createElement(
	          'g',
	          null,
	          _react2.default.createElement('path', { stroke: 'none', fill: '#000000', d: 'M22,5 C23,4 23,3 23,2 C22,3 21,4 20,4 C20,4 19,2 17,2 C13,2 12,4 12,8 C6,8 4.099,5.97949244 2,3 C0,5.97949243 2,9 3,10 C3,10 2,10 1,9 C1,11 2.661,13.5836965 5,14 C5,14 4,15 2,14 C2,16 5,18 7,18 C7,18 6,21 0,21 C2,22 5,22 8,22 C16.605,22 22,15 22,8 L22,7 C23,6 23.34,5.38067162 24,4 C23,5 22,5 22,5 Z' })
	        )
	      );
	    }
	  }]);
	  return Icon;
	}(_react.Component);

	Icon.displayName = 'Icon';
	exports.default = Icon;
	;

	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  a11yTitleId: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge'])
	};

	Icon.defaultProps = {
	  a11yTitleId: 'social-twitter-title'
	};

	Icon.icon = true;

	Icon.displayName = 'SocialTwitter';
	module.exports = exports['default'];

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _DocsArticle = __webpack_require__(140);

	var _DocsArticle2 = _interopRequireDefault(_DocsArticle);

	var _Example = __webpack_require__(175);

	var _Example2 = _interopRequireDefault(_Example);

	var _Stack = __webpack_require__(194);

	var _Stack2 = _interopRequireDefault(_Stack);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

	_Stack2.default.displayName = 'Stack';

	var StackDoc = function (_Component) {
	  _inherits(StackDoc, _Component);

	  function StackDoc() {
	    _classCallCheck(this, StackDoc);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(StackDoc).apply(this, arguments));
	  }

	  _createClass(StackDoc, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _DocsArticle2.default,
	        { title: 'Stack', colorIndex: 'neutral-3' },
	        _react2.default.createElement(
	          'p',
	          null,
	          'A text stack component.'
	        ),
	        _react2.default.createElement(
	          'pre',
	          null,
	          _react2.default.createElement(
	            'code',
	            { className: 'html hljs xml' },
	            '<Stack />'
	          )
	        ),
	        _react2.default.createElement(
	          'section',
	          null,
	          _react2.default.createElement(
	            'h2',
	            null,
	            'Stack Options'
	          ),
	          _react2.default.createElement(
	            'dl',
	            null,
	            _react2.default.createElement(
	              'dt',
	              null,
	              _react2.default.createElement(
	                'code',
	                null,
	                'size                 small|medium|large|xlarge'
	              )
	            ),
	            _react2.default.createElement(
	              'dd',
	              null,
	              'Size of content within Stack. Defaults to ',
	              _react2.default.createElement(
	                'code',
	                null,
	                'medium'
	              ),
	              '.'
	            ),
	            _react2.default.createElement(
	              'dt',
	              null,
	              _react2.default.createElement(
	                'code',
	                null,
	                'label                string'
	              )
	            ),
	            _react2.default.createElement(
	              'dd',
	              null,
	              'Label content.'
	            ),
	            _react2.default.createElement(
	              'dt',
	              null,
	              _react2.default.createElement(
	                'code',
	                null,
	                'headline             string'
	              )
	            ),
	            _react2.default.createElement(
	              'dd',
	              null,
	              'Headline content.'
	            ),
	            _react2.default.createElement(
	              'dt',
	              null,
	              _react2.default.createElement(
	                'code',
	                null,
	                'headlineStrong       true|false'
	              )
	            ),
	            _react2.default.createElement(
	              'dd',
	              null,
	              'If the Headline should be bold. Defaults to ',
	              _react2.default.createElement(
	                'code',
	                null,
	                'true'
	              ),
	              '.'
	            ),
	            _react2.default.createElement(
	              'dt',
	              null,
	              _react2.default.createElement(
	                'code',
	                null,
	                'paragraph            string|[string, ...]'
	              )
	            ),
	            _react2.default.createElement(
	              'dd',
	              null,
	              'Paragraph content. Array of strings will render multiple paragraphs.'
	            ),
	            _react2.default.createElement(
	              'dt',
	              null,
	              _react2.default.createElement(
	                'code',
	                null,
	                'print                string|[string, ...]'
	              )
	            ),
	            _react2.default.createElement(
	              'dd',
	              null,
	              'Small print content. Array of strings will render multiple print paragraphs.'
	            ),
	            _react2.default.createElement(
	              'dt',
	              null,
	              _react2.default.createElement(
	                'code',
	                null,
	                'link                 string'
	              )
	            ),
	            _react2.default.createElement(
	              'dd',
	              null,
	              'Call to action hyperlink reference.'
	            ),
	            _react2.default.createElement(
	              'dt',
	              null,
	              _react2.default.createElement(
	                'code',
	                null,
	                'linkText             string'
	              )
	            ),
	            _react2.default.createElement(
	              'dd',
	              null,
	              'Call to action text.'
	            ),
	            _react2.default.createElement(
	              'dt',
	              null,
	              _react2.default.createElement(
	                'code',
	                null,
	                'onClick              func'
	              )
	            ),
	            _react2.default.createElement(
	              'dd',
	              null,
	              'Click handler for the "Learn More" link.'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'section',
	          null,
	          _react2.default.createElement(
	            'h2',
	            null,
	            'Examples'
	          ),
	          _react2.default.createElement(_Example2.default, { name: 'XLarge', code: _react2.default.createElement(_Stack2.default, {
	              size: 'xlarge',
	              label: 'Label Light',
	              headline: 'Headline Semibold, Light',
	              paragraph: 'Consectetur sunt nemo numquam.',
	              print: 'Amet ipsa amet delectus culpa odit.',
	              link: '#',
	              linkText: 'CTA Semibold'
	            }) }),
	          _react2.default.createElement(_Example2.default, { name: 'Large', code: _react2.default.createElement(_Stack2.default, {
	              size: 'large',
	              label: 'Label Light',
	              headline: 'Headline Semibold, Light',
	              paragraph: 'Consectetur sunt nemo numquam.',
	              print: 'Amet ipsa amet delectus culpa odit.',
	              link: '#',
	              linkText: 'CTA Semibold'
	            }) }),
	          _react2.default.createElement(_Example2.default, { name: 'Medium', code: _react2.default.createElement(_Stack2.default, {
	              label: 'Label Light',
	              headline: 'Headline Semibold, Light',
	              paragraph: 'Consectetur sunt nemo numquam.',
	              print: 'Amet ipsa amet delectus culpa odit.',
	              link: '#',
	              linkText: 'CTA Semibold'
	            }) }),
	          _react2.default.createElement(_Example2.default, { name: 'Small', code: _react2.default.createElement(_Stack2.default, {
	              size: 'small',
	              label: 'Label Light',
	              headline: 'Headline Semibold, Light',
	              paragraph: 'Consectetur sunt nemo numquam.',
	              print: 'Amet ipsa amet delectus culpa odit.',
	              link: '#',
	              linkText: 'CTA Semibold'
	            }) })
	        )
	      );
	    }
	  }]);

	  return StackDoc;
	}(_react.Component);

	exports.default = StackDoc;
	;

	StackDoc.contextTypes = {
	  routePrefix: _react2.default.PropTypes.string.isRequired
	};
	module.exports = exports['default'];

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(67);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _Box = __webpack_require__(83);

	var _Box2 = _interopRequireDefault(_Box);

	var _Heading = __webpack_require__(178);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _Paragraph = __webpack_require__(171);

	var _Paragraph2 = _interopRequireDefault(_Paragraph);

	var _Anchor = __webpack_require__(115);

	var _Anchor2 = _interopRequireDefault(_Anchor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = 'stack';

	var Stack = function (_Component) {
	  _inherits(Stack, _Component);

	  function Stack() {
	    _classCallCheck(this, Stack);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Stack).apply(this, arguments));
	  }

	  _createClass(Stack, [{
	    key: '_renderParagraph',
	    value: function _renderParagraph(contents, size, type) {
	      if (typeof contents === 'string') {
	        return _react2.default.createElement(
	          _Paragraph2.default,
	          {
	            className: CLASS_ROOT + '__' + type,
	            size: size,
	            margin: 'none'
	          },
	          contents
	        );
	      } else if (Array.isArray(contents)) {
	        return contents.map(function (content, index) {
	          return _react2.default.createElement(
	            _Paragraph2.default,
	            {
	              key: type + '_' + index,
	              className: CLASS_ROOT + '__' + type,
	              size: size,
	              margin: 'none'
	            },
	            content
	          );
	        });
	      }
	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var className = _props.className;
	      var label = _props.label;
	      var headline = _props.headline;
	      var headlineStrong = _props.headlineStrong;
	      var paragraph = _props.paragraph;
	      var print = _props.print;
	      var size = _props.size;
	      var link = _props.link;
	      var linkText = _props.linkText;
	      var onClick = _props.onClick;

	      var props = _objectWithoutProperties(_props, ['className', 'label', 'headline', 'headlineStrong', 'paragraph', 'print', 'size', 'link', 'linkText', 'onClick']);

	      var classes = (0, _classnames3.default)(CLASS_ROOT, className, _defineProperty({}, CLASS_ROOT + '--' + size, size));

	      var labelTag = void 0;
	      var headlineTag = void 0;
	      var paragraphSize = void 0;
	      var printSize = void 0;
	      if (size === 'xlarge') {
	        labelTag = 'h3';
	        headlineTag = 'h1';
	        paragraphSize = 'xlarge';
	        printSize = 'large';
	      } else if (size === 'large') {
	        labelTag = 'h4';
	        headlineTag = 'h1';
	        paragraphSize = 'xlarge';
	        printSize = 'large';
	      } else if (size === 'small') {
	        labelTag = 'h5';
	        headlineTag = 'h3';
	        paragraphSize = 'medium';
	        printSize = 'small';
	      } else {
	        labelTag = 'h4';
	        headlineTag = 'h2';
	        paragraphSize = 'xlarge';
	        printSize = 'large';
	      }

	      return _react2.default.createElement(
	        _Box2.default,
	        _extends({ className: classes }, props),
	        label && _react2.default.createElement(
	          _Heading2.default,
	          { className: CLASS_ROOT + '__label', tag: labelTag, margin: 'none', uppercase: true },
	          label
	        ),
	        headline && _react2.default.createElement(
	          _Heading2.default,
	          { className: CLASS_ROOT + '__headline',
	            tag: headlineTag, strong: headlineStrong, margin: 'none' },
	          headline
	        ),
	        this._renderParagraph(paragraph, paragraphSize, 'paragraph'),
	        this._renderParagraph(print, printSize, 'print'),
	        (link || onClick) && _react2.default.createElement(
	          _Anchor2.default,
	          { className: CLASS_ROOT + '__link', primary: true, href: link,
	            onClick: onClick },
	          linkText
	        )
	      );
	    }
	  }]);

	  return Stack;
	}(_react.Component);

	exports.default = Stack;
	;

	Stack.propTypes = {
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
	  label: _react.PropTypes.string,
	  headline: _react.PropTypes.string,
	  headlineStrong: _react.PropTypes.bool,
	  paragraph: _react.PropTypes.node,
	  print: _react.PropTypes.node,
	  link: _react.PropTypes.string,
	  linkText: _react.PropTypes.string,
	  onClick: _react.PropTypes.func
	};

	Stack.defaultProps = {
	  size: 'medium',
	  headlineStrong: true,
	  linkText: 'Learn More'
	};
	module.exports = exports['default'];

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var React = __webpack_require__(1);
	var Router = __webpack_require__(2);
	var Route = Router.Route;
	var Tiles = __webpack_require__(119);
	var Box = __webpack_require__(83);
	var Heading = __webpack_require__(178);
	var Paragraph = __webpack_require__(171);
	var SocialTwitterIcon = __webpack_require__(192);
	var Marquee = __webpack_require__(170);
	var ContentCard = __webpack_require__(185);
	var MarqueeParallax = __webpack_require__(196);
	var Accordion = __webpack_require__(179);
	var AccordionPanel = __webpack_require__(181);
	var Header = __webpack_require__(197);

	var Examples = React.createClass({
	  displayName: 'Examples',

	  contextTypes: {
	    routePrefix: React.PropTypes.string.isRequired
	  },

	  childContextTypes: {
	    routePrefix: React.PropTypes.string.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      routePrefix: this.context.routePrefix + 'examples/'
	    };
	  },

	  _loremIpsum: function _loremIpsum() {
	    return React.createElement(
	      Box,
	      { colorIndex: 'light-1', pad: { horizontal: 'large', vertical: 'none' } },
	      React.createElement(
	        'p',
	        null,
	        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae rhoncus dui, eu gravida est. Cras consectetur enim eget erat rutrum, et suscipit lorem iaculis. Maecenas sed metus nulla. Vestibulum nibh risus, facilisis non sem a, mattis venenatis lacus. Maecenas condimentum interdum arcu eu consectetur. Etiam magna ligula, elementum ac leo vel, sagittis tempus neque. Duis dapibus at velit aliquam varius. Nulla facilisi. Donec rutrum augue neque. Suspendisse ut metus neque. Praesent interdum ornare condimentum.'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'Ut vel varius arcu. Suspendisse bibendum turpis eu nunc hendrerit suscipit. In feugiat nibh sed justo tincidunt, nec pellentesque quam tempor. Etiam condimentum iaculis dolor et semper. Curabitur tincidunt imperdiet ante, eu consequat nulla facilisis cursus. Cras metus ipsum, vehicula non vestibulum in, lacinia ut erat. Curabitur sed nulla porttitor, sollicitudin risus molestie, auctor massa. Curabitur porttitor sodales tincidunt. In in enim dapibus, lobortis dui vitae, vehicula augue. Quisque quis cursus ipsum, ut tincidunt dui. Donec eget bibendum turpis. Integer porttitor libero at luctus sodales. Donec varius consectetur quam, a vestibulum nulla rhoncus sit amet. Nunc blandit molestie dapibus. Etiam eleifend neque justo, et imperdiet augue euismod sed.'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'Nullam mauris neque, dictum in nibh pulvinar, facilisis faucibus enim. Nullam semper sem vitae finibus molestie. Fusce sollicitudin lacus dolor, at placerat eros rhoncus et. Suspendisse id neque vel metus lobortis tristique at interdum nisl. Fusce pretium nulla in neque feugiat, ut fermentum libero pellentesque. Sed et malesuada ligula. Quisque quis blandit massa.'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'Aliquam porta aliquam varius. Suspendisse interdum turpis sit amet bibendum efficitur. Phasellus finibus justo ac nisi porta sollicitudin. Vivamus lorem diam, dignissim ac posuere finibus, auctor nec nisi. Aenean pulvinar rhoncus eros sit amet porta. Nam egestas gravida risus quis dignissim. Nullam quis nibh vitae ipsum aliquam tristique vitae at ex. Praesent ultricies felis sit amet dolor interdum, vitae placerat diam lacinia. Quisque vitae pharetra magna, vitae commodo urna.'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'Praesent lectus felis, malesuada vel tellus ut, maximus blandit orci. Nunc semper maximus nisi, a ornare magna vestibulum sit amet. Morbi rutrum ante quis nunc gravida porttitor. Nullam dignissim ex a odio tincidunt, in posuere massa dapibus. Duis pretium rutrum metus. Aliquam nulla sapien, aliquet ac efficitur sed, tempor vitae quam. Integer scelerisque tempus lorem eu volutpat. Integer egestas laoreet felis at convallis. Vivamus commodo euismod mauris, ut pulvinar mi iaculis non. Morbi tempor urna et gravida vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi vel neque libero.'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae rhoncus dui, eu gravida est. Cras consectetur enim eget erat rutrum, et suscipit lorem iaculis. Maecenas sed metus nulla. Vestibulum nibh risus, facilisis non sem a, mattis venenatis lacus. Maecenas condimentum interdum arcu eu consectetur. Etiam magna ligula, elementum ac leo vel, sagittis tempus neque. Duis dapibus at velit aliquam varius. Nulla facilisi. Donec rutrum augue neque. Suspendisse ut metus neque. Praesent interdum ornare condimentum.'
	      )
	    );
	  },

	  _renderNewsFeed: function _renderNewsFeed() {
	    var socialFeedCard = React.createElement(
	      ContentCard,
	      {
	        direction: 'column',
	        overline: 'Social',
	        socialIcon: React.createElement(SocialTwitterIcon, null),
	        link: 'http://www.twitter.com' },
	      React.createElement(
	        Heading,
	        { tag: 'h2' },
	        'Protect Your Digital Enterprise ipsum lorem dolores aeat el'
	      )
	    );

	    var blogPostCard = React.createElement(
	      ContentCard,
	      {
	        direction: 'column',
	        overline: 'Featured Post',
	        link: 'http://www.twitter.com' },
	      React.createElement(
	        Heading,
	        { tag: 'h2' },
	        'Protect Your Digital Enterprise ipsum lorem dolores aeat el'
	      )
	    );

	    var featuredPostCard = React.createElement(
	      ContentCard,
	      {
	        thumbnail: '/docs/img/Case_Study_image.png',
	        direction: 'column',
	        overline: 'Featured Post',
	        link: 'http://www.twitter.com' },
	      React.createElement(
	        Heading,
	        { tag: 'h2' },
	        'Protect Your Digital Enterprise ipsum lorem dolores aeat el'
	      )
	    );

	    return React.createElement(
	      Box,
	      { pad: { horizontal: 'large' } },
	      React.createElement(
	        Tiles,
	        { size: 'large', masonry: true, numColumns: 7, colorIndex: 'light-2', justify: 'center' },
	        blogPostCard,
	        featuredPostCard,
	        socialFeedCard,
	        socialFeedCard,
	        blogPostCard,
	        featuredPostCard,
	        featuredPostCard,
	        blogPostCard
	      )
	    );
	  },

	  _renderContentCards: function _renderContentCards() {
	    return React.createElement(
	      Box,
	      { pad: { horizontal: 'large' } },
	      React.createElement(
	        Tiles,
	        { size: 'large', colorIndex: 'light-2', justify: 'center' },
	        React.createElement(ContentCard, {
	          direction: 'column',
	          thumbnail: '/docs/img/Case_Study_image.png',
	          overline: 'Featured Post',
	          heading: 'Protect Your Digital Enterprise ipsum Learn More lorem dolores aeat',
	          description: 'It’s not an either/or world. It’s about finding the right platform for each app, workload and service. Learn how hybrid infrastructure can help you achieve cloud agility with traditional IT predictability. It’s not an either/or world. It’s about finding the right platform for each app, workload and service. Learn how hybrid infrastructure can help you achieve cloud agility with traditional IT predictability. It’s not an either/or world. It’s about finding the right platform for each app, workload and service. Learn how hybrid infrastructure can help you achieve cloud agility with traditional IT predictability. ',
	          link: 'http://grommet.io'
	        }),
	        React.createElement(ContentCard, {
	          direction: 'column',
	          thumbnail: '/docs/img/Video_image.png',
	          overline: 'Video - 4:27',
	          heading: 'Foundation Paraguay Empowers Microbusinesses',
	          description: 'See how Hewlett Packard Enterprise delivers mobile solutions to improve quality of life and help eliminate poverty in South America.',
	          video: {
	            source: 'video/test.mp4',
	            type: 'mp4'
	          }
	        }),
	        React.createElement(ContentCard, {
	          direction: 'column',
	          thumbnail: '/docs/img/Case_Study_image.png',
	          overline: 'Featured Post',
	          heading: 'The Key Steps to Reducing Software Spend',
	          description: 'HPE Software Licensing and Management Solutions can help you optimize your software investments through control of complex negotiations and renewal processes'
	        }),
	        React.createElement(ContentCard, {
	          direction: 'column',
	          thumbnail: '/docs/img/Case_Study_image.png',
	          overline: 'Featured Post',
	          heading: 'The Key Steps to Reducing Software Spend',
	          description: 'HPE Software Licensing and Management Solutions can help you optimize your software investments through control of complex negotiations and renewal processes'
	        })
	      )
	    );
	  },

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(Header, { external: true,
	        logoLink: '/docs/hpe/examples',
	        links: [{
	          label: 'Documentation',
	          links: [{
	            label: 'Marquee',
	            href: '/docs/hpe/develop/marquee'
	          }, {
	            label: 'ContentCard',
	            href: '/docs/hpe/develop/contentcard'
	          }, {
	            label: 'Stack',
	            href: '/docs/hpe/develop/stack'
	          }]
	        }] }),
	      React.createElement(MarqueeParallax, { darkTheme: false,
	        backgroundImage: '/docs/img/MarqueeImage_051916_H.jpg',
	        headline: 'Accelerate your transformation with the cloud',
	        subHeadline: 'HPE can help you benefit now from your right mix of cloud',
	        link: 'http://www.grommet.io/docs/',
	        responsiveBackgroundPosition: 'left' }),
	      React.createElement(
	        Box,
	        { pad: { horizontal: 'large' } },
	        React.createElement(
	          'p',
	          null,
	          React.createElement(
	            'strong',
	            null,
	            'Large Marquee with Parallax'
	          )
	        )
	      ),
	      React.createElement(MarqueeParallax, { darkTheme: false,
	        backgroundImage: '/docs/img/TK_Marquee_Image.jpg',
	        headline: 'Accelerate your transformation with the cloud',
	        subHeadline: 'HPE can help you benefit now from your right mix of cloud',
	        link: 'http://www.grommet.io/docs/',
	        justify: 'start',
	        size: 'small',
	        responsiveBackgroundPosition: 'right' }),
	      React.createElement(
	        Box,
	        { pad: { horizontal: 'large' } },
	        React.createElement(
	          'p',
	          null,
	          React.createElement(
	            'strong',
	            null,
	            'Small Marquee with Parallax'
	          )
	        )
	      ),
	      React.createElement(MarqueeParallax, { darkTheme: true,
	        backgroundImage: '/docs/img/Hero4_marquee.jpg',
	        headline: 'Accelerate your transformation with the cloud',
	        subHeadline: 'HPE can help you benefit now from your right mix of cloud',
	        link: 'http://www.grommet.io/docs/',
	        justify: 'end',
	        size: 'large',
	        separator: true,
	        responsiveBackgroundPosition: 'left' }),
	      React.createElement(
	        Box,
	        { pad: { horizontal: 'large' } },
	        React.createElement(
	          'p',
	          null,
	          React.createElement(
	            'strong',
	            null,
	            'Large Marquee with Parallax, light text'
	          )
	        )
	      ),
	      React.createElement(Marquee, { darkTheme: false,
	        backgroundImage: '/docs/img/MarqueeImage_051916_H.jpg',
	        headline: 'Accelerate your transformation with the cloud',
	        subHeadline: 'HPE can help you benefit now from your right mix of cloud',
	        link: 'http://www.grommet.io/docs/',
	        responsiveBackgroundPosition: 'left' }),
	      React.createElement(
	        Box,
	        { pad: { horizontal: 'large' } },
	        React.createElement(
	          'p',
	          null,
	          React.createElement(
	            'strong',
	            null,
	            'Large Marquee with NO Parallax'
	          )
	        )
	      ),
	      this._loremIpsum(),
	      React.createElement(
	        Box,
	        { pad: { horizontal: 'large', vertical: 'none' } },
	        React.createElement(
	          Accordion,
	          {
	            colorIndex: 'light-2',
	            headline: 'Services Portfolio',
	            subHeadline: 'Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo copiosae facilisi an. Sumo accumsan mel ea, eu ignota hendrerit consequuntur me.'
	          },
	          React.createElement(
	            AccordionPanel,
	            { panelTitle: 'Enterprise Mobility Services' },
	            React.createElement(
	              Heading,
	              { tag: 'h3', margin: 'none' },
	              'Empower your employees while ensuring your workplace remains enterprise grade, scalable and secure.'
	            ),
	            React.createElement(
	              Paragraph,
	              { margin: 'small' },
	              'With proficiency in the latest mobile and social technologies, we can help your business develop new systems of engagement while leveraging your legacy investments'
	            ),
	            React.createElement(ContentCard, {
	              direction: 'row',
	              thumbnail: '/docs/img/Video_image.png',
	              overline: 'Video - 4:27',
	              heading: 'Foundation Paraguay Empowers Microbusinesses',
	              description: 'See how Hewlett Packard Enterprise delivers mobile solutions to improve quality of life and help eliminate poverty in South America.',
	              video: {
	                source: 'video/test.mp4',
	                type: 'mp4'
	              }
	            })
	          ),
	          React.createElement(
	            AccordionPanel,
	            { panelTitle: 'Software Licensings and Managment' },
	            React.createElement(
	              Heading,
	              { tag: 'h3', margin: 'none' },
	              'Manage control, compliance and cost through our value-added Licensing, Advisory Services and Software Asset Management.'
	            ),
	            React.createElement(
	              Paragraph,
	              { margin: 'small' },
	              'We help you get the most out of your software investments by facilitating cost-efective acquisition, giving you better control throughout your organization, and helping you meet licensing compliance requirements'
	            ),
	            React.createElement(ContentCard, {
	              direction: 'row',
	              thumbnail: '/docs/img/Case_Study_image.png',
	              overline: 'Case Study',
	              heading: 'The Key Steps to Reducing Software Spend',
	              description: 'HPE Software Licensing and Management Solutions can help you optimize your software investments through control of complex negotiations and renewal processes',
	              link: '#'
	            })
	          )
	        )
	      ),
	      React.createElement(
	        Box,
	        { pad: { horizontal: 'large' } },
	        React.createElement(
	          'p',
	          null,
	          React.createElement(
	            'strong',
	            null,
	            'Accordion with ContentCard, row direction'
	          )
	        )
	      ),
	      this._loremIpsum(),
	      this._renderContentCards(),
	      React.createElement(
	        Box,
	        { pad: { horizontal: 'large' } },
	        React.createElement(
	          'p',
	          null,
	          React.createElement(
	            'strong',
	            null,
	            'ContentCard with Tiles wrapper'
	          )
	        )
	      ),
	      this._loremIpsum(),
	      this._renderNewsFeed(),
	      React.createElement(
	        Box,
	        { pad: { horizontal: 'large' } },
	        React.createElement(
	          'p',
	          null,
	          React.createElement(
	            'strong',
	            null,
	            'ContentCard with Tiles wrapper, masonry option'
	          )
	        )
	      )
	    );
	  }
	});

	Examples.routes = function () {
	  return [React.createElement(Route, { key: 'top', path: 'examples', component: Examples })];
	};

	module.exports = Examples;

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(88);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames3 = __webpack_require__(67);

	var _classnames4 = _interopRequireDefault(_classnames3);

	var _Box = __webpack_require__(83);

	var _Box2 = _interopRequireDefault(_Box);

	var _Headline = __webpack_require__(118);

	var _Headline2 = _interopRequireDefault(_Headline);

	var _Paragraph = __webpack_require__(171);

	var _Paragraph2 = _interopRequireDefault(_Paragraph);

	var _Anchor = __webpack_require__(115);

	var _Anchor2 = _interopRequireDefault(_Anchor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

	var CLASS_ROOT = 'marquee-parallax';
	var LIGHT_COLORINDEX = 'light-1';
	var DARK_COLORINDEX = 'grey-1';
	var PALM_BREAKPOINT = 720;
	var BOX_CONTAINER_CLASSNAME = 'box__container';

	var MarqueeParallax = function (_Component) {
	  _inherits(MarqueeParallax, _Component);

	  function MarqueeParallax(props) {
	    _classCallCheck(this, MarqueeParallax);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MarqueeParallax).call(this, props));

	    _this._handleScroll = _this._handleScroll.bind(_this);
	    _this._setBackgroundColorIndex = _this._setBackgroundColorIndex.bind(_this);

	    _this._backgroundImageSize = {
	      width: undefined,
	      height: undefined
	    };

	    _this.state = {
	      colorIndex: props.darkTheme ? DARK_COLORINDEX : LIGHT_COLORINDEX
	    };
	    return _this;
	  }

	  _createClass(MarqueeParallax, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      window.addEventListener('scroll', this._handleScroll);
	      window.addEventListener('resize', this._handleScroll);
	      window.addEventListener('resize', this._setBackgroundColorIndex);
	      this._setBackgroundColorIndex();
	      this._getBackgroundImageRatio();

	      setTimeout(function () {
	        _this2._handleScroll();
	      }, 100);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('scroll', this._handleScroll);
	      window.removeEventListener('resize', this._handleScroll);
	      window.removeEventListener('resize', this._setBackgroundColorIndex);
	    }
	  }, {
	    key: '_getBackgroundImageRatio',
	    value: function _getBackgroundImageRatio() {
	      var _this3 = this;

	      var marqueeNode = _reactDom2.default.findDOMNode(this);
	      var marquee = marqueeNode.getElementsByClassName(BOX_CONTAINER_CLASSNAME)[0];

	      // cache original width and height to be used onScroll
	      if (!this._backgroundImageSize.width || !this._backgroundImageSize.height) {
	        (function () {
	          var marqueeBackgroundImage = new Image();
	          marqueeBackgroundImage.src = marquee.style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];

	          if (marqueeBackgroundImage.src) {
	            // in order for this to work properly in Safari,
	            // we have to do the lookup for the image original width and height async
	            setTimeout(function () {
	              _this3._backgroundImageSize = {
	                width: marqueeBackgroundImage.width || undefined,
	                height: marqueeBackgroundImage.height || undefined
	              };
	            }, 100);
	          }
	        })();
	      }

	      return this._backgroundImageSize.width / this._backgroundImageSize.height;
	    }
	  }, {
	    key: '_handleScroll',
	    value: function _handleScroll() {
	      var _props = this.props;
	      var size = _props.size;
	      var zoom = _props.zoom;
	      var zoomPercentage = _props.zoomPercentage;


	      var marqueeOriginalHeight = window.innerHeight * 0.75;
	      if (window.innerWidth < PALM_BREAKPOINT) {
	        if (size === 'small') {
	          marqueeOriginalHeight = 270;
	        } else {
	          marqueeOriginalHeight = 300;
	        }
	      } else if (size === 'small') {
	        marqueeOriginalHeight = window.innerHeight * 0.60;
	      }

	      var marqueeNode = _reactDom2.default.findDOMNode(this);
	      var marquee = marqueeNode.getElementsByClassName(BOX_CONTAINER_CLASSNAME)[0];
	      var marqueeTop = marquee.getBoundingClientRect().top;
	      var marqueeText = marqueeNode.getElementsByClassName('marquee-parallax__overlay')[0];

	      var backgroundRatio = this._getBackgroundImageRatio();
	      var marqueeRatio = marquee.offsetWidth / marqueeOriginalHeight;
	      var backgroundHeight = 0;
	      var backgroundWidth = 0;

	      var startPositionPercentage = 1;
	      if (zoom === 'out') {
	        startPositionPercentage = 1 + zoomPercentage / 100;
	      }

	      if (backgroundRatio > marqueeRatio) {
	        // constrained by marquee height
	        backgroundHeight = marqueeOriginalHeight;
	        backgroundWidth = backgroundHeight * backgroundRatio;
	      } else {
	        // constrained by marquee width
	        backgroundWidth = marquee.offsetWidth;
	        backgroundHeight = backgroundWidth / backgroundRatio;
	      }

	      var positionRatio = (marqueeOriginalHeight + marqueeTop) / marqueeOriginalHeight;
	      if (window.innerWidth >= PALM_BREAKPOINT) {
	        marqueeText.style.opacity = positionRatio;

	        if (-marqueeTop > marqueeOriginalHeight) {
	          marqueeText.style.height = 0;
	          marqueeText.style.top = marqueeOriginalHeight + 'px';
	        } else if (marqueeTop > 0) {
	          marqueeText.style.height = marqueeOriginalHeight + 'px';
	          marqueeText.style.top = 0;
	        } else {
	          marqueeText.style.height = marqueeOriginalHeight + marqueeTop + 'px';
	          marqueeText.style.top = -marqueeTop + 'px';
	        }
	      } else {
	        marqueeText.style.opacity = 1;
	        marqueeText.style.height = '';
	        marqueeText.style.top = 0;
	      }

	      var zoomPositionRatio = positionRatio;
	      var finalPositionPercentage = 1;
	      if (zoom === 'out') {
	        finalPositionPercentage = 1 + zoomPercentage / 100;
	      } else {
	        zoomPositionRatio = 1 - positionRatio;
	      }

	      var positionPercentage = void 0;
	      if (marqueeTop < 0 && marqueeTop >= -marqueeOriginalHeight) {
	        positionPercentage = (zoomPositionRatio * zoomPercentage + 100) / 100;
	      } else if (marqueeTop >= 0) {
	        positionPercentage = startPositionPercentage;
	      } else {
	        positionPercentage = finalPositionPercentage;
	      }

	      marquee.style.backgroundSize = backgroundWidth * positionPercentage + 'px ' + backgroundHeight * positionPercentage + 'px';
	    }
	  }, {
	    key: '_setBackgroundColorIndex',
	    value: function _setBackgroundColorIndex() {
	      var darkTheme = this.props.darkTheme;


	      if (window.innerWidth < PALM_BREAKPOINT) {
	        this.setState({ colorIndex: LIGHT_COLORINDEX });
	      } else {
	        this.setState({ colorIndex: darkTheme ? DARK_COLORINDEX : LIGHT_COLORINDEX });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var _props2 = this.props;
	      var backgroundImage = _props2.backgroundImage;
	      var flush = _props2.flush;
	      var headlineSize = _props2.headlineSize;
	      var headline = _props2.headline;
	      var justify = _props2.justify;
	      var link = _props2.link;
	      var linkIcon = _props2.linkIcon;
	      var linkText = _props2.linkText;
	      var onClick = _props2.onClick;
	      var subHeadline = _props2.subHeadline;


	      var classes = (0, _classnames4.default)(CLASS_ROOT, this.props.className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + this.props.size, this.props.size), _defineProperty(_classnames, CLASS_ROOT + '--bg-' + this.props.responsiveBackgroundPosition, this.props.responsiveBackgroundPosition), _defineProperty(_classnames, CLASS_ROOT + '--mobile-separator', this.props.separator), _classnames));

	      var full = flush ? 'horizontal' : false;

	      var styles = {
	        backgroundImage: 'url(' + backgroundImage + ')'
	      };

	      var backgroundClasses = (0, _classnames4.default)(BOX_CONTAINER_CLASSNAME, _defineProperty({}, BOX_CONTAINER_CLASSNAME + '--full-horizontal', this.props.flush));

	      var subHeadlineMarkup = void 0;
	      if (subHeadline) {
	        subHeadlineMarkup = _react2.default.createElement(
	          _Paragraph2.default,
	          { size: 'large', margin: 'none' },
	          subHeadline
	        );
	      }

	      var linkMarkup = void 0;
	      if (link || onClick) {
	        linkMarkup = _react2.default.createElement(
	          'h3',
	          null,
	          _react2.default.createElement(_Anchor2.default, { href: link, primary: true, label: linkText, icon: linkIcon, onClick: onClick })
	        );
	      }

	      return _react2.default.createElement(
	        _Box2.default,
	        { className: classes, colorIndex: this.state.colorIndex },
	        _react2.default.createElement('div', { className: backgroundClasses, style: styles }),
	        _react2.default.createElement(
	          _Box2.default,
	          { className: 'marquee-parallax__overlay', justify: justify, align: 'center', primary: true, full: full, direction: 'row' },
	          _react2.default.createElement(
	            _Box2.default,
	            { pad: { horizontal: 'large', vertical: 'large', between: 'medium' } },
	            _react2.default.createElement(
	              _Headline2.default,
	              { size: headlineSize, strong: true, margin: 'none' },
	              headline
	            ),
	            subHeadlineMarkup,
	            linkMarkup
	          )
	        )
	      );
	    }
	  }]);

	  return MarqueeParallax;
	}(_react.Component);

	exports.default = MarqueeParallax;
	;

	MarqueeParallax.propTypes = {
	  backgroundImage: _react.PropTypes.string.isRequired,
	  darkTheme: _react.PropTypes.bool,
	  flush: _react.PropTypes.bool,
	  headline: _react.PropTypes.string.isRequired,
	  headlineSize: _react.PropTypes.oneOf(['small', 'medium', 'large']),
	  justify: _react.PropTypes.oneOf(['start', 'center', 'end']),
	  link: _react.PropTypes.string,
	  linkIcon: _react.PropTypes.element,
	  linkText: _react.PropTypes.string,
	  onClick: _react.PropTypes.func,
	  responsiveBackgroundPosition: _react.PropTypes.oneOf(['left', 'center', 'right']),
	  separator: _react.PropTypes.bool,
	  size: _react.PropTypes.oneOf(['small', 'large']),
	  subHeadline: _react.PropTypes.string,
	  zoom: _react.PropTypes.oneOf(['in', 'out', 'none']),
	  zoomPercentage: _react.PropTypes.number
	};

	MarqueeParallax.defaultProps = {
	  darkTheme: true,
	  flush: true,
	  headlineSize: 'large',
	  justify: 'end',
	  linkText: 'Learn More',
	  responsiveBackgroundPosition: 'center',
	  separator: false,
	  size: 'large',
	  zoom: 'in',
	  zoomPercentage: 25
	};
	module.exports = exports['default'];

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Responsive = __webpack_require__(99);

	var _Responsive2 = _interopRequireDefault(_Responsive);

	var _Box = __webpack_require__(83);

	var _Box2 = _interopRequireDefault(_Box);

	var _Header = __webpack_require__(112);

	var _Header2 = _interopRequireDefault(_Header);

	var _Title = __webpack_require__(113);

	var _Title2 = _interopRequireDefault(_Title);

	var _HeaderMenu = __webpack_require__(198);

	var _HeaderMenu2 = _interopRequireDefault(_HeaderMenu);

	var _Logo = __webpack_require__(199);

	var _Logo2 = _interopRequireDefault(_Logo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development L.P.

	var CLASS_ROOT = 'hpe-header';

	var HPEHeader = function (_Component) {
	  _inherits(HPEHeader, _Component);

	  function HPEHeader() {
	    _classCallCheck(this, HPEHeader);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HPEHeader).call(this));

	    _this._onResponsive = _this._onResponsive.bind(_this);
	    _this._onClickTitle = _this._onClickTitle.bind(_this);
	    _this.state = {
	      responsive: false
	    };
	    return _this;
	  }

	  _createClass(HPEHeader, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._responsive = _Responsive2.default.start(this._onResponsive);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this._responsive.stop();
	    }
	  }, {
	    key: '_onResponsive',
	    value: function _onResponsive(responsive) {
	      this.setState({ responsive: responsive });
	    }
	  }, {
	    key: '_onClickTitle',
	    value: function _onClickTitle() {
	      if (this.props.onClickLogo) {
	        this.props.onClickLogo();
	      } else {
	        window.location = this.props.logoLink;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var headerMenu = _react2.default.createElement(_HeaderMenu2.default, {
	        responsive: this.state.responsive, centered: this.props.centered,
	        external: this.props.external, links: this.props.links,
	        colorIndex: this.props.external ? 'neutral-1' : 'accent-2' });

	      var reverseLogo = false;
	      var classes = [CLASS_ROOT];
	      var colorIndex = null;
	      var titleBoxClass = void 0;
	      var titleBoxPad = void 0;
	      var menuAlignedWithHeader = void 0;
	      var headerVerticalPad = 'none';
	      var headerAlign = 'center';
	      var menuAfterHeader = headerMenu;

	      if (this.props.external) {
	        reverseLogo = true;
	        classes.push(CLASS_ROOT + '--external');

	        if (!this.state.responsive) {
	          headerVerticalPad = 'small';
	          headerAlign = 'end';
	          titleBoxPad = { vertical: 'small' };
	          menuAlignedWithHeader = headerMenu;
	          menuAfterHeader = null;
	          // add flex class so menu is centered for external header
	          titleBoxClass = 'flex';
	        }

	        if (!this.props.colorIndex) {
	          colorIndex = 'neutral-1';
	        }
	      }

	      if (this.props.className) {
	        classes.push(this.props.className);
	      }

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Box2.default,
	          { className: classes.join(' '), full: 'horizontal' },
	          _react2.default.createElement(
	            _Header2.default,
	            { appCentered: this.props.centered,
	              justify: 'between', align: headerAlign, size: 'large',
	              colorIndex: colorIndex,
	              pad: { horizontal: 'medium', vertical: headerVerticalPad, between: 'small' }, wrap: true,
	              external: this.props.external },
	            _react2.default.createElement(
	              _Box2.default,
	              { className: titleBoxClass, pad: titleBoxPad },
	              _react2.default.createElement(
	                _Title2.default,
	                { onClick: this._onClickTitle },
	                _react2.default.createElement(_Logo2.default, { reverse: reverseLogo })
	              )
	            ),
	            this.props.children,
	            menuAlignedWithHeader
	          ),
	          menuAfterHeader
	        )
	      );
	    }
	  }]);

	  return HPEHeader;
	}(_react.Component);

	exports.default = HPEHeader;
	;

	HPEHeader.propTypes = {
	  centered: _react.PropTypes.bool,
	  colorIndex: _react.PropTypes.string,
	  external: _react.PropTypes.bool,
	  links: _HeaderMenu2.default.propTypes.links,
	  logoLink: _react.PropTypes.string,
	  onClickLogo: _react.PropTypes.func
	};

	HPEHeader.defaultProps = {
	  logoLink: '/',
	  links: []
	};
	module.exports = exports['default'];

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Menu = __webpack_require__(97);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _Box = __webpack_require__(83);

	var _Box2 = _interopRequireDefault(_Box);

	var _Anchor = __webpack_require__(115);

	var _Anchor2 = _interopRequireDefault(_Anchor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (C) Copyright 2014-2016 Hewlett-Packard Development Company, L.P.

	function renderLink(link) {
	  var index = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	  return _react2.default.createElement(
	    _Anchor2.default,
	    { key: index, href: link.href },
	    link.label
	  );
	}

	function renderMenuLinks(props) {
	  return _react2.default.createElement(
	    _Box2.default,
	    { appCentered: props.centered,
	      className: props.external && !props.responsive ? 'flex' : undefined,
	      colorIndex: props.colorIndex, direction: 'row',
	      separator: props.external && props.responsive ? 'top' : undefined,
	      pad: { horizontal: 'medium', vertical: 'none' } },
	    _react2.default.createElement(
	      _Menu2.default,
	      { direction: 'row', inline: true,
	        dropColorIndex: props.colorIndex,
	        label: 'Menu', dropAlign: { top: 'top', left: 'left' } },
	      props.links.map(function (link, index) {
	        if (link.links && link.links.length > 0) {
	          return _react2.default.createElement(
	            _Menu2.default,
	            { key: index, label: link.label, align: 'stretch',
	              dropColorIndex: props.colorIndex,
	              dropAlign: { top: 'top', left: 'left' } },
	            link.links.map(function (dropdownLink, linkIndex) {
	              return renderLink(dropdownLink, linkIndex);
	            })
	          );
	        } else {
	          return renderLink(link, index);
	        }
	      })
	    )
	  );
	}

	var HeaderMenu = function HeaderMenu(props) {
	  if (props.links.length > 0) {
	    return renderMenuLinks(props);
	  } else {
	    return null;
	  }
	};

	HeaderMenu.propTypes = {
	  centered: _react.PropTypes.bool,
	  colorIndex: _react.PropTypes.string,
	  external: _react.PropTypes.bool,
	  links: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    label: _react.PropTypes.string,
	    href: _react.PropTypes.string,
	    links: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	      label: _react.PropTypes.string,
	      href: _react.PropTypes.string
	    }))
	  })),
	  responsive: _react.PropTypes.bool
	};

	HeaderMenu.defaultProps = {
	  links: []
	};

	exports.default = HeaderMenu;
	module.exports = exports['default'];

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CLASS_ROOT = 'hpe-internal-logo'; // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

	var Logo = function Logo(props) {
	  var className = CLASS_ROOT;

	  var textFill = '#000000';
	  if (props.reverse) {
	    textFill = '#ffffff';
	  }

	  return _react2.default.createElement(
	    'svg',
	    { className: className, width: '122px', height: '48px',
	      viewBox: '0 0 143 56', version: '1.1' },
	    _react2.default.createElement(
	      'g',
	      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
	      _react2.default.createElement('path', { d: 'M0.492894841,0.261226277 L0.492894841,12.931899 L44.6041871,12.931899 L44.6041871,0.261226277 L0.492894841,0.261226277 L0.492894841,0.261226277 Z M41.8473312,10.1750431 L3.24975075,10.1750431 L3.24975075,3.01808219 L41.8473312,3.01808219 L41.8473312,10.1750431 L41.8473312,10.1750431 Z', fill: '#00B388' }),
	      _react2.default.createElement('path', { d: 'M8.52220772,39.282201 L8.52220772,40.8239952 L2.25677135,40.8239952 L2.25677135,44.6976534 L7.95422031,44.6976534 L7.95422031,46.1979071 L2.25677135,46.1979071 L2.25677135,50.4150738 L8.52220772,50.4150738 L8.52220772,51.9560692 L0.492894841,51.9560692 L0.492894841,39.2829999 L8.52220772,39.2829999 L8.52220772,39.282201 Z M12.8799733,51.9552703 L11.1568385,51.9552703 L11.1568385,42.6278146 L12.7785184,42.6278146 L12.7785184,44.3725185 C13.4471618,43.195802 14.5224235,42.4249049 15.9012509,42.4249049 C18.0709468,42.4249049 19.3483194,43.8436751 19.3483194,45.9734282 L19.3483194,51.9544714 L17.6243857,51.9544714 L17.6243857,46.0141699 C17.6243857,44.778338 16.9757137,44.0473837 15.5361732,44.0473837 C14.2995424,44.0473837 13.245051,44.878994 12.8799733,45.9949974 L12.8799733,51.9552703 L12.8799733,51.9552703 Z M26.4030266,52.15818 C24.0711626,52.15818 23.1388964,51.1428326 23.1388964,49.2990704 L23.1388964,44.1496374 L21.1721102,44.1496374 L21.1721102,42.6286135 L23.1388964,42.6286135 L23.1388964,40.216065 L24.8620312,40.216065 L24.8620312,42.6286135 L27.5182311,42.6286135 L27.5182311,44.1496374 L24.8620312,44.1496374 L24.8620312,49.1377012 C24.8620312,50.2529058 25.4907317,50.5556726 26.5659934,50.5556726 C26.8487888,50.5556726 27.133182,50.5165286 27.3768334,50.4342463 L27.5182311,50.4342463 L27.5182311,51.9552703 C27.2546083,52.0559263 26.8887317,52.15818 26.4030266,52.15818 L26.4030266,52.15818 Z M33.9841806,52.15818 C30.8822184,52.15818 28.9154322,50.3335904 28.9154322,47.3929973 C28.9154322,44.4731745 30.7408207,42.4249049 33.416992,42.4249049 C36.173848,42.4249049 37.5734456,44.2718626 37.5734456,47.0079482 L37.5734456,47.9210419 L30.700079,47.9210419 C30.9437304,49.7440338 32.2410744,50.5972132 34.0049509,50.5972132 C35.100184,50.5972132 35.9317943,50.4142749 36.7426342,49.8271149 L36.9247736,49.8271149 L36.9247736,51.3073972 C36.0939622,51.9352989 35.0187006,52.15818 33.9841806,52.15818 L33.9841806,52.15818 Z M30.7208493,46.561387 L35.8910525,46.561387 C35.8295405,44.8590225 34.938016,43.9467277 33.4377623,43.9467277 C31.9375087,43.9467277 30.9437304,45.0419608 30.7208493,46.561387 L30.7208493,46.561387 Z M45.1146568,44.3916911 C44.8710054,44.2718626 44.5059277,44.1887814 44.1216774,44.1887814 C43.0256454,44.1887814 42.1540923,44.9612762 41.7898135,46.2162808 L41.7898135,51.9552703 L40.0666787,51.9552703 L40.0666787,42.6278146 L41.6883586,42.6278146 L41.6883586,44.6361414 C42.2363746,43.1151174 43.229354,42.4864169 44.3445585,42.4864169 C44.7495791,42.4864169 45.1146568,42.5479289 45.2568534,42.6286135 L45.2568534,44.39249 L45.1146568,44.39249 L45.1146568,44.3916911 Z M48.7023241,50.4342463 L48.7023241,55.3815685 L46.9791893,55.3815685 L46.9791893,42.6278146 L48.6008693,42.6278146 L48.6008693,44.230322 C49.1488852,43.2764866 50.2225492,42.4249049 51.6620897,42.4249049 C54.4804576,42.4249049 55.9607399,44.655314 55.9607399,47.1900876 C55.9607399,49.7855744 54.4796588,52.0559263 51.6620897,52.0559263 C50.3248029,52.0559263 49.2703115,51.3265697 48.7023241,50.4342463 L48.7023241,50.4342463 Z M54.1968634,47.1900876 C54.1968634,45.3047848 53.1431708,44.0465848 51.2570692,44.0465848 C50.1426635,44.0465848 49.2503401,44.6353425 48.703123,45.6490922 L48.703123,48.8533081 C49.251139,49.8462875 50.1426635,50.4550166 51.2570692,50.4550166 C53.142372,50.4550166 54.1968634,49.1568738 54.1968634,47.1900876 L54.1968634,47.1900876 Z M63.6042048,44.3916911 C63.3605534,44.2718626 62.9954757,44.1887814 62.6104265,44.1887814 C61.5151934,44.1887814 60.6436403,44.9612762 60.2793615,46.2162808 L60.2793615,51.9552703 L58.5562267,51.9552703 L58.5562267,42.6278146 L60.1779066,42.6278146 L60.1779066,44.6361414 C60.7251237,43.1151174 61.718902,42.4864169 62.8333077,42.4864169 C63.2391271,42.4864169 63.6042048,42.5479289 63.7464013,42.6286135 L63.7464013,44.39249 L63.6042048,44.39249 L63.6042048,44.3916911 Z M66.5424012,41.6955483 C65.8929304,41.6955483 65.3057704,41.1475324 65.3057704,40.478889 C65.3057704,39.8102456 65.8929304,39.282201 66.5424012,39.282201 C67.2110447,39.282201 67.7790321,39.8102456 67.7790321,40.478889 C67.7790321,41.1483312 67.2118435,41.6955483 66.5424012,41.6955483 L66.5424012,41.6955483 Z M67.3939829,51.9552703 L65.6708481,51.9552703 L65.6708481,42.6278146 L67.3939829,42.6278146 L67.3939829,51.9552703 L67.3939829,51.9552703 Z M70.1915806,49.7448327 L70.3545474,49.7448327 C71.1246457,50.3735332 72.2606205,50.6978692 73.3342845,50.6978692 C74.3480341,50.6978692 75.2403575,50.3136189 75.2403575,49.4828075 C75.2403575,48.6511973 74.4902307,48.4674601 73.0107473,47.9825539 C71.6926331,47.5351939 70.211552,47.0686613 70.211552,45.3047848 C70.211552,43.4594249 71.7118057,42.4257038 73.6394479,42.4257038 C74.7338821,42.4257038 75.7076889,42.6485849 76.5177301,43.1966009 L76.5177301,44.778338 L76.3355906,44.778338 C75.6054352,44.230322 74.7338821,43.8860146 73.6586204,43.8860146 C72.5641862,43.8860146 71.9554571,44.3725185 71.9554571,45.0627311 C71.9554571,45.8328294 72.6041291,46.0365379 74.125153,46.5014728 C75.4824112,46.9488327 76.9842626,47.4752796 76.9842626,49.2391561 C76.9842626,51.1659995 75.4017267,52.1589789 73.3550547,52.1589789 C72.1176251,52.1589789 70.8809943,51.8554132 70.1915806,51.308196 L70.1915806,49.7448327 L70.1915806,49.7448327 Z M83.9974292,52.15818 C80.8954671,52.15818 78.9286808,50.3335904 78.9286808,47.3929973 C78.9286808,44.4731745 80.7532705,42.4249049 83.4302407,42.4249049 C86.1886943,42.4249049 87.5874931,44.2718626 87.5874931,47.0079482 L87.5874931,47.9210419 L80.7133276,47.9210419 C80.9569791,49.7440338 82.254323,50.5972132 84.0197972,50.5972132 C85.1134326,50.5972132 85.9450429,50.4142749 86.7566817,49.8271149 L86.9388212,49.8271149 L86.9388212,51.3073972 C86.106412,51.9352989 85.0319492,52.15818 83.9974292,52.15818 L83.9974292,52.15818 Z M80.7340979,46.561387 L85.9051,46.561387 C85.8443869,44.8590225 84.9520635,43.9467277 83.4518098,43.9467277 C81.9507573,43.9467277 80.9569791,45.0419608 80.7340979,46.561387 L80.7340979,46.561387 Z M11.1376659,21.2040644 L11.1376659,33.8763349 L8.38001115,33.8763349 L8.38001115,28.6246482 L3.25054961,28.6246482 L3.25054961,33.8763349 L0.493693698,33.8763349 L0.493693698,21.2040644 L3.25054961,21.2040644 L3.25054961,26.2120997 L8.38001115,26.2120997 L8.38001115,21.2040644 L11.1376659,21.2040644 L11.1376659,21.2040644 Z M18.618164,34.1000149 C15.1303538,34.1000149 13.2650224,32.2139132 13.2650224,29.1726642 C13.2650224,26.1314151 15.2110384,24.1238872 18.0294063,24.1238872 C21.0706553,24.1238872 22.5916793,26.0299603 22.5916793,28.8890699 L22.5916793,29.9627339 L16.1033618,29.9627339 C16.3054726,31.5252984 17.5429023,31.9295201 18.7587628,31.9295201 C19.8547948,31.9295201 20.7055776,31.7881224 21.5986999,31.3032161 L21.9022656,31.3032161 L21.9022656,33.2891749 C21.0914256,33.8763349 19.7940816,34.1000149 18.618164,34.1000149 L18.618164,34.1000149 Z M16.0833903,28.2196276 L19.8755651,28.2196276 C19.7940816,26.8000586 19.1861514,26.171358 18.0709468,26.171358 C17.1179103,26.171358 16.2655298,26.6179191 16.0833903,28.2196276 L16.0833903,28.2196276 Z M25.8342403,33.8763349 L23.8466838,24.6719032 L23.8466838,24.3475672 L26.4014288,24.3475672 L27.4766905,30.146471 L27.7403134,32.0110035 L28.1053911,30.146471 L29.402735,24.3475672 L32.3025864,24.3475672 L33.5807578,30.146471 L33.9658069,32.0110035 L34.2701714,30.146471 L35.3446343,24.3475672 L37.777953,24.3475672 L37.777953,24.6719032 L35.7704251,33.8763349 L32.2418732,33.8763349 L31.1066973,28.7876151 L30.7823613,26.881542 L30.4580253,28.7876151 L29.3428208,33.8763349 L25.8342403,33.8763349 L25.8342403,33.8763349 Z M42.6413952,34.1000149 C40.6138958,34.1000149 39.6001461,33.1677486 39.6001461,30.9972538 L39.6001461,21.2048633 L42.3578009,21.2048633 L42.3578009,30.8151144 C42.3578009,31.4845567 42.6413952,31.7074378 43.2900672,31.7074378 C43.4929769,31.7074378 43.8181117,31.6467247 44.0202226,31.5868104 L44.0609643,31.5868104 L44.0609643,33.8771337 C43.7565997,33.9785886 43.1686409,34.1000149 42.6413952,34.1000149 L42.6413952,34.1000149 Z M50.2241469,34.1000149 C46.7363368,34.1000149 44.8710054,32.2139132 44.8710054,29.1726642 C44.8710054,26.1314151 46.8178202,24.1238872 49.6361881,24.1238872 C52.678236,24.1238872 54.1976622,26.0299603 54.1976622,28.8890699 L54.1976622,29.9627339 L47.7093447,29.9627339 C47.9122544,31.5252984 49.1488852,31.9295201 50.3655446,31.9295201 C51.4599789,31.9295201 52.3123594,31.7881224 53.203884,31.3032161 L53.5082485,31.3032161 L53.5082485,33.2891749 C52.6966097,33.8763349 51.3992657,34.1000149 50.2241469,34.1000149 L50.2241469,34.1000149 Z M47.6885744,28.2196276 L51.4799503,28.2196276 C51.3992657,26.8000586 50.7913355,26.171358 49.6761309,26.171358 C48.7230944,26.171358 47.8715127,26.6179191 47.6885744,28.2196276 L47.6885744,28.2196276 Z M63.5426928,30.409295 L63.5426928,26.6171203 L59.5076655,26.6171203 L59.5076655,30.2870699 C59.5076655,31.2608767 59.8320015,31.7058401 60.7450952,31.7058401 C61.008718,31.7058401 61.3530254,31.6243567 61.5351648,31.544471 L61.7995865,31.544471 L61.7995865,33.8148229 C61.43371,33.9362492 60.8864929,34.0984172 60.0756529,34.0984172 C57.7445878,34.0984172 56.7508096,32.9832126 56.7508096,30.4084961 L56.7508096,26.6163214 L55.1083593,26.6163214 L55.1083593,24.3459695 L56.7508096,24.3459695 L56.7508096,22.034077 L59.5084643,22.034077 L59.5084643,24.3459695 L63.5434916,24.3459695 L63.5434916,22.034077 L66.3011464,22.034077 L66.3011464,24.3459695 L68.5922686,24.3459695 L68.5922686,26.6163214 L66.3011464,26.6163214 L66.3011464,30.286271 C66.3011464,31.2600778 66.6254824,31.7050412 67.5377772,31.7050412 C67.8014001,31.7050412 68.1465063,31.6235578 68.3286458,31.5436721 L68.5922686,31.5436721 L68.5922686,33.814024 C68.2271909,33.9354503 67.6799738,34.0976183 66.8691338,34.0976183 C64.5372699,34.1000149 63.5426928,32.9840115 63.5426928,30.409295 L63.5426928,30.409295 Z M76.6990706,29.9627339 L76.6990706,33.8763349 L73.962985,33.8763349 L73.962985,21.2040644 L78.8895368,21.2040644 C81.6879333,21.2040644 83.5324944,22.7450598 83.5324944,25.6033706 C83.5324944,28.4209396 81.6871345,29.961935 78.8895368,29.961935 L76.6990706,29.961935 L76.6990706,29.9627339 Z M78.6674546,23.5359284 L76.6990706,23.5359284 L76.6990706,27.6316688 L78.6674546,27.6316688 C80.0646557,27.6316688 80.7348968,26.8000586 80.7348968,25.6041694 C80.7340979,24.3667398 80.0646557,23.5359284 78.6674546,23.5359284 L78.6674546,23.5359284 Z M90.5464599,32.4575647 C89.9792713,33.512056 88.9447514,33.9785886 87.6673788,33.9785886 C85.9035023,33.9785886 84.4431915,32.9632412 84.4431915,31.0779384 C84.4431915,29.1934345 85.7205641,28.0982014 88.1339114,28.0982014 C88.9239811,28.0982014 89.7148496,28.1788859 90.4657753,28.3210825 L90.4657753,27.7730665 C90.4657753,26.7593168 89.7555913,26.3135546 88.3360223,26.3135546 C87.2815309,26.3135546 86.4099777,26.5364357 85.6806212,26.9007145 L85.3754578,26.9007145 L85.3754578,24.8324735 C86.106412,24.4482232 87.403756,24.1230884 88.6603582,24.1230884 C91.641693,24.1230884 93.1826884,25.4819443 93.1826884,27.8337797 L93.1826884,33.875536 L90.545661,33.875536 L90.545661,32.4575647 L90.5464599,32.4575647 Z M90.4657753,30.8965978 L90.4657753,29.6799385 C89.9984439,29.5385407 89.3913125,29.497799 88.9032108,29.497799 C87.7888051,29.497799 87.2208177,29.9235899 87.2208177,30.7943441 C87.2208177,31.6658972 87.789604,32.0102047 88.6196165,32.0102047 C89.4528245,32.0102047 90.2013536,31.605983 90.4657753,30.8965978 L90.4657753,30.8965978 Z M95.2077912,29.1327213 C95.2077912,26.0507306 97.3774871,24.1238872 100.197453,24.1238872 C101.351801,24.1238872 102.244125,24.3883089 102.852055,24.7933295 L102.852055,27.1859065 L102.568461,27.1859065 C101.981301,26.7401443 101.332629,26.5372346 100.501018,26.5372346 C99.1413636,26.5372346 98.0477282,27.4894722 98.0477282,29.1327213 C98.0477282,30.7544013 99.1413636,31.6866675 100.501018,31.6866675 C101.332629,31.6866675 101.981301,31.4837578 102.568461,31.0379956 L102.852055,31.0379956 L102.852055,33.4305726 C102.244125,33.8347943 101.351801,34.099216 100.197453,34.099216 C97.3774871,34.1000149 95.2077912,32.1939418 95.2077912,29.1327213 L95.2077912,29.1327213 Z M107.737066,29.2533488 L107.737066,33.8763349 L104.98021,33.8763349 L104.98021,21.2040644 L107.737066,21.2040644 L107.737066,28.4217385 L108.385738,27.4495294 L110.920512,24.3475672 L113.840335,24.3475672 L113.840335,24.6719032 L110.312582,28.6661888 L113.840335,33.5512 L113.840335,33.8763349 L110.738372,33.8763349 L108.385738,30.3885247 L107.737066,29.2533488 L107.737066,29.2533488 Z M120.589878,32.4575647 C120.02269,33.512056 118.98817,33.9785886 117.710797,33.9785886 C115.946921,33.9785886 114.48661,32.9632412 114.48661,31.0779384 C114.48661,29.1934345 115.763982,28.0982014 118.17733,28.0982014 C118.9674,28.0982014 119.758268,28.1788859 120.509194,28.3210825 L120.509194,27.7730665 C120.509194,26.7593168 119.79901,26.3135546 118.38024,26.3135546 C117.326547,26.3135546 116.453396,26.5364357 115.724838,26.9007145 L115.420474,26.9007145 L115.420474,24.8324735 C116.14983,24.4482232 117.447174,24.1230884 118.703777,24.1230884 C121.685111,24.1230884 123.226107,25.4819443 123.226107,27.8337797 L123.226107,33.875536 L120.589079,33.875536 L120.589079,32.4575647 L120.589878,32.4575647 Z M120.509993,30.8965978 L120.509993,29.6799385 C120.042661,29.5385407 119.43553,29.497799 118.949026,29.497799 C117.833821,29.497799 117.266633,29.9235899 117.266633,30.7943441 C117.266633,31.6658972 117.833821,32.0102047 118.665432,32.0102047 C119.497042,32.0102047 120.244772,31.605983 120.509993,30.8965978 L120.509993,30.8965978 Z M128.374741,26.2736117 C128.882814,24.8540426 129.956478,24.2453135 131.050912,24.2453135 C131.417588,24.2453135 131.721153,24.3467683 131.84258,24.4074815 L131.84258,27.0229397 L131.558985,27.0229397 C131.27619,26.881542 130.991797,26.7992597 130.605949,26.7992597 C129.510716,26.7992597 128.720646,27.306534 128.496966,28.3809968 L128.496966,33.875536 L125.74011,33.875536 L125.74011,24.3459695 L128.37554,24.3459695 L128.37554,26.2736117 L128.374741,26.2736117 Z M139.810381,32.5382492 C139.18168,33.5312286 138.187103,34.099216 136.951271,34.099216 C134.355784,34.099216 132.754076,32.0102047 132.754076,29.1319225 C132.754076,26.2320711 134.355784,24.1230884 136.951271,24.1230884 C138.106418,24.1230884 139.060254,24.6303626 139.688954,25.5019157 L139.688954,21.2040644 L142.44581,21.2040644 L142.44581,33.8763349 L139.810381,33.8763349 L139.810381,32.5382492 L139.810381,32.5382492 Z M139.688155,30.7743727 L139.688155,27.4487305 C139.180881,26.7185751 138.491467,26.3734689 137.701398,26.3734689 C136.444796,26.3734689 135.593214,27.3464768 135.593214,29.1319225 C135.593214,30.895799 136.443997,31.8480367 137.701398,31.8480367 C138.491467,31.8488355 139.18168,31.5045281 139.688155,30.7743727 L139.688155,30.7743727 Z', fill: textFill })
	    )
	  );
	};

	Logo.propTypes = {
	  reverse: _react.PropTypes.bool
	};

	exports.default = Logo;
	module.exports = exports['default'];

/***/ }
/******/ ]);