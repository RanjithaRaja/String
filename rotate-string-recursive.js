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

  return RS(0, A, B);

  function RS(i, a, b) {
    if (a === b) {
      return true
    }

    if (i >= a.length) {
      return result;
    }

    function rotateByOnePosition(currentStr) {
      let str = [];

      for (let i = 0; i < currentStr.length - 1; i++) {
        str[i] = currentStr[i + 1];
      }
      str[str.length] = currentStr[0]

      return str.join("");
    }

    a = rotateByOnePosition(a)

    if (a === b) {
      result = true;
      return result
    }

    RS(i + 1, a, b);

    return result
  }
}

console.log(rotateString("abcde", "cdeab"));
console.log(rotateString("abcde", "abced"));
console.log(rotateString("", ""));

// Time Complexity - Order of n^2
// Space Complexity - Order of 1
