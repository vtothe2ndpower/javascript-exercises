/*
Title: Palindrome Checker

Description: Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
Note - You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same 
case (lower or upper case) in order to check for palindromes.
We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/


function palindrome(str) {
  // Make a copy of the passed in str
  let word = str.concat('');
  // Let's get rid of any non-alphanumeric characters
  word = word.replace(/\W/g, '');
  // Let's also get rid of any underscores
  word = word.replace(/_/g, '');
  // Make the remaining word lower case
  word = word.toLowerCase();

  // Make a copy of our cleaned word
  let reversedWord = word.concat('');
  // Now let's reverse it and test
  reversedWord = reversedWord.split('').reverse().join('');

  return word === reversedWord;
}