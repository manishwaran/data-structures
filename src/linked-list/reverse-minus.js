const LinkedList = require('./linked-list');

class ReverseMinus {

  constructor() {
    this.linkedList = new LinkedList()
  }

  insertData(inputs) {
    inputs.forEach(data => this.linkedList.insert(data))
    this.linkedList.printLinkedList()
  }

  reverseMinus(list = this.linkedList.linkedList, index = 1, middle = { val: -1 }, stack = []) {
    if (!list) {
      middle.val = parseInt(index/2)
      return
    }
    this.reverseMinus(list.next, index + 1, middle, stack)
    console.log('middle.val', middle.val);
    console.log('index - middle.val', index, middle.val, index - middle.val);
    if (index - middle.val > -1)
      stack.push(list.data)
    console.log('stack', stack);
    if (index <= middle.val - 1)
      list.data = list.data - stack[index-1]
    return list;
  }

}


const reverseMinus = new ReverseMinus()
reverseMinus.insertData([2,9,8,12,7,10])
console.log('');
console.log(reverseMinus.linkedList.printLinkedList(reverseMinus.reverseMinus()));
