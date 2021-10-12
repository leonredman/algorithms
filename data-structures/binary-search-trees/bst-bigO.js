// BINARY SEARCH TREES BIG O

// say we have one node   is can be also written 2 to 1st power minus 1 equals
// say we have add 2 more nodes to BST for a total of three nodes. One top, 2 below
// we can say its written 2 to 2nd power minus 1
// if we add another row of nodes (4 nodes in the row) we can say its 2 to 3rd power - 1
// if we add another row with 8 nodes we say its 2 to 4th power minus 1

// the minus one is irrelevant
//2 to the 4 is the amount of steps to find something  (4 steps)

// to find an item yo would iterate thru 4 times
// to remove something you would iterate thru 4 times and remove item
// to add you would iterate thru 4 times and add something
// these functions would be O(log n)   the most efficient  (divide and conquer)

// we can cut the tree in half when looking for something as we can tell what is to the left of the right
// we can do this on each iteration thru the tree.

// worst case scenario is if tree never forks , then its a straight line which is a linked list
// we would have to iterate thru list to get to node. O(n) on a BST

// to look up, remove, insert we treat it as O(log n) since we are usually somewhere in the middle and not worst case

// there is no advantage of keeping a BST
