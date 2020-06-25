/**
 * 048 ¿ø±âµÕÀÇ °Ñ³ĞÀÌ
 * 
 * @author: Naesung
 * @param {number} r
 * @param {number} h
 * @return {number} The surface area of cylinder
 * @since <0.37.0
 */
exports.cylinderArea = function (r, h) {
    return ((2 * (Math.PI) * r * h) + (2 * (Math.PI) * (r ** 2)))
}
