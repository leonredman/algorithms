// STACKS - CONSTRUCTOR

// to create a stack we create a node and its identical to a linked list node
// this is our node
{
  value:11,
  next: null
}

// so node class and constructor are the same also (identical to linked list)

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class stack {
  constructor(value) {
    const newNode = new Node(value)
    this.top = newNode
// this.bottom = newNode   - we dont need bottom
    this.length = 1   // we could use height but we say length
  }
}

