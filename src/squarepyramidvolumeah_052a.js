/**
 * 052A 정사각뿔의 부피 공식
 * 
 * @author: Naesung
 * @param {number} a
 * @param {number} h
 * @return {number}  The volume of square pyramid
 * @since <0.37.0
 */
exports.squarePyramidVolume_ah = function (a, h) {
    return ((1 / 3) * (a ** 2) * h)
}
