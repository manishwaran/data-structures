const maxProdSubArray = (arr) => {
  let max = 1, temMax = 1
  for (let ele of arr) {
    temMax *= ele
    if (temMax > max)
      max = temMax
    if (temMax === 0)
      temMax = 1
  }
  console.log(max);
}

const input = [-2, -3, 0, -2, -40]
maxProdSubArray(input)
