"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = ['template', 'width', function (_ref) {
  var theme = _ref.theme;
  var name = 'width';
  var abbr = 'w';
  return "\t.".concat(abbr, " {\n\t\t").concat(name, ": var(--").concat(name, ");\n\t}\n\t.").concat(abbr, " > * {\n\t\t--").concat(name, ": unset;\n\t}");
}];
exports["default"] = _default;
module.exports = exports.default;