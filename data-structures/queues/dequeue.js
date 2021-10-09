// DEQUEUE METHOD 
// removing the first item in the line
// very similar to shift method with a linked list
// edge case of one node and undefined if there are no items in the list

// this is our method

dequeue() {
  if (this.length === 0) return undefined   // if it is empty we return undefinded
  let temp = this.first   // need a variable to point at item we are going to return
  // if length = 1 we remove it we  set first and last equal to null
  if (this.length === 1){
    this.first = null
    this.last = null
  } else {
    this.first = this.first.next  // move first over to next
    temp.next = null  // breaks off/ removes temp.next and set to null 
  }
  // decrement the length
  this.length--
  //  then return temp
  return temp
}

// create our queue with 4 values
let myQueue = new Queue(11)
myQueue.enqueue(3)
myQueue.enqueue(23)
myQueue.enqueue(7)

// dequeue the first value
myQueue.dequeue()

// yeild is 11