const addTillNextPositive = (arr, i, pre) => {
  let maxSoFar = pre
  for(let j = i; j < arr.length; j++) {
    maxSoFar += arr[j]
    if (arr[j] > 0) return [maxSoFar, j]
  }
  return [null, -1]
}

const maxContiguousElement = (arr) => {
  let max = arr[0]
  for( let i = 1; i < arr.length; i++) {
    let [soFar, j] = addTillNextPositive(arr, i, arr[i-1])
    console.log(soFar, max)
    if (soFar > 0 && max > 0) max += soFar
    else if (soFar > max) max = soFar
    if (j === -1) {
      return max
    } else {
      i = j
    }
  }
  return max
}


console.log(maxContiguousElement([-2, -3, 4, -1, -2, 1, 5, -3]))
