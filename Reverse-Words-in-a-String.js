// Given an input string, reverse the string word by word.

// Example 1:

// Input: "the sky is blue"
// Output: "blue is sky the"

// Example 2:

// Input: "  hello world!  "
// Output: "world! hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.

// Example 3:

// Input: "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

var reverseWords = function (s) {
  let str = s.trim().split(" ")
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] != "") {
      result += str[i] + " "
    }
  }

  return result.trim()
};

console.log(reverseWords("  hello world!  "));
console.log(reverseWords("the sky is blue"))
console.log(reverseWords("a good   example"))
