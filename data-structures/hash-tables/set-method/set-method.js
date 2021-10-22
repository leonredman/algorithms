// SET METHOD for hash tables

set(key, value) {
  // first we find the index where we will store key value pair
  let index = this._hash(key)
  // we build the empty array that we will push key value pairs into
  // we only do this step if there is not an empty array in there
  if(!this.dataMap[index]) {
    this.dataMap[index] = []  
  }
 // push in our key value pair
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