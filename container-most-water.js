
function maxArea(heights) {
    // (j - i) width
    // height max is the min height from the both indices
    // (j - i) * (min (h[j], h[i]))
    // greedy algo.. move shorter to taller side.. expecting more for the same delta change (j-i)
    // two pointer
    const len = heights.length;
    let l = 0, r = len - 1;
    let max = 0;
    while (l < r) {
        const currval = (r - l) * Math.min(heights[l], heights[r]);
        max = Math.max(max, currval);
        // if heights[j] is small, r--
        // 
        if (heights[l] <= heights[r]) {
            l++;
        } else {
            r--;
        }
    }
    console.log("max::", max);
    return max;
}


maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); // 49
maxArea([1, 1]);               // 1
maxArea([4, 3, 2, 1, 4]);         // 16  (indices 0 and 4)
maxArea([1, 2, 1]);             // 2
