class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.linkedList = null
  }

  insert(data, list = this.linkedList) {
    if(!list) return (this.linkedList = new Node(data))
    while(list.next && (list = list.next));
    list.next = new Node(data);
  }

  printLinkedList(list = this.linkedList) {
    while(list) {
      console.log(list.data)
      list = list.next
    }
  }

}

module.exports = LinkedList
