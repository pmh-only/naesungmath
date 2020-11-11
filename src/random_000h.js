/**
 * 000H ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} random number from a to b
 * 
 */
exports.random = function (a, b) {
    var ranNum = Math.floor((Math.random() * b) + a)
    return ranNum
}
