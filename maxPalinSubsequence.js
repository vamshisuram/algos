const maxPalinSubsequence = (str, memo = {}) => {
    if (str in memo) return memo[str]
    // console.log("STR>>>>", str)
    if (isPalindrome(str)) {
      memo[str] = str.length;
      // console.log("matched...", str)
      return str.length;
    } else {
      // keep dropping and get maxPalinSubsequence
      let maxlen = 0;
      for (let i = 0; i < str.length; i++) {
        const substr = getSubstr(str, i)
        // console.log("substr....", substr)
        maxlen = Math.max( maxPalinSubsequence(substr, memo), maxlen )
      }
      memo[str] = maxlen;
      return maxlen;
    }
  };
  
  const isPalindrome = (str) => {
    const isYes = [...str].reverse().join('') === str
    // console.log("str, isYes", str, isYes)
    return isYes;
  }
  
  const getSubstr = (str, idx) => {
    if (idx === 0) {
      return str.slice(1)
    }
    if (idx === str.length - 1) {
      return str.slice(0, idx)
    }
    // console.log("str, idx", str, idx)
    return str.slice(0, idx) + str.slice(idx + 1);
  }
  
  module.exports = {
    maxPalinSubsequence,
  };
  
  // console.log(maxPalinSubsequence("luwxult"))
  // console.log(maxPalinSubsequence("abxa"))
  // console.log(maxPalinSubsequence("chartreusepugvefghha"));
  console.log(maxPalinSubsequence("chartreusepugvicefree"));
  