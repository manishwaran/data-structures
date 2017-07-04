const minCost = (mat, m, n) => {
  const temCM = [[]]
  temCM[0][0] = mat[0][0]
  for (let i = 1; i <= m; i++)
    temCM[0][i] = temCM[0][i-1] + mat[0][i]
  for (let i = 1; i <= n; i++) {
    temCM.push([])
    temCM[i][0] = temCM[i-1][0] + mat[i][0]
  }
  for (let i=1; i <= m; i++) {
    for (let j=1; j <= n; j++) {
      temCM[i][j] = mat[i][j] + Math.min(
        temCM[i-1][j-1],
        Math.min(temCM[i-1][j], temCM[i][j-1])
      )
      console.log(temCM[i][j], temCM[i-1][j-1], temCM[i-1][j], temCM[i][j-1])
    }
  }
  return temCM[m][n];
}

const inputMatrix = [
  [1, 2, 3],
  [4, 8, 2],
  [1, 5, 3],
]

console.log(minCost(inputMatrix, 2, 2));
