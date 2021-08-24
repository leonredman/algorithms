// get method - used to get node a particular index
get(index) {
  // cannot return anything less than zero or greater than length of last node
  // if the index fall outside the range return undefined
  if (index < 0 || index >= this.length) {
    return undefined
  }
 // to return a node we set a variable equal to that node (called temp)
 //we start at beginnning of list  and set temp equal to head (index of 2 - loop runs twice)
  let temp = this.head
  //we iterate thru the list for how many we are looking for 
  for (let i = 0; i < index; i++) {
    // moves temp forward
    temp = temp.next
  }
  //returns item
  return temp
}

let myLinkedList = new LinkedList(0)
myLinkedList.push(1)
myLinkedList.push(2)
myLinkedList.push(3)

myLinkedList.get(-1)   // yeild undefined
myLinkedList.get(10)  // greater than list yeild is undefined
myLinkedList.get(2)  // yeild value of 2 - correct.