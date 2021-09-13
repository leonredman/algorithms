// remove  take out a node at a particular index and return it.

remove(index) {
  // remove first item we can use shift method
if (index === 0) return this.shift()
  // remove last item we can use pop method
  if (index === this.length - 1) return this.pop()
  // check if the node is a valid is a valid index
if (index <0 || index >= this.length) return undefined

// if we are removing from the middle of the list( index of 2)
// set temp variable - Note diff! have arrows going other way, dont need the "before" variable
//get variable to the appropriate node with the get method
const temp = this.get(index)
// point arrows  from node to previous and next
temp.prev.next = temp.next
temp.next.prev = temp.prev
//break node off the list
temp.next = null
temp.prev = null
// decrement the length
this.length--
//return item we removed
return temp
}

let myDoublyLinkedList = new DoublyLinkedList(0)
myDoublyLinkedList.push(1)
myDoublyLinkedList.push(2)

myDoublyLinkedList.remove(1)
