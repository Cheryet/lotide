const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual')


//~~~~ TESTS ~~~~

//Odd Number of Elements
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

//Even Number of Elements
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

//Assertions
const myArray = [1, 2, 3, 4, 5, 6]; // => [3, 4]
assertArraysEqual([3, 4], middle(myArray));