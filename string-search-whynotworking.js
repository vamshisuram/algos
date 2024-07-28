let inbounds;
let visited;
const stringSearch = (grid, s) => {
  // iterate
  // first letter match..
  // spread all directions nodes (i-1, i+1) - next letter match?
  // until we are at end of "s"

  const rows = grid.length;
  const cols = grid[0].length;

  inbounds = (i, j) => {
    return i >= 0 && i < rows && j >= 0 && j < cols;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === s[0]) {
        // horizontal / vertical checks
        visited = new Set();
        if (checkStr(i, j, s, grid)) {
          return true;
        }
      }
    }
  }
  return false;
};

function checkStr(i, j, s, grid, depth = 0) {
  if (depth === s.length - 1) return true;
  visited.add(`${i},${j}`);

  const neighbors = [];

  inbounds(i - 1, j) &&
    !visited.has(`${i - 1},${j}`) &&
    neighbors.push([i - 1, j, depth + 1]);
  inbounds(i + 1, j) &&
    !visited.has(`${i + 1},${j}`) &&
    neighbors.push([i + 1, j, depth + 1]);
  inbounds(i, j + 1) &&
    !visited.has(`${i},${j + 1}`) &&
    neighbors.push([i, j + 1, depth + 1]);
  inbounds(i, j - 1) &&
    !visited.has(`${i},${j - 1}`) &&
    neighbors.push([i, j - 1, depth + 1]);

  for (let [r, c, d] of neighbors) {
    visited.add(`${r},${c}`);
    if (grid[r][c] === s[d]) {
      return checkStr(r, c, s, grid, d);
    }
  }
  return false;

  // next depth level, next char
  // get neighbors, depth + 1
  // check if s[depth] matching and continue further - pick neighbors of that
  // check if already visited.. don't add
}

module.exports = {
  stringSearch,
};

const grid = [
  ["a", "b", "a"],
  ["t", "x", "x"],
  ["x", "x", "x"],
];
console.log(stringSearch(grid, "abat"));
