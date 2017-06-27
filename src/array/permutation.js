const swap = (arr, i, j) => {
  const tem = arr[i]
  arr[i] = arr[j]
  arr[j] = tem
}

const permutate = (str = [], s = 0) => {
  if (s === str.length - 1) {
    console.log(str.join(''))
    return
  }
  for (let i = s; i < str.length; i++) {
    swap(str, s, i)
    permutate(str, s+1)
    swap(str, i, s)
  }
}

let ip = 'abc'
permutate(ip.split(''))
