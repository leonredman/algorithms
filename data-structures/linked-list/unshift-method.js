// UNSHIFT METHOD 


unshift (value) {
  const newNode = new Node(value)
  // First we always add new node if node is empty - so check first
  if (!this.head) {
    this.head = newNode
    this.tail = newNode
  
  } else {   // else we have a list already and we are adding a new node to it
    newNode.next = this.head     // .next points the new node to the first node (current head)
    this.head = newNode          // this moves head to point to the first node 
  }
  this.lenght++   // increases the list length by one
  return this     // returns the entire new linked list

 }

}
// create a linked list with the values 11,3,23,7
let myLinkedList = new LinkedList(11)
myLinkedList.push (3)
myLinkedList.push (23)
myLinkedList.push (7)

myLinkedList.unshift(4)   // this code will create linked list and then unshift(add the value of 4)