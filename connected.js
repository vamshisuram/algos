const explore = (graph, curr, visited) => {
  if (visited.has(curr)) {
    return false;
  }
  visited.add(curr);
  for (let n of graph[curr]) {
    explore(graph, n, visited);
  }
  return true;
};

const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;
  for (let n in graph) {
    const node = Number(n);
    if (explore(graph, node, visited)) {
      count++;
    }
  }
  console.log(count);
  return count;

};


connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
});


const BFSconnectedComponentsCount = (graph) => {
  // todo
  const connectedSets = [];
  const nodes = Object.keys(graph).map(key => Number(key));
  console.log("nodes: ", nodes);

  outer:
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    console.log("traverse start node: ", node);

    inner:
    for (let j = 0; j < connectedSets.length; j++) {
      const set = connectedSets[j];
      if (set.has(node)) {
        continue outer;
      }
    }

    const newSet = new Set();
    const visited = new Set();
    const queue = [node];

    while (queue.length) {
      const curr = queue.shift();
      if (visited.has(curr)) {
        continue;
      }
      newSet.add(curr);
      visited.add(curr);
      const neighbors = graph[curr];
      queue.push(...neighbors);
    }
    connectedSets.push(newSet);
    console.log("connectedSets: ", connectedSets);
  }
  console.log("total", connectedSets.length);
  return connectedSets.length;

};


const iterable = {
  [Symbol.iterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return {
            value: this.i++,
            done: false
          };
        }
        return {
          value: undefined,
          done: true
        };
      }
    };
  }
};

for (const value of iterable) {
  console.log(value);
}
// 0
// 1
// 2