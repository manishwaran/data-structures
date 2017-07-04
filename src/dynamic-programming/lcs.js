const lcs = (str1, str2) => {
  const mat = []
  for( let i=0; i<=str1.length; i++) {
    mat.push([])
    for(let j=0; j<=str2.length; j++) {
      if (i == 0 || j == 0)
        mat[i][j] = 0
      else if (str1[i-1] === str2[j-1])
        mat[i][j] = 1 + mat[i-1][j-1]
      else
        mat[i][j] = Math.max(mat[i-1][j], mat[i][j-1])
    }
  }
  return mat[str1.length][str2.length];
}

const str1 = 'abcdgh', str2 = 'aedfhr'
console.log(lcs(str1, str2));
