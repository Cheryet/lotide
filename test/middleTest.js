const middle = require('../middle');
const { assert } = require('chai');


//~~~~ TESTS ~~~~

describe('#Middle', () => {
  it("returns 2 from [1, 2, 3]", () => {
    assert.equal(middle([1, 2, 3]), 2)
  });

  it("returns 3 from [1, 2, 3, 4, 5]", () => {
    assert.equal(middle([1, 2, 3, 4, 5]), 3)
  });

  it("returns [2, 3] from [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [ 2, 3 ])
  });

  it("returns [3, 4] from myArray", () => {

    const myArray = [1, 2, 3, 4, 5, 6]; // => [3, 4]
    assert.deepEqual(middle(myArray), [ 3, 4 ])
  });

})

