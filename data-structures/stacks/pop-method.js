// STACK POP METHOD

// we are going to pop (remove) the first item at the top and move top down to the next item in the stack.

pop() {
  // first we determine if it is an empty stack or has items in it
  if(this.length === 0 ) return undefined
  // we then need a variable to point to the item we are going to return
  let temp = this.top
  // we move top down  to the next node
  this.top = this.top.next
  //we remove the first node by setting its pointer equal to null (brakes it off from the stack)
  this.temp.next = null

  // we decrement the list by one
  this.length--
  // we then return the node we poppped from the stack which is what we set to temp
  return temp

}

// we create a stack with a value of 7 and push 3 values to it, then use the pop method

let myStack = new Stack(7)
myStack.push(23)
myStack.push(3)
myStack.push(11)

// if we run pop it will remove a node.
myStack.pop()