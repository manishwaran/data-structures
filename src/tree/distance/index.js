const { BST } = require('../binary-search-tree');

const findLCA = (tree, n1, n2, map) => {
  if (!tree) return 0;
  const left = findLCA(tree.left, n1, n2, map)
  const right = findLCA(tree.right, n1, n2, map)
  if (tree.data === n1) {
    map.n1 = true
    return 1;
  } else if (tree.data === n2) {
    map.n2 = true
    return 1;
  }
  if(!(left || right)) return 0;
  return left && right ? left + right : (left || right)+1;
}


const bst = new BST()
const input = [50, 25, 75, 15, 20, 40, 60, 90, 10, 5]

const map = { n1: false, n2: false }

input.forEach(data => bst.insert(data))
console.log(findLCA(bst.tree, 10, 40, map), map);
