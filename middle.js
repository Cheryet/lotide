let middle = function(array) {

  let middleIndex = array.length / 2;

  //Checks if array is odd or even length
  if (middleIndex % 1 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    return array[Math.floor(middleIndex)];
  }
};

module.exports = middle;



