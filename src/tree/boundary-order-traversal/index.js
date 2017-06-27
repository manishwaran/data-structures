const { BST } = require('../binary-search-tree');

const input = [20, 8, 22, 4, 12, 25, 10, 14]
const bst = new BST()
input.forEach(data => bst.insert(data))
bst.printBST()


const printLeftView = (tree) => {
  if (tree) {
    if(tree.left) {
      console.log(tree.data)
      printLeftView(tree.left)
    } else if(tree.right) {
      console.log(tree.data)
      printLeftView(tree.right)
    }
  }
}

const printBottom = (tree) => {
  if(tree) {
    if(!tree.left && !tree.right) {
      console.log(tree.data);
    }
    printBottom(tree.left)
    printBottom(tree.right)
  }
}

const printRightView = (tree) => {
  if (tree) {
    if (tree.right) {
      printRightView(tree.left)
      console.log(tree.data);
    } else if(tree.left) {
      printRightView(tree.left)
      console.log(tree.data);
    }
  }
}

const boundaryOrderTraversal = (tree) => {
  if (tree) {
    console.log(tree.data);
    printLeftView(tree.left)
    printBottom(tree.left)
    printBottom(tree.right)
    printRightView(tree.right)
  }
}

boundaryOrderTraversal(bst.tree)
