const getDistance = (graph, nodes, i, j) => {
  // traverse from i to j, track visited,
  // get neighbors, and keep checking if j
  // there can be multiple paths from i -> j
  // get max of them
  const source = nodes[i]
  const destination = nodes[j]

  const q = [{node: source, dist: 0}]
  let max = -Infinity;
  // const visited = {}
  while (q.length) {
    const curr = q.shift()
    // if (visited[curr.node]) continue
    // visited[curr.node] = true;
    if (curr.node === destination) {
      max = (curr.dist > max ? curr.dist : max);
    }
    console.log('curr:', JSON.stringify(curr), 'max: ', max);
    const n = graph[curr.node].filter(node => node !== source).map(node => {
      return {node, dist: curr.dist + 1}
    })
    q.push(...n)
  }
  return max;

}

const longestPath = (graph) => {
  // get all nodes
  const nodes = Object.keys(graph)

  // iterate through each node - calculate distance to other nodes
  let maxLength = -Infinity;

  for (let i = 0; i < nodes.length; i++) {
    for (let j = 0; j < nodes.length; j++) {
      if (i === j) continue;
      const dist = getDistance(graph, nodes, i, j);
      if (dist > maxLength) {
        maxLength = dist;
      }
    }
  }
  return maxLength;
};

module.exports = {
  longestPath,
};

const graph = {
  a: ['c', 'b'],
  b: ['c'],
  c: []
};

console.log(longestPath(graph)); // 2
