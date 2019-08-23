"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = ['template', 'margin', function (_ref) {
  var theme = _ref.theme;
  var name = 'margin';
  var abbr = theme.properties.margin.abbr;
  return ".".concat(abbr, " {\n\t").concat(name, ": var(--").concat(name, ", unset);\n}\n.").concat(abbr, " > * {\n\t--").concat(name, ": unset;\n}");
}];
exports["default"] = _default;
module.exports = exports.default;