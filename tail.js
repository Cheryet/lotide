//CODE

let tail = function(arr) {

  if (arr.length > 1){
    let newArr = arr.slice(1);
    return newArr;
  } else {
    newArr = []
    return newArr;
  }
};

module.exports = tail;



