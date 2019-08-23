"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _commonTags = require("common-tags");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\t.", " {\n\t\t--", ": value;\n\t\t", ": var(--", ");\n\t}"], ["\\\n\t.", " {\n\t\t--", ": value;\n\t\t", ": var(--", ");\n\t}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = ['template', 'max-width', function (_ref) {
  var theme = _ref.theme;
  var name = 'max-width';
  var abbr = theme.property.maxWidth.abbr;
  return (0, _commonTags.stripIndent)(_templateObject(), abbr, name, name, name);
}];
exports["default"] = _default;
module.exports = exports.default;