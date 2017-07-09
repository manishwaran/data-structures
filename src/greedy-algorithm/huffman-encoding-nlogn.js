class CharNode {
  constructor(data, frequency) {
    this.frequency = frequency
    this.data = data
  }
}

class InternalNode {
  constructor(frequency) {
    this.frequency = frequency
    this.left = this.right = null
  }
}


class MinHeap {
  constructor() {
    this.arr = []
  }

  insert(node) {
    this.arr.push(node)
    this.heapify(parseInt((this.arr.length-2)/2))
  }

  swap(i, j) {
    const tem = this.arr[i]
    this.arr[i] = this.arr[j]
    this.arr[j] = tem
  }

  heapify(index) {
    const leftChild = index * 2 + 2
    const rightChild = index * 2 + 1
    let big = index
    if (leftChild < this.arr.length && this.arr[big].frequency > this.arr[leftChild].frequency)
      big = leftChild
    if (rightChild < this.arr.length && this.arr[big].frequency > this.arr[rightChild].frequency)
      big = rightChild
    if (big !== index) {
      this.swap(big, index)
      this.heapify(big)
    }
  }

  getMin() {
    const node = this.arr[0]
    this.arr[0] = this.arr[this.arr.length - 1]
    this.arr = this.arr.slice(0, -1)
    this.heapify(0)
    return node;
  }

  printHeapTree(index = 0, level = 0) {
    if (index < this.arr.length) {
      this.printHeapTree(index*2+2, level+4)
      const space = Array.apply(null, { length: level }).map(() => " ").join('')
      console.log(space, this.arr[index].frequency, `(${this.arr[index].data || ' '})`)
      this.printHeapTree(index*2+1, level+4)
    }
  }

  isOnlyOneNodePresent() {
    return this.arr.length === 1;
  }

}

class HuffmanEncoding {
  constructor() {
    this.minHeap = new MinHeap()
  }

  constructTree() {
    while(!this.minHeap.isOnlyOneNodePresent()) {
      const leftNode = this.minHeap.getMin()
      const rightNode = this.minHeap.getMin()
      const internalNode = new InternalNode(leftNode.frequency + rightNode.frequency)
      internalNode.left = leftNode
      internalNode.right = rightNode
      this.minHeap.insert(internalNode)
    }
  }

  printHuffmanCode() {
    this.traverseTree(this.minHeap.arr[0])
  }

  traverseTree(tree, path="") {
    if (this.checkLeafNode(tree)) {
      console.log(tree.data, ` ${path}`)
      return
    }
    this.traverseTree(tree.left, path+0)
    this.traverseTree(tree.right, path+1)
  }

  checkLeafNode(node) {
    return (!(node.left || node.right));
  }

  createLeafNodes(charSet) {
    Object.keys(charSet).forEach(char => this.minHeap.insert(new CharNode(char, charSet[char])))
    this.minHeap.printHeapTree()
  }

}

function main() {
  const charSet = { a: 5, b: 9, c: 12, d: 13, e: 16, f: 45 }
  const huffmanEncoding = new HuffmanEncoding()
  console.log('Huffman initial tree : ')
  huffmanEncoding.createLeafNodes(charSet)
  huffmanEncoding.constructTree()
  console.log('Huffman code :')
  huffmanEncoding.printHuffmanCode()
}

main()
