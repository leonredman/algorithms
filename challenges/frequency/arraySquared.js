//  Write a function called 'same' which accepts two arrays.
// The function should return true if every value in the array
// has its corresponding value squared in the second array.
//The frequency of the values must be the same.

//example
same ([1,2,3], [4,1,9])  // true
same([1,2,3], [1,9])  // false -  number of values is not same
same([1,2,1], [4,4,1]) // false - must be same frequency


//nieve solution  0(n) squared - nested loop (quadratic relationship)
//avoid whenever possible as time grows
// loops over the first array and then check with a subloop over the second array

function same(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
};

   same( [1,2,3,2], [9,1,4,4]);



//explanation:

// first we can compare the 2 arrays to make sure they are the same length
// if 2 arrays have different lenghts we are done

function same(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return false;
    }

// next we loop over the  array and pass in the square of each value
// we ask what is the index of 1 squared in array 2
// we ask if  correct index is negative one meaning its not in their, return false
//
for(let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if(correctIndex === -1) {
        return false;
    }

// we then call arr2.splice which will remove the number found from the array using splice 
// and the loop runs again

//splice is needed to make sure the frequency stays the same

// REFACTORED SOLUTION -- BETTER  O(n)
// we loop over each array seperately once
// 2 loops is better than 2 nested loops
// n =1000 and n2 = 1000 it would be 1000 x 1000 = 10,000
// instead n=1000 and n2 = 1000  n1+n2 = 20000