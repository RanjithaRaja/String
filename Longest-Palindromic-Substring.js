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
  let strArray = s.split("");
  let longest = "";
  let word;
  let wordArray;

  for (let i = 0; i <= strArray.length - 1; i++) {
    word = "";
    for (let j = i; j <= strArray.length - 1; j++) {
      word += strArray[j];
      wordArray = word.split("");

      if (word === wordArray.reverse().join("")) {
        longest = longest.split("").length > wordArray.length ? longest : word;
        // console.log(longest);
      }

    }
  }

  return longest;
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("abcda"));

// Time Complexity - n^2 // n-string length
// Space Complexity - n // n-string length
