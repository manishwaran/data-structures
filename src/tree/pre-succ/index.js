const { BST } = require("../binary-search-tree")

function inorderPreSucc(tree, data, result) {
    if (!tree) return
    if (tree.data === data) {
        if (tree.right) {
            let tem = tree.right
            while (tem.left)
                tem = tem.left
            result.successor = tem.data
        }
        if (tree.left) {
            let tem = tree.left
            while (tem.right)
                tem = tem.right
            result.predecessor = tem.data
        }
        return
    }
    if (data < tree.data) {
        result.successor = tree.data
        inorderPreSucc(tree.left, data, result)
    } else {
        result.predecessor = tree.data
        inorderPreSucc(tree.right, data, result)
    }
}

function main() {
    const bst = new BST()
    const input = [100, 50, 150, 25, 70, 125, 170, 60, 130]
    input.forEach(data => bst.insert(data))
    const result = {}
    inorderPreSucc(bst.tree, 60, result)
    console.log(result)
}

main()
