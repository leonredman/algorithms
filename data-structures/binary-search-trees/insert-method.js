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
  // add while loop 
  while(true) {
    if (newNode.value === temp.value) return undefined
  }

}