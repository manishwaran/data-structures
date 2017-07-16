const { Node, BST } = require('../binary-search-tree')

function isLeafNode(node) {
  return !(node.left || node.right)
}

function checkSumTree(tree, proceed = { is: true }) {
  if (!proceed.is) return false
  if (!tree) return 0
  if (isLeafNode(tree)) {
    return tree.data
  }
  const ls = checkSumTree(tree.left, proceed)
  const rs = checkSumTree(tree.right, proceed)
  if (ls + rs === tree.data) {
    return tree.data
  }
  proceed.is = false
  return false
}

function main() {
  const tree = new Node(13)
  tree.left = new Node(10)
  tree.right = new Node(3)
  tree.left.left = new Node(4)
  tree.left.right = new Node(6)
  tree.right.right = new Node(3)
  console.log(checkSumTree(tree) ? 'Given tree is sum tree' : 'Given tree is not a sum tree')
}

main()
