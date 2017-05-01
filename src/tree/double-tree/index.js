const { BST, Node } = require('../binary-search-tree')

const bst = new BST()

class DoubleTree {

  constructor() {
    this.dTree = null
  }

  insert(data) {
    this.dTree = bst.insert(this.dTree, data)
  }

  printTree(dTree = this.dTree, level = 0) {
    if (dTree) {
      this.printTree(dTree.right, level + 1)
      console.log(Array.apply(null, { length: level }).map(() => ' ').join('') + dTree.data);
      this.printTree(dTree.left, level + 1)
    }
  }

  constructDtree(dTree = this.dTree) {
    if (!dTree) return;
    this.constructDtree(dTree.left)
    const temp = new Node(dTree.data)
    temp.left = dTree.left
    dTree.left = temp
    this.constructDtree(dTree.right)
    return dTree;
  }

}

const doubleTree = new DoubleTree()
const input = [10, 5, 15, 2, 12, 7, 17]
input.forEach(data => doubleTree.insert(data))
doubleTree.printTree()
const dTree = doubleTree.constructDtree()
doubleTree.printTree(dTree)
