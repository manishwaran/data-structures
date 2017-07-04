function binomialDynamic(n, k) {
  const C = []
  for (let i=0; i<=n; i++) {
    C.push([])
    for(let j=0; j<=Math.min(i, k); j++) {
      if (j === 0 || j === i) {
        C[i][j] = 1
      } else {
        C[i][j] = C[i-1][j-1] + C[i-1][j]
      }
    }
  }
  console.log(C);
  return C[n][k];
}

function main() {
  const n = 5, k = 2
  console.log(binomialDynamic(n, k));
}


main()
