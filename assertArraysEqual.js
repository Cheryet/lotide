let eqArrays = function(arrOne, arrTwo) {
  //Fail counters
  let fail = 0;

  if (arrOne.length === 0 || arrTwo.length === 0) {
    console.log('Please enter a vaild Array');
    process.exit();
  }


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

eqArrays([1, 1, 2, 3,], [1, 1, 2, 3,]); // PASS
eqArrays([1, 1, 2, 3,], [1, 2, 3, 4]); //FAIL
eqArrays([], [1, 2]); //FAIL