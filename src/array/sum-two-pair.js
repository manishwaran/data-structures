const twoPairs = (arr, x) => {
  const map = {}
  arr.forEach(data => map[data] = data)
  console.log(map);
  arr.forEach(data => {
    // console.log(data);
    if(map[Math.abs(data - x)]) {
      console.log(data, map[Math.abs(data - x)]);
    }
  })
}

const input = [10, 2, 3, 4, 5, 9, 7, 8]

twoPairs(input, 11)
