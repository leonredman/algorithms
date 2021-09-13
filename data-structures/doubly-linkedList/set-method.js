//Set Method -  goes to a particular index and set a value of the node  to the value we pass

set(index, value){
  // get method can do all the work, same code as singly linked list but we can also work backwards
  let temp = this.get(index)
  //determine if index is pointing to node set temp equal to value
  if (temp) {
    temp.value = value 
    return true  
  }
  return false
  }
}

let myDoublyLinkedList = new DoublyLinkedList(0)  
myDoublyLinkedList.push(1)
myDoublyLinkedList.push(2) 

myDoublyLinkedList(2,99)

//yeilds true