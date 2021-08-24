 //REVERSE METHOD - COMMON INTERVIEW QUESTION

  // take head and tail and reverse them
  // one by one take arrows and point them the other way
  // the gap is the hard part to keep track of the gaps while you reverse

reverse() {
  
  // to switch head and tail need a variable (Temp)  & we set it equal to head
  let temp = this.head
  // then we set head equal to Tail
  this.head = this.tail
  // then set Tail equal to Temp
  this.tail = temp
  // we need a variable (next) after temp
  let next = temp.next
  // we need a variable (prev) previous which will be set to null
  let prev = null

  // we now loop
  for(let i = 0; i < this.length; i++) {
    next = temp.next
    temp.next = prev
    prev = temp
    temp = next  // then loops again until next equals null
  }
  //return entire linked list
  return this
 }

 //create linked list with values 1,2,3
 let myLinkedList = new LinkedList (1)
 myLinkedList.push(2)
 myLinkedList.push(3)

 //reverse method
 myLinkedList.reverse()
 //yeilds 3,2,1