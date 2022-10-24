//Return a slice of an array

const takeUntil = function(array, callback) {
  for (let element of array) {
    if (callback(element)) {
      return array.slice(0, array.indexOf(element));
    }
  }
};

module.exports = takeUntil;
