let assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed ✅: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed 🚫: ${actual} !== ${expected}`);
  }
  
};

let eqArrays = function(arrOne, arrTwo) {
  //Pass/Fail counters
  let pass = 0;
  let fail = 0;

  for (let i = 0; i < arrOne.length; i++){
    if (arrOne[i] === arrTwo[i]){
      pass++
    } else {
      fail++
    }
  }

  if (fail > 0){
    //console.log(false)
    return false
  } else {
    //console.log(true)
    return true;
  }
}

//TESTS

// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

//eqArrays(['Hello', 'Goodbye', 'greetings'], ['Hello', 'Goodbye', 'greetings']) // => true

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS



