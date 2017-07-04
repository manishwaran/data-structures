function possibleDecoding(str, n) {
  if (n === 0 || n === 1) return 1;
  let count = 0
  if (str[n-1] > 0) count = possibleDecoding(str, n-1)
  if (str[n-1] < 7 && str[n-2] < 3) count += possibleDecoding(str, n-2)
  return count;
}

function main() {
  const str = '11234'
  console.log(possibleDecoding(str, str.length));
}

main()
