const Header = require('../src/utilities/Header');
const PrimitiveKeyValuePair = require('../src/utilities/PrimitiveKeyValuePair');

describe('Header', () => {
  const expectedKey = 'foo';
  const expectedValue = 'bar';
  const actual = new Header(expectedKey, expectedValue);

  test('extends PrimitiveKeyValuePair', () => {
    expect(actual instanceof PrimitiveKeyValuePair).toBe(true);
  });
  
  test('constructor sets key', () => {
    expect(actual.key).toBe(expectedKey);
  });

  test('constructor sets value', () => {
    expect(actual.value).toBe(expectedValue);
  });
});
