/**
 * 217 LQ ºÐÇØ
 * 
 * @author: DPS0340
 * @param {string} mat
 * @return {number} LQDecomposition
 * @since <0.37.0
 */
exports.LQDecomposition = function (mat, iterationCount = 1000) {
    let AT = exports.transpose(mat)

    AT = exports.QRDecomposition(AT, iterationCount)

    return {
        // eslint-disable-next-line dot-notation
        L: exports.transpose(AT['R']),
        // eslint-disable-next-line dot-notation
        Q: exports.transpose(AT['Q'])
    }
}
