// PUSH METHOD FOR STACK

// We are renaming an unshift method to push because this is a stack

// first step is to create a new node
push (value) {
  const newNode = new Node(value)

//figure out if this stack has items or empty
if (this.length === 0) {
  this.top = newNode
} else {
  newNode.next = this.top
  this.top = newNode
 }
 this.length++
 return this
}


let myStack = new Stack(7)
myStack.push(23)
myStack.push(3)
myStack.push(11)