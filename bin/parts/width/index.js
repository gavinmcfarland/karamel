"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _commonTags = require("common-tags");

var _default = ['template', 'width', function (_ref) {
  var theme = _ref.theme;
  var name = 'width';
  var abbr = theme.property.width.abbr;
  var o = theme.scale.width;
  var string = '';

  for (var i = 0; i < o.length; i++) {
    var modifier = o[i];
    string += ".".concat(abbr, "-").concat(i + 1, " {\n");
    string += "\t".concat(name, ": ").concat(modifier, "\n");
    string += "}\n";
  }

  string += ".".concat(abbr, " {\n\t").concat(name, ": var(--").concat(name, ");\n}\n.").concat(abbr, " > * {\n\t--").concat(name, ": unset;\n}\n.").concat(abbr, "-viewport {\n\tmax-width: none !important;\n\twidth: 100vw;\n\tposition: relative;\n\tleft: 50%;\n\ttransform: translate(-50vw);\n}\n.").concat(abbr, "-viewport.max-w {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n}\n.").concat(abbr, "-viewport.max-w > .wrapper {\n\tmax-width: var(--max-width);\n\tbox-sizing: content-box;\n\twidth: 100vw;\n\tflex-shrink: 0;\n\tflex-basis: 100%;\n}");
  return string;
}];
exports["default"] = _default;
module.exports = exports.default;