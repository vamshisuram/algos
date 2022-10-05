var intersect = function(nums1, nums2) {
    const c1 = {};
    for (let n of nums1) {
      c1[n] = c1[n] ? c1[n] + 1 : 1;
    }

    const c2 = {};
    for (let n of nums2) {
      c2[n] = c2[n] ? c2[n] + 1 : 1;
    }

    const output = [];
    for (k in c1) {
      if (k in c2) {
        const min = c1[k] < c2[k] ? c1[k] : c2[k];
        output.push(...(new Array(min)).fill(Number(k)));
      }
    }
    return output;
};

nums1 = [4, 9, 5];
nums2 = [9, 4, 9, 8, 4];

console.log(intersect(nums1, nums2));