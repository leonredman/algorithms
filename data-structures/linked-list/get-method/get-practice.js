// get method - used to get a node with a particular index
get(index) {
  // We cannot return anything with index less than zero or greater than length of last node - write test
  // Code: if the index falls outside the range return undefined
 

 // to return a node declare a variable  and set equal to that node (called temp)
 //we start at beginnning of the list and set temp equal to head (index of 2 - loop runs twice)
  

  
 //we iterate (loop) thru the list until we find the index  we are looking for 
 
    // move variable "temp" forward to the next index
  
  }
  //return the item (variable)

}

let myLinkedList = new LinkedList(0)
myLinkedList.push(1)
myLinkedList.push(2)
myLinkedList.push(3)

myLinkedList.get(-1)   // yeild undefined
myLinkedList.get(10)  // greater than list yeild is undefined
myLinkedList.get(2)  // yeild value of 2 - correct.