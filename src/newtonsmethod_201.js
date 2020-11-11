/**
 * 201 ���� ���
 * 
 * @author: DPS0340
 * @param {number} f
 * @param {number} count
 * @param {number} initx
 * @return Newton's method
 * 
 */
exports.newtonsMethod = function (f, count, initx = 2) {
    function diff(f, x, density = 5) {
        const dx = 2 * (10 ** -density)
        const dy = f(x + (10 ** -density)) - f(x - (10 ** -density))
        return dy / dx
    }

    function newtonGo(f, x, go = 0) {
        const next = x - f(x) / diff(f, x)
        if (go === count - 1) {
            return next
        }
        return newtonGo(f, next, go + 1)
    }

    return newtonGo(f, initx, 0)
}
