var longestCommonPrefix = function (strs) {
  let str = strs[0];
  if (!str.length) return '';
  let common = '';
  for (let i = 0; i < str.length; i++) {
    const part = str[i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== part) {
        return common;
      }
    }
    common = common + part;
  }
  return common;
};

// strs = ["flower", "flow", "flight"];

// strs2 = ["dog", "racecar", "car"];
strs3 = ["a"];

console.log(longestCommonPrefix(strs3));
console.log(longestCommonPrefix(strs3));
console.log(longestCommonPrefix(strs3));