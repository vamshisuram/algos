
const inbounds = (grid, i, j) => {
  const r = grid.length;
  const c = grid[0].length;

  const rowInbounds = 0 <= i && i < r;
  const colInbounds = 0 <= j && j < c;

  return rowInbounds && colInbounds
}

const explore = (grid, i, j, visited, landnodes) => {
  if (visited[`${i},${j}`]) return;
  if (!inbounds(grid, i, j)) return;

  visited[`${i},${j}`] = true;
  if (grid[i][j] === "W") return;

  landnodes.push([i, j, 0])

  // explore neighbors
  explore(grid, i - 1, j, visited, landnodes)
  explore(grid, i + 1, j, visited, landnodes)
  explore(grid, i, j - 1, visited, landnodes)
  explore(grid, i, j + 1, visited, landnodes)
}


const bestBridge = (grid) => {
  const r = grid.length;
  const c = grid[0].length;

  const visited = {}
  const landnodes = []

  // figure one island
  outer: for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] === "L") {
        explore(grid, i, j, visited, landnodes);
        break outer;
      }
    }
  }

  // all points dist 0, and breadth first spread neighbors dist+1 push to queue
  const newVisited = {};

  const landnodeMapping = {}
  for (let [i, j] of landnodes) {
    landnodeMapping[`${i},${j}`] = true
  }

  const q = landnodes;

  let dist = 0
  while (q.length) {
    const [i, j, d] = q.shift()
    if (newVisited[`${i},${j}`]) continue;
    newVisited[`${i},${j}`] = true
    // push neighbors i+1...
    if (!landnodeMapping[`${i},${j}`] && grid[i][j] === "L") {
      dist = d - 1;
      break;
    }
    // before pushing check if it's already there in queue
    // exploreBridge(i, j, dist, grid, q, landnodeMapping, newVisited)
    inbounds(grid, i - 1, j) && !newVisited[`${i - 1},${j}`] && q.push([i - 1, j, d + 1]);
    inbounds(grid, i + 1, j) && !newVisited[`${i + 1},${j}`] && q.push([i + 1, j, d + 1]);
    inbounds(grid, i, j - 1) && !newVisited[`${i},${j - 1}`] && q.push([i, j - 1, d + 1]);
    inbounds(grid, i, j + 1) && !newVisited[`${i},${j + 1}`] && q.push([i, j + 1, d + 1]);
  }

  // until next one is land.. min distance is got!
  return dist;
}

module.exports = {
  bestBridge,
};

let grid = [
  ["W", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "L"],
  ["L", "L", "L", "W", "L"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
];
console.log(bestBridge(grid)); //1

grid = [
  ["W", "W", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
  ["L", "L", "W", "W", "L"],
  ["W", "L", "W", "W", "L"],
  ["W", "W", "W", "L", "L"],
  ["W", "W", "W", "W", "W"],
];
console.log(bestBridge(grid)); //2