import KeyValuePair from '../../src/utilities/KeyValuePair';
import * as utils from '../../src/utilities/test-utils';

describe('KeyValuePair', () => {
  const key = 'foo';
  const value = 'bar';
  const actual = new KeyValuePair(key, value);

  test('returns', () => {
    expect(actual).toBeDefined();
  });

  describe('constructor', () => {
    test('sets key when key is a string', () => {
      expect(actual._key).toBe(key);
    });

    test('throws error when key is not a string', () => {
      [null, undefined, false, 42, {}, []].forEach(key => {
        const e = utils.recordError(() => {
          new KeyValuePair(key, 'foobar');
        });
        expect(e).toBeDefined();
        expect(e instanceof TypeError).toBe(true);
        expect(e.message).toBe('Keys must be of type string');
      });
    });

    test('sets value', () => {
      expect(actual._value).toBe(value);
    });
  });

  describe('key property', () => {
    test('returns key', () => {
      expect(actual.key).toBe(key);
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
      expect(actual.value).toBe(value);
    });

    test('can be set', () => {
      const newValue = 'baz';
      actual.value = newValue;
      expect(actual.value).toBe(newValue);
    });
  });
});
