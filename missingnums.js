var findDisappearedNumbers = function(nums) {
    const sortedNums = nums.sort((a, b) => a - b);
    let missing = [];
    let expectedNum = 1;
    for (let i = 0; i < nums.length; i++) {
      if (sortedNums[i] === expectedNum) {
        expectedNum++;
      }

      if (sortedNums[i] < expectedNum) {
        continue;
      }

      if (sortedNums[i] > expectedNum) {
        // diff and push that many elements to missing
        while (sortedNums[i] - expectedNum > 1) {
          missing.push(expectedNum);
          expectedNum++;
        }
      }
    }
    return missing;
};

var findDisappearedNumbers2 = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i]);
    let idx = num - 1;
    nums[idx] = Math.abs(nums[idx]) * -1;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) res.push(i + 1);
  }
  return res;
  // Time Complexity: O(N)
  // Space Complexity: O(1)
};

var findDisappearedNumbers3 = function (nums) {

  for (let n of nums) {
    let idx = Math.abs(n) - 1;
    if (nums[idx] > 0) {
      nums[idx] = nums[idx] * -1;
    }
  }

  const missing = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      missing.push(i + 1);
    }
  }
  return missing;
};

// nums = [1,1]; // [4, 3, 2, 7, 8, 2, 3, 1];
nums = [4, 3, 2, 7, 8, 2, 3, 1];
// [1, 2, 2, 3, 3, 4, 7, 8]

console.log(findDisappearedNumbers3(nums));