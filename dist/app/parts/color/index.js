"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _voca = _interopRequireDefault(require("voca"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Object.filter = function (obj, predicate) {
  return Object.keys(obj).filter(function (key) {
    return predicate(key, obj[key]);
  }).reduce(function (res, key) {
    return res[key] = obj[key], res;
  }, {});
};

var _default = ['template', 'color', function (theme) {
  var string = '';
  var selector = '';
  var colors = Object.filter(theme.color, function (color) {
    return color !== 'theme';
  });

  for (var color in colors) {
    var value = colors[color];
    string += ".".concat(selector).concat(color, " {\n");
    string += "\tcolor: ".concat(value, ";\n");
    string += "}\n";
  }

  return string;
}];
exports["default"] = _default;
module.exports = exports.default;