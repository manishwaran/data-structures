const { BST, Node } = require('../binary-search-tree')

const bst = new BST()

class DoubleTree {

  constructor() {
    this.dTree = null
  }

  insert(data) {
    this.dTree = bst.insert(this.dTree, data)
  }

  printTree(dTree = this.dTree) {
    this.printBST(dTree)
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
