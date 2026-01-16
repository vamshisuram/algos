


// left, right
// iterate - if str[right] is in str.slice(left, right) or if it's last
// stop update max len seen.. Math.max curr, max


function lengthOfLongestSubstring(str) {
    let l = 0;       // left bound of window (inclusive)
    let r = 0;       // right bound of window (exclusive)
    let max = 0;
    let lmax = 0, rmax = 0;

    while (r < str.length) {
        const ch = str[r];
        const prevstr = str.slice(l, r); // window excludes r

        const dupPos = prevstr.indexOf(ch);
        if (dupPos !== -1) {
            // Move left just past the previous occurrence within the window
            l = l + dupPos + 1;
        } else {
            // We can safely include ch
            r++; // expand window
            // Update max after expansion
            const len = r - l;
            if (len > max) {
                max = len;
                lmax = l;
                rmax = r;
            }
        }
    }

    return { length: max, substring: str.slice(lmax, rmax) };
}


function lengthOfLongestSubstring0(str) {
    let l = 0, r = 0;
    let max = 0;
    let lmax = 0, rmax = 0;
    for (let i = 0; i <= str.length; i++) {
        let prevstr = str.slice(l, r);
        if (prevstr.indexOf(str[i]) !== -1 || i === str.length) {
            if (max > prevstr.length) {
                // ..
            } else {
                max = prevstr.length;
                lmax = l;
                rmax = r;
            }
            l = str.indexOf(str[i], l);
            console.log("L >>>", l);
            r = l;
        } else {
            r++;
        }
    }

    return {length: max, substring: str.slice(lmax, rmax)}

}


console.log(lengthOfLongestSubstring("abcabcbb"));
// -> { length: 3, substring: "abc" }


console.log(lengthOfLongestSubstring("dvdf"));
// -> { length: 3, substring: "vdf" }

console.log(lengthOfLongestSubstring("bbbbb"));
// -> { length: 1, substring: "b" }

console.log(lengthOfLongestSubstring("pwwkew"));
// -> { length: 3, substring: "wke" }



function lengthOfLongestSubstring2(s) {
    const lastSeen = new Map(); // char -> last index
    let left = 0;
    let maxLen = 0;
    let startOfBest = 0;

    for (let right = 0; right < s.length; right++) {
        const ch = s[right];

        // If we've seen ch inside the current window, move left
        if (lastSeen.has(ch) && lastSeen.get(ch) >= left) {
            left = lastSeen.get(ch) + 1;
        }

        // Update last seen position of ch
        lastSeen.set(ch, right);

        // Update best window
        const windowLen = right - left + 1;
        if (windowLen > maxLen) {
            maxLen = windowLen;
            startOfBest = left;
        }
    }

    // Optional: return both length and substring
    const substring = s.slice(startOfBest, startOfBest + maxLen);
    return { length: maxLen, substring };
}
