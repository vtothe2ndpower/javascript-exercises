// Steamroller - Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    // I want any empty arrays ignored
    if(Array.isArray(arr[i]) && arr[i].length === 0){ 
      continue;
    // Non-empty arrays
    } else if(Array.isArray(arr[i])){ 
      // Inner array - we will loop through and extract
      // the innermost element
      let innerArr = arr[i];
      for(let j = 0; j < innerArr.length; j++){
        let k = 0;
        let el = innerArr[j];
        while(Array.isArray(el)){
        el = el[k];
        }
        newArr.push(el);
        }
    // Push to newArr anything that is not an array
    } else { 
      newArr.push(arr[i]);
      }
  }
  return newArr;
}