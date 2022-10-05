const hasCycle = (n, g) => {
  const stack = [n]
  const visited = {}
  while (stack.length) {
    const curr = stack.pop()
    if (visited[curr]) {
      if (curr === n) {
        return true;
      }
      continue
    }
    visited[curr] = true
    if (!g[curr]) continue
    for (let ng of g[curr]) {
      if (ng === n) return true;
      !visited[ng] && stack.push(ng)
    }
  }
}

const prereqsPossible = (numCourses, prereqs) => {
  // todo
  // longest path equal to numCourses

  const g = {}
  for (let [a, b] of prereqs) {
    if (!g[a]) g[a] = []
    g[a].push(b)
  }

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i, g)) {
      return false;
    }
  }

  return true;

};

module.exports = {
  prereqsPossible,
};

let numCourses = 6;
let prereqs = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
];
console.log(prereqsPossible(numCourses, prereqs)); // -> true


numCourses = 6;
prereqs = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
  [3, 0],
];
console.log(prereqsPossible(numCourses, prereqs)); // -> false
