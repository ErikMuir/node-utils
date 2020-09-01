import { PrimitiveMap, PrimitiveKeyValuePair } from '../src';
import * as utils from '../src/utilities/test-utils';

describe('PrimitiveMap', () => {
  const key = 'foo';
  const value = 'bar';
  const actual = new PrimitiveMap();

  afterEach(() => {
    actual.clear();
  });

  test('extends Map', () => {
    expect(actual).toBeDefined();
    expect(actual instanceof Map).toBe(true);
    expect(actual.size).toBe(0);
  });

  describe('set', () => {
    test('adds an entry when provided a PrimitiveKeyValuePair', () => {
      const keyValuePair = new PrimitiveKeyValuePair(key, value);
      actual.set(keyValuePair);
      expect(actual.size).toBe(1);
      expect(actual.get(key)).toBe(value);
    });

    test('adds an entry when provided a key and value', () => {
      actual.set(key, value);
      expect(actual.size).toBe(1);
      expect(actual.get(key)).toBe(value);
    });

    test('throws error when provided nothing', () => {
      const action = () => actual.set();
      const assertions = e => expect(e).toBeDefined();
      utils.expectError(action, assertions);
    });

    test('throws error when args cannot produce a valid PrimitiveKeyValuePair', () => {
      [
        { key: undefined, value: undefined },
        { key: 42, value },
        { key, value: undefined },
        { key, value: null },
        { key, value: {} },
        { key, value: [] },
      ].forEach(({ key, value }) => {
        const action = () => actual.set(key, value);
        const assertions = e => expect(e).toBeDefined();
        utils.expectError(action, assertions);
      });
    });
  });

  describe('toObject', () => {
    test('returns object with all map keys and values', () => {
      actual.set('string', 'foobar');
      actual.set('number', 42);
      actual.set('boolean', true);
      const obj = actual.toObject();
      expect(obj.string).toBe('foobar');
      expect(obj.number).toBe(42);
      expect(obj.boolean).toBe(true);
    });
  });
});
