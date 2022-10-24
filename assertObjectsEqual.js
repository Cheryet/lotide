
const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;
  let objectOneKeys = Object.keys(actual);
  let objectTwoKeys = Object.keys(expected);

  if (objectOneKeys.length !== objectTwoKeys.length) {
    console.log(`🚫 Assertion Failed 🚫: ${actual} !== ${expected}`);
    process.exit();
  }

  for (let key of objectOneKeys) {
    if (actual[key] !== expected[key]) {
      console.log(`🚫 Assertion Failed 🚫: ${inspect(actual)} !== ${inspect(expected)}`);
      process.exit();
    }
  }

  console.log(`✅ Assertion Passed ✅: ${inspect(actual)} === ${inspect(expected)}`);

};

module.exports = assertObjectsEqual;

// //~~~ Test ~~~
// const abc = {a: 1, b: 3,};
// const cba = {b: 2, a: 1,};
// assertObjectsEqual(abc,cba);