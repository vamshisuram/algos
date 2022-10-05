var inorderTraversal = function (root, output = []) {
  if (root?.left) {
    inorderTraversal(root.left, output);
  }
  root?.val && output.push();
  if (root?.right) {
    inorderTraversal(root.right, output);
  }
  return output;
};

