// can you reach the last index?
const nums = [3, 2, 1, 0, 4] // [2, 3, 1, 5, 4] // [2, 3, 1, 1, 4]

// at each index, maxReach? nextMaxReach how much?
// as long as maxReach is greater than index, we are good. else stuck

function check(nums) {
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {
        if (maxReach === nums.length - 1) return true;
        if (i > maxReach) return false;
        maxReach = Math.max(maxReach, i + nums[i])
    }
    return false;
}


console.log(check(nums))