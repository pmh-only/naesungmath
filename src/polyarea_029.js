/**
 * 029 ���ٰ����� ����
 * 
 * @author: Choi Minseo
 * @param {number} n
 * @param {number} a
 * @return {number} The area of regular polygons
 * @since <0.37.0
 */
exports.polyarea = function (n, a) {
    return n * (a ** 2) / (4 * (Math.tan(a / (Math.PI))))
}
