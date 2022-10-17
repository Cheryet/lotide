//CODE

let assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed ✅: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed 🚫: ${actual} !== ${expected}`);
  }
  
};

let tail = function(arr) {
  let newArr = arr.slice(1);
  return newArr;
};

//TESTS

const words = ['Cookies', 'Apples', 'Pumpkin'];
console.log(tail(words));
assertEqual(words.length, 3);

console.log(tail([1]));
console.log(tail([]));