"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = render;

var _nunjucks = _interopRequireDefault(require("nunjucks"));

var _voca = _interopRequireDefault(require("voca"));

var Sqrl = _interopRequireWildcard(require("squirrelly"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var nunjucks = new _nunjucks["default"].Environment(); // const nunjucks = njk.configure()

nunjucks.addGlobal('this', function () {
  return this.getVariables();
});
nunjucks.addFilter('kebabcase', function (str) {
  return _voca["default"].kebabCase(str);
});
Sqrl.defineFilter("kebabcase", function (str) {
  return _voca["default"].kebabCase(str);
}); // export default function render(string, data) {
// 	return nunjucks.renderString(string, data);
// }

function render(string, data) {
  return Sqrl.Render(string, data);
}

module.exports = exports.default;