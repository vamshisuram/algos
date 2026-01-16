class Node {
  constructor(val, next = null, random = null) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}

function copyRandomList(head) {
  // iterate.. create new node for each, and attach to random

  let curr = head;
  while (curr) {
    curr.random = new Node(curr.val);
    curr = curr.next;
  }

  curr = head;
  while (curr) {
    curr.random.next = curr.next.random;
    curr = curr.next;
  }

  const phead = head.next;
  return phead;
}
