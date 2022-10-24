const assertEqual = require('../assertEqual')

//Test Code
assertEqual('lighthouse Labs', 'Bootcamp'); //FAIL
assertEqual('lighthouse', 'Lighthouse'); //FAIL
assertEqual(2, '2'); //FAIL
assertEqual(1, 1); //PASS
assertEqual('Lighthouse', 'Lighthouse'); //PASS
assertEqual(2, 2); //PASS