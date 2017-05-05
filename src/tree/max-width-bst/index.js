const { BST } = require('../binary-search-tree')

class MaxWidthOfBST extends BST {

  findMaxWidth(tree, level = 0, max = { value: -1 }, mapper = {}) {
    if (!tree) return;
    mapper[level] = mapper[level] ? mapper[level] + 1 : 1
    if (mapper[level] > max.value) max.value = mapper[level]
    this.findMaxWidth(tree.left, level + 1, max, mapper)
    this.findMaxWidth(tree.right, level + 1, max, mapper)
    return max;
  }

}

const maxWidthOfBST = new MaxWidthOfBST()
const input = [10, 5, 15, 2, 12, 7, 13, 14]
let tree = null
input.forEach(data => (tree = maxWidthOfBST.insert(tree, data)))
maxWidthOfBST.printBST(tree)
const { value } = maxWidthOfBST.findMaxWidth(tree)
console.log('Max width of given tree: ', value);
