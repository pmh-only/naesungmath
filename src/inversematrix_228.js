/**
 * 228 InverseMatrix
 *
 * @author: DPS0340, Choi Minseo
 * @param {matrix} A
 * @return {number} InverseMatrix
 * @since <0.37.0
*/
exports.InverseMatrix = function (A) {
    if (exports.determinant(A) === 0) {
        return null
    }
    let mat = []
    let I = exports.IdentityMatrix(A.length)
    for (let i = 0; i < A.length; i++) {
        mat.push([])
        for (let j = 0; j < A[i].length; j++) {
            mat[i].push(A[i][j])
        }
        for (let j = 0; j < I[i].length; j++) {
            mat[i].push(I[i][j])
        }
    }

    mat = exports.gaussian(mat, A.length, A[0].length)

    let res = []

    for (let i = 0; i < A.length; i++) {
        res.push([])
        for (let j = A[i].length; j < mat[i].length; j++) {
            res[i].push(mat[i][j])
        }
    }

    return res
}
