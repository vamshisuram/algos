class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

const linkedListValues = (head) => {
  let curr = head;
  let out = []
  while (curr) {
    out.push(curr.val)
    curr = curr.next
  }
  console.log(out)
};

console.log(linkedListValues(a));