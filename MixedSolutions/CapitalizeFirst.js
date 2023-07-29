/* Write a recursive function called capitalizeFirst. Given an array of strings,
capitalize the first letter of each string in the array. */

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function capitalizeFirst(arr) {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }
  console.log('slice : ',arr.slice(0, -1));
  let res = capitalizeFirst(arr.slice(0, -1));
 
  res.push(arr.slice(arr.length - 1)[0].toUpperCase());
  console.log("res : ",res);
  return res;
}

console.log(capitalizeFirst(['car','taco','banana']));