// Given a string S of lowercase letters, a duplicate removal consists of
// choosing two adjacent and equal letters, and removing them.

// We repeatedly make duplicate removals on S until we no longer can.

// Return the final string after all such duplicate removals have been made.
// It is guaranteed the answer is unique.

// Example 1:

// Input: "abbaca"
// Output: "ca"
// Explanation:
// For example, in "abbaca" we could remove "bb" since the letters are adjacent
// and equal, and this is the only possible move.The result of this move is that
// the string is "aaca", of which only "aa" is possible, so the final string is "ca".

var removeDuplicates = function (S) {
  var str = ""
  return remove(0, S);

  function remove(i, S) {

    console.log(i, S)
    if (i > S.length - 2) {
      str = S
      return S
    }

    if (S[i] === S[i + 1]) {
      var temp = S.split("");
      temp.splice(i, 2);
      temp = temp.join('')
      str = temp

      remove(0, temp)
    } else {
      str = S;
      remove(i + 1, S);
    }

    return str
  }
};

console.log(removeDuplicates("aaaaa"))

// Time Complexity - n // n-string length
// Space Complexity - 1
