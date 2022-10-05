class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return;
    }

    // search for correct node
    this.searchNode(this.root, val);
  }

  searchNode(node, val) {
    if (val <= node.val) {
      if (!node.left) {
        node.left = new Node(val);
      } else {
        this.searchNode(node.left, val);
      }
    } else {
      if (!node.right) {
        node.right = new Node(val);
      } else {
        this.searchNode(node.right, val)
      }
    }
  }

  isPresent(val) {

  }

}