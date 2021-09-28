// DOUBLY LINKED LIST CONSTRUCTOR
// similar to a linked list except it also has an arrow that goes back the other way
// the only difference in the constructor

//doubly linked list example of a node - the only difference is it has a previous arrow
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// the doubly linked list class - nothing changes in the constructor
// except the node itself

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
}

// create new DOUBLYLINEDLIST
let myDoublyLinkedList = new DoublyLinkedList(7);
myDoublyLinkedList;
