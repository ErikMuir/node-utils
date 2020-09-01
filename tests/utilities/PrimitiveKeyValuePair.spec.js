import PrimitiveKeyValuePair from '../../src/utilities/PrimitiveKeyValuePair';
import KeyValuePair from '../../src/utilities/KeyValuePair';
import * as utils from '../../src/utilities/test-utils';

describe('PrimitiveKeyValuePair', () => {
  const key = 'foo';
  const value = 'bar';
  const actual = new PrimitiveKeyValuePair(key, value);

  test('returns', () => {
    expect(actual).toBeDefined();
  });

  test('extends KeyValuePair', () => {
    expect(actual instanceof KeyValuePair).toBe(true);
  });

  describe('constructor', () => {
    test('sets key', () => {
      expect(actual._key).toBe(key);
    });

    test('sets value when value is a string', () => {
      expect(actual._value).toBe(value);
    });

    test('throws error when value is not a string, number, or boolean', () => {
      [null, undefined, {}, []].forEach(value => {
        const action = () => new PrimitiveKeyValuePair('foobar', value);
        const assertions = e => {
          expect(e).toBeDefined();
          expect(e instanceof TypeError).toBe(true);
          expect(e.message).toBe('Values must be of type string, number, or boolean');
        };

        utils.expectError(action, assertions);
      });
    });
  });

  describe('value property', () => {
    test('returns value', () => {
      expect(actual.value).toBe(value);
    });

    [
      { value: 'baz', desc: 'string' },
      { value: 42, desc: 'number' },
      { value: false, desc: 'boolean' },
    ].forEach(x => {
      test(`can be set to a ${x.desc}`, () => {
        actual.value = x.value;
        expect(actual.value).toBe(x.value);
      });
    });

    [
      { value: null, desc: 'null' },
      { value: undefined, desc: 'undefined' },
      { value: {}, desc: 'an object' },
      { value: [], desc: 'an array' },
    ].forEach(x => {
      test(`cannot be set to ${x.desc}`, () => {
        const action = () => new PrimitiveKeyValuePair('foobar', x.value);
        const assertions = e => {
          expect(e).toBeDefined();
          expect(e instanceof TypeError).toBe(true);
          expect(e.message).toBe('Values must be of type string, number, or boolean');
        };

        utils.expectError(action, assertions);
      });
    });
  });
});
