const LinkedList = require('./linked-list');

const getIntersection = (list1, list2) => {
  const list3 = new LinkedList()
  while(list1 && list2) {
    if (list1.data === list2.data) {
      list3.insert(list1.data)
      list1 = list1.next
      list2 = list2.next
    }
    else if (list1.data > list2.data) {
      list2 = list2.next
    }
    else if (list2.data > list1.data) {
      list1 = list1.next
    }
  }
  console.log(list3.printLinkedList());
}


const input1 = [1,2,3,4,5,6]
const input2 = [2,4,6,8]

const list1 = new LinkedList()
const list2 = new LinkedList()

input1.forEach(data => list1.insert(data))
input2.forEach(data => list2.insert(data))

getIntersection(list1.linkedList, list2.linkedList)
