// node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// linked list class and the constructor
class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  // Our push method we created (see descrip below)
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // if statement checks to see if list is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      // insert node if list is not empty
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++; // increase length by one
    return this; // return entire linked list (myLinkedList)
  }
}
//create link list with value of 7 and push to linked list with a value of 4
let myLinkedList = new LinkedList(7);
myLinkedList.push(4);


// PUSH
// Steps to add a node to  existing linked list
// have a linked list with  4 items,
// 11, 3, 23, 7 
// 11 is the head
// 7 is the tail
// step 1 create a new node  4
// we bring node in from right
// so we would have last node (7) point to new node (4) and then have tail point to (4)

// Edge case there are no nodes yet

// head and tail point to nothing


//start with push and pass it a value to create a new node
push(value) {
  const newNode = new Node(value)

// start with edge case first where head and tail point to null - use if statement to check if null
// code (if this.head is false) or (if this.head equals to null) - written if not this.head
if (!this.head) {
  // then we set equal to new node
  this.head = newNode
  // then we set tail equal to new node
  this.tail = newNode

  // what if linked list does have values we write else statment
 } else {
  // we have the existing tail of the last node point to the new node (insert node)
  this.tail.next = newNode
  //we then have the actual tail point to the new node
  this.tail = newNode
 }
 // we increase the length by one
 this.length++
 // we return "this" ( the entire linked list)
 return this
}

