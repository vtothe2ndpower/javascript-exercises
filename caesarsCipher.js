/*
Title: Caesar's Cipher

Description: One of the simplest and most widely known ciphers is a Caesar cipher, 
also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
  let arr = str.split('');
  let code;

  for(let i = 0; i < arr.length; i++){
    if(arr[i].match(/[A-Z]/i)){
      code = arr[i].charCodeAt(0);
      code -= 13;
      if(code < 65){
        code += 26;
      }
      arr[i] = String.fromCharCode(code);
    }
  }
  return arr.join('');
}