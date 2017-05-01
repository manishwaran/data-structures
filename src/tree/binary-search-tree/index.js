class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BST {

  insert(tree, data) {
    if (!tree) {
      return new Node(data);
    }
    if (data < tree.data) {
      tree.left = this.insert(tree.left, data)
    } else {
      tree.right = this.insert(tree.right, data)
    }
    return tree;
  }

}

module.exports = { BST, Node};
