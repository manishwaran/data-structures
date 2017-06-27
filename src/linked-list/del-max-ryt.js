const LinkedList = require('./linked-list')

const delMaxRyt = (linkedList, par = null) => {
  if(!linkedList) {
    return 0;
  }
  const backLinkedList = delMaxRyt(linkedList.next, linkedList)
  if (backLinkedList && backLinkedList.data > linkedList.data) {
    if (!par) {
      linkedList = linkedList.next
      return linkedList;
    }
    par.next = linkedList.next
    delete linkedList
    return backLinkedList;
  }
  return linkedList;
}

const input = [1,2,3,4,5,6]
const linkedList = new LinkedList()
input.forEach(data => linkedList.insert(data))

const list = delMaxRyt(linkedList.linkedList)
console.log('\n', list);
linkedList.printLinkedList(list)
