var isIsomorphic = function(s, t) {

  const sTotMap = new Map();
  const tToSMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const mappedVal = sTotMap.get(s[i]);
    if (!mappedVal) {
      if (tToSMap.get(t[i])) {
        return false;
      }
      sTotMap.set(s[i], t[i]);
      tToSMap.set(t[i], s[i]);
    } else if (mappedVal !== t[i]) {
      return false;
    }
  }
  return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("bbbaaaba", "aaabbbba"));
console.log(isIsomorphic("badc", "baba"));
