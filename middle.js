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

let middle = function(array) {

  let middleIndex = array.length / 2;

  //Checks if array is odd or even length
  if (middleIndex % 1 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    return array[Math.floor(middleIndex)];
  }
};

module.exports = middle;



