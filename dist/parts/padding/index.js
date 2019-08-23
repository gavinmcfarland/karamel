"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = ['template', 'padding', function (_ref) {
  var theme = _ref.theme;
  var name = 'padding';
  var abbr = theme.properties.padding.abbr;
  return ".".concat(abbr, " {\n\t").concat(name, "-top: var(--pt, unset);\n\t").concat(name, "-right: var(--pr, unset);\n\t").concat(name, "-bottom: var(--pb, unset);\n\t").concat(name, "-left: var(--pl, unset);\n}\n.").concat(abbr, " > * {\n\t--pt: unset;\n\t--pr: unset;\n\t--pb: unset;\n\t--pl: unset;\n}");
}];
exports["default"] = _default;
module.exports = exports.default;