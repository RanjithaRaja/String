// We are given two strings, A and B.

// A shift on A consists of taking string A and moving the leftmost character to the rightmost position.For example, if A = 'abcde', then it will be 'bcdea' after one shift on A.Return True if and only if A can become B after some number of shifts on A.

//   Example 1:
// Input: A = 'abcde', B = 'cdeab'
// Output: true

// Example 2:
// Input: A = 'abcde', B = 'abced'
// Output: false
// Note:

// A and B will have length at most 100.

var rotateString = function (A, B) {
  let result = false;

  if (A === B) {
    return true
  }

  function rotateByOnePosition(currentStr) {
    let str = [];

    for (let i = 0; i < currentStr.length - 1; i++) {
      str[i] = currentStr[i + 1];
    }

    str[currentStr.length - 1] = currentStr[0]

    return str.join("");
  }

  for (let i = 0; i < A.length - 1; i++) {
    A = rotateByOnePosition(A)

    if (A === B) {
      result = true
    }
  }

  return result
};

console.log(rotateString("abcde", "cdeab"));
console.log(rotateString("abcde", "abced"));
console.log(rotateString("", ""));

// Time Complexity - Order of n^2
// Space Complexity - Order of 1
