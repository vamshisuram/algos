/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let charMap = new Map();
    let seen = {};
    for (let i = 0; i < s.length; i++) {
        if (!seen[s[i]]) {
          seen[s[i]] = true;
          charMap.set(s[i], i);
        } else {
          charMap.delete(s[i]);
        }
    }

    for (let [k, v] of charMap) {
        if (v !== undefined) {
            return v;
        }
    }

    return -1;

};

// s = "leetcode"
// console.log(firstUniqChar(s));

s = "aabb"
console.log(firstUniqChar(s));