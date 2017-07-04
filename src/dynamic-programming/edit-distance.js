const editDistance = (str1, str2) => {
  const m = str1.length, n = str2.length
  if (!n) return m;
  if (!m) return n;
  const mat = []
  for (let i=0; i<=m; i++) {
    mat.push([])
    for (let j=0; j<=n; j++) {
      if (i == 0 || j == 0)
        mat[i][j] = 0
      else if (str1[i-1] === str2[j-1])
        mat[i][j] = mat[i-1][j-1]
      else
        mat[i][j] = 1 + Math.min(mat[i-1][j-1], Math.min(mat[i-1][j], mat[i][j-1]))
    }
  }
  return mat[m][n];
}

const str1 = 'geek', str2 = 'gesek'
console.log(editDistance(str1, str2));
