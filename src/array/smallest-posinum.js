const smallestNumber = (arr) => {
  const map = { 0: true }
  let small = 999
  for (let i in arr) {
    if (arr[i] > 0) {
      map[arr[i]] = true
    }
  }
  for (let i in arr) {
    if (arr[i]-1 > 0 && !map[arr[i]-1] && small > arr[i]-1) {
      small = arr[i]-1
    } else if (arr[i]+1 > 0 && !map[arr[i]+1] && small > arr[i]+1) {
      small = arr[i]+1
    }
  }
  return small;
}


const input = [2,3,4,7,6,8,-1,-10,15]
console.log(smallestNumber(input));
