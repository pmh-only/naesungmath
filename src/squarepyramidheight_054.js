/**
 * 054 정사각뿔의 높이 공식
 * 
 * @author: Naesung
 * @param {number} a
 * @param {number} b
 * @return {number} The height of square pyramid
 * @since <0.37.0
 */
exports.squarePyramidHeight = function (a, b) {
    return (((b ** 2) - ((a ** 2) / 2)) ** (0.5))
}
