import KeyValuePair from "./KeyValuePair";

export default class PrimitiveKeyValuePair extends KeyValuePair {
  constructor(key, value) {
    super(key, value);
    validateValue(value);
  }

  get value() { return this._value; }
  set value(newValue) {
    validateValue(newValue);
    this._value = newValue;
  }
}

const allowedTypes = ['string', 'number', 'boolean'];

const validateValue = value => {
  if (!allowedTypes.includes(typeof value)) {
    throw new TypeError('Values must be of type string, number, or boolean');
  }
};
