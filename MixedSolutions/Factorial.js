/* Write a function factorial which accepts a number and returns the factorial of that number. 
A factorial is the product of an integer and all the integers below it; 

factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.
factorial zero (0!) is always 1. */

/****************************              First Approach             ****************************/ 
function factorial(num) {
  let result = 0;
  if (num === 0 || num === 1) {
    result = 1;
  } else {
    result = (num * factorial(num - 1));
  }
  return result;
}

console.log(factorial(5));

/****************************              Second Approach             ****************************/ 
function factorialS(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return (num * factorial(num - 1));
}

console.log(factorial(4));

