"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _fs = _interopRequireDefault(require("fs"));

var _render = _interopRequireDefault(require("../../render"));

var _structure = _interopRequireDefault(require("../../structure"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var template = _fs["default"].readFileSync(__dirname + '/template.sqrl', 'utf8');

function getAdjValues(thing, depth) {
  function iterValue(thing, depth) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
    i++; // Array.isArray(thing) ? console.log('array ->', thing) : console.log('not ->', thing)
    // Array.isArray(thing) ? thing : [thing]
    // console.log(thing)
    // let newThing = {}
    // if (Array.isArray(thing)) {
    // 	if (thing.length === 1) {
    // 		// console.log(thing)
    // 		newThing = thing[0]
    // 		thing = newThing
    // 		// console.log(newThing)
    // 	}
    // }
    // console.log(thing)

    var targetDepth = depth - 1;

    _lodash["default"].each(thing, function (value, property) {
      var newThing = {};

      if (Array.isArray(value)) {
        if (value.length === 1) {
          // console.log(thing)
          newThing = value[0];
          value = newThing; // console.log(newThing)
        }
      }

      if (i === 0 && targetDepth === -1) {
        arr.push(_defineProperty({}, property, value));
      }

      if (i === targetDepth) {
        console.log(i);
        arr.push(value); // if (i < 1) {
        // 	arr.push({
        // 		[property]: value
        // 	})
        // } else {
        // 	arr.push(value)
        // }
      }

      if (_typeof(value) === 'object') {
        return iterValue(value, depth, i);
      }
    });
  }

  var arr = [];
  iterValue(thing, depth);
  console.log(arr);
  return arr;
} // function getAdjValues(obj, depth) {
// 	function iterObj(obj, depth, i = -1) {
// 		i++
// 		_.each(obj, function(value, property) {
// 			while (i < depth) {
// 				if (typeof obj[property] === 'object') {
// 					return iterObj(obj[property], depth, i)
// 				} else {
// 					arr.push({
// 						[property]: value
// 					})
// 					return
// 				}
// 			}
// 			if (i === depth) {
// 				arr.push({
// 					[property]: value
// 				})
// 			}
// 			return obj
// 		})
// 		// console.log(arr)
// 		if (i === depth) {
// 			return arr
// 		}
// 	}
// 	let arr = []
// 	iterObj(obj, depth)
// 	console.log(arr)
// 	return arr
// }


var data = {
  rules: [{
    name: 'font-style',
    abbr: 'font',
    modifiers: [{
      name: 'caps',
      props: '[Array]'
    }, {
      name: 'heading',
      props: '[Array]'
    }, {
      name: 'link',
      props: '[Array]'
    }, {
      name: 'text',
      props: '[Array]'
    }]
  }]
};
console.log('first--------------------');
getAdjValues(data, 0);
console.log('--------------------');
getAdjValues(data, 1);
console.log('--------------------');
getAdjValues(data, 2);
console.log('--------------------');
getAdjValues(data, 3);
console.log('--------------------');
getAdjValues(data, 4);
var data2 = {
  rules: {
    name: 'font-style',
    abbr: 'font',
    modifiers: [{
      name: 'caps',
      props: '[Array]'
    }, {
      name: 'heading',
      props: '[Array]'
    }, {
      name: 'link',
      props: '[Array]'
    }, {
      name: 'text',
      props: '[Array]'
    }]
  }
};
console.log('second--------------------');
getAdjValues(data2, 0);
console.log('--------------------');
getAdjValues(data2, 1);
console.log('--------------------');
getAdjValues(data2, 2);
console.log('--------------------');
getAdjValues(data2, 3);
console.log('--------------------');
getAdjValues(data2, 4);
var _default = ['template', 'font-style', function (_ref) {
  var theme = _ref.theme;
  var data = {
    rules: [_objectSpread({
      name: 'font-style',
      abbr: 'font'
    }, (0, _structure["default"])(theme.font.style, ['modifiers', 'props', 'value']))]
  };
  return (0, _render["default"])(template, data);
}];
exports["default"] = _default;
module.exports = exports.default;