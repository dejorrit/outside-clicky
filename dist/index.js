'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _findAncestor = require('./helpers/findAncestor');

var _findAncestor2 = _interopRequireDefault(_findAncestor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
	function _class() {
		//

		_classCallCheck(this, _class);
	}

	_createClass(_class, [{
		key: 'bind',
		value: function bind(element, callback) {
			var autoUnbind = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

			this.el = element;
			this.callback = callback;
			this.autoUnbind = autoUnbind;

			this.onClick = this.onClick.bind(this);

			window.addEventListener('click', this.onClick, true);
		}
	}, {
		key: 'unbind',
		value: function unbind() {
			window.removeEventListener('click', this.onClick, true);
		}
	}, {
		key: 'onClick',
		value: function onClick(event) {
			if (event.target !== this.el && !(0, _findAncestor2.default)(this.el, event.target)) {

				// registered click outside the target element, run the callback!
				if (typeof this.callback === 'function') {
					this.callback();

					if (this.autoUnbind) {
						this.unbind();
					}
				} else {
					throw 'Expected "callback" to be a function, instead got ' + _typeof(this.callback);
				}
			}
		}
	}]);

	return _class;
}();