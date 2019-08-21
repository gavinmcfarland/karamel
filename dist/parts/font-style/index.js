"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _fs = _interopRequireDefault(require("fs"));

var _render = _interopRequireDefault(require("../../render"));

var _structure = _interopRequireDefault(require("../../structure"));

var Sqrl = _interopRequireWildcard(require("squirrelly"));

var _voca = _interopRequireDefault(require("voca"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Sqrl.defineFilter("kebabcase", function (str) {
  return _voca["default"].kebabCase(str);
});
Sqrl.defineHelper("customhelper", function (args, content, blocks, options) {
  var returnStr = '';

  for (var key in blocks) {
    if (typeof blocks[key] === 'function') {
      returnStr += "Block found named " + key + ", with value: " + blocks[key]();
    }
  }

  return returnStr;
});
var myTemplate = "{{each(options.rules)}}\n{{each(@this.modifiers)}}\n{{if(@this.name === 'default')}}\n.{{@../this.abbr}} {\n    {{# else }}\n.{{@../this.abbr}}-{{@this.name}} {\n{{/if}}\n{{each(@this.props)}}\n    {{@this.name | kebabcase}}: {{@this.value}};\n{{/each}}\n}\n{{ /each }}\n{{ /each }}";
var _default = ['template', 'font-style', function (_ref) {
  var theme = _ref.theme;
  var data = {
    rules: [_objectSpread({
      name: 'font-style',
      abbr: 'font'
    }, (0, _structure["default"])(theme.font.style, ['modifiers', 'props', 'value']))]
  };

  var template = _fs["default"].readFileSync(__dirname + '/template.njk', 'utf8');

  return Sqrl.Render(myTemplate, data);
}];
exports["default"] = _default;
module.exports = exports.default;