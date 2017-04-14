class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class CompleteTree {
  constructor() {
    this.tree = null
    this.height = -1
    this.nodeCount = -1
  }

  insertData(tree, data, level = 0, inserted = { status: false }) {
    if (inserted.status) {
      return tree
    }
    if (level === this.height) {
      if(!tree && !inserted.status) {
        inserted.status = true
        return new Node(data);
      }
      return tree;
    }
    tree.left = this.insertData(tree.left, data, level + 1, inserted)
    tree.right = this.insertData(tree.right, data, level + 1, inserted)
    return tree;
  }

  insert(data) {
    if (!this.tree) {
      this.tree = new Node(data)
      this.height = 1
      this.nodeCount = 1
    } else {
      this.insertData(this.tree, data, 0)
      this.nodeCount += 1
      if ((Math.pow(2, this.height + 1) - 1) <= this.nodeCount) {
        this.height += 1
      }
    }
    return this.tree;
  }

  printTree(tree = this.tree, level = 0) {
    if (tree) {
      this.printTree(tree.right, level + 1)
      console.log(Array.apply(null, { length: level }).map(() => ' ').join('') + tree.data)
      this.printTree(tree.left, level + 1)
    }
  }
}

module.exports = CompleteTree;
