const PrimitiveKeyValuePair = require('./PrimitiveKeyValuePair');

module.exports = class Header extends PrimitiveKeyValuePair {
  constructor(key, value) {
    super(key, value);
  }
}
