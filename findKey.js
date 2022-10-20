let assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed ✅: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed 🚫: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

// ~~~ Tests ~~~

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
assertEqual('noma', result1);

console.log('~~~~~~~~~~~~~~~~~~');

const myObj = { b: 2, c: 3, d: 4};
const result2 = findKey(myObj, x => x % 2 === 0);
assertEqual(result2, 'b');


