
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
