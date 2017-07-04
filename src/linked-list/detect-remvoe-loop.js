class LinkedList {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

const detectAndRemoveLoop = (linkedList) => {
  let fast = linkedList.next, slow = linkedList
  while (fast.data !== slow.data) {
    fast = fast.next.next
    slow = slow.next
  }
  let hastPtr = linkedList
  const map = {}
  while (hastPtr.data !== fast.data) {
    map[hastPtr.data] = true
    hastPtr = hastPtr.next
  }
  let par = fast
  fast = fast.next
  while (!map[fast.data]) {
    par = fast
    fast = fast.next
  }
  par.next = null
}

const linkedList = new LinkedList(1)

linkedList.next = new LinkedList(2)
linkedList.next.next = new LinkedList(3)
linkedList.next.next.next = new LinkedList(4)
linkedList.next.next.next.next = new LinkedList(5)

linkedList.next.next.next.next.next = linkedList.next

detectAndRemoveLoop(linkedList)
console.log(linkedList);
console.log(JSON.stringify(linkedList));
