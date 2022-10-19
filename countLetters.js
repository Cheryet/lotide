let assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed ✅: ${actual} === ${expected}`);
  } else {
    console.log(`🚫 Assertion Failed 🚫: ${actual} !== ${expected}`);
  }
  
};

const countLetters = function(string) {

  let results = {};

  for (let letter of string) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  console.log(`The string '${string}' has the following letters:`);
  return results;


};

console.log(countLetters('Lighthouse Labs'));
console.log(countLetters('LlLlLl'));
