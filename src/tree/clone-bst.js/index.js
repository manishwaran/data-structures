const { BST, Node } = require('../binary-search-tree');

const cloneBST = (bstTree) => {
  if (!bstTree) return null;
  const tem = new Node(bstTree.data)
  tem.left = cloneBST(bstTree.left)
  tem.right = cloneBST(bstTree.right)
}


const input = [50, 25, 75, 10, 40, 60]
const bst = new BST()

input.forEach(data => bst.insert(data))
bst.printBST()

let cBSTTree = cloneBST(bst.tree)
console.log(cBSTTree);
bst.printBST(cBSTTree)
