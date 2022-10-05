var maxSlidingWindow = function (nums, k) {
  let n = nums.length;
  let wsCount = n - k + 1;

  let max = -Infinity;
  let initialIndex = null;
  for (let i = 0; i < wsCount; i++) {
    let newSum = 0;
    for (let j = i; j < i + k; j++) {
      newSum += nums[j];
    }
    if (newSum > max) {
      max = newSum;
      initialIndex = i;
    }
  }
  console.log("max: ", max);
  let maxArr = [];
  for (i = initialIndex; i < initialIndex + k; i++) {
    maxArr.push(nums[i]);
  }
  console.log("maxArr: ", maxArr);
  return maxArr;
};

maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);