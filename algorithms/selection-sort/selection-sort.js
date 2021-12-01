//SELECTION SORT METHOD

//we create a function and pass it an array
function selectionSort(array) {
  //we pass it a variable named min
  let min;
  // we pass in a for loop and have it run the length minus one, the length of the array - 1
  for (let i = 0; i < array.length - 1; i++) {
    // we set min = i, this is really setting min = 0  (the first index)
    min = i;
    // we nest a second for loop to complare the index and call it j and set it equal to i plus one (  the actual index location 1 in the array)
    for (let j = i + 1; j < array.length; J++) {
      //compare 2 elements - if item at location of j is less than item at the index of min set equal to j
      if (array[j] < array[min]) min = j;
    }
    // note if we compare and nothing is lower min is '1' and (i) is '1'
    // we dont want to run code to swap i so we wrap in if statement. if i and min are not equal run code
    if (i !== min) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  // return the array
  return array;
}

selectionSort([4, 2, 6, 5, 1, 3]);

// yeild [1,2,3,4,5,6]
