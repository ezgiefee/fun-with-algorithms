/* Write a function called sameFrequency. Given two positive integers, find out if the two numbers have 
the same frequency of digits.Your solution MUST have the following complexities:
Time: O(N)

sameFrequency(182,281)              // true
sameFrequency(34,14)                // false
sameFrequency(3589578, 5879385)     // true
sameFrequency(22,222)               // false */


/****************************              First Approach             ****************************/ 
function sameFrequency(val1, val2) {
  let value1 = val1.toString();
  let value2 = val2.toString();

  if (value1.length != value2.length) return false;

  let frequency1 = {};
  let frequency2 = {};

  for (let i = 0; i < value1.length;i++){ 
    frequency1[value1[i]] = (frequency1[value1[i]] || 0) + 1;
  }
  for (let i = 0; i < value2.length; i++){
    frequency2[value2[i]] = (frequency2[value2[i]] || 0) + 1;
  }
  for (let item in frequency1){
    if (frequency1[item] != frequency2[item]) return false;
  }
  return true;
}

console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(34, 14));