/**
 * 000H ·£´ı
 * 
 * @author: Naesung
 * @param {number} a
 * @param {number} b
 * @return {number} random number from a to b
 * @since <0.37.0
 */
exports.random = function (a, b) {
    var ranNum = Math.floor((Math.random() * b) + a)
    return ranNum
}
