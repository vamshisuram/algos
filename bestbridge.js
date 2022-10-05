const exploreLand = (grid, i, j, visited, queue) => {
  // check bounds

  // if already visited return;

  // check if land - explore further else return;
  const r = grid.length
  const c = grid[0].length
  const rowinbounds = (0 <= i && i < r)
  const colinbounds = (0 <= j && j < c)

  if (!rowinbounds || !colinbounds) return;

  if (visited[`${i},${j}`]) {
    return;
  }

  visited[`${i},${j}`] = true;
  if (grid[i][j] === "L") {
    queue.push([i, j, 0]);
    exploreLand(grid, i-1, j, visited, queue)
    exploreLand(grid, i+1, j, visited, queue)
    exploreLand(grid, i, j-1, visited, queue)
    exploreLand(grid, i, j+1, visited, queue)
  }

}

const inbounds = (grid, i, j) => {
  const r = grid.length
  const c = grid[0].length
  const rowinbounds = (0 <= i && i < r)
  const colinbounds = (0 <= j && j < c)
  return rowinbounds && colinbounds
}

const bestBridge = (grid) => {
  // todo

  // figure one island
  const r = grid.length
  const c = grid[0].length
  let visited = {}
  const queue = []
  outer: for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] === "L") {
        exploreLand(grid, i, j, visited, queue)
        break outer;
      } else {
        visited[`${i},${j}`] = true
      }
    }
  }

  // figure one island - it's nodes i,j
  // push these into q, and start breadthfirst

  // start point all 0
  // while loop (add +1) to surround nodes until next island reached
  console.log(queue);

  visited = {}
  for (let [a,b] of queue) {
    visited[`${a},${b}`] = true;
  }

  // BFS search until next Land - what's the value
  while (queue.length) {
    let [i, j, dist] = queue.shift()
    if (visited[`${i},${j}`] && dist !== 0) continue
    if (grid[i][j] === "L" && dist !== 0) {
      return dist - 1;
    }
    visited[`${i},${j}`] = true

    // catch neighbors and push
    inbounds(grid, i-1,j) && !visited[`${i},${j}`] && queue.push([i-1,j,dist+1])
    inbounds(grid, i+1,j) && !visited[`${i},${j}`] && queue.push([i+1,j,dist+1])
    inbounds(grid, i,j-1) && !visited[`${i},${j}`] && queue.push([i,j-1,dist+1])
    inbounds(grid, i,j+1) && !visited[`${i},${j}`] && queue.push([i,j-1,dist+1])
  }

};

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