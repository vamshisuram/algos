
const buildGraph = (edges) => {
  const g = {};
  for (let edge of edges) {
    if (!g[edge[0]]) {
      g[edge[0]] = [edge[1]]
    } else {
      g[edge[0]].push(edge[1])
    }

    if (!g[edge[1]]) {
      g[edge[1]] = [edge[0]]
    } else {
      g[edge[1]].push(edge[0])
    }
  }
  return g;
}

const shortestPath = (edges, nodeA, nodeB) => {
  // build graph
  const g = buildGraph(edges)

  // queue (BFS)
  const q = [{ val: nodeA, distance: 0 }]
  const seen = {};
  while (q.length) {
    let curr = q.shift()
    if (curr.val in seen) {
      continue;
    } else {
      seen[curr] = true;
    }
    if (curr.val === nodeB) return curr.distance;
    for (let n of g[curr.val]) {
      !seen[n] && q.push({ val: n, distance: curr.distance + 1 })
    }
  }

  return -1;
};

const edges = [
  ['m', 'n'],
  ['n', 'o'],
  ['o', 'p'],
  ['p', 'q'],
  ['t', 'o'],
  ['r', 'q'],
  ['r', 's']
];

console.log(shortestPath(edges, 'm', 's')); // -> 6

module.exports = {
  shortestPath,
};
