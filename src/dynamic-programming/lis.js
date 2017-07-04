const lis = (arr) => {
  const temArr = Array.apply(null, { length: arr.length }).map(() => 1)
  let max = -1;

  for (let i=1; i< temArr.length; i++) {
    for (let j=0; j<i; j++) {
      if (arr[j] < arr[i]) {
        temArr[i] = Math.max(temArr[j] + 1, temArr[i])
        max = temArr[i] > max ? temArr[i] : max
      }
    }
  }
  return max;
}


const input = [10, 22, 9, 33, 21, 50, 41, 60, 80]

console.log(lis(input))
