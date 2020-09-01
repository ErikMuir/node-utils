import PrimitiveKeyValuePair from './PrimitiveKeyValuePair';

export default class PrimitiveMap extends Map {
  set(...args) {
    const pair = args[0] instanceof PrimitiveKeyValuePair
      ? args[0]
      : new PrimitiveKeyValuePair(args[0], args[1]);
    
    super.set(pair.key, pair.value);
  }

  toObject() {
    let obj = Object.create(null);
    for (let [k, v] of this) {
      obj[k] = v;
    }
    return obj;
  }
}
