/* Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters 
in the first string form a subsequence of the characters in the second string. In other words, the 
function should check whether the characters in the first string appear somewhere in the second string, 
without their order changing.

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:
Time Complexity - O(N + M)
Space Complexity - O(1) */

/****************************              First Approach             ****************************/ 
function isSubsequence(str1, str2) {
  if (!str1) return true;
  let i = 0;
  let j = 0;
  while (j < str2.length) {
    if (str2[j] === str1[i]) {
      i++;
    }
    if (i === str1.length) {
      return true;
    }
    j++;
  }
  return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'acb'));

/****************************              Second Approach             ****************************/ 
function isSubsequenceS(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequenceS(str1.slice(1), str2.slice(1));
  return isSubsequenceS(str1, str2.slice(1));
}

console.log('\nSecond approach');
console.log(isSubsequenceS('hello', 'hello world'));
console.log(isSubsequenceS('sing', 'sting'));
console.log(isSubsequenceS('abc', 'acb'));