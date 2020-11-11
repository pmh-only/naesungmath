/**
 * 067A ������������ �ٰ� ������� ���� ����
 *  
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @return {number} Root formula of cubic equation
 * @since <0.37.0
 */
exports.cubicEquation_first = function (a, b, c, d) {
    let x = (((0.5 * ((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d) + (((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d)) ** 2) - 4((b ** 2) - 3 * a * c) ** 3) ** 0.5))) ** (1 / 3)))
    let y = (((0.5 * ((2(b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d) - (((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d)) ** 2) - 4((b ** 2) - 3 * a * c) ** 3) ** 0.5))) ** (1 / 3)))
    return -(b / (3 * a)) - ((1 / (3 * a)) * x) - ((1 / (3 * a)) * y)
}
