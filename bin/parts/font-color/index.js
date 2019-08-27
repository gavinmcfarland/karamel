"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _fs = _interopRequireDefault(require("fs"));

var _voca = _interopRequireDefault(require("voca"));

var _render = _interopRequireDefault(require("../../render"));

var _structure = _interopRequireDefault(require("../../structure"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// let template = fs.readFileSync(__dirname + '/template.sqrl', 'utf8')
var _default = ['template', 'font-color', function (_ref) {
  var theme = _ref.theme;
  var abbr = theme.property.fontColor.abbr;
  var o = theme.color;
  var string = '';

  for (var modifier in o) {
    if (modifier !== 'theme') {
      string += ".".concat(abbr, "-").concat(modifier, " {\n");
      string += "\tcolor: ".concat(o[modifier], ";\n");
      string += "}\n";
    }
  }

  return string;
}];
exports["default"] = _default;
module.exports = exports.default;