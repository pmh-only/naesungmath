/**
 * 205 Çà·ÄÀÇ ½ºÄ®¶ó°ö
 * 
 * @author: DPS0340/Naesung(Merged)
 * @param {matrix} matrix
 * @param {number} k
 * @return {number} Matrix scalar product
 * @since <0.37.0
 */
exports.matrixScalaMultiplation = function (matrix, k) {
    let res = []
    for (let i = 0; i < matrix.length; i++) {
        res.push([])
        for (let j = 0; j < matrix[0].length; j++) {
            res[i].push(matrix[i][j] * k)
        }
    }

    return res
}
