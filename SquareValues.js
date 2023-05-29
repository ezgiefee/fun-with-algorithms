/* Write a function called same, which accepts two arrays. The function should return true if every value 
in the first array has it's corresponding squared int the second array. The frequency of values must be the same.
same([1,2,3],[4,1,9])   //true
same([1,2,3],[1,9])     //false
same([1,2,1],[4,4,1])   //false
*/

function same(arr1, arr2) {
  var result = false;
  if (arr1.length != arr2.length) return result;
  const ascArr1 = arr1.sort((a, b) => a - b);
  const ascArr2 = arr2.sort((a, b) => a - b);
  for (let i = 0; i < ascArr1.length; i++){
    if (ascArr2[i] == Math.pow(ascArr1[i],2)) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}

console.log(same([1, 2, 3], [4, 4, 1]));