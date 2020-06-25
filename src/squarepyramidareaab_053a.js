/**
 * 053A Á¤»ç°¢»ÔÀÇ °Ñ³ĞÀÌ °ø½Ä
 * 
 * @author: Naesung
 * @param {number} a
 * @param {number} b
 * @return {number} The volume of square pyramid
 * @since <0.37.0
 */
exports.squarePyramidArea_ab = function (a, b) {
    return ((a * ((4 * (b ** 2) - (a ** 2)) ** (0.5))) + (a ** 2))
}
