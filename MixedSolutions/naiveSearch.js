function naiveSearch(str, val) {
  var count = 0;
  for (let i = 0; i < str.length; i++){
    for (let j = 0; j < val.length; j++){
      if (str[i+j] !== val[j]) {
        break;
      } 
      if (j === val.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(naiveSearch("lorie lored","lor"))