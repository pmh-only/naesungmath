/**
 * 053B ���簢���� �ѳ��� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @return {number} The surface area of square pyramid
 * @since <0.37.0
 */
exports.squarePyramidArea_ah = function (a, h) {
    return ((a * ((4 * (h ** 2) - (a ** 2)) ** (0.5))) + (a ** 2))
}
