const nextClimb = (n, memo) => {
  if (n in memo) return memo[n];
  if (n < 0) {
    return 0;
  }

  if (n === 0) {
    return 1;
  }
  const climbs = nextClimb(n - 1, memo) + nextClimb(n - 2, memo);
  memo[n] = climbs;
  return memo[n];
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const memo = {};
  return nextClimb(n, memo);
};

climbStairs(3);
