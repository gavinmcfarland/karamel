"use strict";

var _mole = _interopRequireDefault(require("mole"));

var _width = _interopRequireDefault(require("./parts/width"));

var _padding = _interopRequireDefault(require("./parts/padding"));

var _fontStyle = _interopRequireDefault(require("./parts/font-style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_width["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_padding["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_fontStyle["default"]));

_mole["default"].build(); // mole.build()