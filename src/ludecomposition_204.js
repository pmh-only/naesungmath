/**
 * 204 LU 분해법
 * 
 * @author: DPS0340
 * @param {matrix} matrix
 * @return {number} LUDecompostion of matrix
 * @since <0.37.0
 */
exports.LUDecomposition = function (matrix) {
    if (matrix.length !== matrix[0].length) {
        console.log('행과 열의 크기가 같지 않음')
        return
    }
    const len = matrix.length
    let L = []
    let U = []
    for (let i = 0; i < len; i++) {
        L.push([])
        U.push([])
        for (let j = 0; j < len; j++) {
            L[i].push(0)
            U[i].push(0)
        }
    }

    for (let i = 0; i < len; i++) {
        for (let k = i; k < len; k++) {
            let sum = 0
            for (let j = 0; j < i; j++) {
                sum += L[i][j] * U[j][k]
            }
            U[i][k] = matrix[i][k] - sum
        }
        for (let k = i; k < len; k++) {
            if (i === k) {
                L[i][i] = 1
            } else {
                let sum = 0
                for (let j = 0; j < i; j++) {
                    sum += L[k][j] * U[j][i]
                }
                L[k][i] = (matrix[k][i] - sum) / U[i][i]
            }
        }
    }

    return {
        Lower: L,
        Upper: U
    }
}