//pointers - can be used in our data structures

// EXAMPLE NOT USING POINTER
let num1 = 5;

let num2 = num1;

// if we run this code we see that num1 = 5 and num2 = 5.
// if we then change num1 = 10, we will see that num2 is STILL = 5
// this is because we are not using a pointer

// when we set num2 = num1 this is not permanent.
// It is setting num2 = num1 at the time we are declaring the variable.
// if we later change it does not affect num2.

// EXAMPE USING POINTER
// when you set a variable(obj1) equal to this value(an Object). It is using a pointer.
let obj1 = {
  value: 11,
};

// when we say let obj2 equal to obj1 it is really saying obj2 is pointing to same obj1 im memory
// it is not creating a second object
let obj2 = obj1;

// if we change obj1 value to 22, then obj2 changes also
obj1.value = 22;

// if we say obj3 points to this object.
let obj3 = {
  value: 57,
};

// we can move the pointers, if we move the pointers and end up with an object that
// nothing is pointing to.  A process called garbage collection will remove those objects
// from memory.
