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

  printBST(dTree, level = 0) {
    if (dTree) {
      this.printBST(dTree.right, level + 1)
      console.log(Array.apply(null, { length: level }).map(() => ' ').join('') + dTree.data);
      this.printBST(dTree.left, level + 1)
    }
  }

}

module.exports = { BST, Node};
