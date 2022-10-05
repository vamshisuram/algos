
const dfs = (grid, i, j, visited) => {
  const r = grid.length
  const c = grid[0].length
  const isRowInBounds = (0 <= i) && (i < r)
  const isColInBounds = (0 <= j) && (j < c)

  if (!isRowInBounds || !isColInBounds) return;

  if (visited[`${i},${j}`]) return;

  visited[`${i},${j}`] = true;
  if (grid[i][j] === 'W') return;

  // get neighbor nodes - and hit dfs
  dfs(grid, i-1, j, visited)
  dfs(grid, i+1, j, visited)
  dfs(grid, i, j-1, visited)
  dfs(grid, i, j+1, visited)
};


const islandCount = (grid) => {
  const r = grid.length
  const c = grid[0].length
  // loop

  // visited
  const visited = {}; // 'i,j'
  let count = 0;

  // land => dfs neighbors (visited mark) DFS / BFS - until you reach W - return
  // if BFS, we would have already encountered


  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (visited[`${i},${j}`]) continue;

      if (grid[i][j] === 'L') {
        dfs(grid, i, j, visited);
        count++;
      } else {
        visited[`${i},${j}`] = true;
      }
    }
  }

  return count;
};

module.exports = {
  islandCount,
};


const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

console.log(islandCount(grid)); // -> 3