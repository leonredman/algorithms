// CONSTRUCTOR FOR HASH TABLE AND HASH FUNCTION

// we have our address spaces 0 - 6 in a table, we get a more randomized distribution of items you
// add to the hash table if you have a prime number which is optimal (prime is 7 spaces)
// the constructor has an argument (size = 7) and this is the default. If you pass in a value of 11 you get an
// array with 7 items in it. If you pass in nothing you get an array with 7 items by default

//note we take the letter from each key  provided by the loop. Each letter has a numerical value for the characterCode and we multiply
//it by 23. prime number can use any and the modulus give the remainder when we divide by the datamap. length (address space) remainer will always be 0 - 6
// yeilds address space string goes into

class HashTable {
  constructor(size = 7) {
    // (size = 7) default argument
    this.dataMap = new Array(size); // new array of the size
  }
  // has function
  _hash(key) {
    // underscore tell developers this is method that should be  called by other methods. not called directly, we pass in a key like paint from a key value pair (paint: '50 gallons')
    let hash = 0; // declare a variable  we call it has and set equal to zero
    for (let i = 0; i < key.length; i++) {
      // run a for loop runs based on key length (paint - runs 5 times)
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length; // hash equals keycode *  23 (prime number) modulus remainder divided by map.length
    }
    return hash; // returns 0-6 for an address space if size = 7 as JS counts from 0
  }
}

// create hash table - can be run in devtools  to see constructor

let myHashTable = new HashTable();
myHashTable;
