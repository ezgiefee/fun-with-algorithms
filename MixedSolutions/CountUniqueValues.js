/* Implement  a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
There can ben negative numbers in the array, but it will be always sorted. 
countUniqueValues([1,1,1,1,1,2])                      //2    
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])         //7   
*/

/****************************              First Approach             ****************************/ 
function countUniqueValues(arr) {
  if (arr.length == 0) return 0;
  const set = new Set(arr);
  return set.size;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

/****************************              Second Approach             ****************************/ 
function countUniqueValues1(arr) {
  if (arr.length == 0) return 0;
  let left = 0;
  for (let right = 1; right < arr.length; right++){
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    }
  }
  return left + 1;
}
console.log(countUniqueValues1([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));