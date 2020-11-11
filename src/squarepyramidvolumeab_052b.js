/**
 * 052B ���簢���� ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} a plus b
 * @since <0.37.0
 */
exports.squarePyramidVolume_ab = function (a, b) {
    return ((1 / 3) * (a ** 2) * (((b ** 2) - ((a ** 2) / 2)) ** (0.5)))
}
