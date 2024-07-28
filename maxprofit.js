const maxProfit = (prices) => {
  let b = prices[0];
  let s = prices[1];
  let profit = Math.max(s - b, 0);
  let len = prices.length;
  if (len <= 2) return profit;

  for (let i = 2; i < len; i++) {
    const val = prices[i];

    if (val < b) {
      b = val;
    } else {
      const currProfit = val - b;
      if (currProfit > profit) {
        profit = currProfit;
      }
    }
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));

// [7,1,5,3,6,4] - 5

// [7,6,4,3,1] - 0
