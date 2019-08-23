"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = ['template', 'width', function (_ref) {
  var theme = _ref.theme;
  var modifiers = ['<integer:1-20>', '<unit>', 'content', 'flex', 'viewport'];
  var name = 'width';
  var abbr = 'w';
  return ".".concat(abbr, " {\n\t").concat(name, ": var(--").concat(name, ");\n}\n.").concat(abbr, " > * {\n\t--").concat(name, ": unset;\n}");
}];
exports["default"] = _default;
module.exports = exports.default;