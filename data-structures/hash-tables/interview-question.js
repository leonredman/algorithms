// common interview question

// we have 2 arrays.  The first is [1,3,5]  and the second is [2,4,5]
// write a formula as to whether these 2 arrays have any items in common
// we can see that the last item are both number 5

// we could do this with for loops by looking at the first array, and then a nested for loop to look at the
// second array that checks to see if the items match with the item from the first array
// so we would compare 1 to 2, 1 to 4, 1 to 5 - none match so we loop again
// we would compare 3 to 2, 3 to 4, 3 to 5 - none match loop again
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
// first loop through the first array and add value to an object with a key value of 'true'
// next we loop thru second array and see if element is in object as a key and that is an O(1) operation
// If it is we return true
// the number of operations is far less as we went thru each array only one time  which is O(2n)
// we drop the constants (the 2) which simplifies to O(n)

// the question is more about can you write code that is efficient than can you write code that works
 // the loop will create an object like this:
{
  1: true,
  3: true,
  5: true
}

// CODE SOLUTION 

function itemInCommon (arr1, arr2) {
  // create empty object
  let obj = {}
  // loop thru array 1 and add each value of the array to the object with a key of true for all items in array
    for (let i = 0; i < arr1.length; i++) {
      obj[arr1[i]] = true
    }
    // second for loop after first loop not nested inside
    // we check if elememt object has element from second array, if so we return true - this is O(1)operation
    for (let j = 0; j < arr2.length; j++) {
      if (obj[arr2[j]]) return true
    }
    // if it does not contain element return false
    return false
  }

let array1 = [1, 3, 5]
let array2 = [2, 4, 5]

itemInCommon(array1, array2)

// yeild is true as there is a match