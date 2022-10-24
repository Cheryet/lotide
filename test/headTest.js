const head = require('../head')
const assertEqual = require('../assertEqual')

//TESTS

assertEqual(head([]), 5); //FAIL
assertEqual(head([5,6,7]), 5); //PASS
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //PASS
assertEqual(head([1]), 1); //PASS