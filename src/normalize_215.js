/**
 * 215 ¿œπ›»≠
 * 
 * @author: DPS0340
 * @param {string} row
 * @return {number} normalization
 * @since <0.37.0
 */
exports.normailze = function (row) {
    return exports.matrix_scala_multiplation(row, 1 / exports.sqrtDotProduct(row, row))
}
