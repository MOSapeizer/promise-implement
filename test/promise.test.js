const MyPromise = require('@/promise');

test('can resolve primitive value', () => {
  const expectTo = 123
  const p = new MyPromise((resolve) => resolve(expectTo));
  return p.then(value => expect(value).toBe(expectTo))
});