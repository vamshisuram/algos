/*

summing squares
Write a function, summingSquares, that takes a target number as an argument. The function should return the minimum number of perfect squares that sum to the target. A perfect square is a number of the form (i*i) where i >= 1.

For example: 1, 4, 9, 16 are perfect squares, but 8 is not perfect square.

Given 12:

summingSquares(12) -> 3

The minimum squares required for 12 is three, by doing 4 + 4 + 4.

Another way to make 12 is 9 + 1 + 1 + 1, but that requires four perfect squares.
test_00:
summingSquares(8); // -> 2
test_01:
summingSquares(9); // -> 1


closest square?
- squareroot of that number., next lower whole number
12 => sqrt(12) => 3.x ... now 3^2 + ___
coins [1^2,2^2,3^2] = [1, 4, 9]
we can use any number of them.. but we need min count!

*/

const minCount = (sum, nums, memo = {}) => {
  if (sum === 0) return 0
  if (sum < 0) return Infinity

  if (memo[sum]) return memo[sum]

  let min = Infinity;
  for (let n of nums) {
    let newMin = 1 + minCount(sum - n, nums, memo)
    if (newMin < min) {
      min = newMin
    }
  }
  memo[sum] = min;

  return min;
}

const summingSquares = (target) => {
  const root = Math.floor(Math.sqrt(target))

  const nums = []
  let i = 1
  while (i <= root) {
    nums.push(i * i)
    i++;
  }

  return minCount(target, nums)
}

console.log(summingSquares(11));  // 3






















