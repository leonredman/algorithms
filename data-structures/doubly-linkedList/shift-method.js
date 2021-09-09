// shift method - 
//remove item from beginnning of list 

// edge case of one item
// no items

shift() {
  if (this.length == 0) return undefined
  let temp = this.head
  if ( this.length ===1) {
    this.head = null
    this.tail = null
  } elses {
    this.head = this.head.next
    head.prev = null
    temp.next = null
  }
  this.length--
  return temp
}
// create list
let myDoublyLinkedList = new DoublyLinkedList(2)
myDoublyLinkedList.push (1)

//returns length of one
myDoublyLinkedList.shift()