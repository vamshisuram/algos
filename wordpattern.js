var wordPattern = function(pattern, s) {

  console.log(arguments);
  console.log(...(Array.prototype.reverse.call(arguments)));

  const words = s.split(" ");
  if (pattern.length !== words.length) return false;

  const forwardCache = {};
  const backwardCache = {};

  for (let i = 0; i < pattern.length; i++) {
    let val = forwardCache[pattern[i]];
    if (!val) {
      if (backwardCache[words[i]]) {
        return false;
      } else {
        forwardCache[pattern[i]] = words[i];
        backwardCache[words[i]] = forwardCache[pattern[i]];
      }
    } else if (val !== words[i]) {
      return false;
    }
  }
  return true;
};

pattern = "abba";
s = "dog cat cat dog";
console.log(wordPattern(pattern, s));

pattern = "abba";
s = "dog cat cat fish"
console.log(wordPattern(pattern, s));

pattern = "aaaa"
s = "dog cat cat dog"
console.log(wordPattern(pattern, s));