"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _voca = _interopRequireDefault(require("voca"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = ['template', 'color-theme', function (_ref) {
  var theme = _ref.theme;
  var abbr = theme.property.colorTheme.abbr;
  var o = theme.color.theme;
  var string = '';

  for (var modifier in o) {
    if (modifier === 'default') {
      string += ".".concat(abbr, " {\n");
    } else {
      string += ".".concat(abbr, "-").concat(modifier, " {\n");
    }

    for (var _i = 0, _Object$entries = Object.entries(o[modifier]); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          prop = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      string += "\t".concat(_voca["default"].kebabCase(prop), ": ").concat(value, ";\n");
    }

    string += "}\n";
  }

  return string;
}];
exports["default"] = _default;
module.exports = exports.default;