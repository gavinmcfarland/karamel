"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = ['template', 'max-width', function (theme) {
  return "\t{% for rule in rules -%}\n\t{% if rule.name === 'default' %}\n\t.color {\n\t{% else %}\n\t.color-{{rule.modifier}} {\n\t{% endif %}\n\t\t{%- for decl in this %}\n\t\t{{decl.name | kebabcase}}: {{decl.value | join(' ')}};\n\t\t{%- endfor %}\n\t}\n\t{% endfor %}";
}];
exports["default"] = _default;
module.exports = exports.default;