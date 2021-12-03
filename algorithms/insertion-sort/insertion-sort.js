// INSERTION SORT METHOD

// we have an array [1,2,4,3,5,6]

function insertionSort(array) {
  // declare a variable
  let temp;
  // we have a for loop, we set i equal to one (the second index of array)
  for (let i = 1; i < array.length; i++) {
    // we set temp equal to value at location of i ( so whatever value we are comparing is i)
    temp = array[i];
    // we add our second for loop that compares everyting before the value of i
    // we use var as we need to use this outside of the for loop, we cannot use 'let'
    // j is i minus one, ( the item before it)
    for (var j = i - 1; array[j] > temp; j--) {
      array[j + 1] = array[j];
    }
    //drops item back into array
    array[j + 1] = temp;
  }
  return array;
}

insertionSort([4, 2, 6, 5, 1, 3]);
