let assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed ✅: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed 🚫: ${actual} !== ${expected}`);
  }
  
};

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

//~~~ Tests ~~~
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);


const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const abcc = {a: 1, b: 2, c: 3,};
const cba = {c: 3, b: 2, a: 1,};
assertEqual(eqObjects(abcc, cba), true);