"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = render;

var _nunjucks = _interopRequireDefault(require("nunjucks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var nunjucks = _nunjucks["default"].configure();

function render(string, data) {
  return nunjucks.renderString(string, data);
}

module.exports = exports.default;