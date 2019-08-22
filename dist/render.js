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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var nunjucks = new _nunjucks["default"].Environment(); // const nunjucks = njk.configure()

nunjucks.addGlobal('this', function () {
  return this.getVariables();
});
nunjucks.addFilter('kebabcase', function (str) {
  return _voca["default"].kebabCase(str);
});
Sqrl.defineFilter("kebabcase", function (str) {
  return _voca["default"].kebabCase(str);
});
Sqrl.defineHelper('iterate', function (args, content, blocks, options) {
  var startingScope = args[0]; // console.log(startingScope)

  var returnString = content({
    "this": startingScope
  });
  var depth = 0;

  for (var _i = 0, _Object$entries = Object.entries(blocks); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        block = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    // console.log(value)
    if (block == 'down') {
      depth++;
    }

    if (block == 'up') {
      depth--;
    } // console.log('depth', depth)
    // console.log('obj ->', getAdjValues(startingScope, depth))


    var blockScope = getAdjValues(startingScope, depth); // console.log('blockscope ->', blockScope)

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = blockScope[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _value = _step.value;
        // console.log(blocks[block]({ this: value }).trim())
        var re = /undefined/gmi; // console.log(blocks[block]({ this: value }))

        if (re.test(blocks[block]({
          "this": _value
        })) === false) {
          // console.log('what ->', blocks[block]({ this: thing }))
          returnString += blocks[block]({
            "this": _value
          });
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  console.log(returnString);
  return returnString;
}); // export default function render(string, data) {
// 	return nunjucks.renderString(string, data);
// }

function render(string, data) {
  return Sqrl.Render(string, data);
}

module.exports = exports.default;