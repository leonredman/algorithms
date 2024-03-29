// Get Method

// we start by getting a particular key
//we have to get something by the index

get(key){
  // we have a variable called index and we use the hash method to determine index and pass it the key, this calculates what the address is
 let index = this._hash(key)
 // determine if anything is at that address, if not return undefined
 if(this.dataMap [index]) {
// if something there use loop to find
for(let i = 0; i < this.dataMap[index].length; i++) {
if (this.dataMap[index][i][0] === key){
  return this.dataMap[index][i][1]
    }
  }
 }
 // if nothing then returns undefined
 return undefined
}

let myHashTable = new HashTable()
myHashTable.set('bolts', 1400)
myHashTable.set('washers', 50)

myHashTable.get('bolts')
// yeild is 1400
myHashTable.get('washers')
// yeild is 50
myHashTable.get('lumber')
// yeild is undefined