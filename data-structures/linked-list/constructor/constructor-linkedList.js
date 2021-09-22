//implement linked list - A WORKING CONSTRUCTOR

class Node {
  constructior(value) {
    this.value = value;
    this.next = null;
  }
}

//constructor is createing new Node
// new keyword is calling the '^ code above' constructor
class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
}

//code creates a linked list - new LinkedList(4) calls the class linked list
// new keyword is calling '^ code above' constructor in the class Linked List
let myLinkedList = new LinkedList(4);
