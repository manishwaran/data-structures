function dynamicFibonnaci(n) {
  const val = [0,1]
  for (let i = 2; i <= n; i++) {
    val[i] = val[i-1] + val[i-2]
  }
  return val[n];
}

function main() {
  const n=9
  console.log(dynamicFibonnaci(n))
}

main()
