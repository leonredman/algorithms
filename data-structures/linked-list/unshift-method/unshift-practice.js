// UNSHIFT METHOD 


unshift (value) {
  // declare a variable called newNode and set the new nodes equal to a value
  
  // First we always add new node if node is empty - so check first
  // if node is not equal to head
           {
   // set this head equal to new Node
    
    // set this tail equal to new Node
    
  
  } else {   // else we have a list already and we are adding a new node to it

    // set the newNode pointer next equal to this head
                             // .next points the new node to the first node (current head)
    // set this head equal to newNode

                          // this moves head to point to the first node 
  }
                 // increases this list length by one
                // returns the entire new linked list

 }

}
// create a linked list with the values 11,3,23,7
let myLinkedList = new LinkedList(11)
myLinkedList.push (3)
myLinkedList.push (23)
myLinkedList.push (7)

myLinkedList.unshift(4)   // this code will create linked list and then unshift(add the value of 4)