

function lengthOfLongestSubstring(str) {
    // map of seen chars
    // window left, right
    // whenever right, is already seen, we move left to seenIndex + 1
    // compare the maxLen
    // if new maxLen is better, update bestStart
    // return bestStart, bestStart + maxLen

    const seen = new Map() // char, last seen index
    let left = 0, right = 0;
    let bestStart = 0;
    let maxLen = 0;

    for (let right = 0; right < str.length; right++) {
        const ch = str[right]
        if (seen.has(ch)) {
            left = seen.get(ch) + 1;
        }
        seen.set(ch, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    const out = str.slice(bestStart, bestStart + maxLen);
    console.log(out, out.length);
    return out;
}


lengthOfLongestSubstring("abcabcbb"); // 3  -> "abc"
lengthOfLongestSubstring("bbbbb");    // 1  -> "b"
lengthOfLongestSubstring("pwwkew");   // 3  -> "wke" (not "pwke" since substring must be contiguous)
lengthOfLongestSubstring("");         // 0
lengthOfLongestSubstring("dvdf");     // 3  -> "vdf"
lengthOfLongestSubstring("abba");     // 2  -> "ab" or "ba"
lengthOfLongestSubstring("tmmzuxt");  // 5  -> "mzuxt"

