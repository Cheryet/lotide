
// Tests

const assert = require('chai').assert;
const tail = require('../tail')

describe('#Tail', () => {
  it("returns ['Apples', 'Pumpkin'] for ['Cookies', 'Apples', 'Pumpkin']", () => {

    const words = ['Cookies', 'Apples', 'Pumpkin'];
    assert.deepEqual(tail(words), ['Apples', 'Pumpkin']);
  });

  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {

    const nums = [1, 2, 3, 4];
    assert.deepEqual(tail(nums), [ 2, 3, 4 ]);
  });

  it("returns [] for [1]", () => {

    assert.deepEqual(tail([1]), []);
  });
});
