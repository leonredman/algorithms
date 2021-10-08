// ENQUEUE METHOD
// This is when we add an element to the line

// our line will look like a linked list and we will be adding a node to the end
// example our queue values are  11,3,23  and we will add 7

//we can borrow heavily from the push method for a linked List.

//enqueue method
enqueue(value) {
  // first we create a node
  const newNode = new Node(value)
  // check if we have an empty queue, then we set first and last equal to new node
  if (this.length === 0) {
    this.first = newNode
    this.last = newNode

  } else {      // if we have one or more items
    this.last.next = newNode   // makes pointer connect to new node to add in queue
    this.last = newNode        // makes last point to new node and add it in

  }
 this.length++  // increase the length by one
 return this    // returns the queue
}

//build a queue and then add 7

let myQueue = new Queue(11)
myQueue.enqueue(3)
myQueue.enqueue(23)

myQueue.enqueue(7)