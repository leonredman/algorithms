// CALL STACKS - important part of recursion

// we have a data structure called a stack, and is simplar to a tube of tennis balls. You only have access
// to the tennis ball at the top of the stack and have to remove it to access the one below.

// A CALL STACK - non Recursive

// function one is going to console log one
// when you run this function it goes "ON TO" the call stack
// when it does prints the console and is done running the function, it is removed from the call stack
function functionOne() {
  console.log("one");
}

// we change the function so that before it runs and prints the console, it runs functionTwo and looks like this

function functionOne() {
  funcTwo();
  console.log("one");
}

// so we do the same for function 'two; and also add a function 'three'.
//All these are added to the call stack. Function Three we dont need to add another call, only the console.log

function funcThree() {
  console.log("Three");
}

function funcTwo() {
  funcThree();
  console.log("Two");
}

function funcOne() {
  funcTwo();
  console.log("One");
}
// call function one
funcOne();

//yeild in console is:
// Three
// Two
// One

// so we called function one first, and we called function three last, but the three printed first
// due to is position on the call stack

// NOTES ON USING DEBUGGER TO STEP THRU CODE

// in chrome dev tools if we click on the show debugger tool in the upper right, it opens  the tools
// the tools we care about are teh section "Call Stack"  and the Section "Breakpoints"

// in the code section if we click on a line number it highlights the number.
// this highlight creates a breakpoint and we can see it in the breakpoints section
// If we click on the triangle icon towards the bottom to run snippet in console
// We see the pause on the breakpoint and highlight on the code
// This allows us to walk thru the code one step at a time and see the code run, instead of all at once
// At the top right we see the "arrow with a dot" button that allows us to step thru the code
// When we click it steps thru the code and in our example it add the function to the call stack
// When we step to the console logs, it executes the code, and steps to the curly brace, which ends the code
// The curly brace step runs and ends that function and removes it from the callStack
