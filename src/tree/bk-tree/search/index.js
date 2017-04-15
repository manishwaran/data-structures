const BKTree = require('../basic')

class BKTreeSearch extends BKTree {

  getDistances(tree) {
    return Object.keys(tree).slice(0, -1)
  }

  isTolerable(value, distance, tolerance, word, word1) {
    const negativeTolerance = value - tolerance
    const positiveTolerance = value + tolerance
    if (distance >= negativeTolerance && distance <= positiveTolerance) {
      return true;
    }
    return false;
  }

  searchData(word, result, tolerance, tree = this.tree) {
    const diff = this.calculateDistance(tree.data, word)
    const distances = this.getDistances(tree)
    distances.forEach((distance) => {
      if(this.isTolerable(diff, distance, tolerance, tree.data, tree[distance].data)) {
        result.push(this.tree[distance].data)
        this.searchData(word, result, tolerance, tree[distance])
      }
    })
  }

  search(word, tolerance = 1) {
    const result = []
    this.searchData(word, result, tolerance)
    return result;
  }
}

const bkTree = new BKTreeSearch()
const data = ['help', 'hell', 'helps', 'hello', 'shell', 'helper', 'loops', 'troop']
data.forEach(word => bkTree.insert(word))
console.log(bkTree.search('oops'))
