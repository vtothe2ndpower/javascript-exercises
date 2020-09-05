/*
Title: Roman Numeral Converter

Description: Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
  let thousands, hundreds, tens, ones;

  thousands = Math.floor(num / 1000);
  num -= thousands * 1000;

  hundreds = Math.floor(num / 100);
  num -= hundreds * 100;

  tens = Math.floor(num / 10);
  num -= tens * 10;

  ones = num;

  let answer = '';
  let nums = [thousands, hundreds, tens, ones];
  let container = [
    {
      1: 'M',
      2: 'MM',
      3: 'MMM',
      4: 'MV',
      5: 'V'
    },
    {
      1: 'C',
      2: 'CC',
      3: 'CCC',
      4: 'CD',
      5: 'D',
      6: 'DC',
      7: 'DCC',
      8: 'DCCC',
      9: 'CM',
    },
    {
      1: 'X',
      2: 'XX',
      3: 'XXX',
      4: 'XL',
      5: 'L',
      6: 'LX',
      7: 'LXX',
      8: 'LXXX',
      9: 'XC',
    },
    {
      1: 'I',
      2: 'II',
      3: 'III',
      4: 'IV',
      5: 'V',
      6: 'VI',
      7: 'VII',
      8: 'VIII',
      9: 'IX',
    }
  ];

for(let i = 0; i < nums.length; i++){
  if(nums[i] !== 0){
    answer += container[i][nums[i]];
  }
}
return answer;
}
