"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _commonTags = require("common-tags");

var _default = ['template', 'z-index', function (_ref) {
  var theme = _ref.theme;
  var name = 'z-index';
  var abbr = theme.property.zIndex.abbr;
  var string = '';

  for (var i = 0; i <= 50; i += 10) {
    string += ".".concat(abbr, "-").concat(i, " {\n");
    string += "\t".concat(name, ": ").concat(i, "\n");
    string += "}\n";
  }

  return string;
}];
exports["default"] = _default;
module.exports = exports.default;