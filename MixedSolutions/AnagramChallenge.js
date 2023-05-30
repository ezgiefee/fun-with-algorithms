/*Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phase or name formed by rearranging the letters of another, such as cinema, formed from iceman.
validAnagram('','')                         //true
validAnagram('aaz','zza')                   //false
validAnagram('anagram','nagaram')           //true
validAnagram('rat','car')                   //false
validAnagram('awesome','awesom')            //false
validAnagram('qwerty','qeywrt')             //true
*/

/*                                     First Approach                                                          */ 
function validAnagram(str1, str2) {
  if (str1.length != str1.length) return false;
  if (str1 == null && str2 == null) return true;
  var frequencyCounter1 = {};
  var frequencyCounter2 = {};
  for (let i = 0; i < str1.length; i++) { 
    frequencyCounter1[str1.charAt(i)] = (frequencyCounter1[str1.charAt(i)] || 0 ) + 1;
  } 
  for (let i = 0; i < str2.length; i++) { 
    frequencyCounter2[str2.charAt(i)] = (frequencyCounter2[str2.charAt(i)] || 0 ) + 1;
  } 
  
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }
  return true;
}

console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('aaz', 'zza'));

/*                                     Second Approach                                                          */ 
function validAnagram1(first, second) {
  if (first.length != second.length) return false;
  const lookup = {};
  for (let i = 0; i < first.length; i++){
    let letter = first[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < second.length; i++){
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram1('anagram', 'nagaram'));