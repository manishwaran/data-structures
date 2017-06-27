class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

const checkMirror = (tree1, tree2) => {
  if (tree1 === null && tree2 === null) return true;
  if (tree1 === null || tree2 === null) return false;
  return tree1.data === tree2.data &&
    checkMirror(tree1.left, tree2.right) &&
    checkMirror(tree1.right, tree2.left)
}

const tree1 = new Node(10)
tree1.left = new Node(5)
tree1.right = new Node(15)
tree1.left.left = new Node(2)
tree1.right.left = new Node(12)

const tree2 = new Node(10)
tree2.right = new Node(5)
tree2.left = new Node(15)
tree2.right.right = new Node(2)
tree2.left.right = new Node(12)


console.log(checkMirror(tree1, tree2))
