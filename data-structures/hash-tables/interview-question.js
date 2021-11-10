// common interview question

// we have 2 arrays.  The first is [1,3,5]  and the second is [2,4,5]
// write a formula as to whether these 2 arrays have any items in common
// we can see that the last item are both number 5

// we could do this with for loops by looking at the first array, and then a nested for loop to look at the
// second array that checks to see if the items match
// so we would compare 1 to 2, 1 to 4, 1 to 5 - none match so we loop again
// we would complare 3 to 2, 3 to 4, 3 to 5 - none match loop again
// we would compare 5 to 2, 5 to 4 and 5 to 5 and we find a match
// We then return true
// this method uses nested for loops so is O(nSquared) - very inefficient

// code solution with nested arrays for i and j for array 1 and 2

function itemInCommon(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return tru;
    }
  }
  return false;
}

let array1 = [1, 3, 5];
let array2 = [2, 4, 5];

itemInCommon(array1, array2);


// MORE EFFICIENT WAY TO SOLVE IS WITH AN OBJECT
// first loop through the first array and add value to an object with a key value of true
// next we loop thru second array and say if element is in object as a key and that is an O(1) operation
// the number of operations is less as we went thru each array only once

{
  1: true,
  3: true,
  5: true
}