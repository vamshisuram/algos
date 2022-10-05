var moveZeroes = function(nums) {
    let zPos = null;
    for (let i = 0; i < nums.length; i++) {
      if (zPos === null && nums[i] === 0) {
        zPos = i;
      }
      if (nums[i]) {
        nums[zPos] = nums[i];
        zPos++;
      }
    }

    for (let j = zPos; j < nums.length; j++) {
      nums[j] = 0;
    }
    return nums;
};

console.log(moveZeroes([0, 0, 1]));
// console.log(moveZeroes([0, 1, 0, 3, 12]));