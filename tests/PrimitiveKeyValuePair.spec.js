import PrimitiveKeyValuePair from '../src/utilities/PrimitiveKeyValuePair';
import KeyValuePair from '../src/utilities/KeyValuePair';
import * as utils from '../src/utilities/test-utils';

describe('PrimitiveKeyValuePair', () => {
  const expectedKey = 'foo';
  const expectedValue = 'bar';
  const actual = new PrimitiveKeyValuePair(expectedKey, expectedValue);

  test('extends KeyValuePair', () => {
    expect(actual instanceof KeyValuePair).toBe(true);
  });

  describe('constructor', () => {
    test('sets key', () => {
      expect(actual.key).toBe(expectedKey);
    });

    [
      { value: 'bar', desc: 'a string' },
      { value: 42, desc: 'a number' },
      { value: false, desc: 'a boolean' },
    ].forEach(({ value, desc }) => {
      test(`sets value when value is ${desc}`, () => {
        const pkvp = new PrimitiveKeyValuePair(expectedKey, value);
        expect(pkvp.value).toBe(value);
      });
    });

    [
      { value: null, desc: 'null' },
      { value: undefined, desc: 'undefined' },
      { value: {}, desc: 'an object' },
      { value: [], desc: 'an array' },
    ].forEach(({ value, desc }) => {
      test(`throws error when value is ${desc}`, () => {
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
      expect(actual.value).toBe(expectedValue);
    });

    [
      { value: 'baz', desc: 'a string' },
      { value: 42, desc: 'a number' },
      { value: false, desc: 'a boolean' },
    ].forEach(x => {
      test(`can be set to ${x.desc}`, () => {
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
