const randomstring = require('randomstring')
const MyPromise = require('@/promise');

test('can resolve primitive value', () => {
  const expectTo = randomstring.generate(7)
  const p = new MyPromise((resolve) => resolve(expectTo));
  return p.then(value => expect(value).toBe(expectTo))
});