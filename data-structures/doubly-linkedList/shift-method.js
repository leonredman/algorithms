// shift method - DoublyLinked List
//This method removes an item from beginnning of list 
// The - edge cases can bor  for  one item, and no items

shift() {
  // start as if we have an empty list 
  if (this.length == 0) return undefined
  // then if  we have one item
  let temp = this.head
  // if we remove the one item we have to set head and tail to null
  if ( this.length ===1) {
    this.head = null
    this.tail = null
  } elses {     // else if there is two or more items
    this.head = this.head.next  // first we move head over one
    // then we remove the first item breaking off head and tail
    head.prev = null
    temp.next = null
  }
  // we decrement the list
  this.length--
  // we return temp
  return temp
}
// create list
let myDoublyLinkedList = new DoublyLinkedList(2)
myDoublyLinkedList.push (1)

//returns length of one
myDoublyLinkedList.shift()