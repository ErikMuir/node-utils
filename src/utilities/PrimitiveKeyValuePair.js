export default class PrimitiveKeyValuePair {
  constructor(key, value) {
    validateKey(key);
    validateValue(value);

    this._key = key;
    this._value = value;
  }

  get key() { return this._key; }
  set key(newValue) { throw new Error('Keys are read-only'); }

  get value() { return this._value; }
  set value(newValue) {
    validateValue(newValue);
    this._value = newValue;
  }
}

const validateKey = key => {
  if (typeof key !== 'string') {
    throw new TypeError('Keys must be of type string');
  }
};

const allowedTypes = ['string', 'number', 'boolean'];

const validateValue = value => {
  if (!allowedTypes.includes(typeof value)) {
    throw new TypeError('Values must be of type string, number, or boolean');
  }
};
