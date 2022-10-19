

const eqObjects = function(object1, object2) {

  let objectOneKeys = Object.keys(object1);
  let objectTwoKeys = Object.keys(object2);

  if (objectOneKeys.length !== objectTwoKeys.length) {
    return false;
  }

  for (let key of objectOneKeys) {
    if (object1[key] !== object2[key]) {
      return false;
    } else {
      return true;
    }
  }

};

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

//~~~ Test ~~~
const abc = {a: 1, b: 3,};
const cba = {b: 2, a: 1,};
assertObjectsEqual(abc,cba);