/**
 * 008 ���� �ﰢ���� ����
 * 
 * @author: Choi Minseo
 * @param {number} a
 * @param {number} b
 * @param {number} t
 * @return {number} Area of triangle using angle
 * 
 */
exports.triangleAreaAngle = function (a, b, t) {
    return (0.5 * a * b * (Math.sin(t)))
}
