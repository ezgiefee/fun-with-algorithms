/* Write a function called maxSubarraySum which accepts an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive elements in the array.
maxSubarraySum([1,2,5,2,8,1,5],2)                 //10
maxSubarraySum([1,2,5,2,8,1,5])                   //17
maxSubarraySum([4,2,1,6],1)                       //6
maxSubarraySum([4,2,1,6,2],4)                     //13
maxSubarraySum([],4)                               //null
 */

/****************************              First Approach             ****************************/ 
function maxSubarraySumE(arr, num) {
  if (num > arr.length) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++){
    let temp = i;
    let count = num;
    let sum = 0;
    while (count > 0) {
      sum += arr[temp];
      temp++;
      count--;
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

console.log(maxSubarraySumE([1, 2, 5, 2, 8, 1, 5], 2));

/****************************              Second Approach             ****************************/ 
function maxSubarraySum(arr,num) {
  if (num > arr.length) return null;
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++){
    let temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));

/****************************              Third Approach             ****************************/ 
function maxSubarraySumN(arr,num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++){
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++){
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySumN([1, 2, 5, 2, 8, 1, 5], 2));