// BUBBLE SORT METHOD

// we are going to do a for loop nested inside another for loop

function bubbleSort(array) {
  // i equal to array length minus one, then we decrement each time (5 times for a 6 element array)
  for (let i = array.length - 1; i > 0; i--) {
    // second for loop is while j is less than i. This makes it go through 4, then 3 ect as J is less than I
    for (let j = 0; j < i; j++) {
      // for comparisons if item in location j is greater than the item at location j plus one (next index in array) then we switch them
      if (array[j] > array[j + 1]) {
        // to switch items we create a variable and set it equal to value at location j
        let temp = array[j];
        // we then set location j in the array equal to location j + 1 (the 2 in this example) This removed the 4
        array[j] = array[j + 1];
        // we set the location j plus one equal to the temp value (4)
        array[j + 1] = temp;
      }
    }
  }
  // we then return the array when all loops are done
  return array;
}

bubbleSort([4, 2, 6, 5, 1, 3]);

// yeild {1,2,3,4,5,6}
