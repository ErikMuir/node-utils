export default class KeyValuePair {
  constructor(key, value) {
    validateKey(key);

    this._key = key;
    this._value = value;
  }

  get key() { return this._key; }
  set key(newValue) { throw new Error('Keys are read-only'); }

  get value() { return this._value; }
  set value(newValue) { this._value = newValue; }
}

const validateKey = key => {
  if (typeof key !== 'string') {
    throw new TypeError('Keys must be of type string');
  }
};
