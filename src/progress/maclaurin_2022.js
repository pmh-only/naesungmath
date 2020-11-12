/**
 * 202.2 ��Ŭ�θ� �޼�
 * 
 * @author: DPS0340
 * @param {number} f
 * @param {number} count
 * @return {number} Maclaurin series
 * 
 */
exports.maclaurin = function (f, count) {
    return exports.taylor(f, 0, count)
}
