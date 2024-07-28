const lexicalOrder = (word1, word2, alphabet) => {
  const length = Math.max(word1.length, word2.length);
  for (let i = 0; i < length; i += 1) {
    const char1 = word1[i];
    const char2 = word2[i];
    const value1 = alphabet.indexOf(char1);
    const value2 = alphabet.indexOf(char2);
    if (value1 < value2) {
      return true;
    } else if (value1 > value2) {
      return false;
    }
  }
  return true;
};

const alphabet = "abcdefghijklmnopqrstuvwxyz";
lexicalOrder("apple", "dock", alphabet);
