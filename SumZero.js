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
  if (result.length == 0) result = undefined;
  return result;
}

//console.log(sumZero([-4, -2, -1, 0, 1, 2, 3]));
//console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));
/****************************              Second Approach             ****************************/ 
function sumZero1(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return arr[left], arr[right];
    } else if (sum > 0) {
      right--;
    } else {
      left--;
    }
  }
}

console.log(sumZero1([-4, -3, -2, -1, 0, 1, 2, 3, 10]));