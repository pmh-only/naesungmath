/**
 * 008 °¢ÀÇ »ï°¢ÇüÀÇ ³ĞÀÌ
 * 
 * @author: Naesung
 * @param {number} a
 * @param {number} b
 * @param {number} t
 * @return {number} Area of triangle using angle
 * @since <0.37.0
 */
exports.triangleAreaAngle = function (a, b, t) {
    return (0.5 * a * b * (Math.sin(t)))
}
