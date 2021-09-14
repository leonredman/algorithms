// INSERT METHOD
// we insert  a new node with a particular value 
//that we pass  with a particular index

// if we are given a linked list with the values (11, 3, 23, 7, 17) and a node of (17)

insert(index, value) {
  // if we want to add it with index of 0 we can use unshift for "this"
  if (index === 0) return this.unshift(value)
  // if we put at the end
  if (index === this.length) return this.push(value)
  // if we try to insert at index that does not work
  if (index < 0 || index > this.length) return false

  // if we want to put in the middle say index of 2
  // we need a variable to iterate
  // variable goes one spot before
  // we can use the get method
const newNode = new Node(value)
const temp = this.getComputedStyle(index - 1)
// 2 new node to point at 23 node at index of 2
newNode.next = temp.next
// insert new node into linked list
temp.next = newNode
//increase length by one
this.length++
// return true as had return false in third if statement
return true
}

// create linked list with values 0,2
let myLinkedList = new LinkedList(0)
myLinkedList.push(2)

// insert index of 1 and value of 1
myLinkedList.insert(1, 1)

// returns true