// REMOVE VERTEX METHOD 

// IN CODE OUR GRAPH LOOKS LIKE THIS. AN OBJECT WITH KEYS AND VALUES IN AN ARRAY.
// UNLESS IT IS SPECIFIED IT IS ASSUMED TO BE BI-DIRECTIONAL

{
  A:["B", "C", "D"],
  B:["A", "D"],
  C:["A", "D"],
  D:["A", "B", "C"]
}

// There is an efficiency we can use in removing a vertex if everything is bi-directional
// The information we need to make it more efficient is contained in Key D.
// What we can do is POP element 'C' out of the array, then set it equal to a variable.
// We know that "C" has an edge with "D". We can find that and remove it
// We can do the same thing for "B" - we POP "B" from Key D, give it a variable, and then go to Key "B", find the Edge "D" and remove it.
// We do the same thing for "A" - we POP "A" from Key D, give it a variable, then go to Key "A", find Edge "D" and remove it.
// Graph can have thousands of edges, but would only have to  to these 3, which is a huge efficiency
// Once array is empty, all the edges have been removed.
// NOW YOU CAN REMOVE THE VERTEX

//Code Explanation 

// create a method and pass it whatever vertex we want to remove
removeVertex(vertex) {
  //cannot remove a vertex that does not exist in the graph - check and return undefined if non existant
  if (!this.adjacencyList[vertex]) return undefined
// use a while loop to iterate thru array that is associated with vertex we are going to remove (if lenght of array is not 0 loop will run)
  while(this.adjacencyList[vertex].length) {
    // we create a variable and set it to what ever we POP from the array
    let temp = this.adjacencyList[vertex].pop()
    // once we have that info we can use the removeEdge method we need to 2 verticies that we will remove the edge between( the vertex, and the item we pop off array)
    this.removeEdge(vertex, temp)
  }
  // we delete the vertex
  delete this.adjacencyList[vertex]
  // if exists and we run code return the graph (this)
  return this
}


// Code Example of method
removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined
  while(this.adjacencyList[vertex].length) {
        let temp = this.adjacencyList[vertex].pop()
       this.removeEdge(vertex, temp)
  }
  delete this.adjacencyList[vertex]
  return this
}

// create graph with verticies and edges

let myGraph = new Graph()

myGraph.addVertex("A")
myGraph.addVertex("B")
myGraph.addVertex("C")
myGraph.addVertex("D")
myGraph.addEdge("A", "B"),
myGraph.addEdge("A", "C"),
myGraph.addEdge("A", "D"),
myGraph.addEdge("B", "D"),
myGraph.addEdge("C", "D")
myGraph

// remove vertex and edges
myGraph.removeVertex("D")
//run code
myGraph

//yeild is vertex removed