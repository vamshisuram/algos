var addDigits = function(num, memo = {}) {
  if (num <= 9) return num;
  if (memo[num]) {
    return memo[num];
  }
  // get digits
  // get sum
  // update memo for num
  // return

  let sum = 0;
  while (num > 9) {
    sum += (num % 10);
    num = parseInt(num / 10);
  }
  sum += num;
  memo[num] = sum;

  return addDigits(sum, memo);

};

console.log(addDigits(38));
console.log(addDigits(38));