// POP METHOD
// With doubly linked list we have arrows backwards
// we dont have to iterate through the list as arrows point both ways
pop() {

  if (this.length === 0) return undefined
  let temp = this.tail
  if (this.length ==1) {
    this.head = null
    this.tail = null
  } else {
    this.tail = this.tail.prev
    this.tail.next = null
    temp.prev = null
  }
    this.length--
    return temp
  }

  let myDoublyLinkedList = new DoublyLinkedList(1)
  myDoublyLinkedList.push(2)

