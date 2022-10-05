
const cache = {};

const getSemsReq = (g, i, numCourses) => {
  const q = [{node: i, need: 1}]
  let n = 0;
  while (q.length) {
    let curr = q.shift()
    if (cache[curr.node]) {
      n += cache[curr.node]
      continue
    }
    if (curr.need > n) {
      n = curr.need
    }
    if (g[curr.node]) {
      for (let k of g[curr.node]) {
        q.push({node: k, need: curr.need + 1})
      }
    }
  }
  return n;
}


const semestersRequired = (numCourses, prereqs) => {
  const g = {}
  for (let [a, b] of prereqs) {
    if (!g[a]) g[a] = []
    g[a].push(b)
  }
  console.log(JSON.stringify(g));

  let semsReq = 0
  for (let i = 0; i < numCourses; i++) {
    if (!g[i]) continue;
    const sReq = getSemsReq(g, i, numCourses)
    cache[i] = sReq;
    semsReq = (sReq > semsReq) ? sReq : semsReq
  }
  return semsReq
};

module.exports = {
  semestersRequired,
};




// const numCourses = 6;
// const prereqs = [
//   [1, 2],
//   [2, 4],
//   [3, 5],
//   [0, 5],
// ];

// const numCourses = 7;
// const prereqs = [
//   [4, 3],
//   [3, 2],
//   [2, 1],
//   [1, 0],
//   [5, 2],
//   [5, 6],
// ];

const numCourses = 5;
const prereqs = [
  [1, 0],
  [3, 4],
  [1, 2],
  [3, 2],
];
console.log(semestersRequired(numCourses, prereqs)); // -> 3
