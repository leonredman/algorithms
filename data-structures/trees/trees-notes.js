// TREES Data structure

// a linked list is a form of tree that does not 'fork'
// we can use a Node as the starting point
{
  value: 4,
  next: null
}

// A binary tree Node has 2 arrows, and would be like this.
// It has values "left" and "right" instead of "next" and "prev"
{
  value: 4,
  left: null,
  right: null
}

// so if we had 3 nodes, one on top with value of '4' and 2 arrows pointing below ( a left and a right node)
// left with the value of '3' and right with value of '23'
{
  value: 4,
  left:{
        value: 3,
        left: null,
        right: null
  },
  right: {
        value:23,
        left: null,
        right: null
  }
}


// A 'BINARY TREE' HAS 2 NODES ( A LEFT AND A RIGHT)
// there is no rule that a tree has to be binary, a tree can point to 3 items or however many you want.

// there are different types of trees
// A FULL TREE EITHER POINTS TO 2 NODES OR ZERO NODES

// A PERFECT TREE IS WHEN EVERY LINE THAT HAS ITEMS IN IT IS COMPLETELY FILLED ALL THE WAY ACROSS

// A COMPLETE TREE IS AS COMPACT AS YOU CAN MAKE IT GIVEN THE NUMBER OF NODES YOU HAVE
// this means a complete row pointing down

// trees can be a combination of Full, Perfect and Complete in different combinations.

// THE TOP ITEM IS THE PARENT

// THE CHILD NODES ARE CALLED SIBLINGS

//CANNOT HAVE 2 PARENTS IN A TREE

// A NODE THAT DOES NOT HAVE ANY CHILDREN IS CALLED A LEAF NODE

// note a 'Binary Tree' is different than a 'Binary "Search" Tree'