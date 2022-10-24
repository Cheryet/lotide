//Creat your own map function

const map = function(array, callback) {
  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
// ~~~ Tests ~~~

// const words1 = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words1, word => word[0]);
// console.log(results1);

// const words2 = ['hello', 'corbin', 'cookies'];
// const results2 = map(words2, word => word.length);
// assertArraysEqual(results2, [5, 6, 7]);

// const results3 = map(words1, word => word.toUpperCase());
// assertArraysEqual(results3, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);