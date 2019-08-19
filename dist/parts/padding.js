"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = ['template', 'padding', function (_ref) {
  var theme = _ref.theme;
  var name = 'padding';
  var abbr = 'p';
  return "\t.".concat(abbr, " {\n\t\t").concat(name, "-top: var(--pt, unset);\n\t\t").concat(name, "-right: var(--pr, unset);\n\t\t").concat(name, "-bottom: var(--pb, unset);\n\t\t").concat(name, "-left: var(--pl, unset);\n\t}\n\t.").concat(abbr, " > * {\n\t\t--pt: unset;\n\t\t--pr: unset;\n\t\t--pb: unset;\n\t\t--pl: unset;\n\t}");
}];
exports["default"] = _default;
module.exports = exports.default;