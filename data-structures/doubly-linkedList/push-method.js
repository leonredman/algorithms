//DOUBLY LINKED LIST PUSH METHOD


push(value) {
  //create new node and pass it a value
  const newNode = new Node (value)
  // if start with empty linked list
  if (!this.head) {
    this.head = newNode
    this.tail = newNode
  } else {
    // one or more items
    this.tail.next = newNode
    // only line that is different than single linked list
    // connect arrow from new node back to what had been last node in LinkedList
    newNode.prev = this.tail
    this.tail = newNode
  }
  // increase list by one
  this.length++
  // return list
  return this
}

//create list with numbers 1,2 
let myDoublyLInkedList = new DoublyLinkedList(1)
myDoublyLinkedList.push(2)

myDoublyLinkedList.push(3)
