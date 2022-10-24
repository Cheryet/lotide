
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

module.exports = countLetters;

// console.log(countLetters('Lighthouse Labs'));
// console.log(countLetters('LlLlLl'));
