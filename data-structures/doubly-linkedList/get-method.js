// Get a Node at a particular index
// in a doubly linked list we can use node efficiecy.  If we have 4 nodes for example
// and we want to get the third node in the list. Instad of starting at the head and 
// iterating (looping) thru the list twice. We can start at the tail and loop thru once.


get(index) {
  // start with linked list, check index conditions, see if either conditions are true
  if (index <0 || index >= this.length) return undefined
  // add temp variable
  let temp = this.head
  // to see index efficiency only want to use if we are in the first half of the list
  // diff with doubly linked list we can start at tail and work back to index if faster
   // only use this loop if in first half of list
  if (index < this.length/2){
  for (let i =0; i < index; i++){ 
  // moves forward
  temp = temp.next
    }
  } else {   // diff for loop that goes the other way - sets tail as temp and loop back
    temp = this.tail
    for (let i = this.length - 1; i > index; i--) {
      //moves backward with prev arrows instead of next arrows
      temp = temp.prev
    }
  }
  return temp
  }
}

let myDoublyLinkedList = new DoublyLinkedList(0)
myDoublyLinkedList.push(1)
myDoublyLinkedList.push(2)
myDoublyLinkedList.push(3)