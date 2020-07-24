'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FetchImage = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FetchImage = exports.FetchImage = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var imageResponse;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios2.default.get('https://source.unsplash.com/' + data.width + 'x' + data.height + '/?' + data.type);

          case 2:
            imageResponse = _context.sent;

            if (!(imageResponse && imageResponse.request.status === 200)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt('return', imageResponse.request.responseURL);

          case 7:
            return _context.abrupt('return', '');

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function FetchImage(_x) {
    return _ref.apply(this, arguments);
  };
}();