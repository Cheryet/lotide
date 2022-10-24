//Return a slice of an array

const takeUntil = function(array, callback) {
  for (let element of array) {
    if (callback(element)) {
      return array.slice(0, array.indexOf(element));
    }
  }
};

module.exports = takeUntil;
// ~~~ Tests ~~~

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// console.log('---');

// const results3 = takeUntil(data1, x => x === 7);
// assertArraysEqual(results3, [1, 2, 5]);

