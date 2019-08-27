"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = ['template', 'margin', function (_ref) {
  var theme = _ref.theme;
  var name = 'margin';
  var abbr = theme.property.margin.abbr;
  var o = theme.size.spacing;
  var string = '';

  for (var i = 0; i < o.length; i++) {
    var modifier = o[i];
    string += ".".concat(abbr, "-").concat(i + 1, " {\n");
    string += "\t".concat(name, ": ").concat(modifier, "\n");
    string += "}\n";
  }

  for (var side in theme.property.margin) {
    if (side !== 'abbr') {
      var sideabbr = theme.property.margin[side].abbr;

      for (var _i = 0; _i < o.length; _i++) {
        var _modifier = o[_i];
        string += ".".concat(abbr).concat(sideabbr, "-").concat(_i, " {\n");
        string += "\t".concat(name, "-").concat(side, ": ").concat(_modifier, "\n");
        string += "}\n";
      }
    }
  }

  string += ".".concat(abbr, " {\n\t").concat(name, "-top: var(--mt, unset);\n\t").concat(name, "-right: var(--mr, unset);\n\t").concat(name, "-bottom: var(--mb, unset);\n\t").concat(name, "-left: var(--ml, unset);\n}\n.").concat(abbr, " > * {\n\t--mt: unset;\n\t--mr: unset;\n\t--mb: unset;\n\t--ml: unset;\n}\n");
  string += ".".concat(abbr, "-auto {\n\tmargin: auto;\n}\n.").concat(abbr, "l-auto {\n\tmargin-left: auto;\n}\n.").concat(abbr, "r-auto {\n\tmargin-right: auto;\n}\n.").concat(abbr, "b-auto {\n\tmargin-bottom: auto;\n}\n.").concat(abbr, "t-auto {\n\tmargin-top: auto;\n}");
  return string;
}];
exports["default"] = _default;
module.exports = exports.default;