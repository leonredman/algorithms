// insert method solution

insert(value) {
  //create newNode
  const newNode = new Node(value)
  // if root === null then root = newNode (we have empty tree)
  if (this.root === null){
    this.root = newNode 
    return this
  }
  // add a variable
  let temp = this.root
  // add while loop  to check for nodes. First we check to see if node already exists then return undefined
  while(true) {
    if (newNode.value === temp.value) return undefined
    // if < left else > right - we check to see the value of the node and where it goes on tree
    // we then need to see if spot is open so we are nesting if statements
    // either spot is open and we are done or its not open
    if (newNode.value < temp.value) {
      if (temp.left === null) {    // if that spot is open 
        temp.left = newNode     // we make temp left the newNode
        return this   // we end the code and return this
      }
      temp = temp.left    // if not open we set temp = temp.left  to the next node and do whole process again
    } else {
      // else we check on the right
      //either there is a node right of the 47 or not, we do the same checks but reverse
      if (temp.right === null) {
        temp.right = newNode 
        return this
      }
      temp = temp.right 
    }
  }

}

// BST INSERT METHOD
insert(value) {
  const newNode = new Node(value)
  if (this.root === null) {
    this.root = newNode 
    return this
  }
  let temp = this.root
   while(true) {
    if (newNode.value === temp.value) return undefined
     if (newNode.value < temp.value) {
      if (temp.left === null) {    
        temp.left = newNode     
        return this   
      }
      temp = temp.left    
    } else {
      if (temp.right === null) {
        temp.right = newNode 
        return this
      }
      temp = temp.right 
    }
  }
 }
}

let myTree = new BST()
myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18) 
// where 27 should go  right is left null
myTree.insert(52)
myTree.insert(82)

// we can then run code and see that right is null in the open spot
// we can then insert and add the 27
myTree.insert(27)