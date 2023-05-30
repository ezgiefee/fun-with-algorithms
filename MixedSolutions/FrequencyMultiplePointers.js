/* Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks 
whether there are any duplicates among the arguments passed in. You can solve this using the frequency 
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

/****************************              Second Approach             ****************************/ 
function areThereDuplicates1() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}

console.log(areThereDuplicates1(1, 2, 3));

/****************************              Third Approach             ****************************/ 
function areThereDuplicates2(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}
console.log(areThereDuplicates2('a', 'b', 'c', 'a'));

/****************************              Fourth Approach             ****************************/ 

function areThereDuplicates3() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates2('a', 'b', 'c', 'a'));