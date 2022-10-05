
const isInBounds = (i, j, r, c) => {
  const rowInBounds = (0 <= i) && (i < r)
  const colInBounds = (0 <= j) && (j < c)
  return rowInBounds && colInBounds;
}

const getNeighbors = (grid, i, j, r, c, dist) => {
  const neighbors = [];
  isInBounds(i - 1, j, r, c) && grid[i - 1][j] !== "X" && neighbors.push([i - 1, j, dist])
  isInBounds(i + 1, j, r, c) && grid[i + 1][j] !== "X" && neighbors.push([i + 1, j, dist])
  isInBounds(i, j - 1, r, c) && grid[i][j - 1] !== "X" && neighbors.push([i, j - 1, dist])
  isInBounds(i, j + 1, r, c) && grid[i][j + 1] !== "X" && neighbors.push([i, j + 1, dist])
  return neighbors
}

const closestCarrot = (grid, startRow, startCol) => {
  // push neighbors into queue
  const r = grid.length
  const c = grid[0].length

  // navigate, and stop once you reach C
  const q = [[startRow, startCol]]

  const visited = {};

  while (q.length) {
    let [i, j, d = 0] = q.shift()
    if (visited[`${i},${j}`]) continue
    if (grid[i][j] === "C") return d;
    visited[`${i},${j}`] = true;
    const newNeigh = getNeighbors(grid, i, j, r, c, d + 1)
    for (let [x, y, d2] of newNeigh) {
      if (!visited[`${x},${y}`]) {
        q.push([x, y, d2]);
      }
    }
  }
  return -1;
}

module.exports = {
  closestCarrot,
};


const grid = [
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'O', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['O', 'X', 'C', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['C', 'O', 'O', 'O', 'O'],
];

console.log(closestCarrot(grid, 1, 2)); // -> 4
