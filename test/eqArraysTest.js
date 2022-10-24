const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//TESTS

console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false
console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(['Hello', 'Goodbye', 'greetings'], ['Hello', 'Goodbye', 'greetings'])) // => true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS