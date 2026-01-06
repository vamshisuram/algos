// min no. of jumps to reach last index
let nums = [2, 3, 1, 1, 4]   // false - [3, 2, 1, 0, 4]

function minJumps(nums) {
    let farthest = 0;
    let edge = 0;
    let jumps = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (i > farthest) return -1;
        farthest = Math.max(farthest, i + nums[i]);
        if (i === edge) {
            jumps++;
            edge = farthest;
            if (edge >= nums.length - 1) return jumps;
        }
    }

    // if loop ends without covering last, it's unreachable
    return edge >= n - 1 ? jumps : -1;

}

console.log(minJumps(nums))