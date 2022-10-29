/*
non adjacent sum
Write a function, nonAdjacentSum, that takes in an array of numbers as an argument. The function should return the maximum sum of non-adjacent elements in the array. There is no limit on how many elements can be taken into the sum as long as they are not adjacent.

For example, given:

[2, 4, 5, 12, 7]

The maximum non-adjacent sum is 16, because 4 + 12.
4 and 12 are not adjacent in the array.

test_00:
const nums = [2, 4, 5, 12, 7];
nonAdjacentSum(nums); // -> 16
test_01:
const nums = [7, 5, 5, 12];
nonAdjacentSum(nums); // -> 19

*/

const nonAdjacentSum = (nums, i = 0, memo = {}) => {
  if (i >= nums.length) return 0;

  if (memo[i]) return memo[i]

  if (i === nums.length - 1) {
    memo[i] = nums[i]
    return memo[i]
  }
  if (i === nums.length - 2) {
    memo[i] = Math.max(nums[i], nums[i+1])
    return memo[i]
  }

  return Math.max(
    nums[i] + nonAdjacentSum(nums, i + 2, memo),
    nums[i + 1] + nonAdjacentSum(nums, i + 3, memo)
  );

};

let nums = [2, 4, 5, 12, 7];
console.log(nonAdjacentSum(nums)); // 16

nums = [7, 5, 5, 12];
console.log(nonAdjacentSum(nums)); // 19



























