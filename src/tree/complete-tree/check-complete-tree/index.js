const CompleteTree = require('../basic');

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}


class CheckCompleteTree extends CompleteTree {
  check(tree = this.tree) {
    if(!tree) {
      return 0
    }
    const left = this.check(tree.left)
    const right = this.check(tree.right)
    if (left < right || left === -1 || right === -1) return -1;
    return left + right + 1;
  }
  checkForCompleteTree() {
    const result = this.check()
    if (result === -1) {
      console.log('Not a complete tree')
    } else {
      console.log('It is complete tree')
    }
  }
}

const completeTree = new CheckCompleteTree()
const input = [1,2,3,4,5,6]
input.map(data => completeTree.insert(data))
completeTree.tree.right.right = new Node(7)
completeTree.tree.left.left = null
completeTree.printTree()

completeTree.checkForCompleteTree()
