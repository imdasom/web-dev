/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  var strLength = s.length;
  for(var i=0, j=strLength-1; i<strLength/2; i++, j--) {
    var temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }
};

var str1 = ['h','e','l','l','o'];
var str2 = ['H','a','n','n','a','h'];
reverseString(str1);
reverseString(str2);
console.log(str1);
console.log(str2);

/*
Input: ['h','e','l','l','o']
Output: ['o','l','l','e','h']

Input: ['H','a','n','n','a','h']
Output: ['h','a','n','n','a','H']
 */