"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _commonTags = require("common-tags");

var _default = ['template', 'height', function (_ref) {
  var theme = _ref.theme;
  var name = 'height';
  var abbr = theme.property.height.abbr;
  var o = theme.size.width;
  var string = '';

  for (var i = 0; i < o.length; i++) {
    var modifier = o[i];
    string += ".".concat(abbr, "-").concat(i + 1, " {\n");
    string += "\t".concat(name, ": ").concat(modifier, "\n");
    string += "}\n";
  }

  return string;
}];
exports["default"] = _default;
module.exports = exports.default;