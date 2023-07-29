/* Write a function called collectStrings which accepts an object and returns an array
 of all the values in the object that have a typeof string */

function collectStrings(obj) {
  var stringsArr = [];

  function gatherStrings(o) {
      for(var key in o) {
          if(typeof o[key] === 'string') {
              stringsArr.push(o[key]);
          }
          else if(typeof o[key] === 'object') {
              return gatherStrings(o[key]);
          }
      }
  }

  gatherStrings(obj);

  return stringsArr;
}

//second solution

function collectStrings0(obj) {
  var stringsArr = [];
  for(var key in obj) {
      if(typeof obj[key] === 'string') {
          stringsArr.push(obj[key]);
      }
      else if(typeof obj[key] === 'object') {
          stringsArr = stringsArr.concat(collectStrings(obj[key]));
      }
  }

  return stringsArr;
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])
console.log(collectStrings0(obj))