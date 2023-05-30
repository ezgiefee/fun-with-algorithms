/*Write a fuction called sumZero which accepts a sorted array of integers. The function should find the first pair
where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
sumZero([-3,-2,-1,0,1,2,3])          [-3,3]
sumZero([-2,0,1,3])                  undefined
sumZero([1,2,3])                     undefined */

/****************************              First Approach             ****************************/ 
function sumZero(arr) {
  let result = [];
  let len = arr.length;
  if (len === 0) return undefined;
  for (let i = 0, k = len - 1; i < len/2, k > len / 2; i++, k--){
    if (arr[i] + arr[k] == 0) {
      result.push(arr[i]);
      result.push(arr[k]);
      return result;
    }
  }
  if (result.length == 0) return undefined;
  return result;
}

console.log(sumZero([-4, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));

/****************************              Second Approach             ****************************/ 