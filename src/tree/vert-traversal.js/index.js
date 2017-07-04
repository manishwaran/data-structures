const { BST } = require('../binary-search-tree')

const veriticalTraversal = (tree, hd, hdMap = {}) => {
  if (!tree) return;
  if (!hdMap[hd]) hdMap[hd] = []
  hdMap[hd].push(tree.data)
  veriticalTraversal(tree.left, hd - 1, hdMap)
  veriticalTraversal(tree.right, hd + 1, hdMap)
}


const input = [50, 25, 75, 15, 20, 40, 60, 90, 10, 5]
const bst = new BST()

input.forEach(data => bst.insert(data))
const hdMap = {}
veriticalTraversal(bst.tree, 0, hdMap)
console.log(hdMap);
