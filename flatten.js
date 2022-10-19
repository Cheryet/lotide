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

let flatten = function(array){
  return array.flat();
}

//TEST

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]