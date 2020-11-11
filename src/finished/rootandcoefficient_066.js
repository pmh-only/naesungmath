/**
 * 066 �ٰ� ������� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} type
 * @return {number} Relation of root and coefficient
 * @since <0.37.0
 */
exports.rootAndCoefficient = function (a, b, c, type) {
    if (type === 1) return -(b / a)
    if (type === 2) return (b / c)
}
