const assertArraysEqual = require('../assertArraysEqual')


//Tests

assertArraysEqual([1, 1, 2, 3,], [1, 1, 2, 3,]); // PASS
assertArraysEqual([1, 1, 2, 3,], [1, 2, 3, 4]); //FAIL
assertArraysEqual([], [1, 2]); //FAIL - Invaild Array