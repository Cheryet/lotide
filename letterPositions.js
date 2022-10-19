let assertArraysEqual = function(arrOne, arrTwo) {

  //Confirms array.length is greater than 0
  // if (arrOne.length === 0 || arrTwo.length === 0) {
  //   console.log('Please enter a vaild Array');
  //   process.exit();
  // }

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


let letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  console.log(`The string '${sentence}' contains the following letters at the provided indices`);
  return results;
};

// ~~~ Tests ~~~

console.log(letterPositions('lighthouse'));
console.log(letterPositions('lighthouse in the house'));
assertArraysEqual(letterPositions("hello").e, [1]);