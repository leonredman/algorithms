//REMOVE AN EDGE METHOD

// we start by naming our method and passing in our verteicies 
removeEdge(vertex1, vertex2) {
  // we cannot add or remove from verticies that dont exist so we need to wrap this method in an if statement to check for elements
  if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {

  // we add the filter method from js and add a call back function. "This returns everything in the array that is not equal to vertex2"
  // yeild is 1:[]  an empty array
  // if the array had multipe elements it would keep everthing else, but here our array is empty
  this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v!== vertex2)
  // we do the same for vertex 2
  // our filter method returns everythint that is not equal to vertex 1
  // yeild is 2: [] an empty array
  this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v!== vertex1)
  // if they both exist we return true
  return true
  }
  // if they dont exist then return false
  return false
}


// Method Example
removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v!== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v!== vertex1)
    return true
  }
    return false
}
// create new graph and edges between a,b,c and run in dev tools console

myGraph.addVertex("A")
myGraph.addVertex("B")
myGraph.addVertex("C")
myGraph.addEdge("A","B")
myGraph.addEdge("B","C")
myGraph.addEdge("C","A")
myGraph

// remove edge
myGraph.removeEdge("A", "B")

// yeild returns true - a and b a no longer connected