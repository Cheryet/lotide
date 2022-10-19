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
  console.log('Middle Index = ', middleIndex);

  //Checks if array is odd or even length
  if (middleIndex % 1 === 0) {
    console.log(array[middleIndex - 1], array[middleIndex]);
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    console.log(array[Math.floor(middleIndex)]);
    return array[Math.floor(middleIndex)];
  }
};



//~~~~ TESTS ~~~~

//Odd Number of Elements
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

//Even Number of Elements
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

//Assertions
const myArray = [1, 2, 3, 4, 5, 6]; // => [3, 4]
assertArraysEqual([3, 4], middle(myArray));