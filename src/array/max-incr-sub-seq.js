const findMaxIncreasingSubsequence = (arr) => {
  const temArr = Array.apply(null, { length: arr.length }).map(() => 1)
  let max = 1
  for(let i = 1; i <arr.length; i++) {
    // console.log(temArr);
    for( let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && temArr[i] < temArr[j] + 1) {
        temArr[i] = temArr[j] + 1
        if (temArr[i] > max) max = temArr[i]
      }
    }
  }
  return max;
}

const input = [10, 22, 9, 33, 21, 50, 41, 60, 80]
console.log(findMaxIncreasingSubsequence(input))
