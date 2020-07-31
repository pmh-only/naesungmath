/**
 * 223 Gauss–Seidel method
 * @author: DPS0340
 * @param {number} a
 * @param {number} b
 * @return {number} Gauss–Seidel method.
 * @since <0.37.0
 */
exports.Gauss_Seidel = function (mat, iterationCount = 15) {
    let x = []

    for (let i = 0; i < mat.length; i++) {
        x.push(1)
    }

    for (let k = 0; k < iterationCount; k++) {
        for (let i = 0; i < mat.length; i++) {
            let n = 0
            for (let j = 0; j < mat.length; j++) {
                if (j !== i) {
                    n += mat[i][j] * x[j]
                }
            }
            x[i] = 1 / mat[i][i] * (mat[i][mat[0].length - 1] - n)
        }
    }

    return x
}