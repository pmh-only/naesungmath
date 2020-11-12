/**
 * 215 �Ϲ�ȭ
 * 
 * @author: DPS0340
 * @param {string} row
 * @return {number} normalization
 * 
 */
exports.normailze = function (row) {
    return exports.matrix_scala_multiplation(row, 1 / exports.sqrtDotProduct(row, row))
}
