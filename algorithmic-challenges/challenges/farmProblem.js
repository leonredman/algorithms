// In this challenge, a farmer is asking you to tell him how many legs can be counted 
// among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. 
// You have to implement a function that returns the total number of legs of all the animals.

// Examples
// animals(2, 3, 5) ➞ 36

// animals(1, 2, 3) ➞ 22

// animals(5, 2, 8) ➞ 50

// Don't forget to return the result.
// The order of animals passed is animals(chickens, cows, pigs).
// Remember that the farmer wants to know the total number of legs and not the total number of animals.

// -----------------------Solution

// farmer is passing in the animals in this order (chickens, cows, pigs)
// farmer wants to know the total number of legs

// totalChickensLegs = (Chickens * 2);
// totalCowLegs = (Cows * 4);
// totalPigLegs = (Pigs * 4;
// totalLegs = totalChickenLegs + totalCowLegs + totalPigLegs

function animals(chickens, cows, pigs) {
	let totalChickLegs = (chickens * 2);
	let totalCowLegs = (cows * 4);
	let totalPigLegs = (pigs * 4);
	return totalChickLegs + totalCowLegs + totalPigLegs;
	
}