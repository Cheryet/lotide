let assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log('✅ Assertion Passed ✅: [actual] === [expected]');
  } else {
    console.log("🚫 Assertion Failed 🚫: [actual] !== [expected]");
  }
  
};

//Test Code
assertEqual('lighthouse Labs', 'Bootcamp'); //FAIL
assertEqual(1, 1); //PASS
assertEqual('Lighthouse', 'Lighthouse'); //PASS
assertEqual('lighthouse', 'Lighthouse'); //FAIL
assertEqual(2, 2); //PASS
assertEqual(2, '2'); //FAIL