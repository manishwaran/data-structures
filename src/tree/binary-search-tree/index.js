class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BST {

  constructor() {
    this.tree = null
  }

  insert(data) {
    this.tree = this.insertData(data, this.tree)
  }

  insertData(data, tree) {
    if (!tree) {
      return new Node(data);
    }
    if (data < tree.data) {
      tree.left = this.insertData(data, tree.left)
    } else {
      tree.right = this.insertData(data, tree.right)
    }
    return tree;
  }

  printBST(dTree = this.tree, level = 0) {
    if (dTree) {
      this.printBST(dTree.right, level + 1)
      console.log(Array.apply(null, { length: level }).map(() => ' ').join('') + dTree.data);
      this.printBST(dTree.left, level + 1)
    }
  }

}

module.exports = { BST, Node};
