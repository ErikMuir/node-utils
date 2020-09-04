"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _PrimitiveKeyValuePair = _interopRequireDefault(require("./PrimitiveKeyValuePair"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PrimitiveMap extends Map {
  set(...args) {
    const pair = args[0] instanceof _PrimitiveKeyValuePair.default ? args[0] : new _PrimitiveKeyValuePair.default(args[0], args[1]);
    super.set(pair.key, pair.value);
  }

  toObject() {
    let obj = Object.create(null);

    for (let [k, v] of this) {
      obj[k] = v;
    }

    return obj;
  }

}

exports.default = PrimitiveMap;
//# sourceMappingURL=PrimitiveMap.js.map