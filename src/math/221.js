/**
 * 221 SingularValueDecomposition
 *
 * @author: DPS0340, Choi Minseo
 * @param {matrix} mat
 * @return {number} SingularValueDecomposition
 *
 */
export function SingularValueDecomposition (mat, iterationCount = 2) {
  let M = mat
  let VT = []
  let Sigma = []
  let Q = []
  for (let i = 0; i < iterationCount; i++) {
    const QR = exports.QRDecomposition(M)
    console.log('QR', QR)
    Q = QR.Q
    const LPV = exports.LQDecomposition(QR.R)
    VT = LPV.Q
    console.log(LPV)
    Sigma = LPV.L
    M = Sigma
  }
  for (let i = 0; i < Sigma.length; i++) {
    M[i][i] = M[i][i] ** 0.5
  }
  return { U: Q, VT: VT, Sigma: Sigma }
}
