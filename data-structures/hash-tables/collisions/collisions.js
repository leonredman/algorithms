// COLLISIONS - WHEN WE HAVE AN ITEM THAT MAPS TO THE SAME SPOT IN MEMORY
// basically its arrays inside and array, or objects inside and array at a particular address in the same address space
// this is called SEPERATE CHAINING
[
  ["nails", 1000],
  ["nuts", 1200],
];

// LINEAR PROBING
// This is another option where if we have an item and we are trying to add it, and we find the
// address has an item already in memory, then we go to the next spot until we find an empty address and add the item
// this is a type of Open Addressing and is a way of dealing with collisions in a hash table

// The 2 most common ways of dealing with collisions are SEPERATE CHAINING AND LINEAR PROBING

// Another way is to have a linked list at  every one of the address and we add to the linked list
// when we have multiple items at the address

// we will use seperate chaining for this course
