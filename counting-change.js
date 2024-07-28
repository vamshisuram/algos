/*
counting change
Write a function, countingChange, that takes in an amount and an array of coins. The function should return the number of different ways it is possible to make change for the given amount using the coins.

You may reuse a coin as many times as necessary.

For example,

countingChange(4, [1,2,3]) -> 4

There are four different ways to make an amount of 4:

1. 1 + 1 + 1 + 1
2. 1 + 1 + 2
3. 1 + 3
4. 2 + 2
test_00:
countingChange(4, [1, 2, 3]); // -> 4
test_01:
countingChange(8, [1, 2, 3]); // -> 10

*/

const countingChange = (amount, coins, count = 0) => {
  if (amount === 0) return 0;
  if (amount < 0) return -1;

  for (let c of coins) {
    let trackCount = 0;
    if (countingChange(amount-c, coins) !== -1) {
      trackCount = 1 + countingChange(amount - c, coins)
    }
    count += trackCount;
  }

  return count;
};

module.exports = {
  countingChange,
};

console.log(countingChange(4, [1, 2, 3])); // 4
console.log(countingChange(8, [1, 2, 3])); // 10

