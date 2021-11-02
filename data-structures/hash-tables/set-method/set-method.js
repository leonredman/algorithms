// SET METHOD for hash tables  
// we can do a set method: set('bolts', 1400).  The key is run throught the hash function and produces the number 4
// It will also produce our array [ ['bolts', 1400] ] and place it in the 4 location

// the set method get passed a key and a value
set(key, value) {
  // first we find the index where we will store key value pair
  // we have a variable we call index and set equal to this.hash and pass it the key, then gets run thru hash method and produces number 4 index
  let index = this._hash(key)
  // we build the empty array that we will push key value pairs into
  // we only do this step if there is not an empty array in there so we wrap in an if statement
  if(!this.dataMap[index]) {
    this.dataMap[index] = []  
  }
 // we push in our key value pair
 this.dataMap[index].push([key, value])
 return this

}
// create an empty hash table
let myHashTable = new HastTable()
myHashTable
// set out values
myHashTable.set('lumber', 70)
myHashTable.set('washers', 50)
myHashTable.set('bolts', 1400)

// we have 2 at the index of 4 and one at index of 6 if we run in dev tools console