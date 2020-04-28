// Given a string s, find the longest palindromic substring in s.You may assume that the
// maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
//   Example 2:

// Input: "cbbd"
// Output: "bb"

let longestPalindrome = function (s) {
  if (s.length <= 1) return s

  let longest = "";
  let i, j;

  // construct dp
  const dp = [...new Array(s.length)].map(_ => new Array(s.length).fill(0));

  // For one char
  for (i = 0; i <= s.length - 1; i++) {
    dp[i][i] = 1;
    longest = s[i];
  }

  // For two char
  for (i = 0; i <= s.length - 2; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = 1
      longest = s.substring(i, i + 2)
    }
  }

  // For three and above char
  for (i = s.length - 2; i >= 0; i--) {
    for (j = i + 2; j <= s.length - 1; j++) {
      console.log(i, j, s[i], s[j])
      if (s[i] === s[j] && dp[i + 1][j - 1] === 1) {
        dp[i][j] = 1;
        longest = longest.length > s.substring(i, j + 1).length ? longest : s.substring(i, j + 1)
      }
    }
  }

  console.log(dp, longest);

  return longest
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("abcda"));

// Time Complexity - n^2 // n-string length
// Space Complexity - n^2 // n-string length
