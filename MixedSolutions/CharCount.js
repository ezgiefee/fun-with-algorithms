/* Count the characters in a string */

function charCountV01(str) {
  // make object to return at the end
  var result = {}
  // loop over string, for each character..
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    //if the char is a number/letter AND is a key in the object, add one to count
    if (result[char] > 0) {
      result[char]++;
    }
    //if the char is a number/letter AND is not in the object, add it to the object and set value 1
    else {
      result[char] = 1;
    }
    //if something else (space, period, etc..) don't do anything
  }
  //return the object
  return result;
}
console.log(charCountV01("abcabcd"));

function charCountVo2(str) {
  var obj = {};
  for (var char of str){
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}

console.log(charCountVo2("ghdfGDert06"));