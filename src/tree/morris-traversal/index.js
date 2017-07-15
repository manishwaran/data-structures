const { BST } = require('../binary-search-tree')

function morrisTraversal(tree) {
  let current = tree
  while (current) {
    if (!current.left) {
      console.log(current.data)
      current = current.right
    } else {
      let predecessor = current.left
      while(predecessor.right && predecessor.right.data !== current.data)
        predecessor = predecessor.right
      if (!predecessor.right) {
        predecessor.right = current
        current = current.left
      } else {
        predecessor.right = null
        console.log(current.data)
        current = current.right
      }
    }
  }
}

function main() {
  const bst = new BST()
  const input = [100, 50, 150, 25, 70, 125, 170, 60, 130]
  input.forEach(data => bst.insert(data))
  morrisTraversal(bst.tree)
}

main()
