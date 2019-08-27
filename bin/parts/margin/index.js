"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = ['template', 'margin', function (_ref) {
  var theme = _ref.theme;
  var name = 'margin';
  var abbr = theme.property.margin.abbr;
  var o = theme.scale.spacing;
  var string = '';

  for (var i = 0; i < o.length; i++) {
    var modifier = o[i];
    string += ".".concat(abbr, "-").concat(i, " {\n");
    string += "\tmargin: ".concat(modifier, "\n");
    string += "}\n";
  }

  string += ".".concat(abbr, " {\n\t").concat(name, ": var(--").concat(name, ", unset);\n}\n.").concat(abbr, " > * {\n\t--").concat(name, ": unset;\n}");
  return string;
}];
exports["default"] = _default;
module.exports = exports.default;