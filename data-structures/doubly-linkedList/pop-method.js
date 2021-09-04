// POP METHOD
// With doubly linked list we have arrows backwards
// we dont have to iterate through the list as arrows point both ways
pop() {
// if we have an empty linked list 
  if (this.length === 0) return undefined
  // if we have one or more items in list
  let temp = this.tail
  if (this.length ==1) {
    this.head = null
    this.tail = null
  } else {     // when 2 or more items
    this.tail = this.tail.prev
    this.tail.next = null
    temp.prev = null
  }
  // decrement the length
    this.length--
    // return temp
    return temp
  }

  let myDoublyLinkedList = new DoublyLinkedList(1)
  myDoublyLinkedList.push(2)


  //code solution - can be refactored for ease of reading (see above)
pop() {
  // if we have an empty linked list
  if (!this.head) return undefined
  // we can also say if tail is null
  if (!this.tail) return undefined
  // we can also say if length equals zero
  if (!this.length === 0) return undefined
  // create our variable
  let temp = this.tail
  // move our tail over
  this.tail = this.tail.prev
  // remove/break off last node
  this.tail.next = null
  //set removed nodes back arrow to null
  temp.prev = null
  //decrement list by one - gets rid of unattached node
  this.length--
  // length will become zero after we decrement
  // if we have only one item
  if (this.length === 0){
    this.head = null
    this.tail = null
  }
  return temp

}