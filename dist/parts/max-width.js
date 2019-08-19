"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = ['template', 'max-width', function (_ref) {
  var theme = _ref.theme;
  var name = 'max-width';
  var abbr = 'max-w';
  return "\t.".concat(abbr, "-").concat(modifier, " {\n\t\t--").concat(name, ": ").concat(value, ";\n\t\t").concat(name, ": var(--").concat(name, ");\n\t}");
}];
exports["default"] = _default;
module.exports = exports.default;