class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeMinValue = (root) => {
  // todo
  let q = [root];
  let curr = q.shift();
  let min = Infinity
  while (curr) {
    console.log(curr.val);
    if (!curr) continue;
    if (curr.val < min) {
      min = curr.val;
    }
    curr.left && q.push(curr.left)
    curr.right && q.push(curr.right)
    curr = q.shift();
  }
  return min;
};

const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(-4);
const f = new Node(-13);
const g = new Node(-2);
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
// -3   -4   -13
//     /       \
//    -2       -2

console.log('min value: ', treeMinValue(a)); // -> -13