// Given a string s, find the longest palindromic substring in s.You may assume that the
// maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
//   Example 2:

// Input: "cbbd"
// Output: "bb"

var longestPalindrome = function (s) {
  let wordArray = s.split("");
  let resStr = "";
  let resStrLen = 0;
  let wordLen = 0;

  return findLP(0, "", wordArray);

  function findLP(i, word, wordArray) {

    if (word !== "") {
      if (word === word.split("").reverse().join("")) {
        resStrLen = resStr.split("").length;
        wordLen = word.split("").length;

        // console.log(word, wordLen, resStr, resStrLen);
        resStr = resStrLen > wordLen ? resStr : word

      }
    }

    if (i >= wordArray.length) {
      return resStr
    }

    findLP(i + 1, word + wordArray[i], wordArray);
    findLP(i + 1, wordArray[i], wordArray);

    console.log(resStr, i);
    return resStr

  }
};

console.log(longestPalindrome("abadd"), "jkh")
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("abcda"));

// Time Complexity - 2^n // n-string length
// Space Complexity - n // n-string length
