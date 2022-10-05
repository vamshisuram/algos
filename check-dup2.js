var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const existsIdx = map.get(nums[i]);
    if (existsIdx !== undefined && (i - existsIdx) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
}


function checkDuplicate(arr, startIdx, endIdx) {
    const len = arr.length;
    if (endIdx > len - 1) {
        endIdx = len - 1;
    }
    for (let i = startIdx; i <= endIdx - 1; i++) {
        for (let j = i + 1; j <= endIdx; j++) {
            if (arr[i] === arr[j]) {
                console.log(i, j);
                return true;
            }
        }
    }
    return false;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicateLoop = function(nums, k) {
    if (k === 0) return false;
    const len = nums.length;
    if (len < 2) return false;

    let containsDuplicate = false;
    for (let i = 0; i <= len - 2; i++) {
        containsDuplicate = checkDuplicate(nums, i, i + k);
        if (containsDuplicate) return true;
    }
    return containsDuplicate;
};

nums = [1, 2, 3, 1]
k = 3
console.log(nums, ", ", k, " => ", containsNearbyDuplicate(nums, k));


nums = [1, 0, 1, 1]
k = 1
console.log(nums, ", ", k, " => ", containsNearbyDuplicate(nums, k));


nums = [1, 2, 3, 1, 2, 3]
k = 2
console.log(nums, ", ", k, " => ", containsNearbyDuplicate(nums, k));


// [1, 2, 3, 1]
// 3
// [1, 0, 1, 1]
// 1
// [1, 2, 3, 1, 2, 3]
// 2

// true, t, f