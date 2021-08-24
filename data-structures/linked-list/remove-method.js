//REMOVE METHOD

remove(index) {
  // can remove first item index 0
  if (index ===0) return this.shift()
  // can remove last time 
  if (index === this.length -1) return this.Pop()
  // cannot return index of -1 or greater than last given index
  if (index < 0 || index >= this.length ) return undefined 
  
  // if we want to remove somewhere in the middle - say index 2
  // need variable pointing to the one before we want
  const before = this.get(index -1)
  // need variable pointing index we want - (index 2) // get method is O(n) so we use efficent code
  const temp = before.next

  // we have before.next (index1 point to temp.next (index3)) which is now index2
  before.next = temp.next
  //we breake temp.next {node originally 2) from list by setting equal to null 
  temp.next = null
  //decrement list by one gets rid of node
  this.length--
  // returns node we removed which is temp
  return temp
}

//problem: create linkedlist with values of 11, 3, 23, 7
// remove node 23 with index of 2

let myLinkedList = new LinkedList(11)
myLinkedList.push(3)
myLinkedList.push(23)
myLinkedList.push(7)

myLinkedList.remove(2)