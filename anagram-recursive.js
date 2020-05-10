var isAnagram = function (s, t) {

  if (s === "" && t === "") {
    return true;
  }

  function getAllPerm(s) {
    let result = [];

    if (s.length === 1) {
      result.push(s);
      return result;
    }

    for (let i = 0; i < s.length; i++) {
      let firstChar = s[i];

      let charLeft = s.substring(0, i) + s.substring(i + 1);
      let innerPerm = getAllPerm(charLeft);

      for (let j = 0; j < innerPerm.length; j++) {
        result.push(firstChar + innerPerm[j])
      }
    }

    return result
  }

  let allPerm = getAllPerm(s);

  for (let i = 0; i < allPerm.length; i++) {
    if (allPerm[i] === t) {
      return true
    }
  }

  return false;
};

console.log(isAnagram("dgncpmbgmg", "dgggsmmtnc"))
