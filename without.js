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
    console.log(`🚫 Assertion Failed 🚫: ${arrOne} !== ${arrTwo}`);
  } else {
    console.log(`✅ Assertion Passed ✅: ${arrOne} === ${arrTwo}`);
  }
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

let without = function(source, itemsToRemove) {

  let newArr = [];

  for (let i = 0; i < source.length; i++) {
    const found = itemsToRemove.includes(source[i]);
      
    if (!found) {
      newArr.push(source[i]);
    }
  }
  console.log(newArr);
};

//Tests
without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]); // ['1', '2']
without(['1', '1', '2', '3'], ['2', '3']);

const words = ['Corbin', 'Cookies', 'Happy'];
without(words, ['Cookies']);
assertArraysEqual(words, ['Corbin', 'Cookies', 'Happy']);