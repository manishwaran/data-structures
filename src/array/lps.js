const lps = (arr) => {
  let lpsMap = {}, lspMat = []
  arr.forEach((val, idx) => (lpsMap[idx] = val))

  for(let i=0, len = 1; i<arr.length; i++, len++) {
    lspMat.push(Array.apply(null, {length: arr.length}).map(() => false))
    for( let j=i; j<len; j++) {
      if(arr[j] === lpsMap[j]) {
        lspMat[i][j] = true
      }
    }
  }
  console.log(lspMat);
}


const ip = 'banana'
lps(ip.split(''))
