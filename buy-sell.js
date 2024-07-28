const maxProfit = (prices) => {
  let localMin = prices[0];
  let maxProfit = 0;
  for (let dayPrice of prices) {
    if (dayPrice < localMin) {
      localMin = dayPrice;
    }
    let profit = dayPrice - localMin;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
};

const maxProfit1 = (prices) => {
  if (prices.length === 2) {
    return prices[1] - prices[0];
  }

  const nextPrices = prices.slice(1);
  const bestProfit = Math.max(...nextPrices) - prices[0];
  return Math.max(maxProfit(nextPrices), bestProfit);
};

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // 5
