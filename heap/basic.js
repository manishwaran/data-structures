class Heap {

  swap(array, x, y) {
    const temp = array[x]
    array[x] = array[y]
    array[y] = temp
  }

  bottomUp(array, index, size) {
    const leftChild = (2 * index) + 1
    const rightChild = (2 * index) + 2
    let biggestIndex = index
    if (leftChild <= size && array[leftChild] > array[biggestIndex]) {
      biggestIndex = leftChild
    }
    if (rightChild <= size && array[rightChild] > array[biggestIndex]) {
      biggestIndex = rightChild
    }
    if (biggestIndex !== index) {
      this.swap(array, biggestIndex, index)
      this.bottomUp(array, biggestIndex, size)
    }
  }

  heapify(array) {
    const size = array.length - 1
    if (size <= 0) {
      return array;
    }
    for (let i = parseInt((size - 1)/2); i >= 0; i--) {
      this.bottomUp(array, i, size)
    }
  }

  remove(array) {
    const element = array[0]
    const size = array.length - 1
    array[0] = array[size]
    array.splice(size, 1)
    this.heapify(array)
    return element;
  }

  insert(array, element) {
    array.push(element)
    this.heapify(array)
  }

}

const heap = new Heap()
const array = [10, 20, 5, 15, 30]
heap.heapify(array)
console.log('After heapify ', array)
const element = heap.remove(array)
console.log('Removed element ', element);
console.log('After remove ', array);
heap.insert(array, 30)
console.log('After addition ', array);
