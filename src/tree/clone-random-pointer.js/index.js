class BTRandomPtr {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
    this.rPtr = null
  }
}

const cloneRandomPtr = (btTree) => {
  console.log(btTree);
}

const btRandomPtr = new BTRandomPtr(50)

btRandomPtr.left = new BTRandomPtr(25)
btRandomPtr.right = new BTRandomPtr(75)

btRandomPtr.left.left = new BTRandomPtr(10)
btRandomPtr.left.right = new BTRandomPtr(40)

btRandomPtr.right.left = new BTRandomPtr(60)

btRandomPtr.rPtr = btRandomPtr.left.right
btRandomPtr.left.rPtr = btRandomPtr.right
btRandomPtr.left.left.rPtr = btRandomPtr.left
btRandomPtr.right.rPtr = btRandomPtr.left.left

console.log(btRandomPtr);
