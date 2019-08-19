"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _render = _interopRequireDefault(require("../render"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = ['template', 'font-style', function (_ref) {
  var theme = _ref.theme;
  var utilities = theme.font.style;
  var name = 'font style';
  var abbr = 'f';
  console.log(_lodash["default"].map(utilities, function (value, modifier) {
    return "".concat(abbr, "-").concat(modifier);
  }));
  console.log((0, _render["default"])("hello {{test}}", {
    test: 'Gavin'
  }));
  return 'test';
}];
exports["default"] = _default;
module.exports = exports.default;