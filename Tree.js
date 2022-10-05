class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  get isLeaf() {
    return this.children.length === 0;
  }
}


class Tree {
  constructor(value) {
    this.root = new TreeNode(value);
  }

  insert(parentNodeVal, value) {
    for (let node of this.preOrderTraversal()) {
      if (node.value === parentNodeVal) {

      }
    }
  }

  preOrderTraversal(node = this.root) {
    yield node.value;
    if (node.children.length) {
      for (let child of node.children) {
        yield* this.preOrderTraversal(child);
      }
    }
  }
}