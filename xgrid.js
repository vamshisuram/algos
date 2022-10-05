/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
  const m = parseInt((grid.length - 1) / 2);

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= m; j++) {
      if (i === j || (i === m - j) || (m - i === j) || (m - i === m - j)) {
        if (grid[i][j] === 0) return false;
        if (grid[i][m - j] === 0) return false;
        if (grid[m - i][j] === 0) return false;
        if (grid[m - i][m - j] === 0) return false;
      } else {
        if (grid[i][j] !== 0) return false;
        if (grid[i][m - j] !== 0) return false;
        if (grid[m - i][j] !== 0) return false;
        if (grid[m - i][m - j] !== 0) return false;
      }
    }
  }
  return true;
};

console.log(checkXMatrix([[2, 0, 0, 1], [0, 3, 1, 0], [0, 5, 2, 0], [4, 0, 0, 2]]));