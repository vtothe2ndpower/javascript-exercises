/*
Title: Arguments Optional

Description: Create a function that sums two arguments together. If only one argument is provided, 
then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.
*/

// function addTogether() {


//   // There are 2 arguments
//   if(arguments[0] && arguments[1]){ 
//     // Both arguments are numbers
//     if(typeof arguments[0] === 'number' && typeof arguments[1] === 'number'){
//       return arguments[0] + arguments[1];
//     // One or both arguments are not numbers
//     } else {
//       return undefined;
//     }
//   } 

//   if(typeof arguments[0] === 'number'){

//     let self = this;
//     let nextSum = function(num){
//       return num + self.arguments[0];
//     }
//     nextSum();
//   }


//   return undefined;
// }

function addTogether() {
  // Function to check if a number is actually a number
  // and return undefined otherwise.
  var checkNum = function(num) {
    if (typeof num !== "number") {
      return undefined;
    } else return num;
  };

  // Check if we have two parameters, check if they are numbers
  // handle the case where one is not
  // returns the addition.
  if (arguments.length > 1) {
    var a = checkNum(arguments[0]);
    var b = checkNum(arguments[1]);
    if (a === undefined || b === undefined) {
      return undefined;
    } else {
      return a + b;
    }
  } else {
    // If only one parameter was found, returns a new function that expects two
    // Store first argument before entering the new function scope
    var c = arguments[0];

    // Check the number again, must be outside the function to about returning an object
    // instead of undefined.
    if (checkNum(c)) {
      // Return function that expect a second argument.
      return function(arg2) {
        // Check for non-numbers
        if (c === undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          // if numbers then add them.
          return c + arg2;
        }
      };
    }
  }
}