const KeyValuePair = require('../src/utilities/KeyValuePair');
const utils = require('../src/utilities/test-utils');

describe('KeyValuePair', () => {
  const expectedKey = 'foo';
  const expectedValue = 'bar';
  const actual = new KeyValuePair(expectedKey, expectedValue);

  test('returns', () => {
    expect(actual).toBeDefined();
  });

  describe('constructor', () => {
    test('sets key when key is a string', () => {
      expect(actual._key).toBe(expectedKey);
    });
    
    [
      { key: null, desc: 'null' },
      { key: undefined, desc: 'undefined' },
      { key: 42, desc: 'a number' },
      { key: false, desc: 'a boolean' },
      { key: {}, desc: 'an object' },
      { key: [], desc: 'an array' },
    ].forEach(({ key, desc }) => {
      test(`throws error when key is ${desc}`, () => {
        const action = () => new KeyValuePair(key, expectedValue);
        const assertions = e => {
          expect(e).toBeDefined();
          expect(e instanceof TypeError).toBe(true);
          expect(e.message).toBe('Keys must be of type string');
        };
        utils.expectError(action, assertions);
      });
    });

    [
      { value: null, desc: 'null' },
      { value: undefined, desc: 'undefined' },
      { value: 'baz', desc: 'a string' },
      { value: 42, desc: 'a number' },
      { value: false, desc: 'a boolean' },
      { value: {}, desc: 'an object' },
      { value: [], desc: 'an array' },
    ].forEach(({ value, desc }) => {
      test(`sets value when value is ${desc}`, () => {
        const kvp = new KeyValuePair(expectedKey, value);
        expect(kvp._value).toBe(value);
      });
    });
  });

  describe('key property', () => {
    test('returns key', () => {
      expect(actual.key).toBe(expectedKey);
    });

    test('cannot be set', () => {
      const action = () => (actual.key = 'oops');
      const assertions = e => {
        expect(e).toBeDefined();
        expect(e instanceof Error).toBe(true);
        expect(e.message).toBe('Keys are read-only');
      };
      utils.expectError(action, assertions);
    });
  });

  describe('value property', () => {
    test('returns value', () => {
      expect(actual.value).toBe(expectedValue);
    });

    [
      { value: null, desc: 'null' },
      { value: undefined, desc: 'undefined' },
      { value: 'baz', desc: 'a string' },
      { value: 42, desc: 'a number' },
      { value: false, desc: 'a boolean' },
      { value: {}, desc: 'an object' },
      { value: [], desc: 'an array' },
    ].forEach(x => {
      test(`can be set to ${x.desc}`, () => {
        actual.value = x.value;
        expect(actual.value).toBe(x.value);
      });
    });
  });
});
