/**
 * 022 사각형의 넓이 공식
 * 
 * @author: Naesung
 * @param {number} a
 * @param {number} b
 * @param {number} t
 * @return {number} The area of square
 * @since <0.37.0
 */
exports.squareArea = function (a, b, t) {
    return (0.5 * (a) * (b) * (Math.sin(t)))
}