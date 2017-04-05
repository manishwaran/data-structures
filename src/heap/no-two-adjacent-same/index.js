class Character {
  constructor(char, frequency) {
    this.char = char
    this.frequency = frequency || 1
  }

  incrementFrequency() {
    this.frequency += 1
  }

  decrementFrequency() {
    this.frequency = this.frequency > 0 ? --this.frequency : 0
  }
}

class Heap {
  constructor() {
    this.characters = []
  }

  swap(x, y) {
    const temp = this.characters[x]
    this.characters[x] = this.characters[y]
    this.characters[y] = temp
  }

  getBiggestIndex(index, size = this.characters.length - 1) {
    const leftChild = (2 * index) + 1
    const rightChild = (2 * index) + 2
    let biggestIndex = index
    if (leftChild <= size && this.characters[leftChild].frequency > this.characters[biggestIndex].frequency) {
      biggestIndex = leftChild
    }
    if (rightChild <= size && this.characters[rightChild].frequency > this.characters[biggestIndex].frequency) {
      biggestIndex = rightChild
    }
    return biggestIndex;
  }

  heapify(index) {
    const biggestIndex = this.getBiggestIndex(index)
    if (biggestIndex !== index) {
      this.swap(biggestIndex, index)
      this.heapify(biggestIndex)
    }
  }

  addCharacter(char) {
    const character = new Character(char)
    this.characters.push(character)
    const size = this.characters.length - 1
    this.heapify(parseInt((size - 1)/2))
  }

  insert(char) {
    for (let idx = 0; idx < this.characters.length; idx++) {
      if (this.characters[idx].char === char) {
        this.characters[idx].incrementFrequency()
        return this.heapify(idx)
      }
    }
    return this.addCharacter(char)
  }

  getBiggest() {
    if (this.characters[0].frequency) {
      const char = this.characters[0].char
      this.characters[0].decrementFrequency()
      this.heapify(0)
      return char
    }
    return null
  }

  getSecondBiggest() {
    const size = this.characters.length - 1
    if (size < 1) return undefined;
    let left = this.characters[1] || new Character('#', -Infinity)
    let right = this.characters[2] || new Character('#', -Infinity)
    let biggestIndex = 1
    if (left.frequency < right.frequency) {
      biggestIndex = 2
    }
    if (!this.characters[biggestIndex].frequency) return undefined;
    const char = this.characters[biggestIndex].char
    this.characters[biggestIndex].decrementFrequency()
    this.heapify(biggestIndex)
    return char;
  }

  getTop() {
    const char = this.characters[0];
    if (char.frequency) {
      return char;
    }
    return null;
  }

  getNextChar(char) {
    const topChar = this.getTop()
    if (topChar && char === topChar.char) {
      const nextChar = this.getSecondBiggest()
      return nextChar
    }
    const nextChar = this.getBiggest()
    return nextChar || null
  }

}

class RearrangeCharacters {
  constructor() {
    this.heap = new Heap()
  }

  initialize(array) {
    for (let i = 0; i < array.length; i++) {
      this.heap.insert(array[i])
    }
  }

  rearrage() {
    const characters = this.heap.characters
    let pre = null
    const output = []
    while(1) {
      const char = this.heap.getNextChar(pre)
      if (char === undefined) {
        return 'Not a valid string';
      } else if (char == null) {
        break
      }
      output.push(char)
      pre = char
    }
    return output.join('')
  }
}

const rearrangeCharacters = new RearrangeCharacters()
rearrangeCharacters.initialize('aaacabbbbb'.split(''))
const output = rearrangeCharacters.rearrage()
console.log(output);
