class Tree {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

function isBST(tree, l, r) {
  if (!tree) return true;
  if (l && tree.data < l.data) return false;
  if (r && tree.data > r.data) return false;
  return isBST(tree.left, l, tree) && isBST(tree.right, tree, r);
}

function main() {
  const tree = new Tree(4)
  tree.left = new Tree(2)
  tree.right = new Tree(5)
  tree.left.left = new Tree(1)
  tree.left.right = new Tree(3)
  // console.log(JSON.stringify(tree, undefined, 2));
  console.log('is BST ', isBST(tree))
}

main()
