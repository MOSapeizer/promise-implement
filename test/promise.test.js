const randomstring = require('randomstring')
const MyPromise = require('@/promise');

describe('簡易版的 Promise 測試', () => {

  test('可以 resolve primitive value', () => {

    expect.assertions(1);

    const expectTo = randomstring.generate(7)
    const p = new MyPromise((resolve) => resolve(expectTo));
    return p.then(value => expect(value).toBe(expectTo))
  });

  test('可以 reject primitive value', () => {

    expect.assertions(1);

    const expectTo = randomstring.generate(7)
    const p = new MyPromise((resolve, reject) => reject(expectTo));
    return p.catch(value => expect(value).toBe(expectTo))
  });

  test('可以 resolve async value', () => {

    expect.assertions(1);

    const expectTo = randomstring.generate(7)
    const p = new MyPromise((resolve, reject) => {
      setTimeout(() => resolve(expectTo), 0)
    });

    return p.then(value => expect(value).toBe(expectTo))
  });

  test('可以 resolve Promises', () => {

    expect.assertions(1);

    const promiseTo = randomstring.generate(7)
    const p = new MyPromise(resolve => resolve());

    const p2 = new MyPromise(resolve => resolve(promiseTo))

    return p
      .then(() => p2)
      .then(value => expect(value).toBe(promiseTo))
  });

  test('值可以穿透空白的 then 或 catch', () => {

    expect.assertions(1);

    return new MyPromise(resolve=>resolve(8))
      .then()
      .catch()
      .then(value => expect(value).toBe(8))
  });

})
