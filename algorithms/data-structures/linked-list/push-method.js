class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// the constructor
class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  // the push method
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
    return this; // return entire linked list
  }
}

let myLinkedList = new LinkedList(7);
myLinkedList.push(4);
