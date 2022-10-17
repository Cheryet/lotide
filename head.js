let assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed ✅: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed 🚫: ${actual} !== ${expected}`);
  }
  
};

let head = function(arr) {
  return arr[0];
};

//TESTS

assertEqual(head([5,6,7]), 5); //PASS
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //PASS
assertEqual(head([]), 5); //FAIL
assertEqual(head([1]), 1); //PASS