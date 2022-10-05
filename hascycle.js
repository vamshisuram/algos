const hasCycle = (graph) => {
  // todo

  // gather nodes
  const nodes = Object.keys(graph)

  // traverse through each node, fresh visited
  // if in any traversal - visited already - cycle

  for (let n of nodes) {
    const stack = [n]
    const visited = {}
    while (stack.length) {
      const curr = stack.pop()
      if (visited[curr]) {
        if (curr === n) return true;
        continue;
      }
      visited[curr] = true;
      for (let ng of graph[curr]) {
        stack.push(ng)
      }
    }
  }

  return false;

};

module.exports = {
  hasCycle,
};

let o = hasCycle({
  a: ["b"],
  b: ["c"],
  c: ["a"],
}); // -> true

console.log(o);

o = hasCycle({
  a: ["b", "c"],
  b: ["c"],
  c: ["d"],
  d: [],
}); // -> false

console.log(o);


