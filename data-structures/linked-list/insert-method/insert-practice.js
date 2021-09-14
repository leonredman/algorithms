// INSERT METHOD - we insert  a new node with a particular value 
//that we pass  with a particular index.
// Suppose we are given a linked list with the values (11, 3, 23, 7, 17) and a node of (17)

insert(index, value) {
  // if we want to add it with index of 0 we can use unshift  to return for "this" value
  
  // if we want to add it to the end, we can push this to the list  and return this value
  
  // test to see if -  this 'passed in' index is valid or return false
  

// declare new node and set to passed in value


  // if we want to put item in the middle of list(example: index of 2) we need a variable to iterate
  // The variable goes one spot before this desired index and we can use the get method

  // set the new node to point at  the variable for 23 node at index of 2

// insert new node into linked list

//increase length of this by one

// return true as had return false in third if statement

}

// create linked list with values 0,2
let myLinkedList = new LinkedList(0)
myLinkedList.push(2)

// insert index of 1 and value of 1
myLinkedList.insert(1, 1)

// returns true