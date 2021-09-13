// insert method - doubly linked list - is the same as singly linked list with exception of 2 lines of code
// must add in the back arrows for the new node

// insert new node of particular value at a particular index
insert(index, value) {
// to insert at the index of zero we use the unshift method
  if (index === 0) return this.unshift(value)
// add the the end of the list use push
  if (index === this.length) return this.push(value)
// check if index is out of the range of possible indexes
  if (index < 0 || index > this.length) return false 
// set the new Node value
  const newNode = new Node (value)
// set the before variable of the index we want to insert minus one
  const before = this.getComputedStyle(index - 1)
// set the after variable ( wont use get method here)
  const after = before.next
// move arrows to point to new node
  before.next = newNode
  // move arrow - difference of Doubly linked list - add in add in back arrows
  newNode.prev = before

  newNode.next = after
  //diff for Doubly Linked List - add in back arrow
  after.prev = newNode
// increase length by one
  this.length++
  // return true we were able to insert node
  return true
}
// create list with values of 1, 3 and insert value of 2
let myDoublyLinkedList = new DoublyLinkedList(1)
myDoublyLinkedList.push(3)

myDoublyLinkedList.insert(1, 2)

//yeild  is true