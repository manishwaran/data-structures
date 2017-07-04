const { LinkedList, Node } = require('./linked-list');

function getData(node) {
  return node ? node.data : 0;
}

function getNext(node) {
  return node ? node.next : null;
}

function linkedListAddition(list1, list2) {
  let carry = 0
  const list3 = new LinkedList()
  while(list1 || list2) {
    const sum = parseInt(carry + getData(list1) + getData(list2))
    carry = sum / 10
    list3.insert(sum%10)
    list1 = getNext(list1)
    list2 = getNext(list2)
  }
  list3.reverse()
  list3.printLinkedList()
}

function main() {
  const input1 = [3, 6, 5]
  const input2 = [4, 8]

  const linkedList1 = new LinkedList()
  input1.forEach(data => linkedList1.insert(data))
  linkedList1.reverse()

  const linkedList2 = new LinkedList()
  input2.forEach(data => linkedList2.insert(data))
  linkedList2.reverse()

  linkedListAddition(linkedList1.linkedList, linkedList2.linkedList)

}

main()
