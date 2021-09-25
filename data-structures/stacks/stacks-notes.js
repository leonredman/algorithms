// STACKS
// Note We can reuse alot of code from linked list for stacks
// what is a stack?
//its like a can of tennis balls. We can push onto the stack and remove from the stack or Popping from stack
// if you put 2 tennis balls into the stack you cant get out the first one without taking out the second
// LIFO  last in first out
// example you surf the web with browser you go to a page and then another. When you hit the back button
// you are using a stack to go back in the browser order  - common use is a call stack
// Common way of implement a stack is  using an array.
// with a stack we add and remove from the same end. Does not matter which end as long as its the same.
// Using an array is very easy. It matters which end you use.
// If you remove from the end its O(1)
// If you remove from the beginning its O(n) as you will have to re-index everything
// always use the end.
// We pop and push to the end of the stack, and the array is just stacked vertical, hot horizontal.
// we alter a linked list to create a stack and not an array.
// The null terminated end is always at the bottom.
