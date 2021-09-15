// POP Method

// we remove one item from a linked list
// We have three cases: list with some items/ one item/ or no items.
// we need to move tail back one item
// start with easy use case where equal to null
pop(){
  // first test for empty linked list if there is no head return undefined
  

  // for 2 or more items
// declare variables 'temp and pre' and set variables to start, then loop
  
  

  // use while loop cause while temp.next is true loop will keep running
  // until temp.next is false and LinkedLists ends with null pointer
  
    
    
  }
  // loop ends as next = null
  // we set tail equal to pre ( pre is now done with)
  
  // we set tail.next equal to null - breaks 4 off the list
  
  // decrement the length
  
  // for last use case where there is only one node all the code will check out fine
  // but when we decrement the this.length will equal to zero and we need it to be null
                   {
    
    

  }
  //return variable
  
}

// code
pop () {
  if(!this.head) return undefined
  let temp = this.head
  let pre = this.head
  while(temp.next) {
    pre = temp
    temp = temp.next
  }
  this.tail = pre
  this.tail.next = null
  this.length
  if(this.length === 0) {
    this.head = null
    this.tail = null
  }
  return temp
 }
}

// linked list with 2 items, 1 and 2
let myLinkedList = New LinkedList(1)
myLinkedList.push(2)

// to run the pop
myLinkedList.pop();