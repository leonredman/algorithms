//challenge Convert Hours into seconds
//write a function that converts hours into seconds

// examples 
// howManySeconds(2) -> 7200
// howManySeconds(10) -> 36000
// howManySeconds(24) -> 86400

//notes 60 seconds in a minute, 60 minutes in an hour
// dont forget to return your answer


//solution

function howManySeconds (hours) {
    return hours * 60 * 60;
};

// can refactor to other solutions like arrow function

// function howManySeconds(hours) {
//     return hours * 3600;
// };