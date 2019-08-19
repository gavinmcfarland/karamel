"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = ['template', 'max-width', function (theme) {
  return "\t{% for rule in rules -%}\n\t.{{ rule.name | kebabcase }} {\n\t\t{% if rule.default %}\n\t\t{% endif %}\n\t}\n\t{% endfor %}";
}];
exports["default"] = _default;
module.exports = exports.default;