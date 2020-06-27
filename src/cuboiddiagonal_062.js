/**
 * 062 직육면체의 대각선 길이 공식
 * 
 * @author: Naesung
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number} a plus b
 * @since <0.37.0
 */
exports.cuboidDiagonal = function (a, b, c) {
    return (((a ** 2) + (b ** 2) + (c ** 2)) ** 0.5)
}
