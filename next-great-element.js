const nums = [2, 1, 2, 4, 3]
// Expected NGE →[4, 2, 4, -1, -1]


function nextGreat(nums) {
    const s = []

    const len = nums.length;
    const out = (new Array(len)).fill(-1);
    for (let i = 0; i < len; i++) {
        if (!s.length) { 
            s.push(i)
        }
        // if we just use numbers in the stack, 
        // figuring out at what index, we should put nextGreat not possible
        // so we use indexes
        while (nums[i] > nums[s[s.length - 1]] && s.length > 0) {
            out[s.pop()] = nums[i]
        }
        s.push(i)
    }
    return out;
}

console.log(nextGreat(nums))