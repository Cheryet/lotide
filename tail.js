//CODE

let tail = function(arr) {

  if (arr.length > 1){
    let newArr = arr.slice(1);
    return newArr;
  } else {
    return arr[0];
  }
};

module.exports = tail;



