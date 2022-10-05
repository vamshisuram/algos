var singleNumber = function (nums) {
  const notFound = {};
  for (let num of nums) {
    if (notFound[num]) {
      delete notFound[num];
    } else {
      notFound[num] = 1;
    }
  }

  let keys = Object.keys(notFound);
  return keys[0];
};

function singleNumber2(nums) {
  return nums.reduce((prev, curr) => {
    const x = prev ^ curr;
    console.log("X::::", prev, curr, x);
    return x;
  }, 0);
}

console.log(singleNumber2([4, 1, 2, 1, 2]));