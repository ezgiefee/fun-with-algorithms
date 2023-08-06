/* Write a function called binarySearch which accepts a sorted array and
 a value and returns the index at which the value exists. Otherwise, return -1. */

function binarySearch(arr, val) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== val && start <= end) {
        if(val < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === val){
        return middle;
    }
    return -1;
}
 
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 10) )