"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = ['template', 'border', function (theme) {
  var name = 'border';
  var abbr = theme.property.border.abbr;
  var string = '';
  var size = theme.size.lines;
  var property = theme.property.border;

  for (var prop in property) {
    if (prop !== 'abbr') {
      for (var thing in property[prop]) {
        if (thing !== 'abbr') {
          if (thing === 'width') {
            for (var i = 0; i < size.length; i++) {
              string += ".".concat(abbr).concat(property[prop].abbr).concat(property[prop][thing].abbr, "-").concat(i + 1, " {\n");
              string += "\t".concat(name, "-").concat(prop, "-").concat(thing, ": ").concat(size[i], ";\n");
              string += "}\n";
            }
          } else {
            string += ".".concat(abbr).concat(property[prop].abbr).concat(property[prop][thing].abbr, " {\n");
            string += "\t".concat(name, "-").concat(prop, "-").concat(thing, ": value;\n");
            string += "}\n";
          }
        } else {
          string += ".".concat(abbr).concat(property[prop].abbr, " {\n");
          string += "\t".concat(name, "-").concat(prop, ": value;\n");
          string += "}\n";
        }
      }
    }
  }

  return string;
}];
exports["default"] = _default;
module.exports = exports.default;