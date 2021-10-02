// QUEUES NOTES

// A QUEUE  is just like when you get into a line.. you can 'in-queue' into the line, and you can 'de-queue' out of the line
//Queues run FIFO  that is first in first out
// we can use a couple of different datastructures in a queue like an array
// in an array we can pop or push onto the end which is O(1)
// we can shift and unshift from the beginning which is O(n)
// WITH A QUEUE YOU NEED TO ADD AT ONE END AND REMOVE FROM THE OTHER END
// it does not matter which end you use as long as they are opposite.
// no way to get arround having one of those of O(n)

// with a linkedlist if you remove (POP) from the back end its O(n) and to (PUSH) is O(1)
// On the front (SHIFT) is O(1)) and (UNSHIFT) is O(1)

// SO WITH A LINKEDLIST YOU DONT WANT TO DE-QUEUE FROM THE BACK END AS ITS O(n)
// we EN-QUEUE from the back and DEQUEUE from the front to make both operations efficient O(1)
// for linked list we called these head and tail, but for QUEUES we call these First and Last

//We start with a Linked List and modify it to build our QUEUES
