/**
 * 006 ����� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number} Heron's formula
 * 
 */
exports.heron = function (a, b, c) {
    let cosTheta = ((a * a) + (b * b) - (c * c)) / (2 * a * b)
    let sinTheta = Math.sqrt(1 - (cosTheta ** 2))
    return (a * b * sinTheta) / 2
}