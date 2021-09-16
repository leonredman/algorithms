  //classes use functions and prototypal inheritance
  // A class is like a cookie cutter
  // When You create a class you  always capitalize the class name 'Cookie' for example
class Cookie {
  // Classes always have something called a constructor. Its what creates the new cookies from the class. We pass in a (color)
constructor(color) {
  // we use this keyword and pass the color to the actual new cookies we are creating
  this.color = color
  }
}    //  this is now a valid class

// now we can create new cookies

// we declare a variable cookieOne 
// we use the 'new' keyword to create an instance of a  "new" Cookie. "new calls the constructor"
//cookieOne is the specific instance of Cookie that we are creating using the new keyword
// we pass it the color of green. That creates a green cookie. ==> 'this' cookie is green.
let cookieOne = new Cookie('green')

let cookieTwo = new Cookie('blue')  // cookieTwo is a specific instance of Cookie, 'this' cookie is blue


// GETTER AND SETTER
// 2 broad categories of methods  to get color and set color
getColor() {
  return this.color
}
setColor(color) {
  this.color = color
}

// Here is our complete Class code put together with out constructor and getter and setter

class Cookie {
  constructor(color) {
    this.color = color
  }
  getColor() {
    return this.color
  }
  setColor(color) {
    this.color = color
  }
}

let cookieOne = new Cookie('green')
let cookieTwo = new Cookie ('blue')

//if we run our code we can get color and set color

cookieOne.getColor()   // yeild will be green
cookieTwo.setColor(red)  // yeild will be now red if we do getColor

// How are classes Used?  We use them in all out D/S for example
// classes create linked list, where we can pop, push, shift etc.
let myLinkedList = new LinkedList(23)
myLinkedList.push(7)