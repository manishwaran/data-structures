const { BST } = require('../binary-search-tree');

function iterativeInorderTraversal(tree) {
  const stack = []
  let currentNode = tree, done = false
  while(!done) {
    if (currentNode) {
      stack.push(currentNode)
      currentNode = currentNode.left
    } else {
      if (stack.length) {
        currentNode = stack.pop()
        console.log(currentNode.data);
        currentNode = currentNode.right
      } else {
        done = true
      }
    }
  }

}

function main() {
  const bst = new BST()
  const input = [10, 5, 15, 20]
  input.forEach(e => bst.insert(e))
  iterativeInorderTraversal(bst.tree)
}

main()
