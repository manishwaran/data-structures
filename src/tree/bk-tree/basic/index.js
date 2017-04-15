class Node {
  constructor(data) {
    this.data = data
  }
}

class BKTree {

  constructor() {
    this.tree = null
  }

  mapper(word) {
    const mapObj = {}
    word.split('').map(letter => (mapObj[letter] = ((mapObj[letter] + 1) || 1)))
    return mapObj;
  }

  findMismatchCount(x, y) {
    return x > y ? x - y : y - x;
  }

  findMissingCount(obj) {
    let missingCount = 0
    Object.keys(obj).map(key => (missingCount += obj[key]))
    return missingCount;
  }

  calculateDistance(word1, word2) {
    const map1 = this.mapper(word1)
    const map2 = this.mapper(word2)
    let misMatch = 0
    word1.split('').map((key) => {
      if (map2[key]) {
        map1[key] = map1[key] > 0 ? map1[key] - 1 : 0
        map2[key] = map2[key] > 0 ? map2[key] - 1 : 0
      }
    })
    const missingCountInMap1 = this.findMissingCount(map1)
    const missingCountInMap2 = this.findMissingCount(map2)
    return this.findMismatchCount(missingCountInMap1, missingCountInMap2) + missingCountInMap1;
  }

  insertData(word, tree = this.tree) {
    if (!tree) {
      this.tree = new Node(word)
      return
    }
    const diff = this.calculateDistance(tree.data, word)
    if (!tree[diff]) {
      tree[diff] = new Node(word)
    } else {
      this.insertData(word, tree[diff])
    }
  }

  insert(word) {
    this.insertData(word)
    return this.tree
  }

}

module.exports = BKTree
