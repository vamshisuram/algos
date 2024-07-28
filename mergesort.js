const mergeSort = (nums) => {
  // recursive
  // split into 2 until single number

  // recursive while loop biggest part - iteratively i, j - pick small build new array return
  if (nums.length === 1) return nums;

  const mid = nums.length / 2;
  const nums1 = nums.slice(0, mid);
  const nums2 = nums.slice(mid);
  const l1 = nums1.length;
  const l2 = nums2.length;

  let nums1Out = mergeSort(nums1);
  let nums2Out = mergeSort(nums2);

  // return merged sorted
  let i = 0;
  let j = 0;
  const out = [];
  while (true) {
    if (i >= l1) {
      out.push(...nums2Out.slice(j));
      break;
    }
    if (j >= l2) {
      out.push(...nums1Out.slice(i));
      break;
    }

    if (nums1Out[i] < nums2Out[j]) {
      out.push(nums1Out[i]);
      i++;
    } else {
      out.push(nums2Out[j]);
      j++;
    }
  }
  return out;
};

const numbers = [10, 4, 42, 5, 8, 100, 5, 6, 12, 40];
console.log(mergeSort(numbers));
// -> [ 4, 5, 5, 6, 8, 10, 12, 40, 42, 100 ]
