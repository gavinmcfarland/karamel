"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _commonTags = require("common-tags");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\t.", "-open {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t}\n\t.", "-open > * {\n\t\tflex-basis: 100%;\n\t\tflex-shrink: 0;\n\t}"], ["\\\n\t.", "-open {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t}\n\t.", "-open > * {\n\t\tflex-basis: 100%;\n\t\tflex-shrink: 0;\n\t}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = ['template', 'flex', function (theme) {
  var abbr = theme.property.flex.abbr;
  return (0, _commonTags.stripIndent)(_templateObject(), abbr, abbr);
}];
exports["default"] = _default;
module.exports = exports.default;