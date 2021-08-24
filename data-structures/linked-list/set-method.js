// SET METHOD
// similar to GET
// go to index and change a value - can use other methods inside set method

//itereate thru list and change something

set(index, value) {
  // we need to iterate through list and check if undefined or set to index so use Get method
  let temp = this.get(index)
  // if temp is pointing to a node and not undefined we set 'temp.value' = value ( which we are passing in)
  if (temp) {
    temp.value = value 
    // need to stop code so we return true
    return true
  }
  // if undefined we return false
  return false
}

// creates link list
let myLinkedList = new LinkedList (11)
myLinkedList.push(3)
myLinkedList.push(23)
myLinkedList.push(7)

 myLinkedList.set(1, 4)
 //returns true changes value idex of 1 to value of 4

