/**
 * 063 ���Ϸ� �ٸ�ü ����
 * 
 * @author: Choi Minseo
 * @param {number} v
 * @param {number} e
 * @param {number} f
 * @return {number} Euler polyhedrob theroem
 * @since <0.37.0
 */
exports.eulerPolyhedronTheorem = function (v, e, f) {
    if ((v - e + f) === 2) return true
    if ((v - e + f) !== 2) return false
}
