/**
 *  903 ACORN
 * Generates Random Value with ACORN Algorithm:
 * Which is Better, Faster, Simpler than Standard JS PRNG Implementation.
 *  
 * @author: DPS0340
 * @return {random}
 * @since <0.37.0
 */
exports.ACORN = function (seed = new Date().getTime(), moduloPower = 60, order = 10) {
    let M = 2 ** moduloPower

    let temp = 0 + (seed.toString().split('').reverse().join(''))
    seed = seed * temp

    function oddorplusone(n) {
        if (n % 2 === 1) {
            return n
        } else {
            return n + 1
        }
    }

    seed = oddorplusone(seed % M)

    let seed2 = (seed + 2) % M

    const go = function (m, n) {
        if (m === 0) {
            return seed
        } else if (n === 0) {
            return seed2
        } else {
            return (go(m - 1, n) + (m, n - 1)) % M
        }
    }

    let xk = go(order, order)

    return xk / M
}
