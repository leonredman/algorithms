//doubly linked list unshift method

// we start with unshift and pass it a value
unshift(value) {
 // create new Node with that value
  const newNode = new Node(value)
  // we start with adding that to an empty linked list where we set head and tail equal to that node
  if(this.length === 0){
    this.head = newNode
    this.tail = newNode
  } else {
    //there are more than one
    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
  }
// increase length by one
this.length++
//return list
return this
}

//create list with values of 2,3
let myDoublyLinkedList = new DoublyLinkedList(2)
myDoublyLinkedList.push(3)

myDoublyLinkedList.unshift(1)