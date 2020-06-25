/**
 * 207 가우스 소거법
 * 
 * @author: DPS0340
 * @param {matrix} matrix
 * @param {number} m
 * @param {nmuber} n
 * @return {number} Gaussian elimination
 * @since <0.37.0
 */
exports.gaussian = function (matrix, m, n) {
    let X = []
    for (let i = 0; i < matrix.length; i++) {
        X.push([])
        for (let j = 0; j < matrix[i].length; j++) {
            X[i].push(matrix[i][j])
        }
    }

    for (let i = 0; i < n; i++) {
        let k = X[i][i]
        for (let j = 0; j < m; j++) {
            X[i][j] /= k
        }
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                let ratio = X[j][i]
                for (let l = 0; l < matrix[j].length; l++) {
                    X[j][l] -= ratio * X[i][l]
                }
            }
        }
    }

    return X
}
