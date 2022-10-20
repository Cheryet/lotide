//Creat your own map function

const map = function(array, callback) {
  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

let assertArraysEqual = function(arrOne, arrTwo) {

  //Confirms array.length is greater than 0
  if (arrOne.length === 0 || arrTwo.length === 0) {
    console.log('Please enter a vaild Array');
    process.exit();
  }

  //Fail counters
  let fail = 0;

  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      fail++;
    }
  }

  if (fail > 0) {
    console.log(`🚫 Assertion Failed 🚫: ${arrOne} !== ${arrTwo}`);
  } else {
    console.log(`✅ Assertion Passed ✅: ${arrOne} === ${arrTwo}`);
  }
};

let eqArrays = function(arrOne, arrTwo) {

  //Confirms array.length is greater than 0
  if (arrOne.length === 0 || arrTwo.length === 0) {
    console.log('Please enter a vaild Array');
    process.exit();
  }
  
  //Fail counters
  let fail = 0;

  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      fail++;
    }
  }

  if (fail > 0) {
    return false;
  } else {
    return true;
  }
};

// ~~~ Tests ~~~

const words1 = ["ground", "control", "to", "major", "tom"];
const results1 = map(words1, word => word[0]);
console.log(results1);

const words2 = ['hello', 'corbin', 'cookies'];
const results2 = map(words2, word => word.length);
assertArraysEqual(results2, [5, 6, 7]);

const results3 = map(words1, word => word.toUpperCase());
assertArraysEqual(results3, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);