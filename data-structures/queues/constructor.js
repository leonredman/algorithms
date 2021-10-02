//CONSTRUCTOR FOR QUEUES

// first we need to construct a node, this will be identical to a linked list node

{
  value: 7,
  next: null
}

// we create a node that is identical to a linkedlist like this
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
// we create our constructor
// instead of head and tail, we call it first and last in a queue
class Queue {
  constructor(value) {
    const newNode = new Node(value)
    this.first = newNode
    this.last = newNode
    this.length = 1
  }
}

//we create a node with value of 4  and can run it in the console yeilds node with value of 4
let myQueue = new Queue(4)
myQueue 