/**
 * 050 ¿ø»ÔÀÇ °Ñ³ĞÀÌ
 * 
 * @author: Naesung
 * @param {number} r
 * @param {number} h
 * @return {number} The surface area of cone
 * @since <0.37.0
 */
exports.coneArea = function (r, h) {
    return (((Math.PI) * r * (((r ** 2) + (h ** 2)) ** 0.5)) + ((Math.PI) * (r ** 2)))
}