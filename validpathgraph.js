/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  const adjList = {};
  for (let i = 0; i < n; i++) {
    adjList[i] = []
  }
  const seen = {};

  for (let [i, j] of edges) {
    adjList[i].push(j)
    adjList[j].push(i)
  }

  let adj = JSON.stringify(adjList)

  const stack = [source]

  while (stack.length) {
    const curr = stack.pop()
    seen[curr] = true;
    if (curr in seen) continue;
    if (destination === curr) return true;
    for (let n of adjList[curr]) {
      stack.push(n)
    }
  }
  return false;
};

n = 6
edges = [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]]
source = 0
destination = 5

console.log(validPath(n, edges, source, destination));

