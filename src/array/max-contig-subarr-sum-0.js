const maxSubarray = (arr) => {
  let sum = 0, len = 0, map = {}
  for(let idx in arr) {
    sum += arr[idx]
    let pre = map[sum]
    if(pre) {
      len = Math.max(len, idx - pre)
    } else {
      map[sum] = idx
    }
  }
  return len;
}


const input = [15, -2, 1, 0, 2, -8, 1, 7, 10, 23]

console.log(maxSubarray(input));
