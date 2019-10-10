"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildPostCSS = buildPostCSS;

var _mole = _interopRequireDefault(require("mole"));

var _fs = _interopRequireDefault(require("fs"));

var _postcss = _interopRequireDefault(require("postcss"));

var _postcssImport = _interopRequireDefault(require("postcss-import"));

var _postcssCustomSelectors = _interopRequireDefault(require("postcss-custom-selectors"));

var _postcssExtendRule = _interopRequireDefault(require("postcss-extend-rule"));

var _autoprefixer = _interopRequireDefault(require("autoprefixer"));

var _precss = _interopRequireDefault(require("precss"));

var _width = _interopRequireDefault(require("./parts/width"));

var _maxWidth = _interopRequireDefault(require("./parts/max-width"));

var _margin = _interopRequireDefault(require("./parts/margin"));

var _border = _interopRequireDefault(require("./parts/border"));

var _colorTheme = _interopRequireDefault(require("./parts/color-theme"));

var _padding = _interopRequireDefault(require("./parts/padding"));

var _fontStyle = _interopRequireDefault(require("./parts/font-style"));

var _fontFamily = _interopRequireDefault(require("./parts/font-family"));

var _flex = _interopRequireDefault(require("./parts/flex"));

var _fontSize = _interopRequireDefault(require("./parts/font-size"));

var _height = _interopRequireDefault(require("./parts/height"));

var _fontColor = _interopRequireDefault(require("./parts/font-color"));

var _zIndex = _interopRequireDefault(require("./parts/z-index"));

var _borderColor = _interopRequireDefault(require("./parts/border-color"));

var _color = _interopRequireDefault(require("./parts/color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// import parts from './models/parts';
_mole["default"].config('src/mole.config.js');

_mole["default"].theme('karamel.theme.jsonnet'); // mole.add(...width)
// mole.add(...parts)


_mole["default"].add.apply(_mole["default"], _toConsumableArray(_margin["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_border["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_color["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_borderColor["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_padding["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_width["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_maxWidth["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_colorTheme["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_fontStyle["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_fontFamily["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_fontSize["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_flex["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_height["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_fontColor["default"]));

_mole["default"].add.apply(_mole["default"], _toConsumableArray(_zIndex["default"]));

_mole["default"].build(); // Need an option to avoid build and just output string to pass straight to postcss


function buildPostCSS(input, output) {
  _fs["default"].readFile(input, function (err, css) {
    (0, _postcss["default"])([_postcssImport["default"], _postcssCustomSelectors["default"], _postcssExtendRule["default"]]).process(css, {
      from: input,
      to: output
    }).then(function (result) {
      _fs["default"].writeFile(output, result.css, function () {
        return true;
      });

      if (result.map) {
        _fs["default"].writeFile(output + '.map', result.map, function () {
          return true;
        });
      }
    });
  });
}

buildPostCSS('./src/styles/main.css', './dist/karamel.css'); // console.log(mole.debug)