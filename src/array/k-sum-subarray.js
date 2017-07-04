class Queue {
  constructor() {
    this.queue = []
    this.front = -1
    this.rear = 0
  }

  enqueue(data) {
    this.queue[++this.front] = data
  }

  dequeue() {
    if (this.rear <= this.front) {
      const data = this.queue[this.rear]
      this.rear--
      return data;
    }
    return null;
  }
}

const kSumSubArray = (arr, k) => {
  const q = new Queue()
  let sum = 0, l = 0, r = 0
  for (let i = 0; i<arr.length; i++) {
    let j = i
    while(sum <= k && j < arr.length) {
      sum += arr[j]
      q.enqueue(arr[j])
    }
  }
}
