
let without = function(source, itemsToRemove) {

  let newArr = [];

  for (let i = 0; i < source.length; i++) {
    const found = itemsToRemove.includes(source[i]);
      
    if (!found) {
      newArr.push(source[i]);
    }
  }
  console.log(newArr);
};

module.exports = without;

//Tests
// without([1, 2, 3], [1]);
// without(["1", "2", "3"], [1, 2, "3"]); // ['1', '2']
// without(['1', '1', '2', '3'], ['2', '3']);

// const words = ['Corbin', 'Cookies', 'Happy'];
// without(words, ['Cookies']);
// assertArraysEqual(words, ['Corbin', 'Cookies', 'Happy']);