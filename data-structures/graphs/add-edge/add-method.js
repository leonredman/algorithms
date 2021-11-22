// ADD EDGE METHOD

// for this we start with say 2 edges '1' and '2'  ( 2 circle elements 1 and 2)

// in code they will look like this:
{
  1:[],
  2:[]
}

// connected edges for one and 2 will look like this in code
// one and two connected to each other
{
  1:["2"],
  2:["1"]
}

//ADD EDGE METHOD
  // To build with code =>
  // we need vertex, so we say add edge and pass in vertex1 and vertex 2 that we are connecting
  // then key of vertex 1 will be 1 and vertex 2 will be key 2 to make things easy
addEdge(vertex1, vertex2) { 
  // one thing cannot do is create an edge between verticies that dont exist, say 1 and 3, this will not work 
  // so at the top we need to wrap the code in an if statement to make sure vertex actually exist
  if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
  // we say vertex1 (the array that is attached to it), we push onto vertex 2 the value of the array
  // this adds the edge
  this.adjacencyList[vertex1].push(vertex2)
  // we say vertex2 (the array that is attached), we push onto vertex 1
  // this adds the edge
  this.adjacencyList[vertex2].push(vertex1)
  // insde the if statement we retuen true
  return true
  }
  //otherwise we return false
  return false
}

// code example
//edge method
addEdge(vertex1, vertex2) {
  if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
    return true 
  }
  return false
 }
}
// create new graph and add 2 verticies 1 and 2 with empty arrays and they are not connected
let myGraph = new Graph()

myGraph.addVertex(1)
myGraph.addVertex(2)
myGraph

// add edges
myGraph.addEdge("1", "2")
// yeilds true and  

myGraph
// in the console graph shows adjacency list with 1 and 2 with values in the array linking with edge
