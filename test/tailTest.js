const assertEqual = require('../assertEqual')
const tail = require('../tail')


// Tests
const words = ['Cookies', 'Apples', 'Pumpkin'];
console.log(tail(words));
assertEqual(words.length, 3);

console.log(tail([1]));
console.log(tail([]));