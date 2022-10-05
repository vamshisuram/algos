/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

  nums = nums.sort((a, b) => a - b);
  const sets = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let target = 0 - nums[i];
    if (target < 0) break;
    const matchingSets = getSets(nums, target, i);
    sets.push(...matchingSets);
  }

  return sets;

};

function getSets(nums, target, k) {
  const sets = [];

  for (let i = 0, j = nums.length - 1; i < j;) {
    if (i > 0 && nums[i] === nums[i-1]) i++;
    if (j + 1 < nums.length && nums[j] === nums[j+1]) j--;
    if (i === k) i++;
    if (j === k) j--;
    const sum = nums[i] + nums[j];
    if (sum === target) {
      sets.push([nums[k], nums[i], nums[j]]);
      i++;
    }
    if (sum > target) {
      j--;
    }
    if (sum < target) {
      i++;
    }
  }
  return sets;
}

// nums = [0, 0, 0]
nums = [-1, 0, 1, 2, -1, -4]
output = [[-1, -1, 2], [-1, 0, 1]]
// [[-1,-1,2],[-1,0,1],[-1,-1,2],[-1,0,1],[0,-1,1],[0,-1,1],[1,-1,0],[1,-1,0],[2,-1,-1]]
// [[-1,-1,2],[-1,0,1],[-1,-1,2],[-1,0,1],[0,-1,1],[0,-1,1]]
// [[-1,-1,2],[-1,0,1],[-1,-1,2],[-1,0,1],[0,-1,1]]
console.log(JSON.stringify(threeSum(nums)));