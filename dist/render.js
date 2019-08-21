"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = render;

var _nunjucks = _interopRequireDefault(require("nunjucks"));

var _voca = _interopRequireDefault(require("voca"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var nunjucks = new _nunjucks["default"].Environment(); // const nunjucks = njk.configure()

nunjucks.addGlobal('this', function () {
  return this.getVariables();
});
nunjucks.addFilter('kebabcase', function (str) {
  return _voca["default"].kebabCase(str);
});

function render(string, data) {
  return nunjucks.renderString(string, data);
}

module.exports = exports.default;