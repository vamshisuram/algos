
const sumPossible = (amount, numbers, memo = {}) => {
  if (amount < 0) return false
  if (amount === 0) return true

  if (amount in memo) return memo[amount]

  for (let n of numbers) {
    if (sumPossible(amount - n, numbers, memo)) {
      memo[amount] = true;
      return true;
    }
  }

  memo[amount] = false
  return false;

}

x = new Date()
console.log(sumPossible(888, [1,2,3,3,6,7,5, 12, 4, 1,2,3,45,6,4,3,2,1]));
y = new Date()

console.log(y - x);
