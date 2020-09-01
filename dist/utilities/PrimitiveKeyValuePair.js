"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _KeyValuePair = _interopRequireDefault(require("./KeyValuePair"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PrimitiveKeyValuePair extends _KeyValuePair.default {
  constructor(key, value) {
    super(key, value);
    validateValue(value);
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    validateValue(newValue);
    this._value = newValue;
  }

}

exports.default = PrimitiveKeyValuePair;
const allowedTypes = ['string', 'number', 'boolean'];

const validateValue = value => {
  if (!allowedTypes.includes(typeof value)) {
    throw new TypeError('Values must be of type string, number, or boolean');
  }
};
//# sourceMappingURL=PrimitiveKeyValuePair.js.map