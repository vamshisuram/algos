
const maxProfit = function (prices, i = 0, maxAfterIndex = {}) {
  if (i === prices.length - 2) {
    return prices[i + 1] - prices[i];
  }
  let currBuy = prices[i];
  if (!maxAfterIndex[i]) {
    maxAfterIndex[i] = Math.max(...prices.slice(i + 1));
  }
  const currProfit = maxAfterIndex[i] - currBuy;
  return Math.max(maxProfit(prices, i + 1, maxAfterIndex), currProfit, 0);
};

const prices = [7, 6, 4, 3, 1] // [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));  // 5