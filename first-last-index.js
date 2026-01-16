// During the search, mid can indeed be in the “middle”.
// But we don’t return mid when we
// first see nums[mid] ≥ x. Instead, we move hi = mid and
// keep looking left. Only when the interval collapses to a
// single point do we return it—this point is the leftmost
// feasible index.
function searchRange(nums, target) {
  // lower_bound: first index i with nums[i] >= target
  function lowerBound(arr, x) {
    let lo = 0,
      hi = arr.length; // [lo, hi)
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid] < x) lo = mid + 1;
      else hi = mid; // in BS, if equals we return index
      // but here, even if matches, it is set as high index
      // continues till lo === hi!!
      // this will give the first index

      // for last index.. target + 1

      //   because lowerBound doesn’t search for equality;
      // it finds the first index where nums[i] >= value. So:
    }
    return lo; // may be arr.length
  }

  const first = lowerBound(nums, target);
  if (first === nums.length || nums[first] !== target) {
    const out = [-1, -1];
    console.log(out);
    return out;
  }

  const last = lowerBound(nums, target + 1) - 1;
  const out = [first, last];
  console.log(out);
  return out;
}

searchRange([5, 7, 7, 8, 8, 10], 8); // [3,4]
searchRange([5, 7, 7, 8, 8, 10], 6); // [-1,-1]
searchRange([], 0); // [-1,-1]
searchRange([2, 2, 2, 2], 2); // [0,3]
searchRange([1, 3, 3, 3, 5], 3); // [1,3]
