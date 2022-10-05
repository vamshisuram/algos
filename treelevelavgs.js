class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const levelAverages = (root) => {
  // todo
  if (!root) return []

  const stack = [root]
  let curr = {...stack.pop(), level: 0}
  const levels = []
  while (curr) {
    if (!levels[curr.level] ) {
      levels[curr.level] = [curr.val]
    } else {
      levels[curr.level].push(curr.val)
    }
    curr.right && stack.push({...curr.right, level: curr.level + 1})
    curr.left && stack.push({...curr.left, level: curr.level + 1})
    curr = stack.pop()
  }
  const avgs = levels.map(level => {
    console.log('level: ', JSON.stringify(level))
    return (level.reduce((acc, i) => acc + i, 0) / level.length)
  })
  console.log(avgs)
  return avgs
};

console.log(levelAverages(a)); // -> [ 3, 7.5, 1 ]

module.exports = {
  levelAverages,
};
