class BST {
  constructor(data) {
    this.data = data
    this.left = this.right = null
  }
}

function bstToDLL(tree, succ) {
  let l = null, r = null;
  if (tree.left) {
    l = bstToDLL(tree.left)
    l.right = tree
    tree.left = l
    tree = tree.left
    console.log(tree.data, tree);
  }
  if (tree.right) {
    r = bstToDLL(tree.right)
    r.left = tree
    tree.right = r
    tree = tree.right
    console.log(tree.data, tree);
  }
  return tree;
}

function dllHead(dll) {
  let head = dll
  while(dll.left) {
    console.log('dllHead', dll);
    head = dll
    dll = dll.left
  }
  return head;
}

function printDLL(dll) {
  while(dll.right) {
    console.log(dll.data);
    dll = dll.right
  }
}

function main() {
  const tree = new BST(10)
  tree.left = new BST(12)
  tree.right = new BST(15)
  tree.left.left = new BST(25)
  tree.left.right = new BST(30)
  tree.right.left = new BST(36)

  // console.log(tree);
  let dll = bstToDLL(tree)
  // console.log(dll);
  // dll = dllHead(dll)
  // printDLL(dll)
}

main()
