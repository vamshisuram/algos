class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const maxPathSum = (root, all = [], pathSum = 0) => {
  // todo
  pathSum += root.val;

  if (root.left === null && root.right === null) {
    all.push(pathSum);
    return Math.max(...all);
  }

  root.left && maxPathSum(root.left, all, pathSum);
  root.right && maxPathSum(root.right, all, pathSum);

  return Math.max(...all);

};


const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(0);
const f = new Node(-13);
const g = new Node(-1);
const h = new Node(-2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   0    -13
//     /       \
//    -1       -2

// maxPathSum(a); // -> -8

console.log(maxPathSum(a));

module.exports = {
  maxPathSum,
};
