/* Write a function called power which accepts a base and an exponent. The function should 
return the power of the base to the exponent. This function should mimic the functionality 
of Math.pow()  - do not worry about negative bases and exponents. */

/****************************              First Approach             ****************************/ 
function power(base, exponent) {
  let result = 1;
  if (exponent === 0) {
    result = 1;
  } else {
    result = base * power(base, (exponent - 1));
  }
  return result;
}

console.log(power(2, 3));
