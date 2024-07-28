var productExceptSelf = function (nums) {
  // prefix arr
  const prefixArr = [];
  let pre = 1;
  for (let n of nums) {
    prefixArr.push(pre);
    pre = pre * n;
  }
  console.log(prefixArr);

  // postfix arr
  const postfixArr = [];
  let post = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    postfixArr[i] = post;
    post = post * nums[i];
  }
  console.log(postfixArr);

  const out = [];
  for (let i = 0; i < nums.length; i++) {
    out[i] = prefixArr[i] * postfixArr[i];
  }

  return out;
};

console.log(productExceptSelf([1, 2, 3, 4]));
