// SHIFT METHOD
shift(){
  // first we check to see if list is empty
  if (!this.head) return undefined   // if head is null return undefined
  //if we have 2 or more items we have to set temp variable equal to head
  let temp = this.head
  //move head over to the next item
  this.head = this.head.next
  // break connection and set temp.next equal to null
  temp.next = null
  //decrement length by one
  this.length--
 //all code will run until last node have to set tail equal to null as length is 0 
  if (this.length === 0) {
    this.tail = null
  }

  return temp
}
// create list with 2 items 2, 1
let myLinkedList = new LinkedList (2)
myLinkedList.push(1)

// can shift list 3 times until undefined
myLinkedList.shift()