"use strict";

var _mole = _interopRequireDefault(require("mole"));

var _width = _interopRequireDefault(require("./parts/width"));

var _maxWidth = _interopRequireDefault(require("./parts/max-width"));

var _margin = _interopRequireDefault(require("./parts/margin"));

var _colorTheme = _interopRequireDefault(require("./parts/color-theme"));

var _padding = _interopRequireDefault(require("./parts/padding"));

var _fontStyle = _interopRequireDefault(require("./parts/font-style"));

var _flex = _interopRequireDefault(require("./parts/flex"));

var _fontSize = _interopRequireDefault(require("./parts/font-size"));

var _height = _interopRequireDefault(require("./parts/height"));

var _fontColor = _interopRequireDefault(require("./parts/font-color"));

var _zIndex = _interopRequireDefault(require("./parts/z-index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// import parts from './models/parts';
_mole["default"].config('src/mole.config.js'); // mole.add(...width)
// mole.add(...parts)


_mole["default"].add.apply(_mole["default"], _toConsumableArray(_margin["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_padding["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_width["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_maxWidth["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_colorTheme["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_fontStyle["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_fontSize["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_flex["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_height["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_fontColor["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_zIndex["default"])); // fs.readFile('src/app.css', (err, css) => {
// 	postcss([precss, autoprefixer])
// 		.process(css, { from: 'src/app.css', to: 'dest/app.css' })
// 		.then(result => {
// 			fs.writeFile('dest/app.css', result.css, () => true)
// 			if (result.map) {
// 				fs.writeFile('dest/app.css.map', result.map, () => true)
// 			}
// 		})
// })


_mole["default"].build(); // mole.build()