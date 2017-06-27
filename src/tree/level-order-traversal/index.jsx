const { BST } = require('../binary-search-tree');

const pushFunction = (arr1, arr2) => {
  while(arr1.length) {
    const node = arr1.pop()
    console.log(node.data);
    if(node.left) {
      arr2.push(node.left)
    }
    if(node.right) {
      arr2.push(node.right)
    }
  }
}

const levelOrderTraversal = (BSTTree) => {
  const bstTree = BSTTree
  let s1 = [], s2 = []
  s1.push(bstTree)
  while(s1.length || s2.length) {
    if (s1.length) {
      pushFunction(s1, s2)
    } else {
      pushFunction(s2, s1)
    }
  }
}

const bstTree = new BST()
const input = [50,25,75,40,15,60,90]
input.forEach(data => bstTree.insert(data))
bstTree.printBST()
levelOrderTraversal(bstTree.tree)
