// BINARY SEARCH TREE CONSTRUCTOR

// we have a  single node with the value of 47 and 2 pointers left and right that point to nothing

{
  value: 47,
  left: null,
  right: null
}

// the constructor for the node will be like this

class Node {
  constructor(value) {
    this.value = value 
    this.left = null 
    this.right = null 
  }
}

class BST {
  constructor(value){
    const newNode = new Node(value) 
  }
}

// In a tree since these are objects, they must all have something pointing to them
// or they get garbage collected.   In a linked list we have head pointing to the first node 
// similarly in a BST we have something pointed to the first item and its called ROOT

// working constructor
class BST {
  constructor(value){
    const newNode = new Node(value)
    this.root = newNode 
  }
}

//we dont have to create the node at the time we create the BST
// we can just create the structure for the tree and not create the first node

// we can have the instructor simply be

class BST {
  constructor(value){
    this.root = null
  }
}

// our complete code will be like this:

// node constructor
class Node {
  constructor(value){
    this.value = value 
    this.left = null
    this.right = null
  }
}
// new tree constructor
class BST {
  constructor() {
    this.root = null
  }
}
// create our new tree and will be value of null
let myTree = new BST()
myTree