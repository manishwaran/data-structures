function nrcs(str) {
  let map = {}
  map[str[0]] = 1
  let len = 1, max = 1
  for (let i = 1; i<str.length; i++) {
    const preIdx = map[str[i]] || -1
    map[str[i]] = 1
    if (preIdx === -1) {
      len++
    } else {
      if (max < len) max = len
      len = 0
      console.log(map);
      map = {}
    }
  }
  return Math.max(max, len);
}

function main() {
  const str = 'ABDEFGABEF'
  console.log(nrcs(str));
}

main()
