// ADD A VERTEX METHOD - creates an empty adjacencyList

// First we add the vertex, which is covered here
// Then we add Edges, which will be covered in another file

// First we start with the class named Graph and we add the 'constructor', which is simple
class Graph {
  constructor() {
    // this is the entire constructor, we create an empty object and call it adjacencyList
    this.adjacencyList = {};
  }
  // the add 'vertex method' creates the (A:[])  key and empty array inside the constructors empty object
  addVertex(vertex) {
    // not allowed to have duplicates verticies, so have to wrap the add in an if statement - use if statement no vertext with this value then create it
    if (!this.adjacencyList[vertex]) {
      // we add it to our adjacency list object /set equal to an empty array to create vertex
      this.adjacencyList[vertex] = [];
      // if we were able to add vertex - return true
      return true;
    }
    // not able to add - return false
    return false;
  }
}
// create a new graph called myGraph and it will be empty
let myGraph = new Graph();
myGraph;

// Example - add a vertex with value of 'A'

myGraph.addVertex("A");
//yeild in consule will return true  A
