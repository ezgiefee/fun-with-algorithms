/* Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks 
whether there are any duplicates among the arguments passed in.  You can solve this using the frequency 
counter pattern OR the multiple pointers pattern.

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 

Restrictions:
Time - O(n)
Space - O(n)
Bonus:
Time - O(n log n)
Space - O(1) */

/****************************              First Approach             ****************************/ 
function areThereDuplicates(...values) {
  if (values.length == 0) return false;
  let frequency = {};
  for (let i = 0; i < values.length; i++){
    frequency[values[i]] = (frequency[values[i]] || 0) + 1;
    if (frequency[values[i]] > 1) {
      return true;
    }
  }
  return false;
}
console.log(areThereDuplicates('a', 'b', 'c', 'a'));