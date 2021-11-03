// KEYS Method - This method takes all the keys in a hash table and returns them as an array 
// in order to return all the keys we need a loop that starts at beginning 
// we find the address that has items and then has another loop

keys (){
  let allKeys = []
  // first for loop thru the length of the array
  for (let i = 0; i < this.dataMap.length; i++) {
    // second for loop wrapped with if statement, runs only if something is at the address
    if(this.dataMap[i]){
      for(let j = 0; j < this.dataMap[i].length; j++) {
        // push items into all keys
        allKeys.push(this.dataMap[i][j][0])

     }
    }
  }
  // return the array
  return allKeys
}
// creates table with 2 items
let myHashTable = new HashTable()
myHashTable.set('bolts', 1400)
myHashTable.set('washers' 50)

myHashTable.keys()
// yeilds an array with bolts and washers