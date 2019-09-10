"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = ['template', 'border', function (theme) {
  var name = 'border';
  var abbr = theme.property.border.abbr;
  var string = '';
  var colors = theme.color;
  var property = theme.property.border;

  for (var prop in property) {
    if (prop !== 'abbr') {
      for (var thing in property[prop]) {
        if (prop === 'color') {
          for (var color in colors) {
            // console.log('->', property[prop])
            if (color !== 'theme') {
              string += ".".concat(abbr, "-").concat(color, " {\n");
              string += "\tborder-".concat(prop, ": ").concat(color, ";\n");
              string += "}\n";
            }
          }
        }

        if (prop === 'top' || prop == 'right' || prop == 'bottom' || prop == 'left') {
          for (var subprop in property[prop]) {
            if (subprop === 'color') {
              for (var _color in colors) {
                if (_color !== 'theme') {
                  string += ".".concat(abbr).concat(property[prop].abbr, "-").concat(_color, " {\n");
                  string += "\tborder-".concat(prop, "-color: ").concat(colors[_color], ";\n");
                  string += "}\n";
                }
              }
            }
          }
        }
      }
    }
  } // console.log(string)


  return string;
}];
exports["default"] = _default;
module.exports = exports.default;