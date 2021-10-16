//CONTAINS METHOD
// we have a tree with 7 nodes  and three rows.  We are trying to find if the value of 27 is one of nodes
// we start at root  and see if it has values or root is empty  and set to null
// if tree has values , we set a temp variable and iterate thru the tree
// Binary search trees are null terminated lists 


// if root === null return false       (its not in the tree) step 1
// let temp = this.root       (tree does have items so we look for node )
// while (temp)            ( while temp is not equal to null  we run out code )
// if < left               ( inside while loop if value is less than we move temp to left and down tree)
// else if > right         (if greater than we move temp to the right and down the tree)
// else = return true      (if its equal to - we return true as item is in the tree)
// return false            (if temp returns null  ( ends loop and returns false)

contains(value) {
  if (this.root === null ) return false
  let temp = this.root
  while (temp) {
    if (value < temp.value) {
      temp = temp.left
    } else if (value > temp.value) {
      temp = temp.right
    } else {
      return true
    }
  }
  return false
}

let myTree = new BST()
myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)
myTree.insert(27)
myTree.insert(52)
myTree.insert(82)

myTree.contains(27)
// returns true