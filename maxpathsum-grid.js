
const maxPathSum = (grid, memo = {}, i = 0, j = 0) => {
  if (memo[`${i},${j}`]) return memo[`${i},${j}`]

  const rows = grid.length;
  const cols = grid[0].length;

  if (i >= rows || j >= cols) return 0;

  // increase i or j (next elm) - while loop until ij=n-1, sum +

  let max = 0;

  max = Math.max(
    grid[i][j] + maxPathSum(grid, memo, i, j + 1),
    grid[i][j] + maxPathSum(grid, memo, i + 1, j),
  )
  memo[`${i},${j}`] = max;

  return memo[`${i},${j}`];

};

module.exports = {
  maxPathSum,
};


const grid = [
  [1, 2, 8, 1],
  [3, 1, 12, 10],
  [4, 0, 6, 3],
];

console.log(maxPathSum(grid)); // -> 36