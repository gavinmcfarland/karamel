"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = structure;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createObject(key, children, i) {
  var obj = _objectSpread({
    name: key
  }, children);

  return obj;
}

function structure(data) {
  function newObject(data) {
    var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    var result = {};
    var parent = '';

    if (args[0]) {
      parent = args[0][i];
      result[parent] = []; // if (result.values) {
      // 	console.log(result.values)
      // }
    } else {
      parent = 'items';
      result[parent] = [];
    } // Provide a counter so can tell what iteration


    i++;

    if (_typeof(data) === 'object') {
      _lodash["default"].each(data, function (value, key) {
        result[parent].push(createObject.apply(void 0, [key, newObject.apply(void 0, [value, i].concat(args)), i].concat(args)));
      });
    } else {
      if (parent === 'value') {
        result[parent] = data;
      } else {
        result[parent].push(createObject.apply(void 0, [data, null, i].concat(args)));
      }
    }

    return result;
  }

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return newObject.apply(void 0, [data, 0].concat(args));
}

module.exports = exports.default;