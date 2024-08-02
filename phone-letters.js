var letterCombinations = function (digits) {
  if (!digits) return [];
  if (digits.length === 1) {
    return [...mapping[digits]];
  }

  // pick start
  const start = digits[0];

  // for each element attach start
  const rest = digits.slice(1);

  const combs = letterCombinations(rest);

  let out = [];
  for (let letter of mapping[start]) {
    console.log(letter);
    for (let comb of combs) {
      out.push(letter + comb);
    }
  }

  return out;
};

const mapping = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqr",
  8: "stu",
  9: "vwx",
};

console.log(letterCombinations("2"));
console.log(letterCombinations(""));
