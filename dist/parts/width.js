"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _render = _interopRequireDefault(require("../render"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = ['template', 'width', function (_ref) {
  var theme = _ref.theme;
  var properties = {
    width: ['<integer:1-20>', '<unit>', 'content', 'flex', 'viewport'] // let theme = {
    // 	width: {
    // 		default: {
    // 			width: 'stuff'
    // 		},
    // 		content: {
    // 			display: `inline-flex`
    // 		},
    // 		shrink: {
    // 			display: `inline-flex`
    // 		}
    // 	}
    // }

  };
  var name = 'width';
  var abbr = 'w';
  return (0, _render["default"])("\t{% for rule in rules %}\n\t{% if rule.modifiers %}\n\t.{{rule.abbr}} {\n\t{% else %}\n\t{% for modifier in modifiers %}\n\t.{{rule.abbr}}-{{modifier.name}} {\n\t{% endif %}\n\t\t{% for decl in decls %}\n\t\t{{part.name}}: var(--{{part.name}};\n\t\t{% endfor %}\n\t}\n\t.{{rule.abbr}} > * {\n\t\t--{{part.name}}: unset;\n\t}\n\t{% endfor %}\n\t{% endfor %}\n\t", {
    rules: [{
      name: 'width',
      abbr: 'w',
      decls: [{
        name: 'default',
        decls: [{
          prop: '',
          value: ''
        }]
      }],
      modifiers: [{
        name: 'content',
        decls: [{
          prop: '',
          value: ''
        }]
      }, {
        name: 'shrink',
        decls: [{
          prop: 'display',
          value: 'inline-flex'
        }]
      }, {
        name: '> *',
        decls: [{
          prop: '--width',
          value: 'unset'
        }]
      }]
    }]
  });
}];
exports["default"] = _default;
module.exports = exports.default;