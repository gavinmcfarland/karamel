"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _commonTags = require("common-tags");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\t\t.", " {\n\t\t\t", ": var(--", ");\n\t\t}\n\t\t.", " > * {\n\t\t\t--", ": unset;\n\t\t}\n\t\t.", "-viewport {\n\t\t\tmax-width: none !important;\n\t\t\twidth: 100vw;\n\t\t\tposition: relative;\n\t\t\tleft: 50%;\n\t\t\ttransform: translate(-50vw);\n\t\t}\n\t\t.", "-viewport.max-w {\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tjustify-content: center;\n\t\t}\n\t\t.", "-viewport.max-w > .wrapper {\n\t\t\tmax-width: var(--max-width);\n\t\t\tbox-sizing: content-box;\n\t\t\twidth: 100vw;\n\t\t\tflex-shrink: 0;\n\t\t\tflex-basis: 100%;\n\t\t}"], ["\\\n\t\t.", " {\n\t\t\t", ": var(--", ");\n\t\t}\n\t\t.", " > * {\n\t\t\t--", ": unset;\n\t\t}\n\t\t.", "-viewport {\n\t\t\tmax-width: none !important;\n\t\t\twidth: 100vw;\n\t\t\tposition: relative;\n\t\t\tleft: 50%;\n\t\t\ttransform: translate(-50vw);\n\t\t}\n\t\t.", "-viewport.max-w {\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tjustify-content: center;\n\t\t}\n\t\t.", "-viewport.max-w > .wrapper {\n\t\t\tmax-width: var(--max-width);\n\t\t\tbox-sizing: content-box;\n\t\t\twidth: 100vw;\n\t\t\tflex-shrink: 0;\n\t\t\tflex-basis: 100%;\n\t\t}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = ['template', 'width', function (_ref) {
  var theme = _ref.theme;
  var modifiers = ['<integer:1-20>', '<unit>', 'content', 'flex', 'viewport'];
  var name = 'width';
  var abbr = 'w';
  return (0, _commonTags.stripIndent)(_templateObject(), abbr, name, name, abbr, name, abbr, abbr, abbr);
}];
exports["default"] = _default;
module.exports = exports.default;