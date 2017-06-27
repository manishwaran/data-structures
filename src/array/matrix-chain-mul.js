const mcm = (arr) => {
  const VAL_MAX = 999
  const tem = Array.apply(null, { length: arr.length }).map(() =>
    Array.apply(null, { length: arr.length }).map(() => VAL_MAX)
  )
  for(let index in arr) {
    tem[index][index] = 0
  }
  for(let l=2; l<arr.length; l++) {
    for(let i=0; i<arr.length; i++) {
      let j=i+l-1
      for(let k=i; k<j; k++) {

      }
    }
  }
  console.log(tem);
}

const input = [1,2,3,4,3]
console.log(mcm(input));
