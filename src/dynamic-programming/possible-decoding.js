function possibleDecoding(str) {
  const n = str.length
  const val = [0, 1]
  for (let i=2; i<=n; i++) {
    if (str[i-1] > 0)
      val[i] = val[i-1]
    console.log(str[i-2] < 2 || (str[i-1] < 7 && str[i-2] == 2), str[i-1], str[i-2]);
    if (str[i-2] < 2 || (str[i-1] < 7 && str[i-2] == 2))
      val[i] += 1
  }
  return val[n];
}

function main() {
  console.log(possibleDecoding('1234'));
}

main()
