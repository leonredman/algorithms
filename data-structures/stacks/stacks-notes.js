// STACKS
// Note we can reuse alot of code from linked list for stacks

// WHAT IS A STACK?
// Its like a can of tennis balls. We can push onto the stack and remove from the stack or Popping from stack
// If you put 2 tennis balls into the stack you cant get out the first one without taking out the second as its on top

// LIFO  last in first out

// Real world example: you surf the web with browser you go to a page and then another. When you hit the back button
// You are using a stack to go back in the browser order  - common use is a call stack

// Common way of implement a stack is using an array.
// With a stack we add and remove from the same end. Does not matter which end as long as its the same.
// Using an array is very easy. It matters which end you use.
// If you remove from the end its O(1)
// If you remove from the beginning its O(n) as you will have to re-index everything
// Always use the end - NOT THE BEGINNING
// We POP (REMOVE) and PUSH (ADD) to the end of the stack. WE CAN REUSE THE METHODS FOR SHIFT AND UNSHIFT to accomplish this with some alteration.
// The array/linkedlist is just stacked vertical, hot horizontal.
// We alter a linked list to create a stack and not really its not really an array.
// The NULL TERMINATED END is always at the bottom. The left side of the array/list is at the top of the stack

// To remove  on the end is O(n) to add is O(1), if we use the left they are both O(n)

// We rename head and tail as Top and bottom. We dont need bottom so we just use Top
