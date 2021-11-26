// CHALLENGE: Rotate the Array by One  - ARRAYS / DATA_STRUCTURES


// Given an array, rotate the values clockwise by one (the last value is sent to the first position).

// Check the examples for a better understanding.

// Examples
// rotateByOne([1, 2, 3, 4, 5]) ➞ [5, 1, 2, 3, 4]

// rotateByOne([6, 5, 8, 9, 7]) ➞ [7, 6, 5, 8, 9]

// rotateByOne([20, 15, 26, 8, 4]) ➞ [4, 20, 15, 26, 8]

// we are given an array

// let arr = [1, 2, 3, 4, 5];

// console.log(arr);
// console.log(arr.pop());
// item = arr.pop();
// console.log(item);
// console.log(arr);
// arr.unshift(item);
// console.log(arr);

// Solution as a function

function rotateByOne(names) { 
    names = ["John", "Mike", "Susan", "Sarah", "James"];
    let lastOne = names.pop();
    names.unshift(lastOne)
   // return names;
    console.log(names)
};	

rotateByOne();


//--------------------------------------------------
// CHALLENGE: Rotate the Array by One  - ARRAYS / DATA_STRUCTURES


// Given an array, rotate the values clockwise by one (the last value is sent to the first position).

// Check the examples for a better understanding.

// we are given an array
// var arr = [1, 2, 3, 4, 5];

// Examples
// rotateByOne([1, 2, 3, 4, 5]) ➞ [5, 1, 2, 3, 4]

// rotateByOne([6, 5, 8, 9, 7]) ➞ [7, 6, 5, 8, 9]

// rotateByOne([20, 15, 26, 8, 4]) ➞ [4, 20, 15, 26, 8]


// SOLUTION


// console.log(arr);
// console.log(arr.pop());
// item = arr.pop();
// console.log(item);
// console.log(arr);
// arr.unshift(item);
// console.log(arr)

// function rotateByOne(arr) {
     
//    //console.log(arr.pop());
//   // console.log(movingItem);
//     // arr.unshift(movingItem);
// };	

// rotateByOne();


function rotateByOne(arr) {
    var arr = [1, 2, 3, 4, 5];
        // arr must be defined inside the scope of the function or returns undefined outside Edabit
    let lastOne=arr.pop();
    arr.unshift(lastOne);
    return arr;
  };




  // Given an array, rotates the values clockwise by one (the last value is sent to the first position).

// Check the examples for a better understanding.

// Examples
// rotateByOne([1, 2, 3, 4, 5]) ➞ [5, 1, 2, 3, 4]

// rotateByOne([6, 5, 8, 9, 7]) ➞ [7, 6, 5, 8, 9]

// rotateByOne([20, 15, 26, 8, 4]) ➞ [4, 20, 15, 26, 8]

// we are given an array
// var arr = [1, 2, 3, 4, 5]


// function rotateByOne(arr) {
//     return (
//     movingItem = arr.pop;
//      arr.unshift(movingItem));
// }	

// //rotate the values clockwise by one

// //select last item of array
// movingItem = arr.pop;


// // add it to the front of the array
// arr.unshift(movingItem);

// // delete the last item of the array

// rotateByOne();