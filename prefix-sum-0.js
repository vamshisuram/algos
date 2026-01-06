// Input: nums = [1, 2, 3, 4, 5, 6], i = 1, j = 3

// Prefix:       [1, 3, 6, 10, 15, 21]

            //  [i0, i0+i1, ... i0+...+i3]      // i1+i2+i3 ... p[i3] - p[i1 - 1]
// Output: 9


let nums = [1, 2, 3, 4, 5, 6], i = 1, j = 3;

function getSum(nums, i, j) {
    // build prefix
    // iterate once, at each i, sum with previous sumi - 1 iteration
    // k queries.. O(k)

    const len = nums.length;

    // p[0] = 0 .. sentinel
    let p = (new Array(len + 1)).fill(0);

    for (let i = 1; i < len + 1; i++) {
        p[i] = nums[i - 1] + p[i - 1];
    }

    p = p.slice(1);

    return p[j] - p[i - 1];


    // without prefix?
    // for each query.. we keep iterating and summing the numbers
    // k queries
    // (j1-i1) + (j2 - i2) + .... 
    // k * (O(n))


}

console.log(getSum(nums, i, j))